import React, { useState } from 'react'
import avatar from '../../assets/avatar.png';
import { BsArrowReturnRight } from "react-icons/bs";
import TextField from '@mui/material/TextField';

const Comments = ({ data, dataId, handleAddComments, handleCommentDelete }) => {

    const [showInput, setShowInput] = useState(false);
    const [commentBody, setCommentBody] = useState();

    const handleAdd = () => {
        let newComment = {
            commentId: Date.now(),
            comment: commentBody,
            reply: []
        };
        handleAddComments(data.commentId, newComment, dataId);
        setShowInput(false);
    }

    return (
        <div className='mt-2'>
            <>

                <div>
                    <div className={`flex gap-1 ${!data?.comment && 'hidden'}`}>
                        < div className='w-[40px]'>
                            <img src={avatar} height='100%' width='100%' className='rounded-full' />
                        </div>
                        <div className='flex flex-col mt-3'>
                            <div className='cursor-pointer  bg-blue-100 px-4 py-1 border rounded-tr-2xl rounded-bl-2xl rounded-br-2xl'>
                                <h3 className='font-semibold text-sm'>{data?.name}</h3>
                                <span>{data?.comment}</span>
                            </div>
                            {
                                showInput &&
                                <TextField size='small' id="filled-basic" label="Add your comment here" variant="filled"
                                    onChange={(e) => setCommentBody(e.target.value)}
                                />

                            }
                            {
                                showInput ?

                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <button onClick={() => handleAdd()} className='text-xs text-blue-500 cursor-pointer'>
                                                Add comment
                                            </button>
                                        </div>
                                        <div className='flex gap-2 mr-4'>
                                            <button onClick={() => setShowInput(false)} className='text-xs'>
                                                Cancel
                                            </button>
                                        </div>

                                    </div>

                                    :
                                    (
                                        data?.comment && <div className='flex items-center justify-between'>
                                            <div>
                                                <button onClick={() => setShowInput(true)} className='text-xs text-blue-500 cursor-pointer'>
                                                    Reply
                                                </button>
                                            </div>
                                            <div className='flex gap-2 mr-4'>
                                                <button onClick={() => handleCommentDelete(data.commentId, dataId)} className='text-xs'>
                                                    Delete
                                                </button>
                                            </div>

                                        </div>
                                    )

                            }


                            {
                                data?.reply?.map((element) => {
                                    return <Comments data={element} dataId={dataId} handleAddComments={handleAddComments} handleCommentDelete={handleCommentDelete} />
                                })
                            }

                        </div>
                    </div>
                </div >
            </>

        </div >
    )
}

export default Comments


{/* <div className='flex items-center mt-2'>
{
    (item.reply.length > 0 && !repliesShowArray.includes(id)) &&
    <>
        <BsArrowReturnRight />
        <div onClick={() => expandReplies(id)} className='text-xs cursor-pointer hover:text-blue-500'>
            {`${item.reply.length}  Replies`}
        </div>
    </>
}
{
    (repliesShowArray.includes(id)) &&
    <>
        <div className='flex flex-col gap-2 '>
            <Replies data={item.reply} />
            <span className='text-sm cursor-pointer underline hover:text-blue-500'
                onClick={() => collapseReplies(id)}
            >
                Hide all replies
            </span>
        </div>

    </>
}

</div> */}