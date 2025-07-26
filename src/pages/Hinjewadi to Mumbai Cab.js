
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Hinjewaditomumbaicabs() {



    const cardData =
    {
        keyword: 'Hinjewadi to Mumbai Cab',
        heading: 'Swara Cabs : Hinjewadi to Mumbai Cab',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable cab services for your journey from Hinjewadi to Mumbai. Mumbai, Maharashtra’s vibrant commercial and cultural capital, is known for its iconic skyline, bustling streets, and energetic atmosphere. Whether you are traveling for a business meeting, a family visit, or an airport transfer, Swara Cabs ensures a smooth and hassle-free experience. The distance from Hinjewadi to Mumbai is approximately 135 kilometers, with a travel time of around 3 to 4 hours depending on traffic conditions. With our well-maintained fleet and professional drivers, Swara Cabs guarantees a safe, punctual, and comfortable ride tailored to your travel needs.',

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
        "name": "Hinjewadi to Mumbai Cab",
        "description": "Swara Cab offers reliable and comfortable cab services from Hinjewadi to Mumbai, perfect for daily commuters, weekend travelers, and corporate clients. Whether you're heading home or to a meeting, our punctual drivers and clean vehicles ensure a stress-free journey. We serve all phases of Hinjewadi, including major residential and commercial hubs. Our cars are sanitized regularly and equipped for long-distance comfort. Book now for an easy, smooth ride every time."
    },
    {
        "name": "Tech Park to Mumbai Taxi",
        "description": "Commuting from Rajiv Gandhi Infotech Park or other Hinjewadi tech parks? Swara Cab provides fast and dependable taxi services to Mumbai, designed for professionals on the move. Avoid public transport delays and travel in a clean, air-conditioned vehicle with a professional chauffeur. We offer pickup directly from IT companies or co-working spaces. With real-time tracking and fixed pricing, your commute becomes simpler and more efficient."
    },
    {
        "name": "Cab from Hinjewadi Phase 1 to Mumbai",
        "description": "Travel from Hinjewadi Phase 1 to Mumbai with Swara Cab’s trusted intercity taxi service. Ideal for IT employees, business owners, and residents, we ensure timely pickups and smooth travel. Choose from multiple cab types including hatchbacks, sedans, and SUVs. Our experienced drivers know the best routes to minimize delays. Book now for hassle-free, one-way or round-trip rides."
    },
    {
        "name": "AC Cab Hinjewadi to Mumbai",
        "description": "Enjoy a cool, refreshing ride with Swara Cab’s AC cab services from Hinjewadi to Mumbai. All our vehicles come with efficient air-conditioning, clean interiors, and ample space. Perfect for long journeys or hot weather travel, our AC cabs guarantee comfort and relaxation. You’ll experience smooth highway driving and door-to-door service. Book your air-conditioned ride online anytime."
    },
    {
        "name": "Executive Cab Service Hinjewadi",
        "description": "For corporate travel with a touch of luxury, choose Swara Cab’s executive cab service from Hinjewadi to Mumbai. Our premium vehicles offer plush seating, air-conditioning, and discreet, well-dressed chauffeurs. Ideal for business meetings, airport drops, or VIP clients. You’ll ride in style and arrive on time. Elevate your intercity commute with our top-tier service."
    },
    {
        "name": "Safe Taxi Hinjewadi to Mumbai",
        "description": "Safety is our priority at Swara Cab. Our Hinjewadi to Mumbai taxi service includes background-verified drivers, GPS-enabled vehicles, and strict hygiene protocols. Whether you're traveling solo or with family, you’ll enjoy peace of mind and reliable service. We maintain high safety standards and follow all regulatory guidelines. Book a safe, smooth ride with Swara Cab today."
    },
    {
        "name": "One-Way Cab from Hinjewadi",
        "description": "Looking for a one-way ride from Hinjewadi to Mumbai? Swara Cab offers affordable one-way taxi options without return fare charges. Pay only for the distance you travel and enjoy flexible pickup times from any Hinjewadi phase. Ideal for business travelers, students, or families relocating. Book online and skip the hassle of round-trip commitments. Reliable, fast, and pocket-friendly."
    },
    {
        "name": "Airport Cab Hinjewadi to Mumbai",
        "description": "Swara Cab provides dependable airport taxi services from Hinjewadi to Mumbai’s Chhatrapati Shivaji Maharaj International Airport. Our drivers track flight schedules to ensure timely drop-offs with no stress. Whether it's a late-night flight or early morning departure, we're available 24/7. Enjoy luggage-friendly vehicles, fixed fares, and direct routes. Travel safe and arrive on time with Swara Cab."
    },
    {
        "name": "Round Trip Cabs Hinjewadi to Mumbai",
        "description": "Planning to return the same day? Swara Cab’s round trip cab service from Hinjewadi to Mumbai is the most efficient choice. Keep the same car and driver for both legs of your journey and save time and money. Perfect for business visits, short getaways, or family outings. Flexible scheduling and transparent pricing make it easy. Book your round trip ride today and travel stress-free."
    },
    {
        "name": "Business Cab Booking Hinjewadi",
        "description": "For busy professionals in Hinjewadi, Swara Cab offers fast and efficient business cab bookings to Mumbai. Enjoy clean, executive cars, discreet drivers, and a smooth booking experience. Ideal for corporate travel, client visits, and executive pick-ups. You get priority service, quiet rides, and seamless billing support. Book with confidence for your next business trip."
    },
    {
        "name": "Affordable Fare Hinjewadi to Mumbai",
        "description": "Swara Cab offers competitive and affordable fares for travel from Hinjewadi to Mumbai. Our pricing is transparent, with no surge charges or hidden fees. Choose from a range of budget-friendly cars and ride in comfort. Even with our low rates, we ensure professional service and well-maintained vehicles. Travel more for less with Swara Cab."
    },
    {
        "name": "Hinjewadi to Mumbai SUV Taxi",
        "description": "Travel with family or a group? Swara Cab offers spacious SUV taxis from Hinjewadi to Mumbai with ample seating and luggage space. Our SUVs are perfect for group outings, long-distance travel, or when you just want more comfort. Clean, air-conditioned, and driven by professional chauffeurs, they ensure a smooth ride. Book a reliable SUV for your next trip to Mumbai."
    },
    {
        "name": "Quick Cab from Hinjewadi",
        "description": "Need a ride in a hurry? Swara Cab provides fast cab services from Hinjewadi to Mumbai with quick dispatch and instant booking confirmation. Our fleet is always on standby, ready to pick you up in minutes. Ideal for last-minute meetings or emergency travel. Get on the road faster with Swara Cab’s quick service promise. No delays, no hassles — just go."
    },
    {
        "name": "Online Booking Hinjewadi to Mumbai",
        "description": "Book your cab from Hinjewadi to Mumbai online with Swara Cab’s easy-to-use platform. Select your route, cab type, and schedule in just a few steps. Receive instant booking confirmation and real-time driver tracking. Our digital system ensures fast, reliable, and secure reservations. Whether you're planning ahead or need a ride now, booking is always simple with Swara Cab."
    },
    {
        "name": "Fastest Cab Service Hinjewadi",
        "description": "Swara Cab delivers the fastest cab service from Hinjewadi to Mumbai with minimal waiting time and efficient routes. Our trained drivers take the quickest yet safest roads to get you to your destination on time. Whether it’s for business, airport transfers, or emergencies, we respond quickly and ride faster. Enjoy punctuality and professionalism every mile of the way. Fast, safe, and always on time — that's the Swara Cab promise."
    }
],

"tableData": [
    ["Hinjewadi to Mumbai Cab", "Tech Park to Mumbai Taxi"],
    ["Cab from Hinjewadi Phase 1 to Mumbai", "AC Cab Hinjewadi to Mumbai"],
    ["Executive Cab Service Hinjewadi", "Safe Taxi Hinjewadi to Mumbai"],
    ["One-Way Cab from Hinjewadi", "Airport Cab Hinjewadi to Mumbai"],
    ["Round Trip Cabs Hinjewadi to Mumbai", "Business Cab Booking Hinjewadi"],
    ["Affordable Fare Hinjewadi to Mumbai", "Hinjewadi to Mumbai SUV Taxi"],
    ["Quick Cab from Hinjewadi", "Online Booking Hinjewadi to Mumbai"],
    ["Fastest Cab Service Hinjewadi", ""]
],



"whychoose": [
  {
    "WhyChooseheading": "Premium Cab Service from Hinjewadi to Mumbai",
    "WhyChoosedescription": "Our Hinjewadi to Mumbai cab service is trusted by IT professionals, business travelers, and families alike. Whether you're heading to the airport, a corporate event, or visiting Mumbai for leisure, we ensure a smooth, comfortable, and punctual ride tailored to your schedule."
  },
  {
    "WhyChooseheading": "Wide Range of Well-Maintained Vehicles",
    "WhyChoosedescription": "Choose from our fleet of AC sedans, spacious SUVs like Ertiga and Innova Crysta, or premium cars depending on your travel preference. Every vehicle is regularly serviced, thoroughly cleaned, and equipped with modern features to ensure a safe and enjoyable journey."
  },
  {
    "WhyChooseheading": "Competitive and Transparent Pricing",
    "WhyChoosedescription": "Our pricing is all-inclusive with no hidden charges. Toll taxes, driver allowance, and parking fees are included upfront. We offer cost-effective one-way and round-trip packages that suit both individual and corporate travelers."
  },
  {
    "WhyChooseheading": "Professional and Experienced Drivers",
    "WhyChoosedescription": "All our drivers are background-verified and trained for long-distance driving. With strong knowledge of the Mumbai-Pune Expressway and alternate city routes, they ensure your ride is safe, efficient, and relaxing—whether you’re traveling for business or personal reasons."
  },
  {
    "WhyChooseheading": "24/7 Cab Availability for All Travel Needs",
    "WhyChoosedescription": "Need a cab early morning or late at night? We’ve got you covered. Our Hinjewadi to Mumbai cabs are available round the clock with flexible booking options and emergency support for any last-minute changes."
  },
  {
    "WhyChooseheading": "Flexible Booking Options",
    "WhyChoosedescription": "Book via our website, mobile app, or simply call us. Choose your cab type, pickup time, and destination with ease. Get instant confirmation, driver details, and real-time cab tracking all from the convenience of your phone."
  },
  {
    "WhyChooseheading": "Safe and Sanitized Rides",
    "WhyChoosedescription": "Your health and safety are our priority. Every cab is sanitized before each trip, and all drivers follow hygiene protocols. Whether you're commuting alone or with colleagues, you can ride with complete peace of mind."
  },
  {
    "WhyChooseheading": "Ideal for Business and Airport Transfers",
    "WhyChoosedescription": "We specialize in timely airport transfers and corporate travel. If you're catching a flight from Mumbai Airport or heading to a client meeting, our punctuality and comfort make us the perfect choice for professional commuters."
  }
]








    }



const faqData = [
    {
        question: "Do you offer cab service from Hinjewadi to Mumbai?",
        answer: "Yes, Swara Cabs provides comfortable and timely cab services from Hinjewadi to all areas in Mumbai, including airport transfers."
    },
    {
        question: "What is the fare for a Hinjewadi to Mumbai cab?",
        answer: "Our one-way fares start from ₹5,800 for a standard sedan. Pricing may vary based on vehicle type, time of travel, and route."
    },
    {
        question: "How can I book a Hinjewadi to Mumbai cab with Swara Cabs?",
        answer: "You can book via our website or call us directly at +91 9697780707. Online booking is quick and hassle-free."
    },
    {
        question: "Which cab options are available from Hinjewadi to Mumbai?",
        answer: "We offer sedans, SUVs, and tempo travellers. Choose based on your group size and comfort needs."
    },
    {
        question: "Is there an extra charge for night pickups from Hinjewadi?",
        answer: "Yes, a small night-time surcharge applies for pickups between 10 PM and 6 AM."
    },
    {
        question: "Are the tolls, driver allowance, and taxes included in the fare?",
        answer: "Yes, all-inclusive pricing ensures you don’t pay anything extra beyond the quoted amount."
    },
    {
        question: "Do you provide Mumbai airport drops from Hinjewadi?",
        answer: "Yes, we specialize in on-time airport drop services from Hinjewadi to both Mumbai domestic and international terminals."
    },
    {
        question: "Can I book a round trip from Hinjewadi to Mumbai and back?",
        answer: "Absolutely. We offer round trip options with waiting or return trip flexibility as per your schedule."
    },
    {
        question: "What is the cancellation policy for Hinjewadi to Mumbai bookings?",
        answer: "You can cancel up to 12 hours before the trip at no charge. Late cancellations may incur a minimal fee."
    },
    {
        question: "Is Swara Cabs suitable for corporate travelers from Hinjewadi?",
        answer: "Yes, we serve many corporate clients in Hinjewadi. Our cabs are clean, punctual, and perfect for business travel."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Nikhil Bhosale',
        review: 'I booked a cab from Hinjewadi to Mumbai airport with Swara Cabs. The experience was excellent – driver was punctual, car was clean, and the ride was smooth.'
    },
    {
        name: 'Ms. Pooja Salunkhe',
        review: 'Swara Cabs provided a hassle-free experience for my travel from Hinjewadi to Mumbai. The online booking process was simple and service was very professional.'
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
  "name": "Hinjewadi to Mumbai Cab",
  "image": "https://www.swaracabs.in/assets/images/hinjewadi-to-mumbai-cab.jpg",
  "description": "Book Hinjewadi to Mumbai cab with Swara Cabs for safe, fast, and affordable travel. AC sedans and SUVs available for one-way, round-trip, and airport transfers from Pune’s tech hub.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "9857"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2399",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/hinjewadi-to-mumbai-cab"
  }
};





    return (
        <div>
<Helmet>
  <title>Hinjewadi to Mumbai Cab | Fast & Affordable | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Hinjewadi to Mumbai cab with Swara Cabs for safe, fast, and affordable travel. AC sedans and SUVs available for one-way, round-trip, and airport transfers from Pune’s tech hub." 
  />
  <meta 
    name="keywords" 
    content="Hinjewadi to Mumbai Cab, Tech Park to Mumbai Taxi, Cab from Hinjewadi Phase 1 to Mumbai, AC Cab Hinjewadi to Mumbai, Executive Cab Service Hinjewadi, Safe Taxi Hinjewadi to Mumbai, One-Way Cab from Hinjewadi, Airport Cab Hinjewadi to Mumbai, Round Trip Cabs Hinjewadi to Mumbai, Business Cab Booking Hinjewadi, Affordable Fare Hinjewadi to Mumbai, Hinjewadi to Mumbai SUV Taxi, Quick Cab from Hinjewadi, Online Booking Hinjewadi to Mumbai, Fastest Cab Service Hinjewadi" 
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
                            <img src='/images/keyword/5.jpg' alt='img' />
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

export default Hinjewaditomumbaicabs;