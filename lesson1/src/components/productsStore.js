import React, { useEffect, useRef, useState } from 'react'
import {connect} from 'react-redux'
import '../App.css';
import {AddProductToCart} from './action'
import PaymentPage from './PaymentPage';
import {Link, Redirect} from 'react-router-dom'

function mapStateToProps(state){
    return {Products:state.products,Shopping_cart:state.shopping_cart};
}

export default  connect(mapStateToProps)( function GetAllProduct(props){
   const dispatch=props.dispatch;
   const p=props.Products;
   const s=props.Shopping_cart;
   const [productsToCart,setproductsToCart]=useState(s)
    const [areyousure,setareyousure]=useState(false);
    const [thisProduct,setthisProduct]=useState({name:'',price:''});
    const [sure,setSure]=useState(null)
    const [style,setStyle]=useState({display:'none',textAlign:'center'});
    const [styleAreYouSure,setstyleAreYouSure]=useState({display:'none',textAlign:'center'})
   useEffect(()=>{ return function LeaveTHeConponent(){
      
      //setSure( prompt("Are you sure that you want to pass to the payment page?","yes"))
     setstyleAreYouSure({display:'block',textAlign:'center'})

   }},[areyousure])
if(sure) return <Redirect to="/PaymentPage"></Redirect>

   function addProductToShoppingCart(it){
            
    //   console.log(it);
    //   setproduct(it);
    //   return dispatch(AddProductToCart(product));
    // setproducts(products.push(it))

     dispatch(AddProductToCart({name:it.name,price:it.price,amount:1}));
     console.log(s);
    setproductsToCart(s);
    console.log(productsToCart);
  }
function openProduct(item){
setthisProduct(item)
setStyle({display:'block',textAlign:'center'})


}



   return (<div className="component">
   <ul >
       {p.map((item,index)=>{return <div  onClick={()=>{openProduct(item)}} className="ProductCard" key={index} value={item}>{item.name} {item.price+"$"}<br></br>
       {/* <img src={"../images/image1"}></img><br></br> */}
       <button className="btn-add"  onClick={()=>{addProductToShoppingCart(item)}}>add to cart</button>
       </div>})}
   </ul>

   <div className="POPUP" style={style} > <button style={{textAlign:'end'}} className="close"  onClick={()=>setStyle({display:'none'})}>x</button> <br></br>{thisProduct.name} {' '} {thisProduct.price +'$'}
   
  
   </div>
    {/* <button onClick={GoToPaymentPage}>to Payment Page</button> */}
    <button className="btn-to-payment" onClick={()=>setareyousure(true)}  > to Payment Page </button>
   <div style={{backgroundColor:'rgb(224, 195, 250) !important'}} style={styleAreYouSure} className="POPUP">{"Are you sure you want to go to payment page?"}
   <br></br>
   <button style={{color:'green'}} className="btn-add" onClick={()=>{setSure(true)}}>{'yes'}</button>
   <button style={{color:'red'}} className="btn-add" onClick={()=>{setstyleAreYouSure({display:'none',textAlign:'center'})}}>{'no'}</button></div>
   </div>

  )

})