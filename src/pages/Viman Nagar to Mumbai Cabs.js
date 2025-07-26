
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Vimannagartomumbaicabs() {



    const cardData =
    {
        keyword: 'Viman Nagar to Mumbai Cabs',
        heading: 'Swara Cabs : Viman Nagar to Mumbai Cabs',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable cab services for your journey from Viman Nagar to Mumbai. Mumbai, Maharashtra’s vibrant commercial and cultural capital, is renowned for its iconic skyline, bustling streets, and dynamic urban energy. Whether you’re traveling for a business meeting, visiting family, or catching a flight, Swara Cabs ensures a smooth and stress-free experience. The road distance from Viman Nagar to Mumbai is approximately 150 kilometers, with a travel time of around 3 to 4 hours depending on traffic conditions. With our well-maintained fleet and professional drivers, Swara Cabs guarantees a safe, punctual, and comfortable ride tailored to your travel needs.',

        top: 'Top Places to Visit in Mumbai with Swara Cabs',

        "topPlaces": [
             {
                "title": "Gateway of India",
                "description": "The Gateway of India is one of Mumbai’s most iconic landmarks, built during the British Raj. Overlooking the Arabian Sea, it attracts thousands of tourists and locals alike. The nearby ferry rides to Elephanta Caves and its historical significance make it a must-visit spot in the city."
            },
            {
                "title": "Elephanta Caves",
                "description": "Located on Elephanta Island, a short ferry ride from the Gateway of India, these ancient rock-cut caves are dedicated to Lord Shiva. The site features impressive sculptures and carvings, with the massive Trimurti statue being the main highlight."
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
        "name": "Viman Nagar to Mumbai Cabs",
        "description": "Travel from Viman Nagar to Mumbai with ease using our reliable cab services. Whether you’re heading to Mumbai for work, leisure, or airport transfers, we provide comfortable, punctual, and well-maintained cabs to make your journey stress-free. Our drivers are courteous and familiar with the best routes, ensuring you reach your destination on time."
    },
    {
        "name": "Online Cabs Viman Nagar to Mumbai",
        "description": "Book your cab online from Viman Nagar to Mumbai with just a few clicks. Our seamless online booking system provides instant confirmation, transparent pricing, and flexible scheduling options. Enjoy convenience, flexibility, and safety when you choose our digital-first cab services."
    },
    {
        "name": "AC Taxi Viman Nagar to Mumbai",
        "description": "Beat the heat and travel in comfort with our air-conditioned taxis from Viman Nagar to Mumbai. Our AC cabs are well-serviced, clean, and equipped for long journeys, offering a relaxed and cool travel experience, even during peak hours or hot weather."
    },
    {
        "name": "Viman Nagar to Mumbai One-Way Cab",
        "description": "Need a one-way drop to Mumbai? Our one-way cab service from Viman Nagar is a cost-effective solution for solo or family travelers. No hidden return charges—just a straightforward, direct ride with professional drivers and comfortable vehicles."
    },
    {
        "name": "Affordable Fare Viman Nagar Cab",
        "description": "Looking for a budget-friendly ride without compromising quality? Our affordable cab service from Viman Nagar to Mumbai gives you value for money with fixed pricing, fuel-inclusive rates, and no hidden charges. Get premium service at a pocket-friendly cost."
    },
    {
        "name": "Viman Nagar Airport Cab to Mumbai",
        "description": "Book our airport transfer service from Viman Nagar to Mumbai Airport for a timely, safe, and stress-free travel experience. Our drivers track flight schedules to ensure timely drop-offs or pickups, making us the ideal choice for business or leisure flyers."
    },
    {
        "name": "Round Trip Cab Viman Nagar",
        "description": "Planning to return the same day or after a short stay in Mumbai? Our round-trip cab services from Viman Nagar offer convenience and flexibility, allowing you to plan your itinerary freely while keeping your transportation needs sorted both ways."
    },
    {
        "name": "Executive Cabs Viman Nagar to Mumbai",
        "description": "For business professionals and corporate travelers, our executive cab service from Viman Nagar to Mumbai offers premium vehicles, trained chauffeurs, and a quiet, clean ride ideal for working on the go or arriving in style at meetings and events."
    },
    {
        "name": "Viman Nagar to Mumbai Sedan Cabs",
        "description": "Choose our sedan cab options for a comfortable and stylish ride from Viman Nagar to Mumbai. Perfect for couples, small families, or solo travelers looking for a refined travel experience with ample legroom and luggage space."
    },
    {
        "name": "SUV Cab Booking Viman Nagar",
        "description": "Travel with your family or group with our SUV cab service from Viman Nagar to Mumbai. With more space, higher seating, and superior comfort, our SUVs are ideal for long-distance travel and group outings."
    },
    {
        "name": "Verified Cab Drivers Viman Nagar",
        "description": "Your safety matters. All our drivers operating from Viman Nagar to Mumbai are background-verified, professionally trained, and experienced. They follow all road safety rules and customer service standards to give you peace of mind throughout your ride."
    },
    {
        "name": "Safe Cab Viman Nagar to Mumbai",
        "description": "Enjoy a safe and secure ride from Viman Nagar to Mumbai with us. Our vehicles are sanitized regularly, GPS-enabled, and maintained to the highest standards. Drivers are trained in safe driving practices and customer care."
    },
    {
        "name": "Quick Booking Viman Nagar Cab",
        "description": "Need a cab in a hurry? Use our fast booking system for immediate confirmation and quick dispatch. Our Viman Nagar to Mumbai cab services are always ready to get you moving without delay."
    },
    {
        "name": "Corporate Cab Hire Viman Nagar",
        "description": "Ideal for business travelers, our corporate cab hire from Viman Nagar offers executive vehicles, professional drivers, and seamless coordination for regular or one-time corporate travel. Invoicing and scheduling support available for companies."
    },
    {
        "name": "24/7 Viman Nagar to Mumbai Taxi",
        "description": "Whether it’s early morning or midnight, our taxi services from Viman Nagar to Mumbai operate 24/7. Book any time of the day and count on us for timely pickups, safe rides, and exceptional customer support around the clock."
    }
],

"tableData": [
    ["Viman Nagar to Mumbai Cabs", "Online Cabs Viman Nagar to Mumbai"],
    ["AC Taxi Viman Nagar to Mumbai", "Viman Nagar to Mumbai One-Way Cab"],
    ["Affordable Fare Viman Nagar Cab", "Viman Nagar Airport Cab to Mumbai"],
    ["Round Trip Cab Viman Nagar", "Executive Cabs Viman Nagar to Mumbai"],
    ["Viman Nagar to Mumbai Sedan Cabs", "SUV Cab Booking Viman Nagar"],
    ["Verified Cab Drivers Viman Nagar", "Safe Cab Viman Nagar to Mumbai"],
    ["Quick Booking Viman Nagar Cab", "Corporate Cab Hire Viman Nagar"],
    ["24/7 Viman Nagar to Mumbai Taxi", ""]
],




"whychoose": [
  {
    "WhyChooseheading": "Doorstep Pickup from Viman Nagar",
    "WhyChoosedescription": "We offer convenient pickup directly from your location in Viman Nagar, ensuring a smooth start to your journey. No need to wait or travel to a pickup point—our cab comes to you, saving you time and effort."
  },
  {
    "WhyChooseheading": "Comfortable and Air-Conditioned Cabs",
    "WhyChoosedescription": "Travel in fully air-conditioned, well-maintained sedans, SUVs, or MPVs, depending on your group size and preference. Enjoy cushioned seats, clean interiors, and smooth suspension for a stress-free ride from Viman Nagar to Mumbai."
  },
  {
    "WhyChooseheading": "Affordable and Transparent Pricing",
    "WhyChoosedescription": "Our Viman Nagar to Mumbai cab fares are competitively priced with no hidden charges. The quoted fare includes all tolls, taxes, and driver charges, so you can plan your trip without unexpected expenses."
  },
  {
    "WhyChooseheading": "Ideal for Airport Transfers and Business Travel",
    "WhyChoosedescription": "Whether you’re heading to Mumbai Airport for a flight or traveling for business, our reliable cab service offers on-time pickups and efficient travel with minimal delays and professional service."
  },
  {
    "WhyChooseheading": "Experienced and Courteous Drivers",
    "WhyChoosedescription": "Our drivers are well-trained, polite, and familiar with the Pune–Mumbai route. They ensure safe driving practices and provide a calm and respectful environment during your journey."
  },
  {
    "WhyChooseheading": "24/7 Availability from Viman Nagar",
    "WhyChoosedescription": "Need a cab at midnight or early morning? Our services are available 24/7, so you can book a ride from Viman Nagar to Mumbai at any hour with full customer support whenever you need assistance."
  },
  {
    "WhyChooseheading": "Well-Sanitized and Clean Vehicles",
    "WhyChoosedescription": "All cabs undergo regular cleaning and disinfection before each trip. We prioritize hygiene and safety by equipping vehicles with sanitizers, clean seat covers, and air purification systems."
  },
  {
    "WhyChooseheading": "Quick Online Booking and Instant Confirmation",
    "WhyChoosedescription": "Book your cab online easily via our website or mobile app. Get instant confirmation along with driver details and real-time tracking to stay updated and travel with peace of mind."
  }
]

















    }



const faqData = [
    {
        question: "Do you provide cab services from Viman Nagar to Mumbai?",
        answer: "Yes, Swara Cabs offers reliable and comfortable cab services from Viman Nagar, Pune to Mumbai, including airport transfers and corporate travel."
    },
    {
        question: "What is the fare for a Viman Nagar to Mumbai cab?",
        answer: "Fares start at ₹5,600 for a sedan on a one-way trip. Final pricing depends on vehicle type and timing."
    },
    {
        question: "How can I book a cab from Viman Nagar to Mumbai?",
        answer: "You can easily book online through our website or call +91 9697780707 for instant confirmation."
    },
    {
        question: "What types of vehicles are available from Viman Nagar to Mumbai?",
        answer: "We offer sedans, SUVs, Innova Crysta, and tempo travellers to suit your group size and comfort preferences."
    },
    {
        question: "Are tolls and driver charges included in the fare?",
        answer: "Yes, our fares are all-inclusive covering tolls, taxes, and driver allowances with no hidden charges."
    },
    {
        question: "Is night travel service available from Viman Nagar to Mumbai?",
        answer: "Yes, we operate 24/7 with a small surcharge for night trips between 10 PM and 6 AM."
    },
    {
        question: "Can I book round trip services from Viman Nagar to Mumbai?",
        answer: "Absolutely. Round-trip bookings are available and can be scheduled as per your convenience."
    },
    {
        question: "Is it safe to travel with Swara Cabs?",
        answer: "Yes, all our drivers are background-verified and trained to provide safe and secure travel."
    },
    {
        question: "Do you provide airport transfers from Viman Nagar to Mumbai?",
        answer: "Yes, we specialize in timely and comfortable airport transfers to Mumbai's domestic and international airports."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept UPI, cash, credit/debit cards, and all major digital wallets for hassle-free payments."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Abhishek Joshi',
        review: 'Swara Cabs provided excellent service from Viman Nagar to Mumbai. The cab was clean and the driver was very professional.'
    },
    {
        name: 'Ms. Neha Kulkarni',
        review: 'Booking was easy and the ride from Viman Nagar to Mumbai was smooth and comfortable. Highly recommend Swara Cabs!'
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
  "name": "Viman Nagar to Mumbai Cabs",
  "image": "https://www.swaracabs.in/assets/images/viman-nagar-to-mumbai-cab.jpg",
  "description": "Book Viman Nagar to Mumbai cab with Swara Cabs for safe, fast, and affordable travel. Choose AC sedans or SUVs for one-way, round-trip, and airport transfers. 24/7 booking with verified drivers.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "15864"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2299",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/viman-nagar-to-mumbai-cab"
  }
};




    return (
        <div>
<Helmet>
  <title>Viman Nagar to Mumbai Cabs | Fast & Affordable | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Viman Nagar to Mumbai cab with Swara Cabs for safe, fast, and affordable travel. Choose AC sedans or SUVs for one-way, round-trip, and airport transfers. 24/7 booking with verified drivers." 
  />
  <meta 
    name="keywords" 
    content="Viman Nagar to Mumbai Cabs, Online Cabs Viman Nagar to Mumbai, AC Taxi Viman Nagar to Mumbai, Viman Nagar to Mumbai One-Way Cab, Affordable Fare Viman Nagar Cab, Viman Nagar Airport Cab to Mumbai, Round Trip Cab Viman Nagar, Executive Cabs Viman Nagar to Mumbai, Viman Nagar to Mumbai Sedan Cabs, SUV Cab Booking Viman Nagar, Verified Cab Drivers Viman Nagar, Safe Cab Viman Nagar to Mumbai, Quick Booking Viman Nagar Cab, Corporate Cab Hire Viman Nagar, 24/7 Viman Nagar to Mumbai Taxi" 
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
                            <img src='/images/keyword/18.jpg' alt='img' />
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

export default Vimannagartomumbaicabs;