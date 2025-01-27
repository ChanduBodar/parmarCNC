// src/data.js

export const heroData = {
    title: "WELCOME TO",
    subtitle: "PARMAR CNC MACHINES (INDIA) LLP",
    heroImage: require("../Images/Home_welcome_image.jpg")
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
    map: require("../Images/india_map.png")
  };
  
  export const overlapData = [
    {
      image: images.parmarCNC,
      text: "20+ PRODUCTS",
      buttonText: "LEARN MORE",
      redirectPath: "/products"
    },
    {
      image: images.map,
      text: "ALL INDIA PRESENCE",
      buttonText: "LEARN MORE",
      redirectPath: "/contact"
    }
  ];
  