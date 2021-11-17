import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";

export default function About() {
  const [data, setData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  console.log(`liat isi state`, data);

  React.useEffect(() => {
    setLoading(true);
    const link = `${window.location.origin}/api/work`;
    console.log(`cek url`, link);

    //! belajar fetch ntar
    // fetch(`https://mern-blog-reza.herokuapp.com/v1/blog`)
    //     .then(response => {
    //         response.json()
    //     }).then(res => console.log(`dari fetch`, res))

    axios
      .get(link)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  const content = data.map((work) => {
    return (
      <Link href={work.url}>
        {/* //! pake anchor tag biar bisa pake target blank buat open new tab */}
        <a target="_blank">
          <div>
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center text-white"
                src={work.image}
                alt="loading gambar"
              />
              <div class="p-6 bg-white">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  {work.category.map((item) => {
                    return `${item} `;
                  })}
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  {work.title}
                </h1>
                <p class="leading-relaxed mb-3">{work.content}</p>
                <div class="flex items-center flex-wrap ">
                  <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Learn More
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      class="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    -
                  </span>
                  <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg
                      class="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    0
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    );
  });

  if (isLoading == false) {
    return (
      <Layout title="Portofolio">
        <section class=" body-font bg-primary min-h-screen overflow-hidden">
          <div
            class="container px-10 py-10 mx-auto text-xs  wow fadeInRight overflow-hidden"
            data-wow-duration="2s"
          >
            <h1 className="text-2xl text-white font-primary text-center font-semibold">{`My Workkk :D`}</h1>
            {/* //! coba grid  */}
            <div className="mt-6 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {content}
            </div>
            {/* //! tutup grid  */}

            <Link href="/">
              <p className="text-white text-xl mt-10 cursor-pointer">{`< Back`}</p>
            </Link>
          </div>
        </section>
      </Layout>
    );
  } else {
    return (
      <Layout title="About">
        <section class=" body-font bg-primary min-h-screen overflow-hidden">
          <div
            class="container px-10 py-10 mx-auto text-xs overflow-hidden"
            data-wow-duration="2s"
          >
            <p className="text-white text-xl">Loading...</p>
          </div>
        </section>
      </Layout>
    );
  }
}
