import React, { Component } from 'react';

import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Windows/Banner';
import WindowsFaqContent from '../components/Windows/WindowsFaqContent';
import StillHelp from '../components/Windows/StillHelp';
import Imagıne from "../components/Windows/imagine";
import Dash from "../components/Windows/Dash";

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
