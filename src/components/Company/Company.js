"use client"

import { useEffect } from "react"
import "./company.css"
import { companyData } from "../../Data_Folders/CompanyData" // Import the data file

const Company = () => {
  const { mainPart, vision, whyUs } = companyData

  useEffect(() => {
    // Reveal elements on scroll
    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal")

      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight
        const revealTop = reveals[i].getBoundingClientRect().top
        const revealPoint = 150

        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add("active")
        }
      }
    }

    window.addEventListener("scroll", reveal)

    // Initialize reveal
    reveal()

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", reveal)
    }
  }, [])

  return (
    <div className="company-section">
      {/* Main Part */}
      <div className="two_image reveal">
        <div className="forword_div">
          <p>{mainPart.description}</p>
        </div>
        <div className="backword_div">
          <img src={require(`${mainPart.image || "/placeholder.svg"}`)} alt="Company Image 1" />
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="text_header reveal">
        <h1>{vision.title}</h1>
      </div>
      <div className="two_image_1 reveal">
        <div className="backword_div_1">
          <img src={require(`${vision.image || "/placeholder.svg"}`)} alt="Company Image 2" />
        </div>
        <div className="forword_div_1">
          <p>{vision.description}</p>
        </div>
      </div>

      {/* Why Us */}
      <div className="text_header reveal">
        <h1>{whyUs.title}</h1>
      </div>
      <div className="two_image_2 reveal">
        <div className="forword_div_2">
          <p>{whyUs.description}</p>
        </div>
        <div className="backword_div_2">
          <img src={require(`${whyUs.image || "/placeholder.svg"}`)} alt="Company Image 3" />
        </div>
      </div>
    </div>
  )
}

export default Company