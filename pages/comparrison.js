import React, { Component } from 'react';

import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Comparrison/Banner';
import ComparrisonFaqContent from '../components/Comparrison/ComparrisonFaqContent';
import StillHelp from '../components/Comparrison/StillHelp';
import Imagıne from "../components/Comparrison/imagine";
import Dash from "../components/Comparrison/Dash";

import CtaCard from '../components/Saas/CtaCard';
import Benifits from '../components/Comparrison/benifits';
import Needassistance from '../components/Comparrison/Needassistance';
// import GalleryContent from '../components/Saas/GalleryContent'; 

class ComparrisonOne extends Component {

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
                        <ComparrisonFaqContent />
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

export default ComparrisonOne;
