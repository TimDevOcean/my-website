import Root from './components'

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
      }
    }
  }
};
