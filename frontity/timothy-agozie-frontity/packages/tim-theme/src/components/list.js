import React from "react";
import { connect } from "frontity";
import Link from "./link";
import FeaturedMedia from "./featured-media";
import Pagination from "./list/pagination";

const List = ({ state }) => {

    const data = state.source.get(state.router.link);
    return(
        <div>
            {data.items.map(item => {
                const post = state.source.post[item.id];
                return (
                    <div className="project-card" key={item.id}>
                        <Link href={post.link}>
                        <FeaturedMedia id={post.featured_media} />
                            <div className="pc-content">
                                <h3>{post.title.rendered}</h3>
                                <br />
                                <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                                <button href={post.link}>Read more <i className="zmdi zmdi-trending-flat animated infinite wobble"></i></button>
                            </div>
                        </Link>

                        <Pagination />
                    </div>
                )
            })}
        </div>
    )

}

export default connect(List);