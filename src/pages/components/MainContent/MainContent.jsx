import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './MainContent.css';

const MainContent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <main>
      <Slider {...settings} className="slider-container">
        <div>
          <img src="/1111.jpeg" alt="Slide 1" />
        </div>
        <div>
          <img src="/1111.jpeg" alt="Slide 2" />
        </div>
        <div>
          <img src="/1111.jpeg" alt="Slide 3" />
        </div>
      </Slider>
      <div className="content-section">
        <h2>Welcome to Our Website</h2>
        <p>
          We are glad to have you here. Our website offers a variety of features and
          resources to help you get started. Explore our content, join our community, 
          and make the most out of our services.
        </p>
        <img src="/path/to/your/image.jpg" alt="Welcome" />
        <a href="/register" className="btn">Join Us Now</a>
      </div>
      <div className="content-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide top-quality resources and services to our users.
          We strive to create a welcoming and supportive environment for everyone.
        </p>
        <img src="/path/to/another-image.jpg" alt="Our Mission" />
        <a href="/contant" className="btn">Learn More</a>
      </div>
    </main>
  );
};

export default MainContent;
