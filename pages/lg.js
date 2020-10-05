import React, { Component } from 'react';

import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Lg/Banner';
import LgFaqContent from '../components/Lg/LgFaqContent';
import StillHelp from '../components/Lg/StillHelp';
import Imagıne from "../components/Lg/imagine";
import Dash from "../components/Lg/Dash";

import CtaCard from '../components/Saas/CtaCard';
import Benifits from '../components/Lg/benifits';
import Needassistance from '../components/Lg/Needassistance';
// import GalleryContent from '../components/Saas/GalleryContent'; 

class LgOne extends Component {

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
                        <LgFaqContent />
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

export default LgOne;
