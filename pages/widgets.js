import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import WidgetBanner from '../components/Widget/WidgetBanner';
import WidgetContent from '../components/Widget/WidgetContent';
import Tel from "../components/Widget/television"
import Paper from "../components/Widget/paper"
import Title from "../components/titlecomponent/titlecomponent"
import Bar from "../components/Features/Bar"
import Cards from "../components/Widget/newCard"
import Ex from "../components/Features/exten"
import CtaCard from '../components/Saas/CtaCard';

import dash1 from "../images/widgets/1.png"
import dash2 from "../images/widgets/2.png"
import dash3 from "../images/widgets/3.png"
import dash4 from "../images/widgets/4.png"
import dash5 from "../images/widgets/5.png"

import widget_b_doc from "../images/widgets/widget_b doc.png"
import widget_enca from "../images/widgets/widget_enca.png"
import widget_googleuparrow from "../images/widgets/widget_google uparrow.png"
import widget_googlemap from "../images/widgets/widget_googlemap.png"
import widget_greendoc from "../images/widgets/widget_green doc.png"
import widget_news24 from "../images/widgets/widget_news24.png"
import widget_sanral from "../images/widgets/widget_sanral.png"
import widget_sowetan from "../images/widgets/widget_sowetan.png"
import widget_twitter from "../images/widgets/widget_twitter.png"
import widget_uber from "../images/widgets/widget_uber.png"
import widget_vimeo from "../images/widgets/widget_vimeo.png"
import widget_yellowfile from "../images/widgets/widget_yellow file.png"
import widget_yellowicon from "../images/widgets/widget_yellow icon.png"
import widget_youtube from "../images/widgets/widget_youtube.png"

class Widgets extends Component {
    static async getInitialProps({ query }) { 
            return { data: query.slug}
    }
    componentDidMount() {
        const img = new Image();
        img.src = dash1; // by
        img.src = dash2;
        img.src = dash3;
        img.src = dash4;
        img.src = dash5;       
    }
    
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <WidgetBanner />
                <div style={{backgroundColor:"#f8fafb", paddingBottom:40}}>
                    <Title
                        title={"Elevate your content with these sensational widgets"}
                    />

                    <div  className="container widgets-header-img">
                        <img className="widgets-main-img" src={widget_b_doc}></img>
                        <img className="widgets-main-img" src={widget_enca}></img>
                        <img className="widgets-main-img" src={widget_googleuparrow}></img>
                        <img className="widgets-main-img" src={widget_googlemap}></img>
                        <img className="widgets-main-img" src={widget_greendoc}></img>
                        <img className="widgets-main-img" src={widget_news24}></img>
                        <img className="widgets-main-img" src={widget_sanral}></img>
                        <img className="widgets-main-img" src={widget_sowetan}></img>
                        <img className="widgets-main-img" src={widget_twitter}></img>
                        <img className="widgets-main-img" src={widget_uber}></img>
                        <img className="widgets-main-img" src={widget_vimeo}></img>
                        <img className="widgets-main-img" src={widget_yellowfile}></img>
                        <img className="widgets-main-img" src={widget_yellowicon}></img>
                        <img className="widgets-main-img" src={widget_youtube}></img>
                    </div>

                    <Tel></Tel>

                </div>
                                

                {/* <Title
                    titlesmall={"Popular feeds setup and ready to go"}
                /> */}
                <Paper></Paper>
                
                {/* <Bar title={"Customise Each Widget"} ></Bar> */}
                <div style={{backgroundColor:"#f8fafb", paddingBottom:50}}>
                    <div className="container" >           
                        
                        <Ex
                        header={"Refine Your Widgets To Suit Your Style"}
                        title1={"Sizing of widgets"}
                        content1={"Choose from full screen, side bar or adjust to any size"}
                        title2={"Text sizing and attributes"}
                        content2={"Change the font family, size, color of text and positioning"}
                        title3={"Configure the widgets settings"}
                        content3={"Each feed has elements of customization with some more than others. Select from 1- or 5-day forecast "}
                        title4={"Colour palette"}
                        content4={"Align the background, elements and typography  to your color scheme"}
                        title5={"Make it your own"}
                        content5={"A live playback view is available in a new browser "}
                        img1={dash1}
                        img2={dash2}
                        img3={dash3}
                        img4={dash4}
                        img5={dash5}
                        ></Ex>
                    </div>
                </div>
                
                <Cards></Cards>    
                <CtaCard />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Widgets;
