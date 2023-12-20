import { FaTwitter, FaLinkedinIn, FaBehance, FaBasketballBall, FaPhoneAlt, FaHeart, FaCcPaypal, FaCcVisa, FaCcMastercard, FaCcDiscover, } from "react-icons/fa";
import { CiMap, CiMail } from "react-icons/ci";
import { GiBanknote } from "react-icons/gi";
import './style/Footer.css'
export default function Footer() {
    return (
        <div className="container-fluid Footer">
            <div className="row footer-row">
                <div className="col-12 col-md-3">
                    <div className="title-footer1">About Franco</div>
                    <div className="footer-line-1"></div>
                    <div className="body-1">Aliquam tempor sagittis neque, vel aliquam risus consectetur vel. Aenean hendrerit, elit a lacinia suscipit, orci mauris vulputate mi, eu interdum nunc diam at ipsum. </div>
                    <div className="icon-1">
                        <FaTwitter className="twitter" />
                        <FaLinkedinIn className="linked" />
                        <FaBehance className="behance" />
                        <FaBasketballBall className="ball" />
                    </div>
                </div>

                <div className="col-12 col-md-1"></div>

                <div className="col-12 col-md-4">
                    <div className="title-footer2">Navigation</div>
                    <div className="footer-line-2"></div>
                    <div className="row middle">
                        <div className="col-5 navigation-1">
                            <div>
                                <button className="click-button">Home</button>
                            </div>
                            <div>
                                <button className="click-button">About Us</button>
                            </div>
                            <div>
                                <button className="click-button">Our Blog</button>
                            </div>
                            <div>
                                <button className="click-button">Women</button>
                            </div>
                            <div>
                                <button className="click-button">Men</button>
                            </div>
                            <div>
                                <button className="click-button">Contact Us</button>
                            </div>
                        </div>

                        <div className="col-2"></div>

                        <div className="col-5 navigation-2">
                            <div>
                                <button className="click-button">FAQs</button>
                            </div>
                            <div>
                                <button className="click-button">Featured Brands</button>
                            </div>
                            <div>
                                <button className="click-button">Gift Vouchers</button>
                            </div>
                            <div>
                                <button className="click-button">Affiliates</button>
                            </div>
                            <div>
                                <button className="click-button">Specials Gift</button>
                            </div>
                            <div>
                                <button className="click-button">Terms & Conditions</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-1"></div>

                <div className="col-12 col-md-3">
                    <div className="title-footer3">Shop Location</div>
                    <div className="footer-line-3"></div>
                    <div className="body-3">
                        <div className="location">
                            <p><CiMap /></p>
                            <p className="location-text">500 Hennessy Road Causeway Bay, Hong Kong</p>
                        </div>

                        <div className="phone">
                            <p><FaPhoneAlt /></p>
                            <p className="phone-text">+1 23456789</p>
                        </div>

                        <div className="mail">
                            <p><CiMail /></p>
                            <p className="mail-text">contact@yourdomain.com</p>
                        </div>
                    </div>
                </div>
                <div className="bottom-line"></div>

                <div className="bottom-item">
                    <div className="last-item">
                        <div className="copy-text">
                            <div className="copy-right">
                                © Copyright 2015 & Made with
                            </div>
                            <div className="double-p">
                                <div className="hitech-heart" ><FaHeart /></div>  
                                <div>by</div>
                                <div className="arrowHitech">ArrowHitech.</div>
                            </div>
                        </div>
                        <div className="paying">
                            <FaCcVisa />
                            <FaCcPaypal />
                            <FaCcMastercard />
                            <FaCcDiscover />
                            <GiBanknote />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}