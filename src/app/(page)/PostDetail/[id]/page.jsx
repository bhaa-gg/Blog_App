import Post_animtion from '@/app/(components)/Animation/Post_animtion'
import axios from 'axios'
import React from 'react'

const page = async ({ params }) => {
    const { id } = params


    const specific_Post = async () => {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(({ data }) => data).catch(err => err)
    }

    const post = await specific_Post()
    return (
        <div className='md:container mx-auto'>
            <Post_animtion  >
                <div delay={0} property={-600} className="w-full  mx-auto md:w-3/4  rounded px-5 py-3 mt-28   bg-white">
                    <Post_animtion>
                        <div delay={0.5} property={-100} className="title my-2 py-2 border-b">
                            <h2 className='fw-bold text-5xl' >Title : </h2>
                            <p className='py-2 text-lg'> {post.title}</p>
                        </div>
                    </Post_animtion>
                    <Post_animtion>
                        <div delay={1} property={-100} className="body my-2 py-2 border-b">
                            <h2 className='fw-bold text-5xl'>Body : </h2>
                            <p className='py-2 text-lg'> {post.body}</p>
                        </div>
                    </Post_animtion>
                </div>
            </Post_animtion>
        </div>
    )
}

export default page
