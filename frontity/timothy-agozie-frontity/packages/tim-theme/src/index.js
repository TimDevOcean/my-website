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
        })
      }
    }
  }
};
