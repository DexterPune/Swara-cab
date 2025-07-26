
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Hadapsartomumbaicab() {



    const cardData =
    {
        keyword: 'Hadapsar to Mumbai Cab',
        heading: 'Swara Cabs : Hadapsar to Mumbai Cab',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable cab services for your journey from Hadapsar to Mumbai. Mumbai, Maharashtra’s bustling commercial and cultural capital, is celebrated for its iconic skyline, dynamic urban life, and rich heritage. Whether you are heading for a business meeting, visiting family, or catching a flight, Swara Cabs ensures a smooth and hassle-free experience. The road distance from Hadapsar to Mumbai is approximately 154 kilometres, and the typical travel time is around 2¼ hours, depending on traffic conditions. With our well-maintained fleet and professional drivers, Swara Cabs guarantees a safe, punctual, and comfortable ride tailored to your travel needs.',

        top: 'Top Places to Visit in Mumbai with Swara Cabs',

        "topPlaces": [
            {
                "title": "Elephanta Caves",
                "description": "Located on Elephanta Island, a short ferry ride from the Gateway of India, these ancient rock-cut caves are dedicated to Lord Shiva. The site features impressive sculptures and carvings, with the massive Trimurti statue being the main highlight."
            },
            {
                "title": "Juhu Beach",
                "description": "Juhu Beach is one of the most popular and accessible beaches in Mumbai. Known for its street food stalls offering bhel puri, pav bhaji, and more, it’s a favorite evening hangout spot for locals and tourists alike. It also offers a great view of the sunset."
            },
            {
                "title": "Gateway of India",
                "description": "The Gateway of India is one of Mumbai’s most iconic landmarks, built during the British Raj. Overlooking the Arabian Sea, it attracts thousands of tourists and locals alike. The nearby ferry rides to Elephanta Caves and its historical significance make it a must-visit spot in the city."
            },
            {
                "title": "Marine Drive",
                "description": "Also known as the Queen’s Necklace, Marine Drive is a 3.6 km long boulevard that runs along the coast of South Mumbai. It's perfect for evening strolls, watching sunsets, or just enjoying the sea breeze. The view of the city’s skyline at night is breathtaking."
            },
            {
                "title": "Chhatrapati Shivaji Maharaj Terminus",
                "description": "A UNESCO World Heritage Site, this historic railway station is an architectural marvel that blends Victorian Gothic and Indian styles. It serves as a bustling transit hub and a magnificent symbol of Mumbai’s colonial past."
            },
            {
                "title": "Siddhivinayak Temple",
                "description": "Dedicated to Lord Ganesha, Siddhivinayak Temple in Prabhadevi is one of the most revered temples in Mumbai. The temple is known for its spiritual atmosphere, beautiful architecture, and daily rituals that attract thousands of devotees every day."
            },
            {
                "title": "Colaba Causeway",
                "description": "Colaba Causeway is a vibrant shopping street in South Mumbai, famous for its street shops, fashion boutiques, cafés, and old-world charm. It’s a great place to shop for quirky accessories, clothes, antiques, and experience Mumbai’s bustling vibe."
            },
            {
                "title": "Haji Ali Dargah",
                "description": "Built on an islet off the coast of Worli, Haji Ali Dargah is a revered shrine visited by people of all faiths. Accessible via a narrow causeway, it offers a spiritual experience alongside stunning views of the sea and the city skyline."
            },
            {
                "title": "Chor Bazaar",
                "description": "One of the largest and oldest flea markets in India, Chor Bazaar is famous for antiques, vintage collectibles, old Bollywood posters, and rare items. It’s a paradise for treasure hunters and those who enjoy exploring the quirky and historic side of Mumbai."
            }
        ],

"services": [
    {
        "name": "Hadapsar to Mumbai Cab",
        "description": "Swara Cab offers reliable and convenient cab services from Hadapsar to Mumbai for all kinds of travel needs. Whether you're heading for a business meeting, a family visit, or a vacation, we ensure timely pickups and smooth rides. Our cabs are well-maintained, sanitized, and driven by professional chauffeurs. Choose from a variety of car options to suit your preferences. Enjoy a hassle-free travel experience with our trusted Hadapsar to Mumbai cab service."
    },
    {
        "name": "Cab Booking Hadapsar to Mumbai",
        "description": "Book your Hadapsar to Mumbai cab in minutes with Swara Cab’s easy and user-friendly booking system. Whether you prefer booking through our app, website, or customer support, we offer seamless options with instant confirmation. Avoid long waits and get real-time updates on your cab status. We offer flexible schedules and affordable pricing for all users. Book today and travel stress-free."
    },
    {
        "name": "Online Taxi Hadapsar to Mumbai",
        "description": "Swara Cab brings you quick and simple online taxi booking from Hadapsar to Mumbai. Enjoy the convenience of 24/7 access, multiple vehicle choices, and transparent pricing right at your fingertips. Just enter your travel details and get instant fare estimates and confirmations. No more last-minute worries—your taxi is just a few clicks away. Travel smart with Swara Cab online services."
    },
    {
        "name": "AC Cab from Hadapsar",
        "description": "Beat the heat and travel in comfort with Swara Cab’s air-conditioned cabs from Hadapsar to Mumbai. Our AC taxis are ideal for long-distance trips, ensuring a refreshing and cool environment throughout the ride. Every vehicle is thoroughly cleaned, well-maintained, and equipped with basic amenities. Whether it’s day or night, our AC cabs offer a relaxed and enjoyable journey. Book now for a breezy ride to Mumbai."
    },
    {
        "name": "Hadapsar to Mumbai One-Way Cab",
        "description": "Swara Cab offers affordable and convenient one-way cab services from Hadapsar to Mumbai. Perfect for travelers who don't need a return trip, our one-way rides are cost-effective with no hidden charges. Choose from a variety of vehicles based on your group size and comfort. We provide timely pickups and safe drop-offs anywhere in Mumbai. Travel smart, pay only for what you need."
    },
    {
        "name": "Reliable Hadapsar Cab to Mumbai",
        "description": "Count on Swara Cab for reliable cab service from Hadapsar to Mumbai. Our professionally trained drivers ensure punctuality and safety throughout the journey. All cabs are GPS-enabled and regularly inspected for cleanliness and performance. Whether it’s an early morning flight or a late-night meeting, we’re there when you need us. Reliability is our promise, every time you book."
    },
    {
        "name": "Affordable Cab Hire Hadapsar",
        "description": "Looking for a budget-friendly travel option? Swara Cab offers affordable cab hire from Hadapsar to Mumbai without compromising on service quality. We provide transparent pricing, no surge fees, and a range of vehicle options. Ideal for students, working professionals, and families who want comfort at a reasonable rate. Book your affordable ride now and save more."
    },
    {
        "name": "Round Trip Hadapsar to Mumbai",
        "description": "Need to return the same day? Swara Cab provides round trip services from Hadapsar to Mumbai that are perfect for events, business meetings, or family visits. Keep the same car and driver for both legs of your trip and travel at your own pace. Enjoy flexibility and convenience without rebooking. Plan your round trip today for a seamless experience."
    },
    {
        "name": "Mumbai Airport Pickup Hadapsar",
        "description": "Swara Cab offers prompt and dependable airport pickup services from Mumbai to Hadapsar. Our drivers track your flight for accurate timing and provide assistance with luggage upon arrival. Whether landing at Terminal 1 or 2, we ensure a smooth transition from airport to home. Avoid long queues and ride comfortably after your flight. Pre-book your airport pickup for complete peace of mind."
    },
    {
        "name": "Executive Cab Service Hadapsar",
        "description": "For business travelers and professionals, Swara Cab offers executive cab services from Hadapsar to Mumbai. Enjoy plush interiors, quiet cabins, and professional chauffeurs who understand punctuality. Our executive fleet is perfect for meetings, corporate drop-offs, and airport runs. Travel in style and make the right impression every time. Book your executive ride today."
    },
    {
        "name": "Hadapsar to Mumbai SUV Taxi",
        "description": "Traveling with family or carrying extra luggage? Swara Cab provides spacious SUV taxis from Hadapsar to Mumbai. Our SUVs offer plenty of legroom, high ground clearance, and superior comfort for long-distance journeys. Ideal for groups, airport transfers, or leisurely travel. Experience a premium ride with extra space and comfort on the go."
    },
    {
        "name": "Taxi Fare Hadapsar to Mumbai",
        "description": "Curious about pricing? Swara Cab provides transparent and affordable taxi fare for Hadapsar to Mumbai trips. Our fare includes fuel, driver charges, and tolls (if opted), with no hidden costs. Use our online fare estimator to plan your trip in advance. We offer clear, upfront pricing you can trust. Ride comfortably within your budget."
    },
    {
        "name": "Book Now Hadapsar to Mumbai Cab",
        "description": "Don’t wait! Book your Hadapsar to Mumbai cab now with Swara Cab’s quick booking system. Just enter your details, choose your vehicle, and confirm your ride in seconds. Whether you need a ride in 15 minutes or tomorrow morning, we’re here to help. Our cabs are punctual, clean, and driven by verified professionals. Book now and enjoy peace of mind."
    },
    {
        "name": "Corporate Cabs Hadapsar to Mumbai",
        "description": "Swara Cab offers dedicated corporate cab services for Hadapsar to Mumbai travel. Perfect for employee transport, business meetings, and executive travel, our service includes invoice billing, account management, and on-time performance. Our corporate fleet is well-maintained and driven by experienced professionals. Streamline your business travel with our trusted cab partner."
    },
    {
        "name": "24/7 Hadapsar Cab Booking",
        "description": "Need a cab at odd hours? Swara Cab provides 24/7 cab booking from Hadapsar to Mumbai, ensuring you're covered any time of day or night. Whether it's a late-night airport drop or an early morning appointment, we’re ready to serve. Our support team is also available around the clock for bookings and queries. Travel any time with confidence."
    }
],

"tableData": [
    ["Hadapsar to Mumbai Cab", "Cab Booking Hadapsar to Mumbai"],
    ["Online Taxi Hadapsar to Mumbai", "AC Cab from Hadapsar"],
    ["Hadapsar to Mumbai One-Way Cab", "Reliable Hadapsar Cab to Mumbai"],
    ["Affordable Cab Hire Hadapsar", "Round Trip Hadapsar to Mumbai"],
    ["Mumbai Airport Pickup Hadapsar", "Executive Cab Service Hadapsar"],
    ["Hadapsar to Mumbai SUV Taxi", "Taxi Fare Hadapsar to Mumbai"],
    ["Book Now Hadapsar to Mumbai Cab", "Corporate Cabs Hadapsar to Mumbai"],
    ["24/7 Hadapsar Cab Booking", ""]
],





"whychoose": [
  {
    "WhyChooseheading": "Reliable and Punctual Hadapsar to Mumbai Cab Service",
    "WhyChoosedescription": "We prioritize your time by ensuring timely pickups and drop-offs from Hadapsar to Mumbai. Whether it’s for an early morning flight, business meeting, or a personal trip, our drivers use real-time traffic updates to provide the fastest and most efficient route."
  },
  {
    "WhyChooseheading": "Comfortable and Well-Maintained Vehicles",
    "WhyChoosedescription": "Our fleet includes a variety of vehicles from economical sedans to premium SUVs like Innova Crysta and Ertiga, all regularly serviced and sanitized. Every vehicle comes equipped with air conditioning and comfortable seating to make your long journey as relaxing as possible."
  },
  {
    "WhyChooseheading": "Transparent Pricing with No Hidden Charges",
    "WhyChoosedescription": "We offer upfront pricing for Hadapsar to Mumbai cab rides, inclusive of tolls, taxes, and driver allowances. This transparent pricing policy ensures no surprises at the end of your trip and helps you plan your travel budget confidently."
  },
  {
    "WhyChooseheading": "Experienced and Professional Drivers",
    "WhyChoosedescription": "Our drivers are carefully vetted and trained for safe driving and excellent customer service. They are well-acquainted with the Pune-Mumbai Expressway and alternative routes to avoid traffic congestion, ensuring a smooth and secure ride."
  },
  {
    "WhyChooseheading": "24/7 Availability for Your Convenience",
    "WhyChoosedescription": "No matter what time you need to travel, our Hadapsar to Mumbai cab service is available round the clock. Whether it’s a late-night arrival or an early morning departure, we are ready to serve you with prompt and reliable cabs."
  },
  {
    "WhyChooseheading": "Simple and Flexible Booking Options",
    "WhyChoosedescription": "You can easily book your cab via our website, mobile app, or phone with instant confirmation. We provide flexible cancellation and rescheduling policies, ensuring your plans remain hassle-free and adaptable."
  },
  {
    "WhyChooseheading": "Safety and Hygiene You Can Trust",
    "WhyChoosedescription": "Your health and safety are our priorities. Our vehicles are regularly disinfected, and drivers follow strict hygiene protocols, especially important for long-distance trips. Additionally, all vehicles are equipped with safety features like seat belts and GPS tracking."
  },
  {
    "WhyChooseheading": "Perfect for Both Business and Leisure Travelers",
    "WhyChoosedescription": "Whether traveling for work or pleasure, our Hadapsar to Mumbai cab service caters to all your needs. Experience professionalism, comfort, and convenience whether it’s a corporate trip, airport transfer, or family outing."
  }
]










    }



const faqData = [
    {
        question: "Do you provide cab service from Hadapsar to Mumbai?",
        answer: "Yes, Swara Cabs offers reliable and comfortable cab services from Hadapsar, Pune to all major destinations in Mumbai."
    },
    {
        question: "What is the fare for a Hadapsar to Mumbai cab?",
        answer: "Our one-way fares start from ₹5,600 for a standard sedan. Prices vary based on vehicle type and travel time."
    },
    {
        question: "How do I book a cab from Hadapsar to Mumbai?",
        answer: "You can book online through our website or call us directly at +91 9697780707. Our team will assist you with instant confirmation."
    },
    {
        question: "Which vehicles are available for Hadapsar to Mumbai travel?",
        answer: "We offer sedans, SUVs, and tempo travellers to meet various group sizes and comfort needs."
    },
    {
        question: "Is the fare inclusive of tolls, driver charges, and taxes?",
        answer: "Yes, all fares include tolls, driver allowance, and applicable taxes. You pay only the quoted amount."
    },
    {
        question: "Do you offer airport drops from Hadapsar to Mumbai?",
        answer: "Yes, we provide prompt and reliable airport drop services from Hadapsar to Mumbai Domestic and International Airports."
    },
    {
        question: "Is night travel available from Hadapsar to Mumbai?",
        answer: "Yes, we operate 24/7. Night-time travel is available with a nominal surcharge between 10 PM and 6 AM."
    },
    {
        question: "Can I book a round trip from Hadapsar to Mumbai?",
        answer: "Yes, round-trip bookings are available. You can also schedule a return pickup at your convenience."
    },
    {
        question: "Is the service safe for solo travelers?",
        answer: "Absolutely. Our drivers are background-verified, and your safety is our top priority."
    },
    {
        question: "What payment options are available for this service?",
        answer: "We accept UPI, cash, credit/debit cards, and most digital wallets. Choose what suits you best at the time of booking."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Swapnil Gite',
        review: 'Booked a Hadapsar to Mumbai cab with Swara Cabs. The experience was smooth, the car was clean, and the driver was very courteous.'
    },
    {
        name: 'Ms. Rutuja Patil',
        review: 'Swara Cabs made my airport drop from Hadapsar to Mumbai very convenient. Hassle-free booking and great service throughout the journey.'
    }
];






























    const contactData = {
        heading: `${cardData.keyword} Contact Number`,
        contactNumbers: [
            "+91 9697780707",
            "+91 8975330707",

        ],
        email: "booking@swaracabs.in"
    };


    const Images = [
        {
            place: "/images/keyword/1.jpg",
            text: "Pune to Mumbai Taxi Fare",
        },
        {
            place: "/images/keyword/2.jpg",
            text: "Pune to Mumbai Online Cab Booking",
        },
        {
            place: "/images/keyword/3.jpg",
            text: "Pimpri Chinchwad to Mumbai Cab",
        },
        {
            place: "/images/keyword/4.jpg",
            text: "Baner to Mumbai Cabs",
        },
        {
            place: "/images/keyword/5.jpg",
            text: "Hinjewadi to Mumbai Cab",
        },
        {
            place: "/images/keyword/6.jpg",
            text: "Pimple Saudagar to Mumbai Cab Service",
        },
        {
            place: "/images/keyword/7.jpg",
            text: "Wakad to Mumbai Cab",
        },
        {
            place: "/images/keyword/8.jpg",
            text: "Hadapsar to Mumbai Cab",
        },
        {
            place: "/images/keyword/9.jpg",
            text: "Kalyani Nagar to Mumbai Taxi",
        },
        {
            place: "/images/keyword/10.jpg",
            text: "Koregaon Park to Mumbai Cab",
        },
        {
            place: "/images/keyword/11.jpg",
            text: "Kothrud to Mumbai Cab",
        },
        {
            place: "/images/keyword/12.jpg",
            text: "Kharadi to Mumbai Cab",
        },
        {
            place: "/images/keyword/13.jpg",
            text: "Shivajinagar to Mumbai Cab",
        },
        {
            place: "/images/keyword/14.jpg",
            text: "Pune to Mumbai Ertiga Cab",
        },
        {
            place: "/images/keyword/15.jpg",
            text: "Pune to Mumbai Innova Crysta Cab",
        },
        {
            place: "/images/keyword/16.jpg",
            text: "Pune to Mumbai Sedan Cab",
        },
        {
            place: "/images/keyword/17.jpg",
            text: "Kondhwa to Mumbai cab",
        },
        {
            place: "/images/keyword/18.jpg",
            text: "Viman Nagar to Mumbai Cabs",
        },
        {
            place: "/images/keyword/19.jpg",
            text: "Katraj to Mumbai Cab Service",
        },
        {
            place: "/images/keyword/20.jpg",
            text: "Pune Station to Mumbai Cabs Service",
        },
        {
            place: "/images/keyword/22.jpg",
            text: "Mumbai to Pune Cabs",
        },
        {
            place: "/images/keyword/23.jpg",
            text: "Mumbai Airport to Pune Cab",
        },
        {
            place: "/images/keyword/24.jpg",
            text: "Dadar to Pune Cab",
        },
        {
            place: "/images/keyword/25.jpg",
            text: "Mumbai to Pune One Way Cab",
        },
        {
            place: "/images/keyword/26.jpg",
            text: "Andheri to Pune Cab",
        },
        {
            place: "/images/keyword/27.jpg",
            text: "Bandra to Pune Cab",
        },
    ];


    const images = [
        { src: "/images/ourfleet/1.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/5.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/2.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/3.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/4.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/7.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/8.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/9.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/6.jpg", alt: "Image 1" },

    ];






const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Hadapsar to Mumbai Cab",
  "image": "https://www.swaracabs.in/assets/images/hadapsar-to-mumbai-cab.jpg",
  "description": "Book Hadapsar to Mumbai cab with Swara Cabs for reliable, affordable, and comfortable travel. AC sedans and SUVs available for one-way, round-trip, and airport transfers with verified drivers.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.7",
    "ratingCount": "9685"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2299",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/hadapsar-to-mumbai-cab"
  }
};






    return (
        <div>
<Helmet>
  <title>Hadapsar to Mumbai Cab | Affordable & Reliable | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Hadapsar to Mumbai cab with Swara Cabs for reliable, affordable, and comfortable travel. AC sedans and SUVs available for one-way, round-trip, and airport transfers with verified drivers." 
  />
  <meta 
    name="keywords" 
    content="Hadapsar to Mumbai Cab, Cab Booking Hadapsar to Mumbai, Online Taxi Hadapsar to Mumbai, AC Cab from Hadapsar, Hadapsar to Mumbai One-Way Cab, Reliable Hadapsar Cab to Mumbai, Affordable Cab Hire Hadapsar, Round Trip Hadapsar to Mumbai, Mumbai Airport Pickup Hadapsar, Executive Cab Service Hadapsar, Hadapsar to Mumbai SUV Taxi, Taxi Fare Hadapsar to Mumbai, Book Now Hadapsar to Mumbai Cab, Corporate Cabs Hadapsar to Mumbai, 24/7 Hadapsar Cab Booking" 
  />
  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
  </script>
</Helmet>
            <section id="slider" className="hero p-0 odd featured">
                <div className="swiper-container no-slider animation slider-h-50 slider-h-auto">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide slide-center">

                            <div className="slide-content row text-center">
                                <div className="col-12 mx-auto inner">
                                    <h1 className="mb-0 title effect-static-text pt-5">{cardData.keyword}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section id="about" className="jarallax text-light py-0">
                <div className="center-y relative text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid py-0" >
                    <div className="row ">
                        <div className="col-12 col-md-7 ">
                            <img src='/images/keyword/8.jpg' alt='img' />
                            <h3 className="py-1"
                                style={{
                                    color: '#AA5225', // Red color for the title 
                                    textShadow: '5px 5px 10px rgba(255, 255, 255, 0.7)', // Light shadow effect
                                    fontWeight: 'bold'
                                }}


                            >{cardData.heading} </h3><p className='fw-bold '>{cardData.headingDescription}</p>
                            <div className="">
                                <p className='fw-bold py-3 darkcolorrr'>{cardData.top}</p>
                                {cardData.topPlaces.map((place, index) => (
                                    <div key={index} className="">
                                        <div
                                            style={{
                                                cursor: 'pointer',
                                                padding: '10px',
                                                marginBottom: '7px',
                                                borderRadius: '8px',
                                                transition: 'transform 0.2s'
                                            }}

                                        >
                                            <h4 className="mb-1 darkcolorrr">{place.title}</h4>
                                            <p className="mb-0">{place.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div
                                style={{
                                    cursor: 'pointer',
                                    padding: '10px',
                                    marginBottom: '7px',
                                    borderRadius: '8px', // Optional: rounded corners
                                    transition: 'transform 0.2s' // Optional: smooth scaling effect
                                }}
                            >
                                {cardData.services.map((service, index) => (
                                    <div key={index} className=" my-4">
                                        <h4 className="py-1 darkcolorrr">{service.name}</h4>
                                        <p>{service.description}</p>
                                    </div>
                                ))}
                            </div>

                            <table className="table table-responsive Border-key my-2">
                                <tbody className=' Border-key'>
                                    {cardData.tableData.map((row, rowIndex) => (
                                        <tr className='Border-key ' key={rowIndex}>
                                            {row.map((cell, cellIndex) => (
                                                <td key={cellIndex} className=' Border-key bluecolor fw-bold' >{cell}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <h3 className='pt-md-3'>{cardData.keyword + " Rates"}</h3>
                            <BusRatesTable />

                            <div id="why-choose-section"
                                className='px-2'>
                                <h2 className='whycolor py-3'>Why Choose us for  {cardData.keyword}</h2>
                                {cardData.whychoose.map((item, index) => (
                                    <div key={index}>
                                        <h4 className="py-1 whycolor">{item.WhyChooseheading}</h4>
                                        <p>{item.WhyChoosedescription}</p>
                                    </div>
                                ))}
                            </div>


                            <div className="row twm-faq-section-1 m-b30">


                                <div className=" col-md-12 wow fadeInDown" data-wow-delay="0.2">
                                    <div className="twm-faq-info-wrap">

                                        <div className="section-head left">
                                            <h2 className="twm-large-title site-text-dark darkcolor">FAQS {cardData.keyword} For  Swara cabs</h2>
                                        </div>


                                        <div className="twm-faq-info">
                                            <div className="accordion twm-acdn" id="sf-faq-accordion">

                                                <Accordion data={faqData} />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <Testimonialskeywords
                                sectionId="customer-feedback"
                                title="Customer"
                                subtitle="Reviews"
                                testimonials={testimonialsData}
                            />
                            <div className='py-4'>

                                <div className="contact-box Borderr">
                                    <h3>{contactData.heading}</h3>
                                    <p className='text-black'>For booking inquiries or any assistance, please feel free to contact us:</p>
                                    <div className="contact-details">
                                        <p><strong className='darkcolor'>Mobile No:</strong></p>
                                        <ul>
                                            {contactData.contactNumbers.map((number, index) => (
                                                <li key={index}>
                                                    <a href={`tel:${number}`} className="contact-link fw-bold fs-5">
                                                        {number}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                        <p><strong className='darkcolor'>Email Id: </strong>
                                            <a href={`mailto:${contactData.email}`} className="contact-link">
                                                {contactData.email}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 col-md-4' >
                            {Images.map((e) => {
                                return (
                                    <div className="box1">
                                        <a
                                            href="./"
                                            className="d-flex justify-content-around align-items-center"
                                        >
                                            <div className="b1">
                                                <img src={e.place} alt="img" />
                                            </div>
                                            <div className="b2">
                                                {" "}
                                                <a href="./" className='px-3'>{e.text}</a>
                                            </div>
                                        </a>
                                    </div>
                                );
                            })}


                            <div className="gallery-container">
                                <h2 className="gallery-title">Our Fleets</h2>
                                <div className="gallery-row d-flex flex-wrap">
                                    {images.map((image, index) => (
                                        <div className="gallery-item col-md-4" key={index}>
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="gallery-image"

                                            />
                                        </div>
                                    ))}

                                </div>
                            </div>

                            <div className=" rounded p-4 shadow-sm Uni_border "
                                style={{
                                    cursor: 'pointer',
                                    padding: '10px',
                                    border: '3px dotted #AA5126',
                                    marginBottom: '7px',
                                    fontWeight: 'bold',
                                }}

                            >
                                <h4 className="pb-3 pt-3 lead fw-bold text-dark">Contact Information</h4>

                                <div className="row">

                                    <div className="col-12 mb-3">
                                        <div className="Small_border  rounded text-center py-2 " style={{ backgroundColor: '#AA5126' }}>
                                            <h4 className=" lead fw-semibold whitt text-darkk">Phone Numbers</h4>
                                            <i className="bi bi-telephone-fill fs-1 mb-2"></i>
                                            <div className=''>
                                                <a href="tel:+919697780707" className="d-block  text-white">+91 9697780707</a>
                                                <a href="tel:+918975330707" className="d-block  text-white">+91 8975330707</a>



                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-12 mb-3 ">
                                        <div className="Small_border rounded text-center">
                                            <i className="bi bi-envelope fs-1 mb-2"></i>
                                            <div className='rounded py-2' style={{ backgroundColor: '#AA5126' }}>
                                                <h4 className=" fw-semibold lead whitt text-darkk">Email</h4>
                                                <a href="mailto:booking@swaracabs.in" className=" text-white d-block">
                                                    booking@swaracabs.in
                                                </a>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-12 mb-3 ">
                                        <div className="Small_border  rounded text-center">
                                            <i className="bi bi-house-fill fs-1 mb-2"></i>
                                            <div className='rounded py-2' style={{ backgroundColor: '#AA5126' }}>
                                                <h4 className=" fw-semibold lead whitt text-darkk">Address</h4>
                                                <p className="whit text-white ">
                                                    <i> Swara Cabs : <br />
                                                        Near Ambika Mata Mandir, Ghorpade Wasti Loni Kalbhor, Tal - Haveli, Dist - Pune, Maharashtra, India.
                                                    </i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
}

export default Hadapsartomumbaicab;