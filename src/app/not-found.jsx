import Image from 'next/image'
import React from 'react'

const notfound = () => {
    return (
        <div className=' container mt-28 mx-auto' >
            <div className="404 w-full bg-transparent text-center text-white">
                <h2 className={` tracking-wider  my-2 text-9xl`}>404</h2>
                <h2 className={` tracking-wider  my-2 text-7xl`}>Error</h2>
                <h2 className={` tracking-wider my-2 text-5xl`}>Page Not Found</h2>
            </div>
        </div>
    )
}

export default notfound
