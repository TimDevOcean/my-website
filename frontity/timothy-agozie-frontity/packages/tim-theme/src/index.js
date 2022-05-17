import Root from './components';
import { observe } from "frontity";
import { Head } from 'frontity';



export default {
  name: "tim-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      isMenuOpen: true
    }
  },
  actions: {
    theme: {
      openMenu: ({ state }) => {
        state.theme.isMenuOpen = true;
      },
      closeMenu: ({ state }) => {
        state.theme.isMenuOpen = false;
      },
      afterCSR: ({ state }) => {
        observe(() => {
          console.log(state.router.link);
          return (
            <Head>
            <title>Timothy Agozie</title>
            <meta name="description" content="Timothy Agozie"></meta>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Poppins:wght@100;200;300;400;500&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
            
           </Head>
          );
        })
      }
    }
  }
};
