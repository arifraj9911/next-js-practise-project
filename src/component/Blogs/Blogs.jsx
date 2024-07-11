import React from 'react';

const getBlogs = async()=>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`)
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

const Blogs = async() => {

    const userData = await getBlogs();
    
    return (
        <div>
            <h2>This is Blogs</h2>
            <div className="grid grid-cols-3">
                {
                    userData?.map(user=><div className='border p-4' key={user.id}>
                         <p>Name:{user.name}</p>
                         <p>Email:{user.email}</p>
                                            </div>)
                }
            </div>
        </div>
    );
};

export default Blogs;