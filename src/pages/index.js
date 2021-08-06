import Layout from "../components/Layout";
import Link from "next/link";
import Button from "../components/Button";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="md:h-screen bg-primary flex items-center  overflow-hidden">
        <div className="container text-white">
          {/* HEADER */}
          <div className="md:flex flex-row-reverse md:pt-12">
            {/* image */}
            <div
              data-wow-duration="2s"
              data-wow-delay="0.5s"
              className="md:w-1/2 wow fadeInUp"
            >
              <img
                src="profile.png"
                alt=""
                className="mx-auto w-40 md:w-52 mt-16 md:mt-0"
              />
            </div>

            {/* Headline */}
            <div
              data-wow-duration="2s"
              className="wow fadeInLeft md:w-1/2 md:pl-16 mt-8 md:mt-0 text-center md:text-left md:py-6 "
            >
              <h1 className="md:text-5xl text-3xl font-primary font-medium">
                Reza Dwiputra
              </h1>
              <ul data-wow-delay="2s" className="md:list-disc sm:ml-5 ">
                <li className=" text-base md:text-xl font-secondary mt-5 font-thin">
                  Web Developer
                </li>
                <li className="text-base md:text-xl font-secondary mt-1 font-thin">
                  Writer
                </li>
                <li className="text-base md:text-xl font-secondary mt-1 font-thin">
                  Curious Person
                </li>
                <li className="text-base md:text-xl font-secondary mt-1 font-thin">
                  Lazy Perfectionist
                </li>
              </ul>
            </div>
          </div>

          {/* header footer */}
          <div className="md:flex md:mt-16 mt-12 flex-row-reverse">
            {/* Social Media */}
            <div
              data-wow-duration="2s"
              data-wow-delay="2s"
              className="md:flex md:w-1/2 justify-around px-6 md:px-0 wow fadeInRight"
            >
              <Button
                title="@rezak400"
                image="github.png"
                target="https://github.com/rezak400"
              />
              <Button
                title="@reza.dwip"
                image="instagram.png"
                target="https://www.instagram.com/reza.dwip/"
              />
              <Button
                title="rezak400"
                image="linkedin.png"
                target="https://www.linkedin.com/in/rezak400/"
              />
            </div>

            {/* Project Link */}
            <div className="animate-bounce md:w-1/2 md:pl-16 md:text-left md:mt-8 text-center mb-16 mt-16">
              <Link href="/portofolio">
                <a className="flex justify-center md:justify-start">
                  <img src="Polygon.png" alt="tes" className="w-6" />
                  <h1 className="ml-2 text-lg">See my work here</h1>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
