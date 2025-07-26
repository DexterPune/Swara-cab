
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Punetomumbaiertigacab() {



    const cardData =
    {
        keyword: 'Pune to Mumbai Ertiga Cab',
        heading: 'Swara Cabs : Pune to Mumbai Ertiga Cab',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable Ertiga cab services for your journey from Pune to Mumbai. Mumbai, Maharashtra’s vibrant commercial and cultural capital, is known for its iconic skyline, bustling streets, and diverse attractions. Whether you’re traveling with family, heading to a business meeting, or catching a flight, our spacious Ertiga ensures a smooth, relaxing, and hassle-free ride. The distance from Pune to Mumbai via the Expressway is around 150 kilometers, typically covered in about 3 hours depending on traffic conditions. With our well-maintained Ertiga fleet and professional drivers, Swara Cabs guarantees a safe, punctual, and comfortable journey tailored to your travel needs.',

        top: 'Top Places to Visit in Mumbai with Swara Cabs',

        "topPlaces": [
            {
                "title": "Chhatrapati Shivaji Maharaj Terminus",
                "description": "A UNESCO World Heritage Site, this historic railway station is an architectural marvel that blends Victorian Gothic and Indian styles. It serves as a bustling transit hub and a magnificent symbol of Mumbai’s colonial past."
            },
            {
                "title": "Siddhivinayak Temple",
                "description": "Dedicated to Lord Ganesha, Siddhivinayak Temple in Prabhadevi is one of the most revered temples in Mumbai. The temple is known for its spiritual atmosphere, beautiful architecture, and daily rituals that attract thousands of devotees every day."
            },
            {
                "title": "Marine Drive",
                "description": "Also known as the Queen’s Necklace, Marine Drive is a 3.6 km long boulevard that runs along the coast of South Mumbai. It's perfect for evening strolls, watching sunsets, or just enjoying the sea breeze. The view of the city’s skyline at night is breathtaking."
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
        "name": "Pune to Mumbai Ertiga Cab",
        "description": "Travel comfortably from Pune to Mumbai in our spacious Ertiga cab. Perfect for families and groups, our Ertiga vehicles are well-maintained, air-conditioned, and driven by experienced drivers to ensure a safe and pleasant journey. Enjoy ample legroom and luggage space for your trip."
    },
    {
        "name": "Book Ertiga Pune to Mumbai",
        "description": "Booking an Ertiga cab from Pune to Mumbai is now easy and hassle-free. Choose from our fleet of well-serviced Ertigas and enjoy prompt pickup, clean interiors, and reliable service. Whether it's for business or leisure, we guarantee a smooth ride to your destination."
    },
    {
        "name": "Pune to Mumbai 6-Seater Cab",
        "description": "Need space for your group? Our 6-seater Ertiga cab from Pune to Mumbai is ideal for families or friends traveling together. With comfortable seating for six passengers and ample space for luggage, this cab offers a perfect blend of convenience and affordability."
    },
    {
        "name": "Affordable Ertiga Cab Pune",
        "description": "Experience economical and comfortable travel with our affordable Ertiga cab services from Pune to Mumbai. We offer competitive pricing without compromising on quality, making your journey budget-friendly and enjoyable."
    },
    {
        "name": "Family Cab Pune to Mumbai",
        "description": "Planning a family trip from Pune to Mumbai? Our Ertiga family cab service ensures a safe and comfortable journey with child-friendly seating arrangements, air conditioning, and a courteous driver to assist you along the way."
    },
    {
        "name": "One-Way Ertiga Taxi Pune to Mumbai",
        "description": "Looking for a one-way taxi from Pune to Mumbai? Our Ertiga one-way service offers direct, no-hassle transportation tailored to your schedule. Enjoy privacy, flexibility, and reliable service without worrying about return trips."
    },
    {
        "name": "Ertiga AC Cab Pune to Mumbai",
        "description": "Beat the heat and travel comfortably in our fully air-conditioned Ertiga cabs from Pune to Mumbai. Our vehicles are equipped with modern AC systems, ensuring a cool and refreshing ride regardless of the weather outside."
    },
    {
        "name": "Pune to Mumbai Ertiga Round Trip",
        "description": "Planning a round trip? Our Pune to Mumbai Ertiga round trip cab service offers flexible timings and convenient scheduling, making your commute seamless. Enjoy priority bookings and dedicated drivers who know the best routes."
    },
    {
        "name": "Online Booking Ertiga Pune to Mumbai",
        "description": "Book your Pune to Mumbai Ertiga cab online with ease. Our user-friendly platform lets you select your preferred pickup time, location, and vehicle, providing instant confirmation and transparent pricing for a stress-free experience."
    },
    {
        "name": "Pune to Mumbai Ertiga Taxi Fare",
        "description": "Get clear and upfront fare estimates for your Ertiga taxi from Pune to Mumbai. We provide detailed pricing that includes tolls, taxes, and driver allowances, so there are no hidden costs on your journey."
    },
    {
        "name": "Pune Airport to Mumbai Ertiga Hire",
        "description": "Need a ride from Pune Airport to Mumbai? Our Ertiga hire service offers timely pickups right at the airport exit, with professional drivers ready to assist you and your luggage, ensuring a smooth transition to your destination."
    },
    {
        "name": "Ertiga Cab with Driver Pune to Mumbai",
        "description": "Travel worry-free with a dedicated professional driver in your Ertiga cab from Pune to Mumbai. Our drivers are experienced, courteous, and knowledgeable about the best routes to ensure a timely and comfortable journey."
    },
    {
        "name": "Verified Ertiga Drivers Pune",
        "description": "All our Ertiga cab drivers from Pune to Mumbai are thoroughly verified for safety, professionalism, and driving skills. Ride with confidence knowing that your driver is licensed and committed to providing the best service."
    },
    {
        "name": "24/7 Ertiga Cab Pune to Mumbai",
        "description": "Our Ertiga cab service from Pune to Mumbai is available round-the-clock. Whether you need an early morning pickup or a late-night ride, we are ready to serve you with prompt and reliable transportation anytime."
    },
    {
        "name": "Long Distance Ertiga Pune to Mumbai",
        "description": "Embark on your long-distance journey from Pune to Mumbai with comfort and reliability. Our Ertiga cabs are well-equipped to handle extended trips, providing a smooth ride with necessary amenities to make your travel stress-free."
    }
],

"tableData": [
    ["Pune to Mumbai Ertiga Cab", "Book Ertiga Pune to Mumbai"],
    ["Pune to Mumbai 6-Seater Cab", "Affordable Ertiga Cab Pune"],
    ["Family Cab Pune to Mumbai", "One-Way Ertiga Taxi Pune to Mumbai"],
    ["Ertiga AC Cab Pune to Mumbai", "Pune to Mumbai Ertiga Round Trip"],
    ["Online Booking Ertiga Pune to Mumbai", "Pune to Mumbai Ertiga Taxi Fare"],
    ["Pune Airport to Mumbai Ertiga Hire", "Ertiga Cab with Driver Pune to Mumbai"],
    ["Verified Ertiga Drivers Pune", "24/7 Ertiga Cab Pune to Mumbai"],
    ["Long Distance Ertiga Pune to Mumbai", ""]
],




"whychoose": [
  {
    "WhyChooseheading": "Spacious and Comfortable Ride with Ertiga",
    "WhyChoosedescription": "The Maruti Ertiga is an ideal choice for long-distance travel from Pune to Mumbai, offering ample legroom, headspace, and luggage capacity. With its smooth suspension and dual AC vents, passengers enjoy a relaxed and comfortable ride throughout the 150+ km journey."
  },
  {
    "WhyChooseheading": "Perfect for Family and Group Travel",
    "WhyChoosedescription": "Ertiga’s 6–7 seater configuration makes it the perfect option for families, small groups, or corporate travel. Whether you’re heading to Mumbai Airport or attending an event, you can travel together without needing multiple vehicles."
  },
  {
    "WhyChooseheading": "Affordable MPV Cab Option",
    "WhyChoosedescription": "Compared to other multi-seater cabs, our Pune to Mumbai Ertiga Cab offers an excellent balance of affordability and comfort. Enjoy the perks of a spacious MPV at a cost-effective rate with no compromise on quality."
  },
  {
    "WhyChooseheading": "Well-Maintained and Sanitized Vehicles",
    "WhyChoosedescription": "Every Ertiga in our fleet undergoes routine maintenance and deep cleaning to ensure a safe and hygienic journey. We prioritize passenger health with frequent sanitization and well-kept vehicle interiors."
  },
  {
    "WhyChooseheading": "Experienced and Courteous Chauffeurs",
    "WhyChoosedescription": "Our professional drivers are trained to handle long-distance travel efficiently. They know the Pune–Mumbai expressway inside out and ensure a smooth, secure ride while maintaining polite and respectful communication."
  },
  {
    "WhyChooseheading": "Transparent and All-Inclusive Pricing",
    "WhyChoosedescription": "No hidden charges. Our pricing includes tolls, driver allowance, and taxes, so you know exactly what you’re paying for. Get a full cost breakdown before booking your Pune to Mumbai Ertiga Cab."
  },
  {
    "WhyChooseheading": "Ideal for Airport Transfers and Corporate Use",
    "WhyChoosedescription": "If you're traveling to Mumbai Airport with extra luggage or commuting for business with colleagues, Ertiga is a smart and efficient choice. Enjoy more space, better visibility, and a smoother ride tailored to your needs."
  },
  {
    "WhyChooseheading": "24/7 Service and Customer Support",
    "WhyChoosedescription": "We operate round the clock to serve your travel needs anytime — day or night. Our dedicated customer support team is available 24/7 to assist with bookings, reschedules, and route queries."
  }
]















    }



const faqData = [
    {
        question: "Do you provide Ertiga cabs from Pune to Mumbai?",
        answer: "Yes, Swara Cabs offers spacious and comfortable Ertiga cabs for one-way and round-trip travel from Pune to Mumbai."
    },
    {
        question: "What is the fare for a Pune to Mumbai Ertiga cab?",
        answer: "The fare for a one-way trip in an Ertiga starts from ₹6,500. Final pricing may vary based on pickup location and travel time."
    },
    {
        question: "How can I book an Ertiga cab from Pune to Mumbai?",
        answer: "You can book through our website or call us at +91 9697780707 for fast booking and confirmation."
    },
    {
        question: "How many passengers can travel in an Ertiga cab?",
        answer: "The Ertiga comfortably accommodates 6 passengers plus the driver, with sufficient luggage space."
    },
    {
        question: "Are tolls, driver allowance, and taxes included in the Ertiga cab fare?",
        answer: "Yes, our prices are all-inclusive. You won’t have to pay anything extra beyond the quoted fare."
    },
    {
        question: "Is the Ertiga suitable for airport drops from Pune to Mumbai?",
        answer: "Absolutely. The Ertiga is ideal for comfortable and safe airport transfers to Mumbai Domestic and International Airports."
    },
    {
        question: "Can I schedule a return trip in an Ertiga cab?",
        answer: "Yes, we offer flexible round-trip bookings. You can schedule a return at your convenience."
    },
    {
        question: "Is the Ertiga cab service available at night?",
        answer: "Yes, our services run 24/7. Night travel is available with a nominal surcharge between 10 PM and 6 AM."
    },
    {
        question: "Is it safe to travel in an Ertiga with Swara Cabs?",
        answer: "Yes, all our drivers are background-verified and trained to ensure your safety and comfort throughout the journey."
    },
    {
        question: "What are the payment options for booking an Ertiga cab?",
        answer: "We accept UPI, cash, credit/debit cards, and digital wallets for easy and secure payments."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Kunal Patil',
        review: 'Booked an Ertiga from Pune to Mumbai for my family. Very clean car, polite driver, and smooth ride. Highly recommend Swara Cabs.'
    },
    {
        name: 'Mrs. Meenal Apte',
        review: 'Swara Cabs provided excellent service with their Ertiga cab for our Pune to Mumbai trip. Spacious, comfortable, and punctual.'
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







// const productSchema = {
//   "@context": "https://schema.org",
//   "@type": "Product",
//   "name": "Pune to Mumbai Ertiga Cab",
//   "image": "https://www.swaracabs.in/assets/images/pune-to-mumbai-ertiga-cab.jpg",
//   "description": "Book Pune to Mumbai Ertiga cab with Swara Cabs for a comfortable, spacious 6-seater ride. Perfect for family trips, one-way, round-trip, and airport transfers with verified drivers.",
//   "brand": {
//     "@type": "Brand",
//     "name": "Swara Cabs"
//   },
//   "aggregateRating": {
//     "@type": "AggregateRating",
//     "bestRating": "5",
//     "worstRating": "1",
//     "ratingValue": "4.9",
//     "ratingCount": "7158"
//   },
//   "offers": {
//     "@type": "Offer",
//     "priceCurrency": "INR",
//     "price": "2999",
//     "availability": "https://schema.org/InStock",
//     "url": "https://www.swaracabs.in/pune-to-mumbai-ertiga-cab"
//   }
// };

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Pune to Mumbai Ertiga Cab",
  "image": "https://www.swaracabs.in/images/keyword/14.jpg",
  "description": "Book a spacious 6-seater Ertiga cab from Pune to Mumbai with Swara Cabs. Ideal for families, airport transfers, and one-way or round trips. Affordable AC rides with verified drivers.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.9",
    "ratingCount": "15689"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2999",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/pune-to-mumbai-ertiga-cab"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Verified Customer"
    }
  },
  "areaServed": {
    "@type": "Place",
    "name": "Pune, Mumbai"
  },
  "serviceType": "Taxi Service"
};




    return (
        <div>

<Helmet>
  <title>Pune to Mumbai Ertiga Cab | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book a 6-seater Ertiga cab from Pune to Mumbai at best price. Ideal for families, airport transfers, and long-distance trips. Spacious AC cabs with verified drivers." 
  />
  <meta 
    name="keywords" 
    content="Pune to Mumbai Ertiga Cab, Ertiga Taxi Pune to Mumbai, 6-Seater Cab Pune to Mumbai, Pune Mumbai Family Taxi, Book Ertiga One-Way Taxi, Ertiga Cab Round Trip Fare, AC Ertiga Taxi Pune, Verified Drivers Ertiga Pune Mumbai, Airport Transfer Ertiga Cab Pune to Mumbai, Affordable Ertiga Cab Hire, Swara Cabs Ertiga Booking, Pune to Mumbai SUV Taxi, Long Distance Cab Ertiga Pune to Mumbai" 
  />
  <meta property="og:title" content="Pune to Mumbai Ertiga Cab | 6-Seater Taxi Booking – Swara Cabs" />
  <meta property="og:description" content="Book Ertiga cab from Pune to Mumbai at affordable fare. AC 6-seater cabs with verified drivers for one-way, round trips & airport pickups." />
  <meta property="og:image" content="https://www.swaracabs.in/assets/images/pune-to-mumbai-ertiga-cab.jpg" />
  <meta property="og:url" content="https://www.swaracabs.in/pune-to-mumbai-ertiga-cab" />
  <meta property="og:type" content="website" />
  
  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
  </script>
</Helmet>


{/* <Helmet>
  <title>Pune to Mumbai Ertiga Cab | Spacious 6-Seater | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Pune to Mumbai Ertiga cab with Swara Cabs for a comfortable, spacious 6-seater ride. Perfect for family trips, one-way, round-trip, and airport transfers with verified drivers." 
  />
  <meta 
    name="keywords" 
    content="Pune to Mumbai Ertiga Cab, Book Ertiga Pune to Mumbai, Pune to Mumbai 6-Seater Cab, Affordable Ertiga Cab Pune, Family Cab Pune to Mumbai, One-Way Ertiga Taxi Pune to Mumbai, Ertiga AC Cab Pune to Mumbai, Pune to Mumbai Ertiga Round Trip, Online Booking Ertiga Pune to Mumbai, Pune to Mumbai Ertiga Taxi Fare, Pune Airport to Mumbai Ertiga Hire, Ertiga Cab with Driver Pune to Mumbai, Verified Ertiga Drivers Pune, 24/7 Ertiga Cab Pune to Mumbai, Long Distance Ertiga Pune to Mumbai" 
  />
  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
  </script>
</Helmet> */}
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
                            <img src='/images/keyword/14.jpg' alt='img' />
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

export default Punetomumbaiertigacab;