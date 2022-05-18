webpackHotUpdate("timothy-agozie-frontity",{

/***/ "./packages/tim-theme/src/components/index.js":
/*!****************************************************!*\
  !*** ./packages/tim-theme/src/components/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ \"./packages/tim-theme/src/components/list.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ \"./packages/tim-theme/src/components/post.js\");\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page */ \"./packages/tim-theme/src/components/page.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header */ \"./packages/tim-theme/src/components/Header.jsx\");\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Home */ \"./packages/tim-theme/src/components/Home.jsx\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../App.css */ \"./packages/tim-theme/src/App.css\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Footer */ \"./packages/tim-theme/src/components/Footer.jsx\");\n/* harmony import */ var _Websites__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Websites */ \"./packages/tim-theme/src/components/Websites.jsx\");\n/* harmony import */ var _NothingFound__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NothingFound */ \"./packages/tim-theme/src/components/NothingFound.jsx\");\n/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Contact */ \"./packages/tim-theme/src/components/Contact.jsx\");\n/* harmony import */ var _frontity_components_switch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @frontity/components/switch */ \"./node_modules/@frontity/components/switch.tsx\");\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Canvas */ \"./packages/tim-theme/src/components/Canvas.js\");\n/* harmony import */ var _my_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./my-loader */ \"./packages/tim-theme/src/components/my-loader.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./packages/tim-theme/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const Root=({state,actions})=>{const data=state.source.get(state.router.link);Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(()=>{actions.source.fetch(\"/websites\");},[actions.source]);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsxs\"])(\"div\",{className:\"page\",children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsxs\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(\"title\",{children:\"Timothy Agozie\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(\"meta\",{name:\"description\",content:\"Timothy Agozie\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(\"link\",{rel:\"preconnect\",href:\"https://fonts.googleapis.com\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(\"link\",{rel:\"preconnect\",href:\"https://fonts.gstatic.com\",crossorigin:true}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(\"link\",{href:\"https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Poppins:wght@100;200;300;400;500&display=swap\",rel:\"stylesheet\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(\"link\",{rel:\"stylesheet\",href:\"https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(\"link\",{rel:\"stylesheet\",href:\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css\"})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Global\"],{styles:_App_css__WEBPACK_IMPORTED_MODULE_7__[\"default\"]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(\"div\",{className:\"spacer\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsxs\"])(\"main\",{children:[data.isFetching&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(_my_loader__WEBPACK_IMPORTED_MODULE_14__[\"default\"],{}),data.isArchive&&state.router.link===\"/\"?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(_Home__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{}):data.isArchive&&state.router.link!==\"/\"?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(\"div\",{className:\"component-grid\",children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{})}):null,Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsxs\"])(_frontity_components_switch__WEBPACK_IMPORTED_MODULE_12__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(_Websites__WEBPACK_IMPORTED_MODULE_9__[\"default\"],{when:state.router.link===\"/websites/\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(_Contact__WEBPACK_IMPORTED_MODULE_11__[\"default\"],{when:state.router.link===\"/contact/\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{when:data.isPage}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(_post__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{when:data.isPost}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(_NothingFound__WEBPACK_IMPORTED_MODULE_10__[\"default\"],{when:data.isError})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(\"div\",{id:\"fb-root\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(_Canvas__WEBPACK_IMPORTED_MODULE_13__[\"default\"],{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(\"script\",{type:\"\",src:\"https://tim.devoceangh.com/meffect.js\"})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__[\"jsx\"])(_Footer__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Root));const Main=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"e1yj3nsk0\",label:\"Main\"})( false?undefined:{name:\"oqfd0q\",styles:\"max-width:1000px;padding:1.5em;margin:auto\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9USU0vRGVza3RvcC9ERVhUT1AvQ09ERSBQUk9KRUNUUy90aW1vdGh5LWFnb3ppZS13ZWJzaXRlL3BhY2thZ2VzL3RpbS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RXlCIiwiZmlsZSI6Ii9Vc2Vycy9USU0vRGVza3RvcC9ERVhUT1AvQ09ERSBQUk9KRUNUUy90aW1vdGh5LWFnb3ppZS13ZWJzaXRlL3BhY2thZ2VzL3RpbS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEdsb2JhbCwgY3NzLCBzdHlsZWQsIEhlYWQgfSBmcm9tICdmcm9udGl0eSc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9saXN0XCI7XG5pbXBvcnQgUG9zdCBmcm9tIFwiLi9wb3N0XCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwiLi9wYWdlXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xuaW1wb3J0IEFwcHN0eWxlcyBmcm9tICcuLi9BcHAuY3NzJztcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5pbXBvcnQgV2Vic2l0ZXMgZnJvbSAnLi9XZWJzaXRlcyc7XG5pbXBvcnQgTm90aGluZ0ZvdW5kIGZyb20gJy4vTm90aGluZ0ZvdW5kJztcbmltcG9ydCBDb250YWN0IGZyb20gXCIuL0NvbnRhY3RcIjtcbmltcG9ydCBTd2l0Y2ggZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL3N3aXRjaFwiO1xuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9DYW52YXNcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4vbXktbG9hZGVyXCI7XG5cblxuY29uc3QgUm9vdCA9ICh7IHN0YXRlLCBhY3Rpb25zIH0pID0+IHtcblxuICAgIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgYWN0aW9ucy5zb3VyY2UuZmV0Y2goXCIvd2Vic2l0ZXNcIik7XG4gICAgfSwgW2FjdGlvbnMuc291cmNlXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XG5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+VGltb3RoeSBBZ296aWU8L3RpdGxlPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRpbW90aHkgQWdvemllXCI+PC9tZXRhPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIGNyb3Nzb3JpZ2luIC8+XG4gICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ETStTYW5zOndnaHRANDAwOzUwMCZmYW1pbHk9UG9wcGluczp3Z2h0QDEwMDsyMDA7MzAwOzQwMDs1MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21hdGVyaWFsLWRlc2lnbi1pY29uaWMtZm9udC8yLjIuMC9jc3MvbWF0ZXJpYWwtZGVzaWduLWljb25pYy1mb250Lm1pbi5jc3NcIiAvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9hbmltYXRlLmNzcy80LjEuMS9hbmltYXRlLm1pbi5jc3NcIiAvPlxuICAgICAgICA8L0hlYWQ+XG5cblxuXG4gICAgICAgIDxHbG9iYWwgXG4gICAgICAgICAgICBzdHlsZXM9e0FwcHN0eWxlc31cbiAgICAgICAgLz5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BhY2VyJz48L2Rpdj5cbiAgICAgICAgPG1haW4+IFxuICAgICAgICAgICAge2RhdGEuaXNGZXRjaGluZyAmJiA8TG9hZGVyIC8+fVxuICAgICAgICAgICAge2RhdGEuaXNBcmNoaXZlICYmIHN0YXRlLnJvdXRlci5saW5rID09PSBcIi9cIiA/IDxIb21lIC8+IDogXG4gICAgICAgICAgICBkYXRhLmlzQXJjaGl2ZSAmJiBzdGF0ZS5yb3V0ZXIubGluayAhPT0gXCIvXCIgPyBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWdyaWRcIj48TGlzdCAvPjwvZGl2PiA6IG51bGx9XG4gICAgICAgICAgXG4gICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICA8V2Vic2l0ZXMgd2hlbj17c3RhdGUucm91dGVyLmxpbmsgPT09IFwiL3dlYnNpdGVzL1wifSAvPlxuICAgICAgICAgICAgICA8Q29udGFjdCB3aGVuPXtzdGF0ZS5yb3V0ZXIubGluayA9PT0gXCIvY29udGFjdC9cIn0gLz5cbiAgICAgICAgICAgICAgPFBhZ2Ugd2hlbj17ZGF0YS5pc1BhZ2V9IC8+XG4gICAgICAgICAgICAgIDxQb3N0IHdoZW49e2RhdGEuaXNQb3N0fSAvPlxuICAgICAgICAgICAgICA8Tm90aGluZ0ZvdW5kIHdoZW49e2RhdGEuaXNFcnJvcn0gLz5cbiAgICAgICAgICAgIDwvU3dpdGNoPlxuXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZmItcm9vdFwiPjwvZGl2PlxuICAgICAgICAgIDxDYW52YXMgLz4gIFxuICAgICAgICAgIDxzY3JpcHQgdHlwZT1cIlwiIHNyYz1cImh0dHBzOi8vdGltLmRldm9jZWFuZ2guY29tL21lZmZlY3QuanNcIj48L3NjcmlwdD5cblxuICAgICAgICA8L21haW4+IFxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUm9vdCk7XG5cbiBcblxuICBjb25zdCBNYWluID0gc3R5bGVkLmRpdmBcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICBwYWRkaW5nOiAxLjVlbTtcbiAgICBtYXJnaW46IGF1dG87XG4gIGAiXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90aW0tdGhlbWUvc3JjL2NvbXBvbmVudHMvaW5kZXguanM/Y2U4OCJdLCJuYW1lcyI6WyJSb290Iiwic3RhdGUiLCJhY3Rpb25zIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsIkFwcHN0eWxlcyIsImlzRmV0Y2hpbmciLCJpc0FyY2hpdmUiLCJpc1BhZ2UiLCJpc1Bvc3QiLCJpc0Vycm9yIiwiY29ubmVjdCIsIk1haW4iLCJzdHlsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cVJBa0JBLEtBQU1BLEtBQUksQ0FBRyxDQUFDLENBQUVDLEtBQUYsQ0FBU0MsT0FBVCxDQUFELEdBQXdCLENBRWpDLEtBQU1DLEtBQUksQ0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWFDLEdBQWIsQ0FBaUJKLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxJQUE5QixDQUFiLENBQ0FDLHVEQUFTLENBQUMsSUFBTSxDQUNkTixPQUFPLENBQUNFLE1BQVIsQ0FBZUssS0FBZixDQUFxQixXQUFyQixFQUNELENBRlEsQ0FFTixDQUFDUCxPQUFPLENBQUNFLE1BQVQsQ0FGTSxDQUFULENBSUEsTUFDRSxpRkFBSyxTQUFTLENBQUMsTUFBZixXQUVFLHlFQUFDLDZDQUFELFlBQ0ksNEdBREosQ0FFSSxnRkFBTSxJQUFJLENBQUMsYUFBWCxDQUF5QixPQUFPLENBQUMsZ0JBQWpDLEVBRkosQ0FHSSxnRkFBTSxHQUFHLENBQUMsWUFBVixDQUF1QixJQUFJLENBQUMsOEJBQTVCLEVBSEosQ0FJSSxnRkFBTSxHQUFHLENBQUMsWUFBVixDQUF1QixJQUFJLENBQUMsMkJBQTVCLENBQXdELFdBQVcsS0FBbkUsRUFKSixDQUtJLGdGQUFNLElBQUksQ0FBQyxvSEFBWCxDQUFnSSxHQUFHLENBQUMsWUFBcEksRUFMSixDQU1JLGdGQUFNLEdBQUcsQ0FBQyxZQUFWLENBQXVCLElBQUksQ0FBQyxrSEFBNUIsRUFOSixDQU9JLGdGQUFNLEdBQUcsQ0FBQyxZQUFWLENBQXVCLElBQUksQ0FBQywwRUFBNUIsRUFQSixHQUZGLENBY0Usd0VBQUMsK0NBQUQsRUFDSSxNQUFNLENBQUVNLGdEQURaLEVBZEYsQ0FpQkUsd0VBQUMsK0NBQUQsSUFqQkYsQ0FrQkUsK0VBQUssU0FBUyxDQUFDLFFBQWYsRUFsQkYsQ0FtQkUsMkZBQ0tQLElBQUksQ0FBQ1EsVUFBTCxFQUFtQix3RUFBQyxtREFBRCxJQUR4QixDQUVLUixJQUFJLENBQUNTLFNBQUwsRUFBa0JYLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxJQUFiLEdBQXNCLEdBQXhDLENBQThDLHdFQUFDLDZDQUFELElBQTlDLENBQ0RKLElBQUksQ0FBQ1MsU0FBTCxFQUFrQlgsS0FBSyxDQUFDSyxNQUFOLENBQWFDLElBQWIsR0FBc0IsR0FBeEMsQ0FDQSwrRUFBSyxTQUFTLENBQUMsZ0JBQWYsVUFBZ0Msd0VBQUMsNkNBQUQsSUFBaEMsRUFEQSxDQUNpRCxJQUpyRCxDQU1JLHlFQUFDLG9FQUFELFlBQ0Usd0VBQUMsaURBQUQsRUFBVSxJQUFJLENBQUVOLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxJQUFiLEdBQXNCLFlBQXRDLEVBREYsQ0FFRSx3RUFBQyxpREFBRCxFQUFTLElBQUksQ0FBRU4sS0FBSyxDQUFDSyxNQUFOLENBQWFDLElBQWIsR0FBc0IsV0FBckMsRUFGRixDQUdFLHdFQUFDLDZDQUFELEVBQU0sSUFBSSxDQUFFSixJQUFJLENBQUNVLE1BQWpCLEVBSEYsQ0FJRSx3RUFBQyw2Q0FBRCxFQUFNLElBQUksQ0FBRVYsSUFBSSxDQUFDVyxNQUFqQixFQUpGLENBS0Usd0VBQUMsc0RBQUQsRUFBYyxJQUFJLENBQUVYLElBQUksQ0FBQ1ksT0FBekIsRUFMRixHQU5KLENBY0ksK0VBQUssRUFBRSxDQUFDLFNBQVIsRUFkSixDQWVFLHdFQUFDLGdEQUFELElBZkYsQ0FnQkUsa0ZBQVEsSUFBSSxDQUFDLEVBQWIsQ0FBZ0IsR0FBRyxDQUFDLHVDQUFwQixFQWhCRixHQW5CRixDQXNDRSx3RUFBQywrQ0FBRCxJQXRDRixHQURGLENBMENELENBakRILENBbURpQkMsdUhBQU8sQ0FBQ2hCLElBQUQsQ0FBdEIsRUFJQSxLQUFNaUIsS0FBSSxDQUFHQyx1REFBSCxvcUlBQVYiLCJmaWxlIjoiLi9wYWNrYWdlcy90aW0tdGhlbWUvc3JjL2NvbXBvbmVudHMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBHbG9iYWwsIGNzcywgc3R5bGVkLCBIZWFkIH0gZnJvbSAnZnJvbnRpdHknO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vbGlzdFwiO1xuaW1wb3J0IFBvc3QgZnJvbSBcIi4vcG9zdFwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIi4vcGFnZVwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIjtcbmltcG9ydCBBcHBzdHlsZXMgZnJvbSAnLi4vQXBwLmNzcyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuaW1wb3J0IFdlYnNpdGVzIGZyb20gJy4vV2Vic2l0ZXMnO1xuaW1wb3J0IE5vdGhpbmdGb3VuZCBmcm9tICcuL05vdGhpbmdGb3VuZCc7XG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi9Db250YWN0XCI7XG5pbXBvcnQgU3dpdGNoIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9zd2l0Y2hcIjtcbmltcG9ydCBDYW52YXMgZnJvbSBcIi4vQ2FudmFzXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuL215LWxvYWRlclwiO1xuXG5cbmNvbnN0IFJvb3QgPSAoeyBzdGF0ZSwgYWN0aW9ucyB9KSA9PiB7XG5cbiAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGFjdGlvbnMuc291cmNlLmZldGNoKFwiL3dlYnNpdGVzXCIpO1xuICAgIH0sIFthY3Rpb25zLnNvdXJjZV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxuXG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPlRpbW90aHkgQWdvemllPC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJUaW1vdGh5IEFnb3ppZVwiPjwvbWV0YT5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiBjcm9zc29yaWdpbiAvPlxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RE0rU2Fuczp3Z2h0QDQwMDs1MDAmZmFtaWx5PVBvcHBpbnM6d2dodEAxMDA7MjAwOzMwMDs0MDA7NTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tYXRlcmlhbC1kZXNpZ24taWNvbmljLWZvbnQvMi4yLjAvY3NzL21hdGVyaWFsLWRlc2lnbi1pY29uaWMtZm9udC5taW4uY3NzXCIgLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW5pbWF0ZS5jc3MvNC4xLjEvYW5pbWF0ZS5taW4uY3NzXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuXG5cblxuICAgICAgICA8R2xvYmFsIFxuICAgICAgICAgICAgc3R5bGVzPXtBcHBzdHlsZXN9XG4gICAgICAgIC8+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NwYWNlcic+PC9kaXY+XG4gICAgICAgIDxtYWluPiBcbiAgICAgICAgICAgIHtkYXRhLmlzRmV0Y2hpbmcgJiYgPExvYWRlciAvPn1cbiAgICAgICAgICAgIHtkYXRhLmlzQXJjaGl2ZSAmJiBzdGF0ZS5yb3V0ZXIubGluayA9PT0gXCIvXCIgPyA8SG9tZSAvPiA6IFxuICAgICAgICAgICAgZGF0YS5pc0FyY2hpdmUgJiYgc3RhdGUucm91dGVyLmxpbmsgIT09IFwiL1wiID8gXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1ncmlkXCI+PExpc3QgLz48L2Rpdj4gOiBudWxsfVxuICAgICAgICAgIFxuICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgPFdlYnNpdGVzIHdoZW49e3N0YXRlLnJvdXRlci5saW5rID09PSBcIi93ZWJzaXRlcy9cIn0gLz5cbiAgICAgICAgICAgICAgPENvbnRhY3Qgd2hlbj17c3RhdGUucm91dGVyLmxpbmsgPT09IFwiL2NvbnRhY3QvXCJ9IC8+XG4gICAgICAgICAgICAgIDxQYWdlIHdoZW49e2RhdGEuaXNQYWdlfSAvPlxuICAgICAgICAgICAgICA8UG9zdCB3aGVuPXtkYXRhLmlzUG9zdH0gLz5cbiAgICAgICAgICAgICAgPE5vdGhpbmdGb3VuZCB3aGVuPXtkYXRhLmlzRXJyb3J9IC8+XG4gICAgICAgICAgICA8L1N3aXRjaD5cblxuICAgICAgICAgICAgPGRpdiBpZD1cImZiLXJvb3RcIj48L2Rpdj5cbiAgICAgICAgICA8Q2FudmFzIC8+ICBcbiAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJcIiBzcmM9XCJodHRwczovL3RpbS5kZXZvY2VhbmdoLmNvbS9tZWZmZWN0LmpzXCI+PC9zY3JpcHQ+XG5cbiAgICAgICAgPC9tYWluPiBcbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBleHBvcnQgZGVmYXVsdCBjb25uZWN0KFJvb3QpO1xuXG4gXG5cbiAgY29uc3QgTWFpbiA9IHN0eWxlZC5kaXZgXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgcGFkZGluZzogMS41ZW07XG4gICAgbWFyZ2luOiBhdXRvO1xuICBgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/tim-theme/src/components/index.js\n");

/***/ }),

/***/ "./packages/tim-theme/src/components/loading.js":
false

})