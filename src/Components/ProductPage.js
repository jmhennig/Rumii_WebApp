import React from "react";
import './ProductPage.css';
import arrow from '../Media/Arrow.svg'
import Rumii_Logo from "../Media/Rumii_full_logo.png"
import Full_Moon1 from "../Media/Full_Moon1.png"
import Full_Moon2 from "../Media/Full_Moon2.png"
import Full_Moon3 from "../Media/Full_Moon3.png"
import Full_Moon4 from "../Media/Full_Moon4.png"


const ProductPage = ({productName, productPop, productPrice, productRating}) => {

    const goBack = () => {
        window.history.back();
    };

    return (
        <div className="App">
            <header className="App-header">
                <div className="back-button">
                    <a href="#" style={{textDecoration: "none"}} onClick={goBack}>
                        <div>
                            <img
                                className="arrow2"
                                src={arrow}>
                            </img>
                            <p>Home</p>
                        </div>
                    </a>
                </div>
                <div className="prod-head">
                    <img src={Rumii_Logo}></img>
                </div>
            </header>
            <div className="Section">
                <div className="prod-columns">
                    <div className="product-col1">
                        <div className="media-viewer">
                            <div className="media-container">
                                <img src={Full_Moon1}></img>
                            </div>
                            <div className="media-container">
                                <img src={Full_Moon2}></img>
                            </div>
                            <div className="media-container">
                                <img src={Full_Moon3}></img>
                            </div>
                            <div className="media-container">
                                <img src={Full_Moon4}></img>
                            </div>
                        </div>
                    </div>
                    <div className="product-col2">
                        <div className="details-header-group">
                            <div className="product-title-container">
                                <h1 className="product-title">
                                    The Essential Bag: <span>{productName}</span>
                                </h1>
                            </div>
                            <div className="product-price-container">
                                <h2 className="product-price">{productPrice}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;