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
        content: "E - Commerce static website made by me",
        image: "https://github.com/rezak400/bootcamp_etech/blob/master/assets/images/landing.png?raw=true",
        url: "https://bootcamp-etech.vercel.app/src/login.html"
      },
      {
        id: 3,
        title: "Blog Website",
        category: ["Front-End", "Back-End", "FullStack"],
        content: "My first MERN stack website project",
        image: "https://github.com/rezak400/belajar_react/blob/master/src/assets/images/landing.png?raw=true",
        url: "https://belajar-react-reza.vercel.app/"
      },
    ]
  })
}
