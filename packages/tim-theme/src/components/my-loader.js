import { styled, keyframes, Global, css } from "frontity";



const Loader = () => (
<div className="my-loader">
<div className="lds-ripple">

<Global 
    styles={css`

  .my-loader {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 900px;
    height: 400px;
    position: absolute;
    opacity: 0.5;
    z-index: 10;
  }  


  .lds-ripple {
  display: block;
  position: absolute;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #505050;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
`}
/>

  <div></div>
  <div></div>
</div>
</div>
);

export default Loader;