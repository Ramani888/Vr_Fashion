import React, { Fragment, useEffect } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Instafeeds from '../layouts/Instafeeds';
import Footer from '../layouts/Footerthree';
import Content from '../sections/login/Content';

const Login = () => {
    useEffect(() => {
        document.title = "Laramiss | Login";
        // You can add more side effects here if needed
        return () => {
            // Clean up any side effects if necessary
        };
    }, []);

    return (
        <Fragment>
            <MetaTags>
                <title>Laramiss | Login</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header/>
            <Breadcrumb breadcrumb={{pagename:'Login'}}/>
            <Content/>
            <Instafeeds/>
            <Footer/>
        </Fragment>
    );
};

export default Login;
