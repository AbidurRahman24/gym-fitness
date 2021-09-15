import React, { useEffect, useState } from 'react';
import './Testimonial.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setTestimonial(data));
  }, [])


  return (
    <section>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          {
            testimonial.map(review =>
              <div className="myCarousel">
                <h3>{review.review.name}</h3>
                <h4>Designer</h4>
                <p>
                  It's freeing to be able to catch up on customized news and not be
                  distracted by a social media element on the same site
                </p>
              </div>
            )
          }
        </div>
      </Carousel>

    </section>
  );
};

export default Testimonial;