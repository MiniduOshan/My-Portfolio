import React from 'react'
import dp from './assets/dp.png'

function Profile() {
  return (
    <div className="profile cursor-vertical-text card w-64 rounded-lg shadow-md overflow-hidden bg-white flex flex-col">
  {/* Image Section */}
  <img
    src={dp}
    alt="Profile"
    className="w-full h-44 object-cover"
  />

  {/* Body Section */}
  <div className="p-4 flex flex-col items-center">
    <h2 className="text-lg font-semibold">John Doe</h2>
    <p className="text-gray-600 text-sm text-center mt-2">
      Frontend Developer at TechCorp. Passionate about UI/UX and clean code.
    </p>
    <a href='mailto:you@example.com' className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
      Contact Me
    </a>
  </div>
</div>

  )
}

export default Profile