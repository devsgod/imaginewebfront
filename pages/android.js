import React, { Component } from 'react';

import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Android/Banner';
import AndroidFaqContent from '../components/Android/AndroidFaqContent';
import StillHelp from '../components/Android/StillHelp';
import Imagıne from "../components/Android/imagine";
import Dash from "../components/Android/Dash";

import CtaCard from '../components/Saas/CtaCard';
import Benifits from '../components/Android/benifits';
import Needassistance from '../components/Android/Needassistance';
// import GalleryContent from '../components/Saas/GalleryContent'; 

class AndroidOne extends Component {

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
                        <AndroidFaqContent />
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

export default AndroidOne;
