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
                <Nav />
                <div className="col-9">
                    <div className="container">
                        <div className="row shadow p-3 m-3 rounded list-border">
                            <div className="col">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </>

    )



}
export default Dashboard 