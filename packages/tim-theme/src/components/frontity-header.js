// import React from "react";
// import { connect, styled } from 'frontity';
// import logo from "../img/logo.png";
// import FLink from './link';


// const FHeader = ({ state, actions }) => {

//     const data = state.source.get(state.router.link);
//     return (
// <Header>
// <HeaderContent>
//     <img className='logo' src={logo} alt=""/>
//     { state.theme.isMenuOpen ? (
//         <>
//             <Menu>
//                 <FLink href="/">Portfolio</FLink>
//                 <FLink href="/contact">Contact</FLink>
//                 <FLink href="/category/insights">Insights</FLink>
//             </Menu>
//             <button onClick={actions.theme.closeMenu}>Close</button>
//         </>
//     ) : (
//             <button onClick={actions.theme.openMenu}>Open</button> 
//         )
//     }
// </HeaderContent>
// </Header>
//     )
// }

// export default connect(FHeader);

// const Header = styled.header`
// font-family: 'DM Sans', Helvetica;
// border-bottom: solid #dddddd 1px;
// z-index: 100;
// background: #fff;
// margin: auto;
// `

// const HeaderContent = styled.div`
// max-width: 900px;
// padding: 1em;
// margin: auto;
// display: flex;
// flex-direction: row;
// align-items: center;
// `

// const Menu = styled.nav`
// width: 100%;
// display: flex;
// flex-direction: row;
// justify-content: right;
// & > div {
//     margin-right: 1em;
// }
// `