import {React,useEffect} from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact || Hire-Torch "
  }, []);
  return (
    <>
    <div class="footer-center col-md-4 col-sm-4">
                <div>
                    <i class="Location">Address :</i>
                    <p><span> CDAC Infoway - 411011 </span> Pune, India</p>
                </div>
                <div>
                    <i class="Phone">Contact :</i>
                    <p> ( +91 ) 98765 43210</p>
                </div>
                <div >
                <a> Email us: </a> <br/>
                    <i class="Gmail"></i>
                    <p className="text-inline" ><a href="mailto:Projecthiretorch@Gmail.Com">Projecthiretorch@Gmail.Com</a></p>
                </div>
            </div>
    {/* <h1>Contact Us On :</h1> 
      <p>
       <span>Address : CDAC Infoway - 411011 Pune, India. <br/>
        Contact Number:  ( +91 ) 98765 43210. <br/>
        </span> 
        <div >
            <a> Email us: </a> <br/>
                    <i class="Gmail"></i>
                    <p className="text-inline" ><a href="mailto:Projecthiretorch@Gmail.Com">Projecthiretorch@Gmail.Com</a> {' '}for Query</p>
                </div>
      </p> */}
    </>
  );
};

export default Contact;
