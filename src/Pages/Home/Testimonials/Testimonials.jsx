import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

import quotation from '../../../assets/icon/quote-left 1.svg'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/review')
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
                <div className="flex flex-col items-center mx-24 my-16">
                <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                />
                <img className="pt-6" src={quotation} alt="" />
                <p className="py-6">{review.details}</p>
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