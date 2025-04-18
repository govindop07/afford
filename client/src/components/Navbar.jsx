import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white flex items-center gap-6 h-16 bg-black'>
      <h2 className='text-2xl font-bold'>Social Media App</h2>
      <div className='flex space-x-4 items-center h-16 '>
        <h2 className='hover:text-gray-500 hover:underline rounded-lg'>Home</h2>
        <h2 className='hover:text-gray-500 hover:underline rounded-lg'>Top Users</h2>
        <h2 className='hover:text-gray-500 hover:underline rounded-lg'>Trending Posts</h2>
      </div>
    </div>
  )
}

export default Navbar