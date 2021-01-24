import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./dashboard.css";

function Dashboard() {



    return (
        <>
            <Header />
            <div className="row">
                <div className="col-3">
                    <Nav />
                    
                </div>
            </div>
            
            <Footer />
        </>

    )



}
export default Dashboard 