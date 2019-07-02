import React from 'react';
// import logo from './logo.svg';
import LoginStatus from './LoginStatus'
import ShopCart from './ShopCart'
import ExampleMobx from './exampleMobx/index'
import examplebase from './examplebase/index'
import ExampleDeBounce from './ExampleDeBounce/index'
// import WithLogin from './WithLogin'
import './App.css';


// const WithLoginStatus = WithLogin(LoginStatus)
// const WithShopCart = WithLogin(ShopCart)
function App() {
  return (
    // <React.Fragment>
    <>
    <LoginStatus></LoginStatus>
    <ShopCart></ShopCart>
    <ExampleMobx></ExampleMobx>
    <ExampleDeBounce></ExampleDeBounce>
    {/* <WithLoginStatus></WithLoginStatus>
    <WithShopCart a="1" b="2"></WithShopCart> */}
    </>
    // </React.Fragment>
)
}

export default App;
