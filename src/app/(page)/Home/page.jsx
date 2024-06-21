import PostsAnmiation from '@/app/(components)/Animation/PostsAnmiation';
import Link from 'next/link';
import React from 'react'
import axios from 'axios'


const page = async () => {
    try {
        const getPosts = async () => {
            return await axios.get("https://jsonplaceholder.typicode.com/posts").then((data) => data).catch(err => err)
        }
        const posts = await getPosts();
        return (
            <div className="">
                <div className='container py-3' >
                    <div className="row gap-y-4">
                        {
                            posts?.data?.map(post => {
                                return <PostsAnmiation key={post.id}>
                                    <div className=" bg-white  p-4 rounded h-full ">
                                        <h2 className='my-2 py-2 subpixel-antialiased	 border-b  border-gray-900 text-gray-600' ><span className='font-bold text-black' >Title :</span> {post.title}</h2>
                                        <h3 className='my-2 py-2 border-b tracking-wide diagonal-fractions		  border-gray-900 text-gray-600' ><span className='font-bold text-black' >Body :</span> {post.body}</h3>
                                        <div className=" pt-4 ">
                                            <Link className='bg-black fw-bold text-white rounded-md   py-2 px-5 hover:bg-white hover:text-black' href={`/PostDetail/${post.id}`} >View Full Post</Link>
                                        </div>
                                    </div>
                                </PostsAnmiation>
                            })
                        }
                    </div>

                </div>
            </div>

        )
    } catch (error) {
        console.log(error);
    }
}

export default page
