import React from 'react'
import fs from 'fs'
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter'

const getPostContent = (postid: string) => {
  const folder = "app/blogContent/";
  const file = `${folder}${postid}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterContent = matter(content)
  return matterContent;
}

const postDetails = ({ params }: { params: { postID: string } }) => {
  const postid = params.postID
  const postContent = getPostContent(postid)
  return (
    <div className=' max-h-min mx-auto max-w-5xl bg-white p-4 border border-gray-300 rounded-md shadow-md'>
      <h1 className ='text-violet-600 text-bold text-2xl text-center'>{postContent.data.subtitle}</h1>
      <article className="prose lg:prose-xl">
        <Markdown>{postContent.content}</Markdown>
      </article>

    </div>
  )
}

export default postDetails