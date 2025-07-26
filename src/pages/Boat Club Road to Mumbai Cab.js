
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Boatclubroadtomumbaicab() {



    const cardData =
    {
        keyword: 'Boat Club Road to Mumbai Cab',
        heading: 'Swara Cabs : Boat Club Road to Mumbai Cab',
        headingDescription: 'Swara Cabs provides a trusted and convenient cab service from Boat Club Road (Pune) to Mumbai, perfect for professionals, families, and tourists seeking a stress-free journey. Covering around 150 to 170 kilometers—mostly via the Mumbai–Pune Expressway—the trip typically takes about 3 to 4 hours, subject to traffic. The service features prompt doorstep pickups from your location on Boat Club Road, clean and well-maintained AC vehicles, and professional, courteous drivers who ensure a smooth, comfortable ride. With flexible booking options and reliable support, Swara Cabs makes your ride to Mumbai hassle-free and relaxing—ideal whether you are traveling for business, leisure, or personal commitments.',

        top: 'Top Places to Visit in Mumbai with Swara Cabs',

      "topPlaces": [
  {
    "title": "Marine Drive",
    "description": "Marine Drive, also known as the Queen’s Necklace, is a picturesque 3.6-kilometer-long boulevard that stretches along the Arabian Sea coast from Nariman Point to Girgaon Chowpatty. Lined with palm trees and art deco buildings, it’s one of the best spots in Mumbai for evening strolls, stunning sunset views, and watching the city lights sparkle after dusk. The cool sea breeze and the sound of waves make it a peaceful retreat for locals and tourists alike."
  },
  {
    "title": "Elephanta Caves",
    "description": "Located on Elephanta Island, about an hour’s ferry ride from the Gateway of India, these ancient rock-cut caves are a UNESCO World Heritage Site. The caves date back to the 5th to 8th centuries and are primarily dedicated to Lord Shiva. The centerpiece is the monumental 20-foot sculpture of Trimurti, depicting three aspects of Shiva. Surrounded by thick forest and monkeys, this archaeological wonder offers a spiritual and historical experience away from the bustling city."
  },
  {
    "title": "Gateway of India",
    "description": "The Gateway of India is Mumbai's most iconic monument, built in 1924 to commemorate the visit of King George V and Queen Mary to India. Located on the waterfront in Colaba, this grand archway is an architectural blend of Indo-Saracenic, Mughal, and Gothic styles. It serves as a popular tourist gathering spot and the departure point for ferries to Elephanta Caves. Surrounded by street vendors, photographers, and the majestic Taj Mahal Palace Hotel, the Gateway is a symbol of Mumbai's colonial past and cosmopolitan present."
  },
  {
    "title": "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
    "description": "A UNESCO World Heritage Site, CSMT is a stunning example of Victorian Gothic architecture blended with Indian influences. Originally known as Victoria Terminus, this busy railway station is both a transport hub and a cultural landmark. The building features high vaulted ceilings, stained glass windows, carved stonework, and turrets, making it a must-visit for architecture and history enthusiasts. It comes alive at night with beautiful illumination and is a proud symbol of Mumbai’s colonial heritage."
  },
  {
    "title": "Haji Ali Dargah",
    "description": "Haji Ali Dargah is a beautiful white-domed mosque and tomb situated on a small islet off the coast of Worli. Connected to the mainland by a narrow causeway, it is accessible only during low tide. Built in 1431 in memory of the wealthy merchant turned saint Haji Ali Shah Bukhari, the Dargah is an important religious site visited by people of all faiths. The structure, surrounded by the sea on all sides, creates a magical and spiritual ambiance."
  },
  {
    "title": "Juhu Beach",
    "description": "Juhu Beach is one of Mumbai’s most popular coastal spots, known for its vibrant street food stalls, especially local favorites like pav bhaji, vada pav, and bhel puri. Stretching over six kilometers, the beach is a lively destination for families, joggers, and Bollywood celebrities who reside nearby. It’s ideal for sunset photography, beach games, and soaking in the local flavor of Mumbai. The area also hosts occasional cultural events and live performances."
  },
  {
    "title": "Sanjay Gandhi National Park",
    "description": "A rare forest reserve in the heart of a metropolis, Sanjay Gandhi National Park is a sprawling green oasis offering nature trails, safari rides, and the ancient Kanheri Caves. Spanning over 100 square kilometers, it is home to leopards, deer, birds, butterflies, and over 1,000 species of flora. The park is a favorite among nature lovers, trekkers, and weekend adventurers looking to escape the urban chaos without leaving the city."
  },
  {
    "title": "Bandra-Worli Sea Link",
    "description": "The Bandra-Worli Sea Link is an engineering marvel and a visual spectacle, connecting the western suburbs of Bandra to Worli in South Mumbai. This 8-lane cable-stayed bridge offers a scenic drive over the Arabian Sea, reducing travel time and offering stunning cityscape views, especially at night when it’s illuminated. It symbolizes modern Mumbai and is often featured in films, photographs, and city tours."
  },
  {
    "title": "Colaba Causeway",
    "description": "A bustling street market in South Mumbai, Colaba Causeway is the go-to destination for street shopping, antiques, fashion, handicrafts, and quirky souvenirs. It also boasts famous cafes, bars, and eateries like Café Leopold and Theobroma. The mix of colonial architecture, vibrant shops, and the artistic vibe makes it a popular spot among tourists and locals for an authentic Mumbai experience."
  },
  {
    "title": "Siddhivinayak Temple",
    "description": "Dedicated to Lord Ganesha, Siddhivinayak Temple in Prabhadevi is one of the richest and most visited temples in Mumbai. Devotees queue up from early morning to seek blessings from the idol, which is carved from a single black stone and has a distinctive right-turned trunk. The temple is frequented by Bollywood celebrities, politicians, and spiritual seekers. Its peaceful premises and divine aura make it a spiritual anchor in the heart of the city."
  }
],

"services": [
  {
    "name": "One-Way Cab Pune to Mumbai",
    "description": "Book a one-way cab from Boat Club Road to Mumbai at affordable rates. Perfect for travelers needing a single trip without paying return fare. No hidden charges—just a smooth, efficient ride. Whether it’s a quick city transfer or a planned journey, our one-way service offers flexibility, privacy, and complete peace of mind at great value."
  },
  {
    "name": "AC Taxi Pune to Mumbai",
    "description": "Enjoy a cool and relaxing ride from Boat Club Road to Mumbai with our fully air-conditioned taxis. Ideal for beating the heat and long expressway drives. Each taxi is maintained for interior comfort, offering a clean, refreshing atmosphere from pickup to drop, ensuring you stay comfortable even during heavy traffic or summer travel."
  },
  {
    "name": "Sedan Taxi Pune to Mumbai",
    "description": "Opt for a sedan taxi from Boat Club Road to Mumbai for a sleek, fuel-efficient, and smooth ride. Best for individuals or couples traveling light who want style on a budget. These vehicles offer plush seating, calm interiors, and smart cabin features to make your journey elegant and enjoyable every step of the way."
  },
  {
    "name": "SUV Cab Pune to Mumbai",
    "description": "Travel with extra space and comfort from Boat Club Road to Mumbai in our roomy SUVs. Great for families, small groups, or travelers with luggage. With enhanced legroom, elevated seating, and powerful air conditioning, our SUVs are built for both comfort and performance on the expressway and in city traffic."
  },
  {
    "name": "Online Cab Booking Pune to Mumbai",
    "description": "Book your cab from Boat Club Road to Mumbai online within minutes. Our smart booking platform offers instant confirmations, live availability, and secure payments. You can schedule ahead or ride now with full transparency, avoiding call hassles and last-minute stress. Booking a cab has never been this easy."
  },
  {
    "name": "Verified Drivers Pune to Mumbai",
    "description": "Every ride from Boat Club Road to Mumbai is powered by professional, verified drivers. All undergo background checks, ID verification, and customer service training. Expect courteous behavior, punctuality, and local route expertise, ensuring both safety and comfort throughout your door-to-door journey."
  },
  {
    "name": "Executive Travel Pune to Mumbai",
    "description": "For business-class comfort, book our executive cabs from Boat Club Road to Mumbai. Expect luxury vehicles, discreet chauffeurs, and amenities designed for corporate and VIP travelers. Ride in a calm, work-ready environment with bottled water, Wi-Fi (on request), and premium seating ideal for focused travel."
  },
  {
    "name": "Corporate Cab Hire Pune to Mumbai",
    "description": "Our corporate cabs from Boat Club Road to Mumbai are designed for professional needs. Enjoy monthly billing, priority bookings, and premium support—perfect for company travel or visiting executives. With tailored services and timely pickups, we help your team stay productive and punctual."
  },
  {
    "name": "Safe Taxi Ride Pune to Mumbai",
    "description": "Safety first on every ride from Boat Club Road to Mumbai. All our cabs are sanitized daily, GPS-enabled, and driven by trained professionals. Real-time monitoring and emergency support ensure your trip is worry-free, whether you travel at night, early morning, or during busy hours."
  },
  {
    "name": "Affordable Cab Pune to Mumbai",
    "description": "Looking for a budget ride from Boat Club Road to Mumbai? Our fares are transparent, with no hidden fees or surge pricing. You get premium quality without the premium price. Whether it’s a personal trip or a daily commute, enjoy great value with unmatched comfort and reliability."
  },
  {
    "name": "24/7 Cab Pune to Mumbai",
    "description": "Need a ride from Boat Club Road to Mumbai any time of day? Our cabs are available 24/7—morning, midnight, or last-minute bookings. We’re always just a click away, offering on-demand pickups and reliable availability even during weekends, holidays, or peak hours."
  },
  {
    "name": "Airport Drop Pune to Mumbai",
    "description": "Get to the airport from Boat Club Road without delay. Our airport drop service is optimized for punctuality with live flight tracking, fast routing, and efficient baggage handling. Perfect for travelers flying from Mumbai Airport, ensuring you never miss a flight."
  },
  {
    "name": "Round Trip Pune to Mumbai Cab",
    "description": "Travel from Boat Club Road to Mumbai and back with our round-trip service. Book once and enjoy fixed fares, the same reliable driver, and zero booking hassle on the return leg. Ideal for day trips, client visits, or personal errands that require returning the same or next day."
  },
  {
    "name": "Express Highway Cab Pune to Mumbai",
    "description": "Ride the Mumbai–Pune Expressway with ease from Boat Club Road. Our highway-optimized cabs ensure a faster, safer, and more scenic journey using the quickest routes. With skilled drivers and highway-ready vehicles, you’ll reach your destination smoothly and on time."
  }
],
"tableData": [
  ["One-Way Cab Pune to Mumbai", "AC Taxi Pune to Mumbai"],
  ["Sedan Taxi Pune to Mumbai", "SUV Cab Pune to Mumbai"],
  ["Online Cab Booking Pune to Mumbai", "Verified Drivers Pune to Mumbai"],
  ["Executive Travel Pune to Mumbai", "Corporate Cab Hire Pune to Mumbai"],
  ["Safe Taxi Ride Pune to Mumbai", "Affordable Cab Pune to Mumbai"],
  ["24/7 Cab Pune to Mumbai", "Airport Drop Pune to Mumbai"],
  ["Round Trip Pune to Mumbai Cab", "Express Highway Cab Pune to Mumbai"]
],

   "whychoose": [
    {
      "WhyChooseheading": "Premium Cab Service from Boat Club Road to Mumbai",
      "WhyChoosedescription": "Travel from the upscale Boat Club Road area in Pune to Mumbai in comfort and style. Our cab service is designed to offer a smooth and relaxing experience, catering to business professionals, families, and solo travelers alike."
    },
    {
      "WhyChooseheading": "Tailored Vehicle Options for Every Need",
      "WhyChoosedescription": "Choose from a curated fleet of sedans, SUVs, and premium cars to match your travel needs. Whether you prefer a budget-friendly ride or a luxury vehicle, we ensure cleanliness, comfort, and a vehicle suited to your expectations."
    },
    {
      "WhyChooseheading": "Fixed and Transparent Pricing",
      "WhyChoosedescription": "Our pricing is transparent and includes all tolls, taxes, and driver charges. You’ll never encounter hidden fees, allowing you to enjoy your journey without worrying about surprise costs at the end of your ride."
    },
    {
      "WhyChooseheading": "Professional and Experienced Drivers",
      "WhyChoosedescription": "Our drivers are familiar with both Pune’s local neighborhoods like Boat Club Road and the best routes to Mumbai. Expect courteous, safe, and efficient service, with drivers trained for intercity travel."
    },
    {
      "WhyChooseheading": "Flexible Pickup Scheduling",
      "WhyChoosedescription": "We understand the need for punctuality. Schedule your pickup time as per your convenience—early morning departures, mid-day trips, or late-night rides—we’re available 24/7 to serve your travel needs."
    },
    {
      "WhyChooseheading": "Simple Online Booking System",
      "WhyChoosedescription": "Our user-friendly website and mobile app make booking your cab quick and easy. Get instant confirmation, driver details, and live tracking for a completely stress-free experience."
    },
    {
      "WhyChooseheading": "Comfort and Safety Guaranteed",
      "WhyChoosedescription": "We maintain high standards of hygiene and vehicle safety. All cabs are sanitized regularly and come with safety essentials, ensuring a secure and pleasant ride for every passenger."
    },
    {
      "WhyChooseheading": "Multiple Payment Choices with Receipts",
      "WhyChoosedescription": "We accept all major payment modes including cash, UPI, wallets, and cards. Every transaction is documented with digital or printed receipts for your convenience and record-keeping."
    }
  ]













    }


const faqData = [
    {
        question: "Do you provide cab service from Boat Club Road, Pune to Mumbai?",
        answer: "Yes, Swara Cabs offers reliable cab services from Boat Club Road, Pune to all areas of Mumbai, including the airport and suburbs."
    },
    {
        question: "What is the fare for a cab from Boat Club Road to Mumbai?",
        answer: "Fares start from ₹6,000 for a sedan. Final pricing depends on the vehicle type, time of travel, and exact drop location in Mumbai."
    },
    {
        question: "How can I book a cab from Boat Club Road to Mumbai?",
        answer: "You can book directly through our website or call us at +91 9697780707 for immediate assistance."
    },
    {
        question: "Do you offer doorstep pickup from Boat Club Road?",
        answer: "Yes, we provide doorstep pickup from any address on Boat Club Road, ensuring a hassle-free travel experience."
    },
    {
        question: "Is night travel from Boat Club Road to Mumbai available?",
        answer: "Yes, we operate 24/7, and night travel is available with a nominal night-time surcharge."
    },
    {
        question: "What types of cabs are available for Boat Club Road to Mumbai?",
        answer: "We offer sedans, SUVs, Ertiga, Innova Crysta, and tempo travellers to suit different group sizes and preferences."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Nilesh Jadhav',
        review: 'Booked a cab from Pune to Mumbai with Swara Cabs. The ride was comfortable, the driver was punctual, and the car was clean and well-maintained.'
    },
    {
        name: 'Ms. Rupal Thakur',
        review: 'Highly satisfied with Swara Cabs for my Pune to Mumbai trip. Easy booking, timely service, and a very courteous driver.'
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






const boatClubToMumbaiCabSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Boat Club Road to Mumbai Cab",
  "image": "https://www.swaracabs.in/assets/images/boat-club-mumbai-cab.jpg",
  "description": "Book reliable Boat Club Road to Mumbai cab service with AC, sedan, and SUV options. Available for one-way, round trip, airport drops, and corporate travel with verified drivers and 24/7 support.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "ratingCount": "9879",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "1400",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/boat-club-road-to-mumbai-cab"
  }
};






    return (
        <div>
<Helmet>
  <title>Boat Club Road to Mumbai Cab | Book AC, Sedan & SUV Taxi | Swara Cabs</title>
  <meta
    name="description"
    content="Book reliable Boat Club Road to Mumbai cab service with AC, sedan, and SUV options. Available for one-way, round trip, airport drops, and corporate travel with verified drivers and 24/7 support."
  />
  <meta
    name="keywords"
    content="Boat Club Road to Mumbai Cab, One-Way Cab Boat Club Road to Mumbai, AC Taxi Boat Club to Mumbai, Sedan Cab Boat Club Mumbai, SUV Cab Boat Club Road to Mumbai, Online Booking Boat Club Mumbai Cab, Verified Driver Boat Club Ride, Executive Taxi Boat Club to Mumbai, Corporate Cab Boat Club Road, Safe Cab Boat Club to Mumbai, Affordable Cab Boat Club Mumbai, 24/7 Cab Booking Boat Club, Airport Drop Boat Club to Mumbai, Round Trip Cab Boat Club Road, Expressway Ride Boat Club to Mumbai"
  />
  <script type="application/ld+json">
    {JSON.stringify(boatClubToMumbaiCabSchema)}
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
                            <img src='/images/keyword/63.jpg' alt='img' />
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

export default Boatclubroadtomumbaicab;