import Link from 'next/link'
import React from 'react'
import fs from "fs"
import matter from "gray-matter"

const getPostMetadata = () => {
    const folder = "app/blogContent/"
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`app/blogContent/${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            author: matterResult.data.author,
            subtitle: matterResult.data.subtitle,
            slug: fileName.replace(".md", ""),
        };
    });

    return posts
}

export const BlogPage = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <article key={post.slug} className="flex bg-white p-4 border border-gray-300 rounded-md shadow-md border-violet-600 m-2">
            <div>
                <Link href={`/blog/${post.slug}`}>
                    <h1 className="text-2xl font-bold text-violet-600 hover:underline mb-2 ">{post.title}</h1>
                </Link>
                <p className="text-gray-700 mb-2">{`By ${post.author}`}</p>
                <p className="text-gray-700 mb-2">{post.subtitle}</p>
                <p className="text-gray-500">{post.date}</p>
            </div>
        </article>
    ));
    return (
        <div className='container  p-6 mx-auto max-w-3xl'>
            {postPreviews}
        </div>

    )
}

export default BlogPage