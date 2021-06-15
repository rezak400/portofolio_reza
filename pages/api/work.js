// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//! buka di url /api/work
export default (req, res) => {
  res.statusCode = 200
  res.json({
    data: [
      {
        id: 1,
        title: "Hooda Landing Page",
        category: ["Front-End"],
        content: "Company profile static website made by me and Abu Azis",
        image: "https://github.com/abuazis/Hooda-Landing/blob/master/src/assets/images/landing.png?raw=true",
        url: "https://hooda-landing.vercel.app/"
      },
      {
        id: 1,
        title: "Shoe Store Page",
        category: ["Front-End"],
        content: "E - Commerce static website made all by myself, UI/UX, pure native javascript",
        image: "https://github.com/rezak400/bootcamp_etech/blob/master/assets/images/landing.png?raw=true",
        url: "https://bootcamp-etech.vercel.app/src/login.html"
      },
      {
        id: 3,
        title: "Blog Website",
        category: ["Front-End", "Back-End", "FullStack"],
        content: "My first MERN stack website project, you can create blog for free in here :D",
        image: "https://github.com/rezak400/belajar_react/blob/master/src/assets/images/landing.png?raw=true",
        url: "https://belajar-react-reza.vercel.app/"
      },
      {
        id: 4,
        title: "Al - Ashr",
        category: ["Front-End", "Back-End", "FullStack", "UI/UX"],
        content: "Salat alarm project made by me and AbuAzis",
        image: "https://github.com/rezak400/portofolio_reza/blob/main/public/screencapture-alarm-sholat-vercel-app-2021-06-15-19_50_25.png?raw=true",
        url: "https://alarm-sholat.vercel.app/"
      }
    ]
  })
}
