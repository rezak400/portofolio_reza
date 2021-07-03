// import React, { Component } from 'react'
// import Head from "next/head"

// export default class Layout extends Component {
//     componentDidMount() {
//         if (typeof window !== 'undefined') {

//             window.WOW = require('wowjs');

//         }

//         new WOW.WOW().init();
//     }
//     render() {
//         return (
//             <div className="font-secondary">
//                 <Head>
//                     <title>{`Reza Portofolio - ${this.props.title}`}</title>
//                     <link rel="shortcut icon" href="/profile.png" />
//                     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css" />
//                 </Head>
//                 {this.props.children}
//             </div>
//         )
//     }
// }

import React, { useEffect } from "react";
import Head from "next/head";

const Layout = (props) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }

    new WOW.WOW().init();
  }, []);

  return (
    <div className="font-secondary">
      <Head>
        <title>{`Reza Portofolio - ${props.title}`}</title>
        <link rel="shortcut icon" href="/profile.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
        />
        <meta name="description" content="Moeslim Programmer Wannabe" />
        <meta name="author" content="Reza Dwiputra" />
      </Head>
      {props.children}
    </div>
  );
};

export default Layout;
