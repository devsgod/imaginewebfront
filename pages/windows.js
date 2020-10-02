import React, { Component } from 'react';

import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Windows/Banner';
import WindowsFaqContent from '../components/Windows/WindowsFaqContent';
import StillHelp from '../components/Windows/StillHelp';
import Imagıne from "../components/Windows/imagine";
import Dash from "../components/Windows/Dash";
import ourimg1 from "../images/features/play.png"
import ourimg2 from "../images/features/dash.png"
import Our from "../components/Windows/Our"

import CtaCard from '../components/Saas/CtaCard';
import Benifits from '../components/Windows/benifits';
import Needassistance from '../components/Windows/Needassistance';
// import GalleryContent from '../components/Saas/GalleryContent'; 

class WindowsOne extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    
    componentDidMount(){        
    }
    
    render() {
        return (
            <React.Fragment >
                <Navbar />
                <Banner />
                <Imagıne></Imagıne>
                <Benifits></Benifits>
                <Dash></Dash>
                <Our
                title={"Digital Signage that helps you achieve your business goals"}
                img={ourimg1}
                img2={ourimg2}
                ></Our>
                <section className="faq-area">
			        <div className="container">
                        <WindowsFaqContent />
                    </div>
		        </section>
                <Needassistance></Needassistance>
                {/* <GalleryContent /> */}
                <CtaCard />
                <Footer />
            </React.Fragment>
        );
    }
}

export default WindowsOne;
