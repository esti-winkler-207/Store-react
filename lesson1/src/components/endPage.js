import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import '../App.css'
import { Link, Redirect } from 'react-router-dom'

function MapStateToProps(state) {
    return {
        ShoppingCart: state.shopping_cart
    }
}

export default connect(MapStateToProps)(function EndPage(props) {
    // console.log(props.ShoppingCart,"גכעהי")
    const [sum, setSum] = useState(0)
    useEffect(
        function SumPayment() {

            let sum = 0;
            props.ShoppingCart.map((item) => { sum += item.price * item.amount })

            return setSum(sum);

        }
        , [])

    const { shopping_cart, dispatch } = props;



    return (
        <>
        <div style={{paddingRight:2.5+'vw'}} className="end1  ProductCard">
            <ul>
                {props.ShoppingCart.map((item, index) => {
                    return <div key={index}>{item.name}{' '}
                        {item.price + '$'}{' amount: '}
                        {item.amount}{' '}
                    </div>
                })} <h2>{"your cost is: " + sum+"$"}</h2>
                <h3 style={{color:'purple'}}>{"thank you for your shopping, we hope to see you more..."}</h3>
            </ul>
           
        </div>
        </>
    )
})