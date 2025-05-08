// src/data.js

export const heroData = {
  carouselItems: [
    {
      title: "WELCOME TO",
      subtitle: "PARMAR CNC MACHINES (INDIA) LLP",
      image: require("../Images/Home_welcome_image.jpg"),
      buttonText: "EXPLORE PRODUCTS",
      redirectPath: "/products"
    },
    {
      title: "CNC PRESS BRAKE",
      subtitle: "EDGE SERIES",
      image: require("../Images/Clip path group.png"),
      buttonText: "EXPLORE PRODUCTS",
      redirectPath: "/products"
    },
    {
      title: "SHEARING MACHINE",
      subtitle: "HIGH PRECISION CUTTING",
      image: require("../Images/Sharing_machine_img.png"),
      buttonText: "EXPLORE PRODUCTS",
      redirectPath: "/products"
    }
  ]
};

export const textContent1 = `
  We PARMAR CNC MACHINES (INDIA) LLP Established in the year 2009. Our products under
  brand name "PARMAR". We manufacture and supply an exclusive range of Power Press Machines,
  Mechanical Shearing Machines, Hydraulic Shearing Machines, and Hydraulic Press Brakes.
`;
export const textContent2 = `


With 15 years of experience, our research and integration of modern technology have made
PARMAR a name renowned in sheet metal machinery. Our office is located in Rajkot, equipped
with state-of-the-art production facilities and upgraded machinery.


`;
export const textContent3 = `
  Our major objectives are providing quality, technology, innovations, and maintenance-free
  machines, manufactured using tested plates for higher efficiency and lower maintenance.
  We have been in this field for over a decade and devote all our efforts to provide superior
  quality products at reasonable prices, innovative designs, and professional after-sales services.
`;


export const images = {
  imageBox1: require("../Images/CNC PRESS BRAKE MACHINE EDGE SERIES.png"),
  imageBox2: require("../Images/CNC PRESS BRAKE MACHINE EDGE H SERIES.png"),
  parmarCNC: require("../Images/removebg.png"),
  map: require("../Images/india_map.png"),
  global: require("../Images/global_map.png")
};

export const overlapData = [
    
  {
    image: images.map,
    text: "ALL INDIA PRESENCE",
    buttonText: "LEARN MORE",
    redirectPath: "/contact"
  },
  {
   image: images.global,
   text: "GLOBAL PRESENCE",
   buttonText: "LEARN MORE",
   redirectPath: "/contact"
  },

];