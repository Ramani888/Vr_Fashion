import React, { Fragment, useEffect } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Instafeeds from '../layouts/Instafeeds';
import Footer from '../layouts/Footerthree';
import Content from '../sections/contact/Content';

const Contact = () => {
    useEffect(() => {
        // Effect code here (if any)
        return () => {
            // Cleanup code here (if any)
        };
    }, []); // Empty dependency array means this effect runs once after initial render

    return (
        <Fragment>
            <MetaTags>
                <title>Laramiss | Contact Us</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header/>
            <Breadcrumb breadcrumb={{pagename:'Contact Us'}}/>
            <Content/>
            <Instafeeds/>
            <Footer/>
        </Fragment>
    );
};

export default Contact;
