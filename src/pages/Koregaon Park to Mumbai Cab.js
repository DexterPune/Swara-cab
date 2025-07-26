
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Koregaonparktomumbaicabs() {



    const cardData =
    {
        keyword: 'Koregaon Park to Mumbai Cab',
        heading: 'Swara Cabs : Koregaon Park to Mumbai Cab',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable cab services for your journey from Koregaon Park to Mumbai. Mumbai, Maharashtra’s vibrant commercial and cultural capital, is renowned for its iconic skyline, bustling streets, and dynamic urban life. Whether you are traveling for a business meeting, visiting family, or catching a flight, Swara Cabs ensures a smooth and hassle-free experience. The distance from Koregaon Park to Mumbai is approximately 150 kilometers, with a travel time of around 3 to 4 hours depending on traffic conditions. With our well-maintained fleet and experienced drivers, Swara Cabs guarantees a safe, punctual, and comfortable ride tailored to your travel needs.',

        top: 'Top Places to Visit in Mumbai with Swara Cabs',

        "topPlaces": [
            {
                "title": "Gateway of India",
                "description": "The Gateway of India is one of Mumbai’s most iconic landmarks, built during the British Raj. Overlooking the Arabian Sea, it attracts thousands of tourists and locals alike. The nearby ferry rides to Elephanta Caves and its historical significance make it a must-visit spot in the city."
            },
            {
                "title": "Marine Drive",
                "description": "Also known as the Queen’s Necklace, Marine Drive is a 3.6 km long boulevard that runs along the coast of South Mumbai. It's perfect for evening strolls, watching sunsets, or just enjoying the sea breeze. The view of the city’s skyline at night is breathtaking."
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
        "name": "Koregaon Park to Mumbai Cab",
        "description": "Travel from Koregaon Park to Mumbai with Swara Cab’s reliable intercity cab service. Whether you're heading to Mumbai for business or leisure, our clean, comfortable, and GPS-enabled vehicles ensure a seamless ride. Enjoy peace of mind with punctual pickups and professional service from start to finish."
    },
    {
        "name": "Online Cab Booking Koregaon Park",
        "description": "Book your cab from Koregaon Park to Mumbai online in just a few clicks. Swara Cab offers a user-friendly platform for fast and secure cab booking. Get real-time fare estimates, instant confirmations, and live driver tracking for a smooth and stress-free experience."
    },
    {
        "name": "One-Way Cab Koregaon Park to Mumbai",
        "description": "Need a one-way drop from Koregaon Park to Mumbai? Swara Cab offers affordable and convenient one-way cab services. Pay only for the distance traveled, and avoid round trip charges. Ideal for airport transfers, short stays, and quick business trips."
    },
    {
        "name": "Round Trip Cab Koregaon Park",
        "description": "Planning a return journey from Mumbai? Swara Cab’s round trip service from Koregaon Park offers flexible scheduling, consistent pricing, and a dedicated driver throughout your journey. Save time and enjoy comfort with door-to-door pickup and drop."
    },
    {
        "name": "Koregaon Park to Mumbai AC Cab",
        "description": "Beat the heat with Swara Cab’s fully air-conditioned cabs from Koregaon Park to Mumbai. Our AC taxis offer a relaxing environment, perfect for long drives. Travel cool and comfortable, whether it’s a day ride or a night trip."
    },
    {
        "name": "Affordable Cab Koregaon Park to Mumbai",
        "description": "Looking for cost-effective travel from Koregaon Park to Mumbai? Swara Cab offers budget-friendly cab options with no hidden charges. Choose from economy, sedan, or SUV models that match your budget while ensuring safety and reliability."
    },
    {
        "name": "Airport Cab Koregaon Park",
        "description": "Catch your flight without stress! Swara Cab provides timely airport drop services from Koregaon Park to Mumbai. Our drivers take the fastest and safest routes to ensure you arrive on time. Choose us for hassle-free Mumbai Airport transfers, available 24/7."
    },
    {
        "name": "Koregaon Park to Mumbai Sedan Cab",
        "description": "Travel in comfort with our sedan cab service from Koregaon Park to Mumbai. Ideal for solo travelers, couples, or small families, Swara Cab’s sedans offer spacious seating, smooth rides, and experienced drivers at an affordable fare."
    },
    {
        "name": "SUV Cab Koregaon Park to Mumbai",
        "description": "Need more space for luggage or a group? Swara Cab offers SUV cabs from Koregaon Park to Mumbai that are perfect for families or group travel. Enjoy extra room, comfort, and stability on longer routes with our premium SUVs."
    },
    {
        "name": "Business Cab Koregaon Park to Mumbai",
        "description": "Swara Cab understands business needs. Our Koregaon Park to Mumbai business cab service offers punctuality, professional drivers, and clean, presentable vehicles. Great for meetings, corporate travel, and executive commuting."
    },
    {
        "name": "Executive Taxi Koregaon Park to Mumbai",
        "description": "Upgrade your travel with our executive taxi service from Koregaon Park to Mumbai. Experience a premium ride in high-end vehicles with experienced chauffeurs. Ideal for VIP clients, business leaders, and those who value luxury on the road."
    },
    {
        "name": "Koregaon Park to Mumbai Corporate Cab",
        "description": "Swara Cab provides dependable corporate cab services from Koregaon Park to Mumbai for businesses and executives. Get monthly billing, premium cars, and on-time service with trained chauffeurs. Perfect for employee transport and client pickups."
    },
    {
        "name": "Quick Pickup Cab Koregaon Park",
        "description": "In a hurry? Swara Cab offers quick pickup cab services from Koregaon Park to Mumbai. Our network ensures a cab is always nearby, ready to get you on the road fast. Ideal for last-minute bookings and urgent travel."
    },
    {
        "name": "Safe Travel Cab Koregaon Park",
        "description": "Travel with confidence with Swara Cab’s safety-first services from Koregaon Park to Mumbai. Our vehicles undergo regular sanitization, drivers are background verified, and GPS tracking ensures transparency and security for every ride."
    },
    {
        "name": "Verified Driver Koregaon Park to Mumbai",
        "description": "Every Swara Cab driver from Koregaon Park to Mumbai is verified, experienced, and professionally trained. Enjoy a secure, courteous, and smooth journey with our trusted chauffeur team who are familiar with the best routes and traffic updates."
    }
],

"tableData": [
    ["Koregaon Park to Mumbai Cab", "Online Cab Booking Koregaon Park"],
    ["One-Way Cab Koregaon Park to Mumbai", "Round Trip Cab Koregaon Park"],
    ["Koregaon Park to Mumbai AC Cab", "Affordable Cab Koregaon Park to Mumbai"],
    ["Airport Cab Koregaon Park", "Koregaon Park to Mumbai Sedan Cab"],
    ["SUV Cab Koregaon Park to Mumbai", "Business Cab Koregaon Park to Mumbai"],
    ["Executive Taxi Koregaon Park to Mumbai", "Koregaon Park to Mumbai Corporate Cab"],
    ["Quick Pickup Cab Koregaon Park", "Safe Travel Cab Koregaon Park"],
    ["Verified Driver Koregaon Park to Mumbai", ""]
],





"whychoose": [
  {
    "WhyChooseheading": "Punctual and Reliable Koregaon Park to Mumbai Cab Service",
    "WhyChoosedescription": "We value your time and ensure prompt pickups and drop-offs from Koregaon Park to Mumbai. Our drivers monitor traffic conditions in real time to select the fastest routes, ensuring you reach your destination on schedule without unnecessary delays."
  },
  {
    "WhyChooseheading": "Wide Range of Comfortable and Well-Maintained Vehicles",
    "WhyChoosedescription": "Our fleet includes a variety of vehicles such as sedans, premium SUVs like Innova Crysta and Ertiga, all meticulously maintained and equipped with air conditioning, spacious seating, and modern amenities to make your long-distance journey pleasant and relaxing."
  },
  {
    "WhyChooseheading": "Transparent and Competitive Pricing Structure",
    "WhyChoosedescription": "We provide upfront pricing for all Koregaon Park to Mumbai cab rides, inclusive of tolls, taxes, and driver allowances. Our transparent pricing policy ensures there are no hidden fees or unexpected charges, allowing you to plan your trip with confidence."
  },
  {
    "WhyChooseheading": "Experienced, Professional, and Friendly Drivers",
    "WhyChoosedescription": "Our drivers are thoroughly vetted, licensed, and trained to provide a safe and courteous service. With their extensive knowledge of Pune and Mumbai routes, they ensure a smooth and secure journey, while maintaining a friendly and helpful demeanor throughout your trip."
  },
  {
    "WhyChooseheading": "24/7 Availability to Suit Your Schedule",
    "WhyChoosedescription": "Whether you need an early morning transfer, late-night ride, or anything in between, our Koregaon Park to Mumbai cab service is available 24 hours a day, 7 days a week to meet your travel needs without any hassle."
  },
  {
    "WhyChooseheading": "Simple and Flexible Booking Process",
    "WhyChoosedescription": "Booking your cab is easy through our website, mobile app, or customer support hotline. We offer flexible options for cancellations and rescheduling, ensuring your travel plans remain stress-free and adaptable."
  },
  {
    "WhyChooseheading": "Commitment to Safety and Hygiene",
    "WhyChoosedescription": "Your health and safety are paramount to us. Our vehicles are regularly sanitized, and our drivers follow strict hygiene protocols. Additionally, all cars are equipped with essential safety features like seat belts, airbags, and GPS tracking for your peace of mind."
  },
  {
    "WhyChooseheading": "Ideal for Both Business and Leisure Travel",
    "WhyChoosedescription": "Whether you’re commuting for corporate meetings, airport transfers, or a leisurely trip, our Koregaon Park to Mumbai cab service offers comfort, reliability, and professionalism to make your journey enjoyable and stress-free."
  }
]












    }



const faqData = [
    {
        question: "Do you provide cab services from Koregaon Park to Mumbai?",
        answer: "Yes, Swara Cabs offers safe and comfortable cab services from Koregaon Park, Pune to all areas of Mumbai, including the airport."
    },
    {
        question: "What is the fare for a Koregaon Park to Mumbai cab?",
        answer: "Our fares start from ₹5,500 for a one-way sedan. Pricing may vary depending on vehicle type and travel schedule."
    },
    {
        question: "How can I book a cab from Koregaon Park to Mumbai?",
        answer: "You can book easily online through our website or call us at +91 9697780707 for quick assistance and confirmation."
    },
    {
        question: "Which vehicles are available for Koregaon Park to Mumbai travel?",
        answer: "We offer sedans, SUVs, and tempo travellers based on your travel needs, group size, and comfort preferences."
    },
    {
        question: "Do you provide airport drops from Koregaon Park to Mumbai?",
        answer: "Yes, Swara Cabs offers timely and efficient airport drop services to both Mumbai Domestic and International Airports."
    },
    {
        question: "Are tolls and driver charges included in the cab fare?",
        answer: "Yes, our fares are all-inclusive and cover tolls, driver allowance, and applicable taxes. No hidden charges."
    },
    {
        question: "Can I book a round trip cab from Koregaon Park to Mumbai?",
        answer: "Absolutely. Round trip services are available with flexible return options according to your schedule."
    },
    {
        question: "Is it safe to travel solo with Swara Cabs?",
        answer: "Yes, safety is our top priority. All our drivers are verified, trained, and professional, making it safe for solo and female travelers."
    },
    {
        question: "Is night travel available from Koregaon Park?",
        answer: "Yes, we provide 24/7 service. A small night-time surcharge may apply between 10 PM and 6 AM."
    },
    {
        question: "What payment methods are accepted for bookings?",
        answer: "We accept UPI, cash, credit/debit cards, and digital wallets to make your payment process convenient."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Rajesh Nair',
        review: 'Booked a Koregaon Park to Mumbai cab with Swara Cabs. The ride was smooth, on time, and very professional. Highly recommend!'
    },
    {
        name: 'Ms. Tanvi Shah',
        review: 'Swara Cabs gave me a stress-free experience for my travel from Koregaon Park to Mumbai Airport. Excellent service and clean car!'
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
  "name": "Koregaon Park to Mumbai Cab",
  "image": "https://www.swaracabs.in/assets/images/koregaon-park-to-mumbai-cab.jpg",
  "description": "Book Koregaon Park to Mumbai cab with Swara Cabs for safe, quick, and affordable rides. Choose from AC sedans and SUVs for one-way, round-trip, and airport transfers.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "9847"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2299",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/koregaon-park-to-mumbai-cab"
  }
};





    return (
        <div>
<Helmet>
  <title>Koregaon Park to Mumbai Cab | Safe & Affordable Rides | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Koregaon Park to Mumbai cab with Swara Cabs for safe, quick, and affordable rides. Choose from AC sedans and SUVs for one-way, round-trip, and airport transfers." 
  />
  <meta 
    name="keywords" 
    content="Koregaon Park to Mumbai Cab, Online Cab Booking Koregaon Park, One-Way Cab Koregaon Park to Mumbai, Round Trip Cab Koregaon Park, Koregaon Park to Mumbai AC Cab, Affordable Cab Koregaon Park to Mumbai, Airport Cab Koregaon Park, Koregaon Park to Mumbai Sedan Cab, SUV Cab Koregaon Park to Mumbai, Business Cab Koregaon Park to Mumbai, Executive Taxi Koregaon Park to Mumbai, Koregaon Park to Mumbai Corporate Cab, Quick Pickup Cab Koregaon Park, Safe Travel Cab Koregaon Park, Verified Driver Koregaon Park to Mumbai" 
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
                            <img src='/images/keyword/10.jpg' alt='img' />
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

export default Koregaonparktomumbaicabs;