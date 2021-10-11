import React from 'react';
import produce from 'immer'
import {createStore} from 'redux'

const initinalState={
    // Grade:5,
    // pupils:[
    //     {name:'aviva',id:0},
    //     {name:'chana',id:1},
    //     {name:'sara',id:2}
    // ],
    // teacher:{name:'chava',id:0}
    
    products:[
        {name:'bread',price:10,image:'image1'},
        {name:'cheese',price:11,image:'image2'},
        {name:'drink',price:12,image:'image3'},
        {name:'milk',price:6,image:'image4'},
        {name:'chicken',price:17,image:'image5'},
        {name:'coffee',price:16,image:'image6'},
        {name:'yellow-cheese',price:30,image:'image7'},
        {name:'cola',price:20,image:'image8'},
        // {name:'chocolate',price:6},
        // {name:'butter',price:15},
        // {name:'bread',price:10,},
        // {name:'cheese',price:11},
        // {name:'drink',price:12},
        // {name:'milk',price:6},
        // {name:'chicken',price:17},
        // {name:'coffee',price:16,},
        // {name:'yellow-cheese',price:30},
        // {name:'cola',price:20},
        // {name:'chocolate',price:6},
        // {name:'butter',price:15},
        
       
    ],
    shopping_cart:[
        

    ]
}



const reducer=produce((state,action)=>{
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            {state.shopping_cart.push(action.payLoad)}
            break
        case 'GET_PRODUCTS':
            // <ul>
            //     {pupils.map(item => {
            //         return <li key={item.id}> name={item.name} </li>
            //     })}
            // </ul>
            {state.products.map(item=>{})}
            break;    
        case 'ADD_PRODUCT':
            {state.products.push(action.payLoad)}
            break;
        case 'UPDATE_AMOUNT_PLUS':
            {state.shopping_cart[action.payLoad].amount+=1}
            break;
            case 'UPDATE_AMOUNT_MINUS':
                {state.shopping_cart[action.payLoad].amount-=1}
                break;  
                case 'DELETE_PRODUCT':
                    {state.shopping_cart.splice(action.payLoad,1)}
    
                    break;        
        default:
            break;
    }

},initinalState)

const store=createStore(reducer);
window.store=store;
export default store;