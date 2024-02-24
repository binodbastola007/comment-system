import React, { useState } from 'react'
import Divider from '@mui/material/Divider';
import avatar from '../assets/avatar.png'
import useFunction from '../useFunction';
import { comments } from './data';
import Comments from './components/Comments';
import { useSelector } from 'react-redux';

const Homepage = () => {


    const [data, setData] = useState(comments);
    const { addComment, deleteComment } = useFunction();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    const handleAddComments = (commentId, comment, dataId) => {
        const updatedComment = { ...comment, name: storedUser.username }
        const updatedTree = addComment(data[dataId], commentId, updatedComment);
        const updatedData = data.map((item, id) => {
            if (id === dataId) {
                return updatedTree;
            } else {
                return item;
            }
        })
        setData(updatedData);
    }

    const handleCommentDelete = (commentId, dataId) => {
        const updatedTree = deleteComment(data[dataId], commentId);
        const updatedData = data.map((item, id) => {
            if (id === dataId) {
                return updatedTree;
            } else {
                return item;
            }
        })
        setData(updatedData);
    }

    return (
        <>
            <div className='w-full h-full flex items-center justify-center '>
                <div className='min-h-[80%]  w-[45%]  bg-white shadow-2xl my-12 '>
                    <div className='mx-8 my-3'>
                        <div className='flex gap-3'>
                            <div>
                                <img src={avatar} height={60} width={60} className='rounded-full' />
                            </div>
                            <div className='flex flex-col items-start mt-2' >
                                <h3 className='font-semibold text-sm'>Binod Bastola</h3>
                                <span className='text-xs text-gray-500'>2d</span>
                            </div>
                        </div>
                        <Divider />
                        <div className='flex  py-2'>
                            <div className='w-[90%] '>
                                <h3 className='font-semibold'>Celebrating New Year</h3>
                                <p className='text-sm'>
                                    One more year loaded with sweet recollections and cheerful times has passed. All my friends made my year
                                    exceptionally uncommon, and I wish this continues forever. With you around, each minute is a unique event
                                    for me." wish vou to Haooy now year to all or you!
                                </p>
                            </div>
                        </div>
                        <Divider />
                        <div className='my-2'>
                            <span className='text-gray-500 text-sm'>
                                Comments
                            </span>
                        </div>
                        <Divider />

                        {/* comment section */}
                        {
                            data.map((item, id) => {
                                return <Comments data={item} dataId={id} handleAddComments={handleAddComments} handleCommentDelete={handleCommentDelete} />
                            })
                        }

                    </div>

                </div>
            </div >
        </>
    )
}

export default Homepage