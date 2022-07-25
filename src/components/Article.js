import React from "react";
import blogData from "../data/blog";


function Article({title, preview, date="January 1, 1970" ,minutes}){
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} -{minutes}min</small>
            <p>{preview}</p>
            
        </article>
    )
}

export default Article;