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
      isMenuOpen: true,
      mode: 'light'
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
      },
      lightMode: ({state}) => {
        state.theme.mode = 'light';
      },
      darkMode: ({state}) => {
        state.theme.mode = 'dark';
      }
    }
  }
};
