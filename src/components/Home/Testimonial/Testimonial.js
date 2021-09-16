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
        {
            testimonial.map(review => <div>
              <div className="myCarousel">
                      <h3>{review.review.name}</h3>
                      <h4>{review.review.email}</h4>
                      <p>{review.review.feedback}
                      </p>
                    </div>
              </div>)
          }
        
      </Carousel>

    </section>
  );
};

export default Testimonial;