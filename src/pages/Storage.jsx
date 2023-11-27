import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import Contact from "../components/Contact";
import StorageBanner from "../components/StorageBanner";
import Feature from "../components/Feature";
import StorageSubscription from "../components/StorageSubscription";
import EsignTwo from "../components/EsignsTwo";


function Storage() {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);
    return ( <>
    <Header/>
    <StorageBanner/>
    <Feature/>
    <StorageSubscription/>
    <EsignTwo/>
    <Contact/>
    <Footer/>
    </> );
}

export default Storage;