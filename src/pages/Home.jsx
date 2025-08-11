import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full py-16 bg-gradient-to-br from-gray-900 via-purple-950 to-black text-center text-gray-100">
                <Container>
                    <div className="max-w-2xl mx-auto">
                        <h1 className="text-3xl font-extrabold mb-4">
                            No posts found
                        </h1>
                        <p className="text-gray-400 text-lg">
                            Login to view or create new posts and join the discussion.
                        </p>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className="w-full min-h-[calc(100vh-64px)] py-16 bg-gradient-to-br from-gray-900 via-purple-950 to-black text-gray-100">
            <Container>
                <h1 className="text-4xl font-bold mb-12 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    Explore Posts
                </h1>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {posts.map((post) => (
                        <PostCard key={post.$id} {...post} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
