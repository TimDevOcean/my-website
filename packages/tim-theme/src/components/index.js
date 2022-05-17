import React from "react";
import { connect, Global, css, styled, Head } from 'frontity';
import { useEffect } from 'react';
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
import Switch from "@frontity/components/switch";
import Loading from "./loading";
import Canvas from "./Canvas";
import Loader from "./my-loader";


const Root = ({ state, actions }) => {

    const data = state.source.get(state.router.link);
    useEffect(() => {
      actions.source.fetch("/websites");
    }, [actions.source]);

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
        <main> 
            {data.isFetching && <Loader />}
            {data.isArchive && state.router.link === "/" ? <Home /> : 
            data.isArchive && state.router.link !== "/" ? 
            <div className="component-grid"><List /></div> : null}
          
            <Switch>
              <Websites when={state.router.link === "/websites/"} />
              <Contact when={state.router.link === "/contact/"} />
              <Page when={data.isPage} />
              <Post when={data.isPost} />
              <NothingFound when={data.isError} />
            </Switch>

            <div id="fb-root"></div>
          <Canvas />  
          <script type="" src="https://tim.devoceangh.com/meffect.js"></script>

        </main> 
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