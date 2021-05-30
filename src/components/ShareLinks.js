import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';
import React from "react";
import '../App.css';
// import './prism.css';
import instagram from "./static/instagram.svg"
import linkedin from "./static/linkedin.svg"
import facebook from "./static/facebook.svg"
import twitter from "./static/twitter.svg"



function ShareLinks(){
    return(
        <div className="article-left-wrapper">
            <Sticky className="share-logos" top={90} bottomBoundary={950}>
                <ul className="share-links" >
                    <div className="share-link">
                        <Link>
                            <img className="share-logo" src={facebook} width="40" alt="" />
                        </Link>
                    </div>

                    <div className="share-link">
                        <Link>
                            <img className="share-logo" src={instagram} width="40" alt="" />
                        </Link>
                    </div>
                    {/* <div className="share-link">
                        <Link>
                            <img className="" src={require("./static/whatsapp.svg")} width="55" height="55" alt="" />
                        </Link>
                    </div> */}

                    <div className="share-link">
                        <Link>
                            <img className="share-logo" src={twitter} width="40" alt="" />
                        </Link>
                    </div>
    

                    <div className="share-link">
                        <Link>
                            <img className="share-logo" src={linkedin} width="40" alt="" />
                        </Link>
                    </div>

                </ul>
            </Sticky>
        </div>
    );
    
}
export default ShareLinks;