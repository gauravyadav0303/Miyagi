import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import SubscriptionBanner from "../components/SubscriptionBanner";
import Feature from "../components/Feature";
import Upload from "../components/Upload";
import Esign from "../components/Esigns";
import AboutThree from "../components/AboutThree";
import EsignSubscription from "../components/EsignSubscription";
import Description from "../components/Description";

function Subscription() {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);
    return ( <>
    <Header/>
    <Description/>
    <SubscriptionBanner/>
    <Feature/>
    <Upload/>
    <Esign/>
    <AboutThree/>
    <EsignSubscription/>
    <Footer/>
    </> );
}

export default Subscription;