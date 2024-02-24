import React from 'react'
import avatar from '../../assets/avatar.png'


const Replies = ({ data }) => {
    return (
        <div className='mt-2'>
            {data.map((item, id) => {
                return <>

                    <div>
                        <div className='flex gap-1'>
                            <div className='w-[40px]'>
                                <img src={avatar} height='100%' width='100%' className='rounded-full' />
                            </div>
                            <div className='flex flex-col mt-3'>
                                <div className=' bg-blue-100 px-4 py-1 border rounded-tr-2xl rounded-bl-2xl rounded-br-2xl'>
                                    <h3 className='font-semibold text-sm'>{item.name}</h3>
                                    <span>{item.comment}</span>
                                </div>
                                <span className='text-xs text-blue-500 cursor-pointer'>
                                    Reply
                                </span>
                            </div>
                        </div>
                    </div>
                </>
            })}

        </div>
    )
}

export default Replies