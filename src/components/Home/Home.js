"use client"

import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { heroData, textContent1, textContent2, textContent3, images, overlapData } from "../../Data_Folders/Homedata"
import ProductSection from "./ProductSection"
import IndiaMap from "../../Images/india_map.png"

import "./home.css"
import "./mobile-button-fix.css"

function HomePage() {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [prevSlideIndex, setPrevSlideIndex] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const heroRef = useRef(null)

  // Auto slide change
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true)
        setPrevSlideIndex(currentSlide)
        setCurrentSlide((prev) => (prev === heroData.carouselItems.length - 1 ? 0 : prev + 1))
        setTimeout(() => {
          setIsAnimating(false)
          setPrevSlideIndex(null)
        }, 600)
      }
    }, 4000)

    return () => clearInterval(timer)
  }, [isAnimating, currentSlide])

  // Animation trigger on load
  useEffect(() => {
    setIsVisible(true)

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".reveal")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const handleRedirect = (path) => {
    navigate(path)
  }

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setPrevSlideIndex(currentSlide)
      setCurrentSlide((prev) => (prev === heroData.carouselItems.length - 1 ? 0 : prev + 1))
      setTimeout(() => {
        setIsAnimating(false)
        setPrevSlideIndex(null)
      }, 600)
    }
  }

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setPrevSlideIndex(currentSlide)
      setCurrentSlide((prev) => (prev === 0 ? heroData.carouselItems.length - 1 : prev - 1))
      setTimeout(() => {
        setIsAnimating(false)
        setPrevSlideIndex(null)
      }, 600)
    }
  }

  const handleDotClick = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true)
      setPrevSlideIndex(currentSlide)
      setCurrentSlide(index)
      setTimeout(() => {
        setIsAnimating(false)
        setPrevSlideIndex(null)
      }, 600)
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="hero_box" ref={heroRef}>
        {heroData.carouselItems.map((item, index) => (
          <div 
            key={index} 
            className={`hero_slide ${index === currentSlide ? "active" : ""} ${
              index === prevSlideIndex ? "slide-out" : ""
            }`}
            style={{
              zIndex: index === currentSlide ? 2 : index === prevSlideIndex ? 1 : 0
            }}
          >
            <div className="hero_content">
              <div className="hero_text">
                <h1 className={isVisible ? "active" : ""}>{item.title}</h1>
                <h3>{item.subtitle}</h3>
                {/* Show the button on all slides */}
                <button 
                  className={`hero_button ${index === 0 ? "first-slide-mobile-btn" : ""}`}
                  id={index === 0 ? "first_slide_explore_btn" : ""}
                  onClick={() => handleRedirect(item.redirectPath)}
                >
                  {item.buttonText}
                </button>
              </div>
            </div>
            <div className="hero_image">
              <img src={item.image || "/placeholder.svg"} alt={item.title} />
            </div>
          </div>
        ))}
        
        {/* Scroll Indicator - Only on first slide */}
        {currentSlide === 0 && (
          <div className="scroll-indicator">
            <span>Scroll Down</span>
            <div className="chevron"></div>
          </div>
        )}

        <div className="hero_navigation">
          <div className="hero_dots">
            {heroData.carouselItems.map((_, index) => (
              <span
                key={index}
                className={`hero_dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
          <button className="hero_arrow hero_prev" onClick={prevSlide}>
            →
          </button>
          <button className="hero_arrow" onClick={nextSlide}>
            →
          </button>
        </div>
      </div>

      {/* Rest of the component remains the same */}
      <div className="two_name_container">
        <img src={images.imageBox1 || "/placeholder.svg"} alt="img" className="reveal" />
        <img src={images.imageBox2 || "/placeholder.svg"} alt="img" className="reveal" />
      </div>

      <div className="text_container reveal">
        <p>{textContent1}</p> <br />
        <p>{textContent2}</p> <br />
        <p>{textContent3}</p>
      </div>

      <ProductSection />
 
      {/* Overlap Image Section */}
      <div className="over_lap_class_1">

        {overlapData.map((item, index) => (
          <div className="overlap_1" key={index}>
            <img id='home_product_img' src={item.image} alt={item.text} />
            <div className="side_of_text">
              <p>{item.text}</p>
              
                <button id="learn_more_btn" onClick={() => handleRedirect(item.redirectPath)}>{item.buttonText}</button>
              
            </div>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default HomePage