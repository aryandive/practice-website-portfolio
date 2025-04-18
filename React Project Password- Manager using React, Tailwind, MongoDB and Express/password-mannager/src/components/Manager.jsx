import React from 'react'
import { useRef } from 'react'

const Manager = () => {
    const ref = useRef();
    const showPassword = () => {
        alert('show password');
        console.log(ref.current.src)
        if(ref.current.src="icons/eyecross.png"){
            ref.current.src="icons/eye.png"
        }
        ref.current.src="icons/eyecross.png"
    }

    const Manager = () => {
        return (
            <>
                <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

                <div className='mycontainer'>
                    <h1 className='text-4xl text font-bold text-center'>
                        <span className='text-purple-500'> &lt;</span>
                        <span>Pass</span><span className='text-purple-500'>OP/&gt;</span>
                    </h1>
                    
                    <p className='text-purple-900 text-lg items-center'>Your own Password Manager</p>

                    <div className='flex flex-col p-4 text-black gap-8 items-center'>
                        <input className='rounded-full border border-purple-500 w-full p-4 py-1' type="text" name="" id="" />
                        <div className="flex w-full justify-between gap-8">
                            <input className='rounded-full border border-purple-500 w-full p-4 py-1' type="text" name="" id="" />
                            <input className='rounded-full border border-purple-500 w-full p-4 py-1' type="text" name="" id="" />
                            <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='p-1' width={26} src="icons/eye.png" alt="eye" />
                            </span>
                        </div>

                        <button className='flex justify-center items-center bg-purple-400 hover:bg-purple-300 rounded-full px-4 py-2 w-fit'>
                            <lord-icon src="https://cdn.lordicon.com/jgnvfzqg.json" trigger="hover" ></lord-icon>
                            Add Password
                        </button>
                    </div>
                </div>
            </>
        )
    }
}

export default Manager 