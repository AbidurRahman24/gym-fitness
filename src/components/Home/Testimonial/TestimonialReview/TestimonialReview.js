import React from 'react';
import './TestimonialReview.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const TestimonialReview = ({review}) => {
    const {name, email, feedback} = review.review
    return (
        <div>
            <div className="myCarousel">
            <h3>{name}</h3>
            <h4>{email}</h4>
            <p>{feedback}
            </p>
          </div>
        </div>
    );
};

export default TestimonialReview;