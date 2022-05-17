import React from "react";
import { connect } from "frontity";
import FeaturedMedia from "./featured-media-post";
import FacebookComment from "./facebook-comment";
import { Head } from "frontity";
import { useEffect } from "react";

const Post = ({ state, actions }) => {

    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const author = state.source.author[post.author];
    const d = new Date(post.date).getDate();
    const m = new Date(post.date).getMonth();
    const y = new Date(post.date).getFullYear();
    const day = ('0' + d).slice(-2);
    const month = ('0' + m).slice(-2);
    const date = `${day} - ${month} - ${y}`;

    useEffect(() => {
        actions.source.fetch("/");
      }, [actions.source]);

    return (

        <>
        <Head>
            <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v13.0&appId=963292437064576&autoLogAppEvents=1" nonce="9wPiYcqG"></script>
        </Head>

        <div className="insights-post">
            <FeaturedMedia id={post.featured_media} />
            <span>Author: {author.name}</span> &nbsp;|&nbsp; <span>{date}</span>
            <br />
            <h2 style={{margin:"10px 0 8px 0"}}>{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{__html:post.content.rendered}}/>
            <br />
            <FacebookComment />
        </div>

        </>
    )

}

export default connect(Post);