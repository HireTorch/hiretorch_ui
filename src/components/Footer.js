import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer class="footer">
            <div class="footer-left col-md-4 col-sm-4">
                <p class="about">
                    <span> About the company</span> HireTorch enables colleges to automate end-to-end campus placements, helps employers hire young talent from across colleges in the country, and empowers students to access opportunities democratically </p>
                <div class="icons">
                    <a href="https://tinyurl.com/25t4npda"><i class="GitHub ,text-Dander">G</i></a>
                    <a href="https://www.linkedin.com/login"><i class="Linkedin , text-success">L</i></a>
                </div>
            </div>
            <div class="footer-center col-md-4 col-sm-4">
                <div>
                    <p class="Location">Address :</p> <br/>
                    <p><span> CDAC Infoway - 411011 </span> Pune, India</p>
                </div>
                <div>
                    <p class="Phone">Contact :</p> <br/>
                    <p> ( +91 ) 98765 43210</p>
                </div>
                <div >
                    <p class="Gmail">Email us:</p> <br/>
                    <p className="text-inline" ><a href="mailto:Projecthiretorch@Gmail.Com">Projecthiretorch@Gmail.Com</a></p>
                </div>
            </div>
            <div class="footer-right col-md-4 col-sm-4">
                <h2> HireTorch <span> logo </span></h2>
                <p class="menu">
                    <a href="/home">Home</a> | {' '}
                    <a href="/about">About</a> | {' '}
                    <a href="/contact">Contact</a>
                </p>
                <p class="name"> HireTorch &copy; 2023</p>
            </div>
        </footer>
    );
}

export default Footer;