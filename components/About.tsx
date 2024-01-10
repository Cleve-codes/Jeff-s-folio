import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
        As a dedicated digital marketing professional, I thrive on orchestrating the strategic harmony between technology and innovation. Currently immersed in the dynamic landscape of WebHR, my expertise revolves around executing impactful SEO, social media marketing, and content strategies.
          <br />
          <br />
          With a passion for shaping effective solutions, I navigate the ever-evolving realm of digital marketing. My journey involves translating concepts into compelling online strategies, creating engaging user experiences, and consistently pushing the boundaries of what's achievable.
          <br />
          <br />
          Explore my proficiency in SEO, social media marketing, and content marketing, where I leverage my expertise to enhance online visibility and drive digital success.
        </p>
      </div>
    </section>
  );
};

export default About;
