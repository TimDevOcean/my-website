webpackHotUpdate("timothy-agozie-frontity",{

/***/ "./packages/tim-theme/src/components/index.js":
/*!****************************************************!*\
  !*** ./packages/tim-theme/src/components/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ \"./packages/tim-theme/src/components/list.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ \"./packages/tim-theme/src/components/post.js\");\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page */ \"./packages/tim-theme/src/components/page.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header */ \"./packages/tim-theme/src/components/Header.jsx\");\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Home */ \"./packages/tim-theme/src/components/Home.jsx\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../App.css */ \"./packages/tim-theme/src/App.css\");\n/* harmony import */ var _Darkmode_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Darkmode.css */ \"./packages/tim-theme/src/Darkmode.css\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Footer */ \"./packages/tim-theme/src/components/Footer.jsx\");\n/* harmony import */ var _Websites__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Websites */ \"./packages/tim-theme/src/components/Websites.jsx\");\n/* harmony import */ var _NothingFound__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NothingFound */ \"./packages/tim-theme/src/components/NothingFound.jsx\");\n/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Contact */ \"./packages/tim-theme/src/components/Contact.jsx\");\n/* harmony import */ var _frontity_components_switch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @frontity/components/switch */ \"./node_modules/@frontity/components/switch.tsx\");\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Canvas */ \"./packages/tim-theme/src/components/Canvas.js\");\n/* harmony import */ var _my_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./my-loader */ \"./packages/tim-theme/src/components/my-loader.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./packages/tim-theme/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const Root=({state,actions})=>{const{mode}=state.theme;const{lightMode,darkMode}=actions.theme;const handleDark=()=>{darkMode();console.log(mode);};const data=state.source.get(state.router.link);Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(()=>{actions.source.fetch(\"/websites\");},[actions.source]);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxs\"])(\"div\",{className:\"page\",children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxs\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"title\",{children:\"Timothy Agozie\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"meta\",{name:\"description\",content:\"Timothy Agozie\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"link\",{rel:\"preconnect\",href:\"https://fonts.googleapis.com\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"link\",{rel:\"preconnect\",href:\"https://fonts.gstatic.com\",crossorigin:true}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"link\",{href:\"https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Poppins:wght@100;200;300;400;500&display=swap\",rel:\"stylesheet\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"link\",{rel:\"stylesheet\",href:\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"link\",{rel:\"stylesheet\",href:\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css\"})]}),mode==='dark'?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Global\"],{styles:_Darkmode_css__WEBPACK_IMPORTED_MODULE_8__[\"default\"]}):Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Global\"],{styles:_App_css__WEBPACK_IMPORTED_MODULE_7__[\"default\"]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"div\",{className:\"spacer\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxs\"])(\"main\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxs\"])(ModeToggle,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"span\",{children:\"MODE\"}),\"\\xA0\\xA0\",Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"button\",{className:\"light-mode-btn\",onClick:lightMode}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"button\",{className:\"dark-mode-btn\",onClick:darkMode})]}),data.isFetching&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_my_loader__WEBPACK_IMPORTED_MODULE_15__[\"default\"],{}),data.isArchive&&state.router.link===\"/\"?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_Home__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{}):data.isArchive&&state.router.link!==\"/\"?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"div\",{className:\"component-grid\",children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{})}):null,Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsxs\"])(_frontity_components_switch__WEBPACK_IMPORTED_MODULE_13__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_Websites__WEBPACK_IMPORTED_MODULE_10__[\"default\"],{when:state.router.link===\"/websites/\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_Contact__WEBPACK_IMPORTED_MODULE_12__[\"default\"],{when:state.router.link===\"/contact/\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{when:data.isPage}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_post__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{when:data.isPost}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_NothingFound__WEBPACK_IMPORTED_MODULE_11__[\"default\"],{when:data.isError})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"div\",{id:\"fb-root\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_Canvas__WEBPACK_IMPORTED_MODULE_14__[\"default\"],{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(\"script\",{type:\"\",src:\"https://tim.devoceangh.com/meffect.js\"})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__[\"jsx\"])(_Footer__WEBPACK_IMPORTED_MODULE_9__[\"default\"],{})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Root));const ModeToggle=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"e1yj3nsk0\",label:\"ModeToggle\"})( false?undefined:{name:\"xwjens\",styles:\"display:flex;padding:0 0 1rem 0;align-items:center;justify-content:right;font-family:'DM Sans',helvetica;& button{padding:0;width:25px;height:25px;border:1px solid #f3f3f3;box-shadow:rgba(0, 0, 0, 0.1) 0px 4px 12px;}& button.light-mode-btn{border-radius:50% 0 0 50%;background:#fff;}& button.dark-mode-btn{border-radius:0 50% 50% 0;background:#000;}& span{font-family:'Poppins',helvetica;font-weight:400;font-size:12px;letter-spacing:10px;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9USU0vRGVza3RvcC9ERVhUT1AvQ09ERSBQUk9KRUNUUy90aW1vdGh5LWFnb3ppZS13ZWJzaXRlL3BhY2thZ2VzL3RpbS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RitCIiwiZmlsZSI6Ii9Vc2Vycy9USU0vRGVza3RvcC9ERVhUT1AvQ09ERSBQUk9KRUNUUy90aW1vdGh5LWFnb3ppZS13ZWJzaXRlL3BhY2thZ2VzL3RpbS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEdsb2JhbCwgY3NzLCBzdHlsZWQsIEhlYWQgfSBmcm9tICdmcm9udGl0eSc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9saXN0XCI7XG5pbXBvcnQgUG9zdCBmcm9tIFwiLi9wb3N0XCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwiLi9wYWdlXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xuaW1wb3J0IEFwcHN0eWxlcyBmcm9tICcuLi9BcHAuY3NzJztcbmltcG9ydCBEYXJrbW9kZSBmcm9tICcuLi9EYXJrbW9kZS5jc3MnO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcbmltcG9ydCBXZWJzaXRlcyBmcm9tICcuL1dlYnNpdGVzJztcbmltcG9ydCBOb3RoaW5nRm91bmQgZnJvbSAnLi9Ob3RoaW5nRm91bmQnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4vQ29udGFjdFwiO1xuaW1wb3J0IFN3aXRjaCBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvc3dpdGNoXCI7XG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuL0NhbnZhc1wiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi9teS1sb2FkZXJcIjtcblxuXG5cbmNvbnN0IFJvb3QgPSAoeyBzdGF0ZSwgYWN0aW9ucyB9KSA9PiB7XG5cbiAgICBjb25zdCB7IG1vZGUgfSA9IHN0YXRlLnRoZW1lO1xuICAgIGNvbnN0IHsgbGlnaHRNb2RlLCBkYXJrTW9kZSB9ID0gYWN0aW9ucy50aGVtZTtcblxuICAgIGNvbnN0IGhhbmRsZURhcmsgPSAoKSA9PiB7XG4gICAgICBkYXJrTW9kZSgpO1xuICAgICAgY29uc29sZS5sb2cobW9kZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBhY3Rpb25zLnNvdXJjZS5mZXRjaChcIi93ZWJzaXRlc1wiKTtcbiAgICB9LCBbYWN0aW9ucy5zb3VyY2VdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cblxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5UaW1vdGh5IEFnb3ppZTwvdGl0bGU+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVGltb3RoeSBBZ296aWVcIj48L21ldGE+XG4gICAgICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NvcmlnaW4gLz5cbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURNK1NhbnM6d2dodEA0MDA7NTAwJmZhbWlseT1Qb3BwaW5zOndnaHRAMTAwOzIwMDszMDA7NDAwOzUwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbWF0ZXJpYWwtZGVzaWduLWljb25pYy1mb250LzIuMi4wL2Nzcy9tYXRlcmlhbC1kZXNpZ24taWNvbmljLWZvbnQubWluLmNzc1wiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2FuaW1hdGUuY3NzLzQuMS4xL2FuaW1hdGUubWluLmNzc1wiIC8+XG4gICAgICAgIDwvSGVhZD5cblxuXG4gICAgICAgIHsgbW9kZSA9PT0gJ2RhcmsnID9cbiAgICAgICAgPEdsb2JhbCBzdHlsZXM9e0Rhcmttb2RlfSAvPiA6XG4gICAgICAgIDxHbG9iYWwgc3R5bGVzPXtBcHBzdHlsZXN9IC8+IFxuICAgICAgICB9XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NwYWNlcic+PC9kaXY+XG4gICAgICAgIDxtYWluPiBcbiAgICAgICAgICAgIDxNb2RlVG9nZ2xlPlxuICAgICAgICAgICAgICA8c3Bhbj5NT0RFPC9zcGFuPiZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxpZ2h0LW1vZGUtYnRuXCIgb25DbGljaz17bGlnaHRNb2RlfT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkYXJrLW1vZGUtYnRuXCIgb25DbGljaz17ZGFya01vZGV9PjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9Nb2RlVG9nZ2xlPlxuXG4gICAgICAgICAgICB7ZGF0YS5pc0ZldGNoaW5nICYmIDxMb2FkZXIgLz59XG4gICAgICAgICAgICB7ZGF0YS5pc0FyY2hpdmUgJiYgc3RhdGUucm91dGVyLmxpbmsgPT09IFwiL1wiID8gPEhvbWUgLz4gOiBcbiAgICAgICAgICAgIGRhdGEuaXNBcmNoaXZlICYmIHN0YXRlLnJvdXRlci5saW5rICE9PSBcIi9cIiA/IFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtZ3JpZFwiPjxMaXN0IC8+PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICBcbiAgICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICAgIDxXZWJzaXRlcyB3aGVuPXtzdGF0ZS5yb3V0ZXIubGluayA9PT0gXCIvd2Vic2l0ZXMvXCJ9IC8+XG4gICAgICAgICAgICAgIDxDb250YWN0IHdoZW49e3N0YXRlLnJvdXRlci5saW5rID09PSBcIi9jb250YWN0L1wifSAvPlxuICAgICAgICAgICAgICA8UGFnZSB3aGVuPXtkYXRhLmlzUGFnZX0gLz5cbiAgICAgICAgICAgICAgPFBvc3Qgd2hlbj17ZGF0YS5pc1Bvc3R9IC8+XG4gICAgICAgICAgICAgIDxOb3RoaW5nRm91bmQgd2hlbj17ZGF0YS5pc0Vycm9yfSAvPlxuICAgICAgICAgICAgPC9Td2l0Y2g+XG5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmYi1yb290XCI+PC9kaXY+XG4gICAgICAgICAgPENhbnZhcyAvPiAgXG4gICAgICAgICAgPHNjcmlwdCB0eXBlPVwiXCIgc3JjPVwiaHR0cHM6Ly90aW0uZGV2b2NlYW5naC5jb20vbWVmZmVjdC5qc1wiPjwvc2NyaXB0PlxuXG4gICAgICAgIDwvbWFpbj4gXG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgZXhwb3J0IGRlZmF1bHQgY29ubmVjdChSb290KTtcblxuIFxuXG4gIGNvbnN0IE1vZGVUb2dnbGUgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMCAwIDFyZW0gMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gICAgZm9udC1mYW1pbHk6ICdETSBTYW5zJywgaGVsdmV0aWNhO1xuICAgICYgYnV0dG9uIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB3aWR0aDogMjVweDtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmM2YzZjM7XG4gICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCAxMnB4O1xuICAgIH1cbiAgICAmIGJ1dHRvbi5saWdodC1tb2RlLWJ0biB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCUgMCAwIDUwJTtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgfVxuICAgICYgYnV0dG9uLmRhcmstbW9kZS1idG4ge1xuICAgICAgYm9yZGVyLXJhZGl1czogMCA1MCUgNTAlIDA7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIH1cbiAgICAmIHNwYW4ge1xuICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgaGVsdmV0aWNhO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxMHB4O1xuICAgIH1cbiAgYCJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90aW0tdGhlbWUvc3JjL2NvbXBvbmVudHMvaW5kZXguanM/Y2U4OCJdLCJuYW1lcyI6WyJSb290Iiwic3RhdGUiLCJhY3Rpb25zIiwibW9kZSIsInRoZW1lIiwibGlnaHRNb2RlIiwiZGFya01vZGUiLCJoYW5kbGVEYXJrIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJzb3VyY2UiLCJnZXQiLCJyb3V0ZXIiLCJsaW5rIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJEYXJrbW9kZSIsIkFwcHN0eWxlcyIsImlzRmV0Y2hpbmciLCJpc0FyY2hpdmUiLCJpc1BhZ2UiLCJpc1Bvc3QiLCJpc0Vycm9yIiwiY29ubmVjdCIsIk1vZGVUb2dnbGUiLCJzdHlsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FSQW9CQSxLQUFNQSxLQUFJLENBQUcsQ0FBQyxDQUFFQyxLQUFGLENBQVNDLE9BQVQsQ0FBRCxHQUF3QixDQUVqQyxLQUFNLENBQUVDLElBQUYsRUFBV0YsS0FBSyxDQUFDRyxLQUF2QixDQUNBLEtBQU0sQ0FBRUMsU0FBRixDQUFhQyxRQUFiLEVBQTBCSixPQUFPLENBQUNFLEtBQXhDLENBRUEsS0FBTUcsV0FBVSxDQUFHLElBQU0sQ0FDdkJELFFBQVEsR0FDUkUsT0FBTyxDQUFDQyxHQUFSLENBQVlOLElBQVosRUFDRCxDQUhELENBS0EsS0FBTU8sS0FBSSxDQUFHVCxLQUFLLENBQUNVLE1BQU4sQ0FBYUMsR0FBYixDQUFpQlgsS0FBSyxDQUFDWSxNQUFOLENBQWFDLElBQTlCLENBQWIsQ0FDQUMsdURBQVMsQ0FBQyxJQUFNLENBQ2RiLE9BQU8sQ0FBQ1MsTUFBUixDQUFlSyxLQUFmLENBQXFCLFdBQXJCLEVBQ0QsQ0FGUSxDQUVOLENBQUNkLE9BQU8sQ0FBQ1MsTUFBVCxDQUZNLENBQVQsQ0FJQSxNQUNFLGlGQUFLLFNBQVMsQ0FBQyxNQUFmLFdBRUUseUVBQUMsNkNBQUQsWUFDSSw0R0FESixDQUVJLGdGQUFNLElBQUksQ0FBQyxhQUFYLENBQXlCLE9BQU8sQ0FBQyxnQkFBakMsRUFGSixDQUdJLGdGQUFNLEdBQUcsQ0FBQyxZQUFWLENBQXVCLElBQUksQ0FBQyw4QkFBNUIsRUFISixDQUlJLGdGQUFNLEdBQUcsQ0FBQyxZQUFWLENBQXVCLElBQUksQ0FBQywyQkFBNUIsQ0FBd0QsV0FBVyxLQUFuRSxFQUpKLENBS0ksZ0ZBQU0sSUFBSSxDQUFDLG9IQUFYLENBQWdJLEdBQUcsQ0FBQyxZQUFwSSxFQUxKLENBTUksZ0ZBQU0sR0FBRyxDQUFDLFlBQVYsQ0FBdUIsSUFBSSxDQUFDLGtIQUE1QixFQU5KLENBT0ksZ0ZBQU0sR0FBRyxDQUFDLFlBQVYsQ0FBdUIsSUFBSSxDQUFDLDBFQUE1QixFQVBKLEdBRkYsQ0FhSVIsSUFBSSxHQUFLLE1BQVQsQ0FDRix3RUFBQywrQ0FBRCxFQUFRLE1BQU0sQ0FBRWMscURBQWhCLEVBREUsQ0FFRix3RUFBQywrQ0FBRCxFQUFRLE1BQU0sQ0FBRUMsZ0RBQWhCLEVBZkYsQ0FpQkUsd0VBQUMsK0NBQUQsSUFqQkYsQ0FrQkUsK0VBQUssU0FBUyxDQUFDLFFBQWYsRUFsQkYsQ0FtQkUsMkZBQ0kseUVBQUMsVUFBRCxZQUNFLGlHQURGLFlBRUUsa0ZBQVEsU0FBUyxDQUFDLGdCQUFsQixDQUFtQyxPQUFPLENBQUViLFNBQTVDLEVBRkYsQ0FHRSxrRkFBUSxTQUFTLENBQUMsZUFBbEIsQ0FBa0MsT0FBTyxDQUFFQyxRQUEzQyxFQUhGLEdBREosQ0FPS0ksSUFBSSxDQUFDUyxVQUFMLEVBQW1CLHdFQUFDLG1EQUFELElBUHhCLENBUUtULElBQUksQ0FBQ1UsU0FBTCxFQUFrQm5CLEtBQUssQ0FBQ1ksTUFBTixDQUFhQyxJQUFiLEdBQXNCLEdBQXhDLENBQThDLHdFQUFDLDZDQUFELElBQTlDLENBQ0RKLElBQUksQ0FBQ1UsU0FBTCxFQUFrQm5CLEtBQUssQ0FBQ1ksTUFBTixDQUFhQyxJQUFiLEdBQXNCLEdBQXhDLENBQ0EsK0VBQUssU0FBUyxDQUFDLGdCQUFmLFVBQWdDLHdFQUFDLDZDQUFELElBQWhDLEVBREEsQ0FDaUQsSUFWckQsQ0FZSSx5RUFBQyxvRUFBRCxZQUNFLHdFQUFDLGtEQUFELEVBQVUsSUFBSSxDQUFFYixLQUFLLENBQUNZLE1BQU4sQ0FBYUMsSUFBYixHQUFzQixZQUF0QyxFQURGLENBRUUsd0VBQUMsaURBQUQsRUFBUyxJQUFJLENBQUViLEtBQUssQ0FBQ1ksTUFBTixDQUFhQyxJQUFiLEdBQXNCLFdBQXJDLEVBRkYsQ0FHRSx3RUFBQyw2Q0FBRCxFQUFNLElBQUksQ0FBRUosSUFBSSxDQUFDVyxNQUFqQixFQUhGLENBSUUsd0VBQUMsNkNBQUQsRUFBTSxJQUFJLENBQUVYLElBQUksQ0FBQ1ksTUFBakIsRUFKRixDQUtFLHdFQUFDLHNEQUFELEVBQWMsSUFBSSxDQUFFWixJQUFJLENBQUNhLE9BQXpCLEVBTEYsR0FaSixDQW9CSSwrRUFBSyxFQUFFLENBQUMsU0FBUixFQXBCSixDQXFCRSx3RUFBQyxnREFBRCxJQXJCRixDQXNCRSxrRkFBUSxJQUFJLENBQUMsRUFBYixDQUFnQixHQUFHLENBQUMsdUNBQXBCLEVBdEJGLEdBbkJGLENBNENFLHdFQUFDLCtDQUFELElBNUNGLEdBREYsQ0FnREQsQ0EvREgsQ0FpRWlCQyx1SEFBTyxDQUFDeEIsSUFBRCxDQUF0QixFQUlBLEtBQU15QixXQUFVLENBQUdDLHVEQUFILG9oTUFBaEIiLCJmaWxlIjoiLi9wYWNrYWdlcy90aW0tdGhlbWUvc3JjL2NvbXBvbmVudHMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBHbG9iYWwsIGNzcywgc3R5bGVkLCBIZWFkIH0gZnJvbSAnZnJvbnRpdHknO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vbGlzdFwiO1xuaW1wb3J0IFBvc3QgZnJvbSBcIi4vcG9zdFwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIi4vcGFnZVwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIjtcbmltcG9ydCBBcHBzdHlsZXMgZnJvbSAnLi4vQXBwLmNzcyc7XG5pbXBvcnQgRGFya21vZGUgZnJvbSAnLi4vRGFya21vZGUuY3NzJztcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5pbXBvcnQgV2Vic2l0ZXMgZnJvbSAnLi9XZWJzaXRlcyc7XG5pbXBvcnQgTm90aGluZ0ZvdW5kIGZyb20gJy4vTm90aGluZ0ZvdW5kJztcbmltcG9ydCBDb250YWN0IGZyb20gXCIuL0NvbnRhY3RcIjtcbmltcG9ydCBTd2l0Y2ggZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL3N3aXRjaFwiO1xuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9DYW52YXNcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4vbXktbG9hZGVyXCI7XG5cblxuXG5jb25zdCBSb290ID0gKHsgc3RhdGUsIGFjdGlvbnMgfSkgPT4ge1xuXG4gICAgY29uc3QgeyBtb2RlIH0gPSBzdGF0ZS50aGVtZTtcbiAgICBjb25zdCB7IGxpZ2h0TW9kZSwgZGFya01vZGUgfSA9IGFjdGlvbnMudGhlbWU7XG5cbiAgICBjb25zdCBoYW5kbGVEYXJrID0gKCkgPT4ge1xuICAgICAgZGFya01vZGUoKTtcbiAgICAgIGNvbnNvbGUubG9nKG1vZGUpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgYWN0aW9ucy5zb3VyY2UuZmV0Y2goXCIvd2Vic2l0ZXNcIik7XG4gICAgfSwgW2FjdGlvbnMuc291cmNlXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XG5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+VGltb3RoeSBBZ296aWU8L3RpdGxlPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRpbW90aHkgQWdvemllXCI+PC9tZXRhPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIGNyb3Nzb3JpZ2luIC8+XG4gICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ETStTYW5zOndnaHRANDAwOzUwMCZmYW1pbHk9UG9wcGluczp3Z2h0QDEwMDsyMDA7MzAwOzQwMDs1MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21hdGVyaWFsLWRlc2lnbi1pY29uaWMtZm9udC8yLjIuMC9jc3MvbWF0ZXJpYWwtZGVzaWduLWljb25pYy1mb250Lm1pbi5jc3NcIiAvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9hbmltYXRlLmNzcy80LjEuMS9hbmltYXRlLm1pbi5jc3NcIiAvPlxuICAgICAgICA8L0hlYWQ+XG5cblxuICAgICAgICB7IG1vZGUgPT09ICdkYXJrJyA/XG4gICAgICAgIDxHbG9iYWwgc3R5bGVzPXtEYXJrbW9kZX0gLz4gOlxuICAgICAgICA8R2xvYmFsIHN0eWxlcz17QXBwc3R5bGVzfSAvPiBcbiAgICAgICAgfVxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGFjZXInPjwvZGl2PlxuICAgICAgICA8bWFpbj4gXG4gICAgICAgICAgICA8TW9kZVRvZ2dsZT5cbiAgICAgICAgICAgICAgPHNwYW4+TU9ERTwvc3Bhbj4mbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsaWdodC1tb2RlLWJ0blwiIG9uQ2xpY2s9e2xpZ2h0TW9kZX0+PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGFyay1tb2RlLWJ0blwiIG9uQ2xpY2s9e2RhcmtNb2RlfT48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTW9kZVRvZ2dsZT5cblxuICAgICAgICAgICAge2RhdGEuaXNGZXRjaGluZyAmJiA8TG9hZGVyIC8+fVxuICAgICAgICAgICAge2RhdGEuaXNBcmNoaXZlICYmIHN0YXRlLnJvdXRlci5saW5rID09PSBcIi9cIiA/IDxIb21lIC8+IDogXG4gICAgICAgICAgICBkYXRhLmlzQXJjaGl2ZSAmJiBzdGF0ZS5yb3V0ZXIubGluayAhPT0gXCIvXCIgPyBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWdyaWRcIj48TGlzdCAvPjwvZGl2PiA6IG51bGx9XG4gICAgICAgICAgXG4gICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICA8V2Vic2l0ZXMgd2hlbj17c3RhdGUucm91dGVyLmxpbmsgPT09IFwiL3dlYnNpdGVzL1wifSAvPlxuICAgICAgICAgICAgICA8Q29udGFjdCB3aGVuPXtzdGF0ZS5yb3V0ZXIubGluayA9PT0gXCIvY29udGFjdC9cIn0gLz5cbiAgICAgICAgICAgICAgPFBhZ2Ugd2hlbj17ZGF0YS5pc1BhZ2V9IC8+XG4gICAgICAgICAgICAgIDxQb3N0IHdoZW49e2RhdGEuaXNQb3N0fSAvPlxuICAgICAgICAgICAgICA8Tm90aGluZ0ZvdW5kIHdoZW49e2RhdGEuaXNFcnJvcn0gLz5cbiAgICAgICAgICAgIDwvU3dpdGNoPlxuXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZmItcm9vdFwiPjwvZGl2PlxuICAgICAgICAgIDxDYW52YXMgLz4gIFxuICAgICAgICAgIDxzY3JpcHQgdHlwZT1cIlwiIHNyYz1cImh0dHBzOi8vdGltLmRldm9jZWFuZ2guY29tL21lZmZlY3QuanNcIj48L3NjcmlwdD5cblxuICAgICAgICA8L21haW4+IFxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUm9vdCk7XG5cbiBcblxuICBjb25zdCBNb2RlVG9nZ2xlID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDAgMCAxcmVtIDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICAgIGZvbnQtZmFtaWx5OiAnRE0gU2FucycsIGhlbHZldGljYTtcbiAgICAmIGJ1dHRvbiB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjNmM2YzO1xuICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggMTJweDtcbiAgICB9XG4gICAgJiBidXR0b24ubGlnaHQtbW9kZS1idG4ge1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlIDAgMCA1MCU7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIH1cbiAgICAmIGJ1dHRvbi5kYXJrLW1vZGUtYnRuIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgNTAlIDUwJSAwO1xuICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICB9XG4gICAgJiBzcGFuIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIGhlbHZldGljYTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcbiAgICB9XG4gIGAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/tim-theme/src/components/index.js\n");

/***/ })

})