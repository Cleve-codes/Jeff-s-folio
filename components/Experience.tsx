"use client"
// import Link from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";




const Experience = () => {

  const textBeforeReadMore = `
  Currently, I am working at Exotic Online Advertising Co., Exotic is a
  digital marketing platform that focuses on Search Engine Optimization(SEO), digital
  and Social media marketing. My role at Exotic is to create and manage SEO campaigns for clients, and
  also manage the company's social media platforms. I have been able to work with clients from different industries,
  and I have been able to help them achieve their goals.
`;

const textAfterReadMore = `
  Through my work at Exotic, I have been able to help the company grow its client base, and also help the company grow its revenue.
  I have a great passion for SEO, and Exotic has given me the opportunity to grow my skills in SEO, and also learn more
  about digital marketing.
`;

  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">

        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">Exotic Online Advertising /</span> Search Engine Optimzation Specialist
          </p>
          <p className="text-gray-300">JAN 2023 - PRESENT, NAIROBI</p>
        </div>
        <p className="text-gray-300 pt-5">
          {textBeforeReadMore}
          <br />
          <br />
          {textAfterReadMore}
        </p>

        <div className="flex  flex-row justify-between pt-5">

          {/* <Link href='/experience' rel="noopener noreferrer" >



           </Link> */}
           <Link
            href="/experience"
            rel="noopener noreferrer"

            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <button
              className=" z-[1] padding-20  hover:bg-white rounded-3xl
              text-white font-semibold hover:text-black py-3 px-10  border-[0.1px]
              border-white hover:border-transparent hover:cursor-pointer
              "
              >
              View More
            </button>
            </div>
          </Link>
          <Link
            href="/resume.pdf"
            download="Jeffers CV.pdf"
            className="z-[1]"
            target="_blank"
          >
            <div className="flex-row flex mb-5">
              <button
              className=" z-[1] padding-20  hover:bg-white rounded-3xl
              text-white font-semibold hover:text-black py-3 px-10  border-[0.1px]
              border-white hover:border-transparent hover:cursor-pointer
              "
              >
              Download CV
            </button>
            </div>
          </Link>
         </div>

        <div className="flex-col flex sm:flex-row mt-[2em]">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Digital Marketing
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Search Engine Optimization
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Graphic Design
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Social Media Marketing
          </div>
        b</div>
      </div>
    </section>
  );
};

export default Experience;
