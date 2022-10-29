import React from 'react'

const CategoryPage = () => {
    return (
        <div className='bg-[#EDF2FF] px-10'>
            {loading && <h3 className='text-center'>Loading</h3>}
            <div className='container  mx-auto'>
                <div className="py-10 ">
                    <h1 className="text-3xl font-bold ">
                        All Category
                    </h1>
                </div>
                <div className="my-10 pb-10">
                    {posts && posts.map(post => {
                        return <AllPosts post={post} deleteData={deleteData} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default CategoryPage