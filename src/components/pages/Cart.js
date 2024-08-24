import React, { Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Instafeeds from '../layouts/Instafeeds';
import Footer from '../layouts/Footerthree';
import Content from '../sections/cart/Content';

const Cart = () => {
    return (
        <Fragment>
            <MetaTags>
                <title>Laramiss | Cart</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header/>
            <Breadcrumb breadcrumb={{pagename:'Cart'}}/>
            <Content/>
            <Instafeeds/>
            <Footer/>
        </Fragment>
    );
}

export default Cart;
