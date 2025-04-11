import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex py-2 justify-between bg-slate-800 text-white p-4'>
        <div className="logo font-bold text-xl mx-8 cursor-pointer">
            iTask
        </div>
        <ul className='flex gap-8 mx-9'>
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your Task</li>
        </ul>
    </nav>
  )
}

export default Navbar