import React, { Fragment, useEffect } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Instafeeds from '../layouts/Instafeeds';
import Footer from '../layouts/Footerthree';
import Content from '../sections/faq/Content';

const Faq = () => {
    useEffect(() => {
        document.title = "Laramiss | FAQ's";
        // Optionally set meta tags dynamically if needed
    }, []);

    return (
        <Fragment>
            <MetaTags>
                <title>Laramiss | FAQ's</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header/>
            <Breadcrumb breadcrumb={{pagename:"FAQ's"}}/>
            <Content/>
            <Instafeeds/>
            <Footer/>
        </Fragment>
    );
}

export default Faq;
