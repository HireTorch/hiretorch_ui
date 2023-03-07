import {React , useEffect ,cleanup} from 'react';

const Home = () => {

  useEffect(() => {
    document.title = "Home || Hire-Torch "
    
  }, []);

    return(
    <div class="col-xs-7 col-md-7 col-sm-7">
    <h1 class="hero-title roboto animate__animated animate__fadeIn animate__delay-1s">
      Welcome To <br/>Hire-Torch  
    </h1> 
    {/* Where Talent <br/>Meets Opportunity */}
    <p class="hero-info text-grey" >
      " A Good Life Begins With A Good Company " <br/>
       What you Think ?? If Yes ! <br/>
       Then Your Dream Coming Is Waiting For You <br/>
       Complete Your Profile Today ....         
    </p>
    <br/>
    <a href="/student-login" class="btn btn-success btn-lg btn-rounded btn-extended">
      <span class="text-theme">Login To Our Protal </span>
    </a>

    {/* <hr class="mt-40"/>
    <div class="row animate__animated animate__fadeIn animate__delay-2s">
      <div class="col-sm-4 mb-30">
        <h4>27,00,000+</h4>
        <span class="text-grey">Students and Young Alumni</span>
      </div>

      <div class="col-sm-4 mb-30">
        <h4>500+</h4>
        <span class="text-grey">College Placement Cells</span>
      </div>
      <div class="col-sm-4 mb-30">
        <h4>12,800+</h4>
        <span class="text-grey">Employers</span>
      </div>
    </div> */}
  </div>

    ) ;
  };
  
  export default Home;