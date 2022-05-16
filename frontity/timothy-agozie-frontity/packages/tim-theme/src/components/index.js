import React from "react";
import { connect, Global, css, styled, Head } from 'frontity';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import List from "./list";
import Post from "./post";
import Page from "./page";
import Header from "./Header";
import Home from "./Home";
import Appstyles from '../App.css';
import Footer from "./Footer";
import Websites from './Websites';
import NothingFound from './NothingFound';
import Contact from "./Contact";
import Item from "./list/list-item";

const Root = ({ state, actions }) => {

    const data = state.source.get(state.router.link);
    return (
      <div className="page">

        <Head>
            <title>Timothy Agozie</title>
            <meta name="description" content="Timothy Agozie"></meta>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Poppins:wght@100;200;300;400;500&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        </Head>


        <Global 
            styles={Appstyles}
        />
        <Header />
        <div className='spacer'></div>
        <Main> 

            {data.isArchive && state.router.link === "/" ? <Home /> : 
            data.isArchive && state.router.link !== "/" ? 
            <div className="component-grid"><List /></div> : null}
            
            {data.isPost && <Post />}
            {data.isPage && <Page />}
            {state.router.link === "/websites/" && <Websites />}
            {state.router.link === "/contact/" && <Contact />}
            {state.router.link === "/nothingfound/" && <NothingFound />}

        </Main> 
       
        <Footer />
      </div>
    );
  };

  export default connect(Root);

 

  const Main = styled.div`
    max-width: 1000px;
    padding: 1.5em;
    margin: auto;
  `