import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay'; // Optional for autoplay styling

const BlogSection = () => {
    const posts = [
        {
            img: '/images/ourfleet/1.jpg',
            author: 'Andrea Miller',
            time: '2 Days Ago',
            title: 'Sedan - Swift Dzire (4+1 Seater)',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            img: '/images/ourfleet/3.jpg',
            author: 'John Smith',
            time: '9 Days Ago',
            title: 'Sedan - Hyundai Xcent (4+1 Seater)',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            img: '/images/ourfleet/2.jpg',
            author: 'Andrea Miller',
            time: '16 Days Ago',
            title: 'Sedan - Toyota Etios (4+1 Seater)',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            img: '/images/ourfleet/4.jpg',
            author: 'John Smith',
            time: '23 Days Ago',
            title: 'MUV - Maruti Ertiga (6+1 Seater)',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            img: '/images/ourfleet/9.jpg',
            author: 'David Cooper',
            time: '30 Days Ago',
            title: 'SUV - Toyota Innova Crysta (6+1 Seater)',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        }
    ];

    return (
        <section id="blog" className="section-5 carousel showcase">
            <div className="overflow-holder">
                <div className="container">
                    <div className="row intro">
                        <div className="col-12 col-md-9 align-self-center text-center text-md-left">
                            <span className="pre-title m-auto m-md-0">Our Fleets</span>
                            <h2>Your Pathway to Luxury and Reliability <span className="featured"><span>Swara Cabs</span></span></h2>
                            <p>"Experience the Pinnacle of Transportation with Our Impressive Fleet of Modern and Well-Maintained Vehicles"</p>
                        </div>
                        <div className="col-12 col-md-3 align-self-end">
                            <a href="#" className="btn mx-auto mr-md-0 ml-md-auto primary-button">SEE ALL</a>
                        </div>
                    </div>

                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={3}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                        }}
                        className="mid-slider items"
                    >
                        {posts.map((post, index) => (
                            <SwiperSlide className="swiper-slide slide-center item" key={index}>
                                <div className="row card p-0 text-center">
                                    <div className="image-over">
                                        <img src={post.img} alt={post.title} />
                                    </div>
                                    <div className="card-footer d-lg-flex align-items-center justify-content-center">
                                        {/* <a href="#"><i className="icon-user"></i>{post.author}</a> */}
                                        {/* <a href="#"><i className="icon-clock"></i>{post.time}</a> */}
                                    </div>
                                    <div className="card-caption col-12 p-0">
                                        <div className="card-body">
                                            <a href="/our-fleet">
                                                <h4>{post.title}</h4>
                                                {/* <p>{post.desc}</p> */}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
