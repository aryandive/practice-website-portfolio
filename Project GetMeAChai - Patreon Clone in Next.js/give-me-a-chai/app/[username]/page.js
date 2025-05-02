import React from 'react'

const Username = ({ params }) => {
    return (
        <div className="z-[-2] min-h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
            <div className='flex items-center justify-center pt-50 top-30'>
                <h1 className='text-white z-10'>
                    ...{params.username}...
                </h1>
            </div>
        </div>
    )
}

export default Username
