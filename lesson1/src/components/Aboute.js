
import React, { useState } from "react";
import '../App.css'

function History() {
  
    return (
        <div className="end ProductCard">
            <h1>history of the store</h1>
            החנות הוקמה בשנת 2000 ועברה נדודים רבים
            עד שהגענו אל המנוחה והנחלה
        </div>
    )
}

function Reasons() {
    return (
        <div className="end ProductCard">
            <h1>Our Reasons to open the store</h1>
            הקמנו את החנות כי לא היה לנו לחם לאכול
            וברוך ה' היום כבר יש
           ובשפע
        </div>
    )
}

function Status() {
    return (
        <div className="end ProductCard">
            <h1>Store's status- today</h1>
            היום החנות גדולה ומרווחת ומניבה הרבה מאוד כספים
        </div>
    )
}

function FatherAboute(props) {
    const [nameStore, setNameStore] = useState('E&E');
    const [currentPage, SetCurrentPage] = useState(0);
    const numberuOfPage = React.Children.count(props.children)
    console.log(numberuOfPage);
    function pageComponent(pageIndex) {
        //const allChildrenProps = { nameStore, setNameStore };
        const Child = React.Children.toArray(props.children)[pageIndex];
        const res = React.cloneElement(Child,null, null);
        return res;
    }
    function components(){
        const bla=React.Children.map(props.children,child=>{
            return React.cloneElement(child,null,null)
        })
        return bla;
    }


    return (
        <div>
            
            <button style={{marginLeft:1+'vw'}} className="btn-add1" disabled={currentPage >= numberuOfPage-1} onClick={() => SetCurrentPage(v => v + 1)}>{"<"}</button>
            {pageComponent(currentPage)}
            <button style={{marginLeft:22+'vw'}} className="btn-add1" disabled={currentPage === 0} onClick={(e) => SetCurrentPage(v => v - 1)}>{">"}</button>
            {/* {components()} */}
        </div>
    )
}
export default { History, FatherAboute, Status, Reasons }