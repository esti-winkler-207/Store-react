export function AddProduct(newPro){
    return {type:'ADD_PRODUCT',payLoad:newPro};
}
export function AddProductToCart(newPro){
    return {type:'ADD_PRODUCT_TO_CART',payLoad:newPro}
}
export function updateAmountPlus(index){
    
    return {type:'UPDATE_AMOUNT_PLUS',payLoad:index}
}
export function updateAmountMinus(index){
    
    return {type:'UPDATE_AMOUNT_MINUS',payLoad:index}
}

export function deleteProduct(index){
    
    return {type:'DELETE_PRODUCT',payLoad:index}
}
 

