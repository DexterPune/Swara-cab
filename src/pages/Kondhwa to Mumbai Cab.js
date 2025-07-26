
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Kondhwatomumbaicab() {



    const cardData =
    {
        keyword: 'Kondhwa to Mumbai Cab',
        heading: 'Swara Cabs : Kondhwa to Mumbai Cab',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable cab services for your journey from Kondhwa to Mumbai. Mumbai, Maharashtra’s vibrant commercial and cultural capital, is renowned for its iconic skyline, bustling streets, and dynamic urban energy. Whether you’re traveling for a business meeting, visiting family, or catching a flight, Swara Cabs ensures a seamless and hassle-free experience. The road distance from Kondhwa to Mumbai is approximately 150 kilometers, with a travel time of around 3 to 4 hours depending on traffic conditions. With our well-maintained fleet and professional drivers, Swara Cabs guarantees a safe, punctual, and comfortable ride tailored to your travel needs.',

        top: 'Top Places to Visit in Mumbai with Swara Cabs',

        "topPlaces": [
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
                "title": "Gateway of India",
                "description": "The Gateway of India is one of Mumbai’s most iconic landmarks, built during the British Raj. Overlooking the Arabian Sea, it attracts thousands of tourists and locals alike. The nearby ferry rides to Elephanta Caves and its historical significance make it a must-visit spot in the city."
            },
            {
                "title": "Elephanta Caves",
                "description": "Located on Elephanta Island, a short ferry ride from the Gateway of India, these ancient rock-cut caves are dedicated to Lord Shiva. The site features impressive sculptures and carvings, with the massive Trimurti statue being the main highlight."
            },
            {
                "title": "Juhu Beach",
                "description": "Juhu Beach is one of the most popular and accessible beaches in Mumbai. Known for its street food stalls offering bhel puri, pav bhaji, and more, it’s a favorite evening hangout spot for locals and tourists alike. It also offers a great view of the sunset."
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
        "name": "Kondhwa to Mumbai Cab",
        "description": "Experience a comfortable and hassle-free journey from Kondhwa to Mumbai with our dependable cab service. Whether you’re traveling for business or leisure, our well-maintained vehicles and professional drivers ensure you reach your destination safely and on time."
    },
    {
        "name": "Kondhwa to Mumbai Taxi Hire",
        "description": "Hire a taxi from Kondhwa to Mumbai for a personalized and flexible travel experience. Our taxi hire service allows you to choose the vehicle type that best suits your needs, whether it’s for solo travel, family outings, or group trips."
    },
    {
        "name": "One-Way Cab Kondhwa to Mumbai",
        "description": "Need a straightforward, point-to-point ride? Our one-way cab service from Kondhwa to Mumbai offers a direct and convenient option for travelers who require a quick and efficient transfer without worrying about the return journey."
    },
    {
        "name": "Round Trip Kondhwa to Mumbai Taxi",
        "description": "Planning to return the same day or within a few days? Our round-trip taxi service from Kondhwa to Mumbai provides flexibility and comfort, with a dedicated driver ready to pick you up for your return journey whenever you’re ready."
    },
    {
        "name": "AC Cab Kondhwa to Mumbai",
        "description": "Stay cool and comfortable throughout your journey with our air-conditioned cab service from Kondhwa to Mumbai. Our AC vehicles are regularly serviced to provide a smooth and refreshing travel experience regardless of the weather outside."
    },
    {
        "name": "Affordable Cab Kondhwa to Mumbai",
        "description": "Travel smart with our affordable cab options that don’t compromise on comfort or safety. We offer competitive pricing for all budgets, ensuring you get the best value for your ride from Kondhwa to Mumbai."
    },
    {
        "name": "Online Cab Booking Kondhwa",
        "description": "Booking your cab from Kondhwa to Mumbai is quick and easy with our online platform. Get instant confirmation, transparent pricing, and 24/7 customer support to make your travel planning seamless and stress-free."
    },
    {
        "name": "Kondhwa to Mumbai Sedan Taxi",
        "description": "Choose our sedan taxis for a perfect blend of style, space, and economy. Ideal for business travelers and small families, our sedan cabs offer a comfortable and smooth ride from Kondhwa to Mumbai."
    },
    {
        "name": "SUV Cab from Kondhwa",
        "description": "For larger groups or travelers needing extra luggage space, our SUV cab service from Kondhwa to Mumbai is the ideal choice. Spacious interiors and robust performance ensure a comfortable journey for all passengers."
    },
    {
        "name": "Kondhwa to Mumbai Airport Cab",
        "description": "Catch your flight on time with our reliable airport cab service from Kondhwa to Mumbai. Our drivers monitor flight schedules and provide punctual pickups and drop-offs, making your airport transfers smooth and stress-free."
    },
    {
        "name": "Verified Drivers Kondhwa to Mumbai",
        "description": "Your safety is our priority. All our drivers are thoroughly verified and trained to provide courteous, safe, and professional service on every trip from Kondhwa to Mumbai."
    },
    {
        "name": "Safe Cab Service Kondhwa",
        "description": "We adhere to strict safety protocols, including regular vehicle sanitization and driver health checks, to ensure a secure and comfortable journey from Kondhwa to Mumbai during these times."
    },
    {
        "name": "24/7 Cab Kondhwa to Mumbai",
        "description": "No matter the hour, our 24/7 cab service from Kondhwa to Mumbai is ready to serve you. Whether it’s an early morning flight or a late-night meeting, you can rely on us anytime."
    },
    {
        "name": "Executive Taxi Kondhwa to Mumbai",
        "description": "Travel in style and professionalism with our executive taxi service. Perfect for corporate clients and business travelers seeking luxury, comfort, and punctuality on their journey from Kondhwa to Mumbai."
    },
    {
        "name": "Business Travel Kondhwa to Mumbai",
        "description": "Our specialized business travel service from Kondhwa to Mumbai ensures a seamless and productive ride. With amenities tailored to business needs, including Wi-Fi and charging ports, stay connected on the go."
    }
],

"tableData": [
    ["Kondhwa to Mumbai Cab", "Kondhwa to Mumbai Taxi Hire"],
    ["One-Way Cab Kondhwa to Mumbai", "Round Trip Kondhwa to Mumbai Taxi"],
    ["AC Cab Kondhwa to Mumbai", "Affordable Cab Kondhwa to Mumbai"],
    ["Online Cab Booking Kondhwa", "Kondhwa to Mumbai Sedan Taxi"],
    ["SUV Cab from Kondhwa", "Kondhwa to Mumbai Airport Cab"],
    ["Verified Drivers Kondhwa to Mumbai", "Safe Cab Service Kondhwa"],
    ["24/7 Cab Kondhwa to Mumbai", "Executive Taxi Kondhwa to Mumbai"],
    ["Business Travel Kondhwa to Mumbai", ""]
],




"whychoose": [
  {
    "WhyChooseheading": "Doorstep Pickup from Kondhwa to Mumbai",
    "WhyChoosedescription": "Enjoy seamless travel starting right from your doorstep in Kondhwa. Our cab service ensures timely pickup and drop-off to your desired location in Mumbai, eliminating the need for extra travel or wait times at pick-up points."
  },
  {
    "WhyChooseheading": "Comfortable and Clean Cabs for Long-Distance Travel",
    "WhyChoosedescription": "Travel in well-maintained, air-conditioned cabs that are cleaned and sanitized before every ride. Whether you choose a sedan, Ertiga, or Innova, we provide a smooth and comfortable ride for the long Pune to Mumbai journey."
  },
  {
    "WhyChooseheading": "Affordable Fixed Fare Pricing",
    "WhyChoosedescription": "We offer competitive and transparent pricing with no hidden costs. Our Kondhwa to Mumbai cab fare includes tolls, taxes, and driver charges so you can plan your budget without surprises."
  },
  {
    "WhyChooseheading": "Professional and Friendly Drivers",
    "WhyChoosedescription": "Our courteous drivers are trained for intercity travel, well-versed with the Kondhwa to Mumbai route, and committed to safe driving. They assist with luggage, follow traffic norms, and ensure a pleasant journey experience."
  },
  {
    "WhyChooseheading": "24/7 Cab Availability from Kondhwa",
    "WhyChoosedescription": "No matter what time you need to travel—early morning or late night—we are available round the clock. Our 24/7 service is especially convenient for airport transfers and urgent travel plans."
  },
  {
    "WhyChooseheading": "Flexible Vehicle Options to Suit Your Needs",
    "WhyChoosedescription": "Choose from a range of vehicles including budget sedans, 6-seater Ertigas, and luxury Innova Crystas based on your group size, comfort preference, and luggage requirements."
  },
  {
    "WhyChooseheading": "Easy Online Booking and Confirmation",
    "WhyChoosedescription": "Book your cab online in minutes through our website or mobile app. You’ll receive instant confirmation along with driver and cab details for complete peace of mind before your journey begins."
  },
  {
    "WhyChooseheading": "Safe and Sanitized Travel",
    "WhyChoosedescription": "All cabs are sanitized after every trip and follow hygiene protocols strictly. GPS tracking, seatbelts, and experienced drivers ensure safety while hygiene kits and AC filtration systems ensure comfort and cleanliness."
  }
]

















    }



const faqData = [
    {
        question: "Do you provide cab services from Kondhwa to Mumbai?",
        answer: "Yes, Swara Cabs offers reliable and comfortable cab services from Kondhwa, Pune to Mumbai, including airport transfers and outstation trips."
    },
    {
        question: "What is the fare for a Kondhwa to Mumbai cab?",
        answer: "The one-way fare starts from ₹5,500 for a sedan. Final prices depend on vehicle type and travel time."
    },
    {
        question: "How can I book a cab from Kondhwa to Mumbai?",
        answer: "You can book online via our website or call +91 9697780707 for quick booking and instant confirmation."
    },
    {
        question: "What types of vehicles are available for this route?",
        answer: "We offer sedans, SUVs, Innova Crysta, and tempo travellers to suit different group sizes and preferences."
    },
    {
        question: "Are tolls and driver charges included in the fare?",
        answer: "Yes, all charges including tolls, driver allowance, and taxes are included in the quoted fare."
    },
    {
        question: "Is night travel available from Kondhwa to Mumbai?",
        answer: "Yes, we provide 24/7 service with a small surcharge for trips between 10 PM and 6 AM."
    },
    {
        question: "Can I book a round trip from Kondhwa to Mumbai?",
        answer: "Absolutely. Round-trip bookings are available and can be scheduled according to your convenience."
    },
    {
        question: "Is it safe to travel with Swara Cabs?",
        answer: "Yes, all our drivers are background-verified and trained to ensure your safety and comfort."
    },
    {
        question: "Are airport transfers included in your services?",
        answer: "Yes, we specialize in timely airport drop and pickup services between Kondhwa and Mumbai airports."
    },
    {
        question: "What payment options are accepted?",
        answer: "We accept UPI, cash, credit/debit cards, and popular digital wallets for easy payments."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Anil Kulkarni',
        review: 'Swara Cabs made my trip from Kondhwa to Mumbai hassle-free and comfortable. The driver was punctual and courteous.'
    },
    {
        name: 'Ms. Sheetal Patil',
        review: 'Excellent service by Swara Cabs from Kondhwa to Mumbai. Clean car and smooth ride. Will definitely book again!'
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
  "name": "Kondhwa to Mumbai Cab",
  "image": "https://www.swaracabs.in/assets/images/kondhwa-to-mumbai-cab.jpg",
  "description": "Book Kondhwa to Mumbai cab with Swara Cabs for reliable, safe, and affordable travel. Choose from AC sedans and SUVs for one-way, round-trip, and airport transfers with verified drivers.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "9865"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2299",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/kondhwa-to-mumbai-cab"
  }
};




    return (
        <div>
<Helmet>
  <title>Kondhwa to Mumbai Cab | Reliable & Affordable Travel | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Kondhwa to Mumbai cab with Swara Cabs for reliable, safe, and affordable travel. Choose from AC sedans and SUVs for one-way, round-trip, and airport transfers with verified drivers." 
  />
  <meta 
    name="keywords" 
    content="Kondhwa to Mumbai Cab, Kondhwa to Mumbai Taxi Hire, One-Way Cab Kondhwa to Mumbai, Round Trip Kondhwa to Mumbai Taxi, AC Cab Kondhwa to Mumbai, Affordable Cab Kondhwa to Mumbai, Online Cab Booking Kondhwa, Kondhwa to Mumbai Sedan Taxi, SUV Cab from Kondhwa, Kondhwa to Mumbai Airport Cab, Verified Drivers Kondhwa to Mumbai, Safe Cab Service Kondhwa, 24/7 Cab Kondhwa to Mumbai, Executive Taxi Kondhwa to Mumbai, Business Travel Kondhwa to Mumbai" 
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
                            <img src='/images/keyword/17.jpg' alt='img' />
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

export default Kondhwatomumbaicab;