import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'layui-src/dist/css/layui.css';
import './sass/ImgRoute.scss';
import './sass/main.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Head from './Header/Head';
import Foot from './Footer/Foot';
import SaleHome from './Content/SaleHome/SaleHome';
import * as serviceWorker from './serviceWorker';


const Body = () => (
    <div>
        <Head />
        <Route path="/" component={SaleHome} />
        <Foot />
    </div>
);
class Main extends Component {
    render() {
        return (
            <Router>
                <Route path="/ecommerce" component={Body} />
            </Router>
        );
    }
};



ReactDOM.render(<Main />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();