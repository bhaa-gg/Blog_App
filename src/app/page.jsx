import Link from 'next/link'
import React from 'react'
import Home_Animation from './(components)/Animation/Home_Animation'

const page = () => {
  const delay = 5;
  return (
    <div className={`container `}>
      <div className="mt-36">
        <Home_Animation  >
          <h1 delay={0} className={` my-4 text-7xl text-white`} >Welcome In My Blog Application . </h1>
        </Home_Animation>
        <Home_Animation>

          <p delay={0.5} className={`  my-5 text-xl text-white`} >This Application users can view a list of blog posts, read individual posts, and
            submit new posts .</p>
        </Home_Animation>
        <Home_Animation>
          <Link delay={1} className="bg-white transition-all home-btn px-5 text-2xl font-bold py-2 rounded text-center " href={"/Home"} >
            View All Posts
          </Link>
        </Home_Animation>
      </div>
    </div>
  )
}

export default page
