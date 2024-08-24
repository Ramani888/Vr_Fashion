import React, { Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Instafeeds from '../layouts/Instafeeds';
import Footer from '../layouts/Footerthree';
import Content from '../sections/shopleft/Content';

const Shopleft = () => {
    return (
        <Fragment>
            <MetaTags>
                <title>Laramiss | Shop Left</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header />
            <Breadcrumb breadcrumb={{ pagename: 'Shop Left' }} />
            <Content />
            <Instafeeds />
            <Footer />
        </Fragment>
    );
}

export default Shopleft;
