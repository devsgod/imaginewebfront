import React, { Component } from 'react';

import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Linux/Banner';
import LinuxFaqContent from '../components/Linux/LinuxFaqContent';
import StillHelp from '../components/Linux/StillHelp';
import Imagıne from "../components/Linux/imagine";
import Dash from "../components/Linux/Dash";

import CtaCard from '../components/Saas/CtaCard';
import Benifits from '../components/Linux/benifits';
import Needassistance from '../components/Linux/Needassistance';
// import GalleryContent from '../components/Saas/GalleryContent'; 

class LinuxOne extends Component {

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
                <section className="faq-area">
			        <div className="container">
                        <LinuxFaqContent />
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

export default LinuxOne;
