import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import '../App.css'
import {Link, Redirect} from 'react-router-dom'
import {updateAmountPlus,updateAmountMinus,deleteProduct} from './action'


function mapStateToProps(state){
    return {ShoppingCart:state.shopping_cart}
}



export default connect(mapStateToProps)(function PaymentPage(props){

    useEffect(function  areYouSure(){
       console.log("hi")
    });

    console.log(props.ShoppingCart)
    const {store,dispatch}=props;
    //const List=store.ShoppingCart;
    function setAmountPlus(index){

       return dispatch(updateAmountPlus(index)) 

    }
    function setAmountMinus(index){
        return dispatch(updateAmountMinus(index))

    }
    function DeleteAmount(index){
        return dispatch(deleteProduct(index))
    }

    return (<div className="component">
      <ul>
          {props.ShoppingCart.map((item,index)=>{return <div style={{height:200}} className="ProductCard" key={index}>{item.name}{' '} {item.price +"$"}{' '}amount: {item.amount}<br></br>
          <button className="btn-add" id="plus"  onClick={()=>setAmountPlus(index)}>add amount</button>
          <button className="btn-add" id="minus" disabled={item.amount<=1} onClick={()=>setAmountMinus(index)}>minus amount</button>
          <button className="btn-add" id="delete" onClick={()=>{DeleteAmount(index)}}>DeleteProduct</button>

          </div>})}
     </ul> 
    <button  className="btn-add"><Link to='EndPage'> End Page</Link></button>
    </div>)
  });

