import React, { Component } from 'react';
import Banner from '../components/Overviews/Banner';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Our from "../components/Overviews/Our";
import Benifits from '../components/Overviews/benifits';

import ourimg1 from "../images/features/play.png"
import ourimg2 from "../images/features/dash.png"

import Htext from "../components/Overviews/yazı";
import Bar from "../components/Overviews/Bar";
import CtaCard from '../components/Saas/CtaCard';

import GalleryContent from '../components/Saas/GalleryContent';
import Cards from "../components/Overviews/Cardsforfetaure";

class Overviews extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <Bar title={"The Necessities To Your Success"}></Bar>
                <Cards></Cards>
                <Benifits></Benifits>
                <Our
                title={"Getting to know the platform"}
                pp={"Understanding how it all works and as well as the benefits it brings."}
                header1={"Dashboard"}
                header2={"Player"}
                content1={"A WYSIWYG (What you see is what you get) application which is accessible from any PC. The interface enables complete control over your screens and content displayed.                "}
                content2={"Installed onto the hardware and wirelessly linked to the dashboard. The Imagine player displays your content perfectly, restarts on a reboot and continues to play content with or without internet connection. Multiple OS versions available."}
                img={ourimg1}
                img2={ourimg2}
                ></Our>
                
             <div className="features-area">
                <Htext></Htext>
             </div>
                <CtaCard />
                {/* <GalleryContent />                */}
                <Footer />
            </React.Fragment>
        );
    }
}

export default Overviews;
