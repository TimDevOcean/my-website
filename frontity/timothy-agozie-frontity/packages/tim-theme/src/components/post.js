import React from "react";
import { connect } from "frontity";
import FeaturedMedia from "./featured-media-post";

const Post = ({ state }) => {

    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const author = state.source.author[post.author];
    const d = new Date(post.date).getDate();
    const m = new Date(post.date).getMonth();
    const y = new Date(post.date).getFullYear();
    const day = ('0' + d).slice(-2);
    const month = ('0' + m).slice(-2);
    const date = `${day} - ${month} - ${y}`;

    return (
        <div>
            <FeaturedMedia id={post.featured_media} />
            <span>Author: {author.name}</span> &nbsp;|&nbsp; <span>{date}</span>
            <br />
            <h2 style={{margin:"10px 0 8px 0"}}>{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{__html:post.content.rendered}}/>
        </div>
    )

}

export default connect(Post);