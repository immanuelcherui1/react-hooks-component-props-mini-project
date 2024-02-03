import Article from "./Article";
import React from "react";
import blogData from "../data/blog";
 
function ArticleList(){
    const Post = blogData.posts
    const article = Post.map((post) => {
        return <Article key = {post.id} title = {post.title} date= {post.date} preview = {post.preview}></Article> 
    })
    return <>{article}</>
}

export default ArticleList;