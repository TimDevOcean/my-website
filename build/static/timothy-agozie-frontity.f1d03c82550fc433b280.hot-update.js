webpackHotUpdate("timothy-agozie-frontity",{

/***/ "./packages/tim-theme/src/components/index.js":
/*!****************************************************!*\
  !*** ./packages/tim-theme/src/components/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ \"./packages/tim-theme/src/components/list.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ \"./packages/tim-theme/src/components/post.js\");\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page */ \"./packages/tim-theme/src/components/page.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header */ \"./packages/tim-theme/src/components/Header.jsx\");\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Home */ \"./packages/tim-theme/src/components/Home.jsx\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../App.css */ \"./packages/tim-theme/src/App.css\");\n/* harmony import */ var _Darkmode_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Darkmode.css */ \"./packages/tim-theme/src/Darkmode.css\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Footer */ \"./packages/tim-theme/src/components/Footer.jsx\");\n/* harmony import */ var _Websites__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Websites */ \"./packages/tim-theme/src/components/Websites.jsx\");\n/* harmony import */ var _NothingFound__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NothingFound */ \"./packages/tim-theme/src/components/NothingFound.jsx\");\n/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Contact */ \"./packages/tim-theme/src/components/Contact.jsx\");\n/* harmony import */ var _frontity_components_switch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @frontity/components/switch */ \"./node_modules/@frontity/components/switch.tsx\");\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Canvas */ \"./packages/tim-theme/src/components/Canvas.js\");\n/* harmony import */ var _my_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./my-loader */ \"./packages/tim-theme/src/components/my-loader.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./packages/tim-theme/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const Root=({state,actions})=>{const{mode}=state.theme;const{lightMode,darkMode}=actions.theme;const handleDark=()=>{darkMode();console.log(mode);};const data=state.source.get(state.router.link);Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(()=>{actions.source.fetch(\"/websites\");},[actions.source]);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxs\"])(\"div\",{className:\"page\",children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxs\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"title\",{children:\"Timothy Agozie\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"meta\",{name:\"description\",content:\"Timothy Agozie\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"link\",{rel:\"preconnect\",href:\"https://fonts.googleapis.com\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"link\",{rel:\"preconnect\",href:\"https://fonts.gstatic.com\",crossorigin:true}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"link\",{href:\"https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Poppins:wght@100;200;300;400;500&display=swap\",rel:\"stylesheet\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"link\",{rel:\"stylesheet\",href:\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"link\",{rel:\"stylesheet\",href:\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css\"})]}),mode==='dark'?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Global\"],{styles:_Darkmode_css__WEBPACK_IMPORTED_MODULE_8__[\"default\"]}):Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Global\"],{styles:_App_css__WEBPACK_IMPORTED_MODULE_7__[\"default\"]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"div\",{className:\"spacer\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxs\"])(\"main\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxs\"])(ModeToggle,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"span\",{children:\"Mode\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"button\",{onClick:lightMode,children:\"Light\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"button\",{onClick:darkMode,children:\"Dark\"})]}),data.isFetching&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_my_loader__WEBPACK_IMPORTED_MODULE_15__[\"default\"],{}),data.isArchive&&state.router.link===\"/\"?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_Home__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{}):data.isArchive&&state.router.link!==\"/\"?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"div\",{className:\"component-grid\",children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{})}):null,Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxs\"])(_frontity_components_switch__WEBPACK_IMPORTED_MODULE_13__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_Websites__WEBPACK_IMPORTED_MODULE_10__[\"default\"],{when:state.router.link===\"/websites/\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_Contact__WEBPACK_IMPORTED_MODULE_12__[\"default\"],{when:state.router.link===\"/contact/\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{when:data.isPage}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_post__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{when:data.isPost}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_NothingFound__WEBPACK_IMPORTED_MODULE_11__[\"default\"],{when:data.isError})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"div\",{id:\"fb-root\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_Canvas__WEBPACK_IMPORTED_MODULE_14__[\"default\"],{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"script\",{type:\"\",src:\"https://tim.devoceangh.com/meffect.js\"})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_Footer__WEBPACK_IMPORTED_MODULE_9__[\"default\"],{})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Root));const Main=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"e1yj3nsk0\",label:\"Main\"})( false?undefined:{name:\"oqfd0q\",styles:\"max-width:1000px;padding:1.5em;margin:auto\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9USU0vRGVza3RvcC9ERVhUT1AvQ09ERSBQUk9KRUNUUy90aW1vdGh5LWFnb3ppZS13ZWJzaXRlL3BhY2thZ2VzL3RpbS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RnlCIiwiZmlsZSI6Ii9Vc2Vycy9USU0vRGVza3RvcC9ERVhUT1AvQ09ERSBQUk9KRUNUUy90aW1vdGh5LWFnb3ppZS13ZWJzaXRlL3BhY2thZ2VzL3RpbS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEdsb2JhbCwgY3NzLCBzdHlsZWQsIEhlYWQgfSBmcm9tICdmcm9udGl0eSc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9saXN0XCI7XG5pbXBvcnQgUG9zdCBmcm9tIFwiLi9wb3N0XCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwiLi9wYWdlXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xuaW1wb3J0IEFwcHN0eWxlcyBmcm9tICcuLi9BcHAuY3NzJztcbmltcG9ydCBEYXJrbW9kZSBmcm9tICcuLi9EYXJrbW9kZS5jc3MnO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcbmltcG9ydCBXZWJzaXRlcyBmcm9tICcuL1dlYnNpdGVzJztcbmltcG9ydCBOb3RoaW5nRm91bmQgZnJvbSAnLi9Ob3RoaW5nRm91bmQnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4vQ29udGFjdFwiO1xuaW1wb3J0IFN3aXRjaCBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvc3dpdGNoXCI7XG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuL0NhbnZhc1wiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi9teS1sb2FkZXJcIjtcblxuXG5cbmNvbnN0IFJvb3QgPSAoeyBzdGF0ZSwgYWN0aW9ucyB9KSA9PiB7XG5cbiAgICBjb25zdCB7IG1vZGUgfSA9IHN0YXRlLnRoZW1lO1xuICAgIGNvbnN0IHsgbGlnaHRNb2RlLCBkYXJrTW9kZSB9ID0gYWN0aW9ucy50aGVtZTtcblxuICAgIGNvbnN0IGhhbmRsZURhcmsgPSAoKSA9PiB7XG4gICAgICBkYXJrTW9kZSgpO1xuICAgICAgY29uc29sZS5sb2cobW9kZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBhY3Rpb25zLnNvdXJjZS5mZXRjaChcIi93ZWJzaXRlc1wiKTtcbiAgICB9LCBbYWN0aW9ucy5zb3VyY2VdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cblxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5UaW1vdGh5IEFnb3ppZTwvdGl0bGU+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVGltb3RoeSBBZ296aWVcIj48L21ldGE+XG4gICAgICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NvcmlnaW4gLz5cbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURNK1NhbnM6d2dodEA0MDA7NTAwJmZhbWlseT1Qb3BwaW5zOndnaHRAMTAwOzIwMDszMDA7NDAwOzUwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbWF0ZXJpYWwtZGVzaWduLWljb25pYy1mb250LzIuMi4wL2Nzcy9tYXRlcmlhbC1kZXNpZ24taWNvbmljLWZvbnQubWluLmNzc1wiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2FuaW1hdGUuY3NzLzQuMS4xL2FuaW1hdGUubWluLmNzc1wiIC8+XG4gICAgICAgIDwvSGVhZD5cblxuXG4gICAgICAgIHsgbW9kZSA9PT0gJ2RhcmsnID9cbiAgICAgICAgPEdsb2JhbCBzdHlsZXM9e0Rhcmttb2RlfSAvPiA6XG4gICAgICAgIDxHbG9iYWwgc3R5bGVzPXtBcHBzdHlsZXN9IC8+IFxuICAgICAgICB9XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NwYWNlcic+PC9kaXY+XG4gICAgICAgIDxtYWluPiBcbiAgICAgICAgICAgIDxNb2RlVG9nZ2xlPlxuICAgICAgICAgICAgICA8c3Bhbj5Nb2RlPC9zcGFuPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xpZ2h0TW9kZX0+TGlnaHQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkYXJrTW9kZX0+RGFyazwvYnV0dG9uPlxuICAgICAgICAgICAgPC9Nb2RlVG9nZ2xlPlxuXG4gICAgICAgICAgICB7ZGF0YS5pc0ZldGNoaW5nICYmIDxMb2FkZXIgLz59XG4gICAgICAgICAgICB7ZGF0YS5pc0FyY2hpdmUgJiYgc3RhdGUucm91dGVyLmxpbmsgPT09IFwiL1wiID8gPEhvbWUgLz4gOiBcbiAgICAgICAgICAgIGRhdGEuaXNBcmNoaXZlICYmIHN0YXRlLnJvdXRlci5saW5rICE9PSBcIi9cIiA/IFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtZ3JpZFwiPjxMaXN0IC8+PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICBcbiAgICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICAgIDxXZWJzaXRlcyB3aGVuPXtzdGF0ZS5yb3V0ZXIubGluayA9PT0gXCIvd2Vic2l0ZXMvXCJ9IC8+XG4gICAgICAgICAgICAgIDxDb250YWN0IHdoZW49e3N0YXRlLnJvdXRlci5saW5rID09PSBcIi9jb250YWN0L1wifSAvPlxuICAgICAgICAgICAgICA8UGFnZSB3aGVuPXtkYXRhLmlzUGFnZX0gLz5cbiAgICAgICAgICAgICAgPFBvc3Qgd2hlbj17ZGF0YS5pc1Bvc3R9IC8+XG4gICAgICAgICAgICAgIDxOb3RoaW5nRm91bmQgd2hlbj17ZGF0YS5pc0Vycm9yfSAvPlxuICAgICAgICAgICAgPC9Td2l0Y2g+XG5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmYi1yb290XCI+PC9kaXY+XG4gICAgICAgICAgPENhbnZhcyAvPiAgXG4gICAgICAgICAgPHNjcmlwdCB0eXBlPVwiXCIgc3JjPVwiaHR0cHM6Ly90aW0uZGV2b2NlYW5naC5jb20vbWVmZmVjdC5qc1wiPjwvc2NyaXB0PlxuXG4gICAgICAgIDwvbWFpbj4gXG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgZXhwb3J0IGRlZmF1bHQgY29ubmVjdChSb290KTtcblxuIFxuXG4gIGNvbnN0IE1haW4gPSBzdHlsZWQuZGl2YFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgIHBhZGRpbmc6IDEuNWVtO1xuICAgIG1hcmdpbjogYXV0bztcbiAgYCJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90aW0tdGhlbWUvc3JjL2NvbXBvbmVudHMvaW5kZXguanM/Y2U4OCJdLCJuYW1lcyI6WyJSb290Iiwic3RhdGUiLCJhY3Rpb25zIiwibW9kZSIsInRoZW1lIiwibGlnaHRNb2RlIiwiZGFya01vZGUiLCJoYW5kbGVEYXJrIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJzb3VyY2UiLCJnZXQiLCJyb3V0ZXIiLCJsaW5rIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJEYXJrbW9kZSIsIkFwcHN0eWxlcyIsImlzRmV0Y2hpbmciLCJpc0FyY2hpdmUiLCJpc1BhZ2UiLCJpc1Bvc3QiLCJpc0Vycm9yIiwiY29ubmVjdCIsIk1haW4iLCJzdHlsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FSQW9CQSxLQUFNQSxLQUFJLENBQUcsQ0FBQyxDQUFFQyxLQUFGLENBQVNDLE9BQVQsQ0FBRCxHQUF3QixDQUVqQyxLQUFNLENBQUVDLElBQUYsRUFBV0YsS0FBSyxDQUFDRyxLQUF2QixDQUNBLEtBQU0sQ0FBRUMsU0FBRixDQUFhQyxRQUFiLEVBQTBCSixPQUFPLENBQUNFLEtBQXhDLENBRUEsS0FBTUcsV0FBVSxDQUFHLElBQU0sQ0FDdkJELFFBQVEsR0FDUkUsT0FBTyxDQUFDQyxHQUFSLENBQVlOLElBQVosRUFDRCxDQUhELENBS0EsS0FBTU8sS0FBSSxDQUFHVCxLQUFLLENBQUNVLE1BQU4sQ0FBYUMsR0FBYixDQUFpQlgsS0FBSyxDQUFDWSxNQUFOLENBQWFDLElBQTlCLENBQWIsQ0FDQUMsdURBQVMsQ0FBQyxJQUFNLENBQ2RiLE9BQU8sQ0FBQ1MsTUFBUixDQUFlSyxLQUFmLENBQXFCLFdBQXJCLEVBQ0QsQ0FGUSxDQUVOLENBQUNkLE9BQU8sQ0FBQ1MsTUFBVCxDQUZNLENBQVQsQ0FJQSxNQUNFLGlGQUFLLFNBQVMsQ0FBQyxNQUFmLFdBRUUseUVBQUMsNkNBQUQsWUFDSSw0R0FESixDQUVJLGdGQUFNLElBQUksQ0FBQyxhQUFYLENBQXlCLE9BQU8sQ0FBQyxnQkFBakMsRUFGSixDQUdJLGdGQUFNLEdBQUcsQ0FBQyxZQUFWLENBQXVCLElBQUksQ0FBQyw4QkFBNUIsRUFISixDQUlJLGdGQUFNLEdBQUcsQ0FBQyxZQUFWLENBQXVCLElBQUksQ0FBQywyQkFBNUIsQ0FBd0QsV0FBVyxLQUFuRSxFQUpKLENBS0ksZ0ZBQU0sSUFBSSxDQUFDLG9IQUFYLENBQWdJLEdBQUcsQ0FBQyxZQUFwSSxFQUxKLENBTUksZ0ZBQU0sR0FBRyxDQUFDLFlBQVYsQ0FBdUIsSUFBSSxDQUFDLGtIQUE1QixFQU5KLENBT0ksZ0ZBQU0sR0FBRyxDQUFDLFlBQVYsQ0FBdUIsSUFBSSxDQUFDLDBFQUE1QixFQVBKLEdBRkYsQ0FhSVIsSUFBSSxHQUFLLE1BQVQsQ0FDRix3RUFBQywrQ0FBRCxFQUFRLE1BQU0sQ0FBRWMscURBQWhCLEVBREUsQ0FFRix3RUFBQywrQ0FBRCxFQUFRLE1BQU0sQ0FBRUMsZ0RBQWhCLEVBZkYsQ0FpQkUsd0VBQUMsK0NBQUQsSUFqQkYsQ0FrQkUsK0VBQUssU0FBUyxDQUFDLFFBQWYsRUFsQkYsQ0FtQkUsMkZBQ0kseUVBQUMsVUFBRCxZQUNFLGlHQURGLENBRUUsa0ZBQVEsT0FBTyxDQUFFYixTQUFqQixtQkFGRixDQUdFLGtGQUFRLE9BQU8sQ0FBRUMsUUFBakIsa0JBSEYsR0FESixDQU9LSSxJQUFJLENBQUNTLFVBQUwsRUFBbUIsd0VBQUMsbURBQUQsSUFQeEIsQ0FRS1QsSUFBSSxDQUFDVSxTQUFMLEVBQWtCbkIsS0FBSyxDQUFDWSxNQUFOLENBQWFDLElBQWIsR0FBc0IsR0FBeEMsQ0FBOEMsd0VBQUMsNkNBQUQsSUFBOUMsQ0FDREosSUFBSSxDQUFDVSxTQUFMLEVBQWtCbkIsS0FBSyxDQUFDWSxNQUFOLENBQWFDLElBQWIsR0FBc0IsR0FBeEMsQ0FDQSwrRUFBSyxTQUFTLENBQUMsZ0JBQWYsVUFBZ0Msd0VBQUMsNkNBQUQsSUFBaEMsRUFEQSxDQUNpRCxJQVZyRCxDQVlJLHlFQUFDLG9FQUFELFlBQ0Usd0VBQUMsa0RBQUQsRUFBVSxJQUFJLENBQUViLEtBQUssQ0FBQ1ksTUFBTixDQUFhQyxJQUFiLEdBQXNCLFlBQXRDLEVBREYsQ0FFRSx3RUFBQyxpREFBRCxFQUFTLElBQUksQ0FBRWIsS0FBSyxDQUFDWSxNQUFOLENBQWFDLElBQWIsR0FBc0IsV0FBckMsRUFGRixDQUdFLHdFQUFDLDZDQUFELEVBQU0sSUFBSSxDQUFFSixJQUFJLENBQUNXLE1BQWpCLEVBSEYsQ0FJRSx3RUFBQyw2Q0FBRCxFQUFNLElBQUksQ0FBRVgsSUFBSSxDQUFDWSxNQUFqQixFQUpGLENBS0Usd0VBQUMsc0RBQUQsRUFBYyxJQUFJLENBQUVaLElBQUksQ0FBQ2EsT0FBekIsRUFMRixHQVpKLENBb0JJLCtFQUFLLEVBQUUsQ0FBQyxTQUFSLEVBcEJKLENBcUJFLHdFQUFDLGdEQUFELElBckJGLENBc0JFLGtGQUFRLElBQUksQ0FBQyxFQUFiLENBQWdCLEdBQUcsQ0FBQyx1Q0FBcEIsRUF0QkYsR0FuQkYsQ0E0Q0Usd0VBQUMsK0NBQUQsSUE1Q0YsR0FERixDQWdERCxDQS9ESCxDQWlFaUJDLHVIQUFPLENBQUN4QixJQUFELENBQXRCLEVBSUEsS0FBTXlCLEtBQUksQ0FBR0MsdURBQUgsZ3lKQUFWIiwiZmlsZSI6Ii4vcGFja2FnZXMvdGltLXRoZW1lL3NyYy9jb21wb25lbnRzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgR2xvYmFsLCBjc3MsIHN0eWxlZCwgSGVhZCB9IGZyb20gJ2Zyb250aXR5JztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RcIjtcbmltcG9ydCBQb3N0IGZyb20gXCIuL3Bvc3RcIjtcbmltcG9ydCBQYWdlIGZyb20gXCIuL3BhZ2VcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XG5pbXBvcnQgQXBwc3R5bGVzIGZyb20gJy4uL0FwcC5jc3MnO1xuaW1wb3J0IERhcmttb2RlIGZyb20gJy4uL0Rhcmttb2RlLmNzcyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuaW1wb3J0IFdlYnNpdGVzIGZyb20gJy4vV2Vic2l0ZXMnO1xuaW1wb3J0IE5vdGhpbmdGb3VuZCBmcm9tICcuL05vdGhpbmdGb3VuZCc7XG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi9Db250YWN0XCI7XG5pbXBvcnQgU3dpdGNoIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9zd2l0Y2hcIjtcbmltcG9ydCBDYW52YXMgZnJvbSBcIi4vQ2FudmFzXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuL215LWxvYWRlclwiO1xuXG5cblxuY29uc3QgUm9vdCA9ICh7IHN0YXRlLCBhY3Rpb25zIH0pID0+IHtcblxuICAgIGNvbnN0IHsgbW9kZSB9ID0gc3RhdGUudGhlbWU7XG4gICAgY29uc3QgeyBsaWdodE1vZGUsIGRhcmtNb2RlIH0gPSBhY3Rpb25zLnRoZW1lO1xuXG4gICAgY29uc3QgaGFuZGxlRGFyayA9ICgpID0+IHtcbiAgICAgIGRhcmtNb2RlKCk7XG4gICAgICBjb25zb2xlLmxvZyhtb2RlKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGFjdGlvbnMuc291cmNlLmZldGNoKFwiL3dlYnNpdGVzXCIpO1xuICAgIH0sIFthY3Rpb25zLnNvdXJjZV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxuXG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPlRpbW90aHkgQWdvemllPC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJUaW1vdGh5IEFnb3ppZVwiPjwvbWV0YT5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiBjcm9zc29yaWdpbiAvPlxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RE0rU2Fuczp3Z2h0QDQwMDs1MDAmZmFtaWx5PVBvcHBpbnM6d2dodEAxMDA7MjAwOzMwMDs0MDA7NTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tYXRlcmlhbC1kZXNpZ24taWNvbmljLWZvbnQvMi4yLjAvY3NzL21hdGVyaWFsLWRlc2lnbi1pY29uaWMtZm9udC5taW4uY3NzXCIgLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW5pbWF0ZS5jc3MvNC4xLjEvYW5pbWF0ZS5taW4uY3NzXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuXG5cbiAgICAgICAgeyBtb2RlID09PSAnZGFyaycgP1xuICAgICAgICA8R2xvYmFsIHN0eWxlcz17RGFya21vZGV9IC8+IDpcbiAgICAgICAgPEdsb2JhbCBzdHlsZXM9e0FwcHN0eWxlc30gLz4gXG4gICAgICAgIH1cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BhY2VyJz48L2Rpdj5cbiAgICAgICAgPG1haW4+IFxuICAgICAgICAgICAgPE1vZGVUb2dnbGU+XG4gICAgICAgICAgICAgIDxzcGFuPk1vZGU8L3NwYW4+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bGlnaHRNb2RlfT5MaWdodDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RhcmtNb2RlfT5EYXJrPC9idXR0b24+XG4gICAgICAgICAgICA8L01vZGVUb2dnbGU+XG5cbiAgICAgICAgICAgIHtkYXRhLmlzRmV0Y2hpbmcgJiYgPExvYWRlciAvPn1cbiAgICAgICAgICAgIHtkYXRhLmlzQXJjaGl2ZSAmJiBzdGF0ZS5yb3V0ZXIubGluayA9PT0gXCIvXCIgPyA8SG9tZSAvPiA6IFxuICAgICAgICAgICAgZGF0YS5pc0FyY2hpdmUgJiYgc3RhdGUucm91dGVyLmxpbmsgIT09IFwiL1wiID8gXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1ncmlkXCI+PExpc3QgLz48L2Rpdj4gOiBudWxsfVxuICAgICAgICAgIFxuICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgPFdlYnNpdGVzIHdoZW49e3N0YXRlLnJvdXRlci5saW5rID09PSBcIi93ZWJzaXRlcy9cIn0gLz5cbiAgICAgICAgICAgICAgPENvbnRhY3Qgd2hlbj17c3RhdGUucm91dGVyLmxpbmsgPT09IFwiL2NvbnRhY3QvXCJ9IC8+XG4gICAgICAgICAgICAgIDxQYWdlIHdoZW49e2RhdGEuaXNQYWdlfSAvPlxuICAgICAgICAgICAgICA8UG9zdCB3aGVuPXtkYXRhLmlzUG9zdH0gLz5cbiAgICAgICAgICAgICAgPE5vdGhpbmdGb3VuZCB3aGVuPXtkYXRhLmlzRXJyb3J9IC8+XG4gICAgICAgICAgICA8L1N3aXRjaD5cblxuICAgICAgICAgICAgPGRpdiBpZD1cImZiLXJvb3RcIj48L2Rpdj5cbiAgICAgICAgICA8Q2FudmFzIC8+ICBcbiAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJcIiBzcmM9XCJodHRwczovL3RpbS5kZXZvY2VhbmdoLmNvbS9tZWZmZWN0LmpzXCI+PC9zY3JpcHQ+XG5cbiAgICAgICAgPC9tYWluPiBcbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBleHBvcnQgZGVmYXVsdCBjb25uZWN0KFJvb3QpO1xuXG4gXG5cbiAgY29uc3QgTWFpbiA9IHN0eWxlZC5kaXZgXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgcGFkZGluZzogMS41ZW07XG4gICAgbWFyZ2luOiBhdXRvO1xuICBgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/tim-theme/src/components/index.js\n");

/***/ })

})