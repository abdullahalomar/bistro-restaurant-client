import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch('reviews.json')
        .then(Response=> Response.json())
        .then(data => setReviews(data))
    },[])
    return (
        <section className="my-20">
            <SectionTitle subHeading='What Our Clients Say' heading='TESTIMONIALS'></SectionTitle>

            <div className="max-w-screen-xl mx-28 mb-14">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            reviews.map(review => <SwiperSlide
            key={review._id}
            >
                <div className="m-24">
                <p>{review.details}</p>
                <p className="text-2xl text-orange-400">{review.name}</p>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;