import React from 'react'

const Footer = () => {
  return (
    <div>
      <section className=" text-gray-500 py-6 mt-10">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} <span className='text-gray-200'>Mohamed Abuzahda</span>. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Footer
