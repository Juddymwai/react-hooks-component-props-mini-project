import React from "react";
import blogData from "../data/blog";
import Article from "../components/Article"


function ArticleList(){
    console.log(blogData)
    const postList= blogData.posts.map((post)=>{
        return(
            <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}
            />
        )
    })


    return (
        <div>
            <main>
                {postList}
           
            </main>
            
            
        </div>
        
    )
}

export default ArticleList;