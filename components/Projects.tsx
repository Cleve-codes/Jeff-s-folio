import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        SERVICES
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className="container mx-auto 2xl ">
        <div className="flex-col flex md:flex-row  mt-7 md:gap-[4em]">
          <Link
            href="/"
            rel="noopener noreferrer"

            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/seo.png"
                height={150}
                width={150}
                alt="WebHR Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">SEO</p>
                <p className="text-gray-500 text-[10px]">
                  With skills in both on-page and off-page SEO, I can help you rank your website on the first page of Google.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/"
            rel="noopener noreferrer"

            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/social.jpeg"
                height={150}
                width={150}
                alt="HireSide"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">SM Marketing</p>
                <p className="text-gray-500 text-[10px]">
                  Social media marketing is a great way to grow your business, and I can help you grow your business through social media marketing.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="/"
            rel="noopener noreferrer"

            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/digital_marketing.avif"
                height={150}
                width={150}
                alt="VergeSystems"
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                  Digital Marketing
                </p>
                <p className="text-gray-500 text-[10px]">
                  I have great skills in digital marketing, and I can help you grow your business through digital marketing.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/"
            rel="noopener noreferrer"

            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/graphic.jpg"
                height={150}
                width={150}
                alt="Payoasis"
              />
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">Graphic Design</p>
                <p className="text-gray-500 text-[10px]">
                  My graphic design skill are on another level, and I can help you create great designs for your business.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
