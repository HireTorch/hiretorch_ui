import{React,useEffect} from "react";

const About = () => {
  useEffect(() => {
    document.title = "About || Hire-Torch "
  }, []);

  return (
    <div className="title" >
      <h1>About</h1>
      <p>
      In the present-day scenario Job portal plays an important role in bridging the gap between the recruiters and the job seekers.
•The qualified job seekers search for a place where they can apply their knowledge and skills to grow in the professional sector.
•On the other hand, the recruiters also look for the candidates that possess the right talent, qualification, aptitude, and efficiency that can fulfill the vacancy.
•Hence we are making a web portal which will be convenient to both job seekers and recruiters and easy to use.
      </p>
    </div>
  );
};

export default About;
