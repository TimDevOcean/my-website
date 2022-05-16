import React from "react";
import { connect, styled } from "frontity";

const FLink = ({ href, actions, children }) => {
    return (
        <div>
            <Anchor href={href}
            onClick={ e => {
                e.preventDefault();
                actions.router.set(href);
            }}>
                {children}
            </Anchor>
        </div>
    )
}

export default connect(FLink);

const Anchor = styled.a`
    text-decoration: none;
`