import{React,useEffect} from "react";

const About = () => {
  useEffect(() => {
    document.title = "About || Hire-Torch "
  }, []);

  return (
    <div className="title" >
      <h1>About</h1>
      <p>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Duis consequat nulla ac ex consequat,
        in efficitur arcu congue. Nam fermentum commodo egestas.
      </p>
    </div>
  );
};

export default About;
