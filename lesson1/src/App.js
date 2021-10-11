import logo from './logo.svg';
import './App.css';



import store from './components/store';
import { Provider } from 'react-redux'
//import ShowGrade from './components/ShowGrade';
import GetAllProduct from './components/productsStore';
import LayoutP from './components/Aboute';

import PaymentPage from './components/PaymentPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Menu from './components/menu'
import EndPage from './components/endPage'

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Menu path="/"></Menu>

          {/* <ShowGrade></ShowGrade>  */}



          <Switch>
            <Route path="/PaymentPage">
              <PaymentPage />
            </Route>
            <Route path="/ProductStore">
              <GetAllProduct />
            </Route>
            <Route path='/EndPage'>
              <EndPage />
            </Route>
            <Route path='/About'>
              <LayoutP.FatherAboute>
                <LayoutP.History/>
                {/* </LayoutP.History> */}
                <LayoutP.Status/>
                {/* </LayoutP.Status> */}
                <LayoutP.Reasons/>
                {/* </LayoutP.Reasons> */}
              </LayoutP.FatherAboute>
            </Route>

            {/* <Route path="/">
               <GetAllProduct/>
             </Route> */}
          </Switch>
        </Router>
        {/* <GetAllProduct></GetAllProduct> */}
        {/* <PaymentPage></PaymentPage> */}
      </Provider>



      {/* <LayoutP.FatherAboute>
        <LayoutP.History></LayoutP.History>
        <LayoutP.Status></LayoutP.Status>
        <LayoutP.Reasons></LayoutP.Reasons>
      </LayoutP.FatherAboute> */}
      {/* <Xo></Xo>
      <Guessmeparent></Guessmeparent>
      <Personclass ></Personclass> */}
      {/* <Ref></Ref> */}
      {/* <SelectCountryAndCity></SelectCountryAndCity> */}
      {/* <Layout>
        <Page1></Page1>
      </Layout>
      <Layout>
        <Page2></Page2>
      </Layout> */}
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
