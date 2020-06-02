import React, { Component } from 'react';

import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Paper from "../components/Pricing/paper"
import Make from "../components/Pricing/make"
import Banner from '../components/Pricing/Banner';
import PricingPlan from '../components/Pricing/PricingPlan';
import PricingFaqContent from '../components/Pricing/PricingFaqContent';
import StillHelp from '../components/Pricing/StillHelp';

import CtaCard from '../components/Saas/CtaCard';
// import GalleryContent from '../components/Saas/GalleryContent';

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

class PricingOne extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount(){
        const link_route = window.location.href;
        var url = new URL(link_route);
        var type = url.searchParams.get("name");
        if (type == 'faq'){
            var self = this;
            setTimeout(function(){             
                window.scrollTo(0, self.myRef.current.offsetTop);
            }, 1000);
        }
    }
    
    scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)   

    render() {
        return (
            <React.Fragment >
                <Navbar />
                <Banner />
                <PricingPlan />
                <hr />
                <Paper></Paper>
                <Make></Make>
                <section ref={this.myRef} className="faq-area ptb-100">
			        <div className="container">
                        <PricingFaqContent />
                    </div>
		        </section>

                <StillHelp />
                {/* <GalleryContent /> */}
                <CtaCard />
                <Footer />
            </React.Fragment>
        );
    }
}

export default PricingOne;
