import React, { Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Instafeeds from '../layouts/Instafeeds';
import Footer from '../layouts/Footerthree';
import Content from '../sections/shopdetail/Content';

const Shopdetail = () => {
    return (
        <Fragment>
            <MetaTags>
                <title>Laramiss | Shop Detail</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header/>
            <Breadcrumb breadcrumb={{ pagename: 'Shop Detail' }}/>
            <Content/>
            <Instafeeds/>
            <Footer/>
        </Fragment>
    );
};

export default Shopdetail;
