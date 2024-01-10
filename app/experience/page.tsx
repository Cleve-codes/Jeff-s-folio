import Footer from "@/components/Footer";
import { MdOutlineFileDownload } from "react-icons/md";
import Link from "next/link";
// import resume from "../../public/Jeffers CV.pdf";

export default function Page(){

  const path = '/experience'

  return (
    <>
    <div className="container 2xl:ml-[15%]" id="experience">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
      WORK{" "}
      <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
        EXPERIENCE
        </span>
      </h1>
      <div className="grid items-center mt-[4em]">
      <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">Exotic Online Advertising /</span> Search Engine Optimzation Specialist
          </p>
          <p className="text-gray-300">JAN 2023 - PRESENT, NAIROBI</p>
        </div>
        <p className="text-gray-300 pt-5">
          Currently, I am working at Exotic Online Advertising Co., Exotic is a
          digital marketing platform that focuses on Search Engine Optimization(SEO), digital
          and Social media marketing. My role at Exotic is to create and manage SEO campaigns for clients, and
          also manage the company's social media platforms. I have been able to work with clients from different industries,
          and I have been able to help them achieve their goals.
          <br />
          <br />
          Through my work at Exotic, I have been able to help the company grow its client base, and also help the company grow its revenue.
          I have a great passion for SEO, and Exotic has given me the opportunity to grow my skills in SEO, and also learn more
          about digital marketing.
        </p>
        <>
        <div className="flex  flex-row justify-between pt-5 mt-[4em]">
          <p className="text-gray-300 ">
            <span className="font-semibold">Jiji Online Store /</span> Online Marketer
          </p>
          <p className="text-gray-300">JAN 2021 - June 2021, NAIROBI</p>
        </div>
        <p className="text-gray-300 pt-5">
          Before Exotic, I worked at Jiji Online Store, Jiji is an online store that sells a variety of products.
          My role at Jiji was to create and manage SEO campaigns for clients, and also manage the company's social media platforms.
          I was able to work with clients from different industries, and I was able to help them achieve their goals. I was also able to
          learn more about SEO, and digital marketing.
          <br />
          <br />
          From my work at Jiji, I was able to help the company grow its client base, and also help the company grow its revenue. My passion
          for online saw the company grow its online presence, and also grow its revenue while I also grew my skills in SEO, and digital marketing.
        </p>
        </>
        <>
        <div className="flex  flex-row justify-between pt-5 mt-[4em]">
          <p className="text-gray-300 ">
            <span className="font-semibold">GoAfrica Tours and Travel /</span> Web Admin & Data Manager
          </p>
          <p className="text-gray-300">JULY 2020 - MARCH 2021, NAIROBI</p>
        </div>
        <p className="text-gray-300 pt-5">
          While at GoAfrica, I was able to work as a web admin, and data manager. My role at GoAfrica was to manage the company's website, and also
          manage the company's data. I was able to learn more about web development, and also data management. I implemented a new data management system
          that helped the company manage its data more efficiently and also helped the company save money.
          <br />
          <br />
          Through my work at GoAfrica, I was able to help the company grow its online presence, and also help the company grow its revenue.
           I was also able to grow my skills in web development, and data management thanks to the company.
        </p>
        </>
        <>
        <div className="flex  flex-row justify-between pt-5 mt-[4em]">
          <p className="text-gray-300 ">
            <span className="font-semibold">Sumo Kenya</span> Copy Writing and Content Writing
          </p>
          <p className="text-gray-300">NOV 2019 - MAR 2020, NAIROBI</p>
        </div>
        <p className="text-gray-300 pt-5">
          I worked at Sumo Kenya as a copy writer, and content writer. My role at Sumo was to create content for the company's website, and also
          create content for the company's social media platforms. I was able to learn more about content writing, and copy writing.
          Through my skills in content writing, I was able to help the company grow its online presence, and also help the company grow its revenue.
          <br />
          <br />
          After my work at Sumo, I was able to grow my skills in content writing, and copy writing. This was also where I grew
           my interest in SEO, and digital marketing and decided to pursue a career in digital marketing.
        </p>
        </>
      </div>
      <div className="mt-[2em]">
        <Link
              href="/resume.pdf"
              download="Jeffer's CV.pdf"
              className="z-[1] "
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
      <Footer />
    </div>

    </>
  )
}