
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Pimprichichwadtomumbacab() {



    const cardData =
    {
        keyword: 'Pimpri Chinchwad to Mumbai Cab',
        heading: 'Swara Cabs : Pimpri Chinchwad to Mumbai Cab',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable cab services for your journey from Pimpri Chinchwad to Mumbai. Mumbai, the vibrant commercial and cultural capital of Maharashtra, is famous for its iconic skyline, bustling streets, and dynamic energy. Whether you are traveling for a business meeting, family visit, or airport transfer, we ensure a smooth and hassle-free experience. The distance from Pimpri Chinchwad to Mumbai is approximately 135 kilometers via the Expressway, with a travel time of around 3 hours depending on traffic conditions. With our well-maintained fleet and professional drivers, Swara Cabs guarantees a safe, timely, and comfortable ride tailored to your travel needs.',

        top: 'Top Places to Visit in Mumbai with Swara Cabs',

        "topPlaces": [
             {
                "title": "Marine Drive",
                "description": "Also known as the Queen’s Necklace, Marine Drive is a 3.6 km long boulevard that runs along the coast of South Mumbai. It's perfect for evening strolls, watching sunsets, or just enjoying the sea breeze. The view of the city’s skyline at night is breathtaking."
            },
            {
                "title": "Gateway of India",
                "description": "The Gateway of India is one of Mumbai’s most iconic landmarks, built during the British Raj. Overlooking the Arabian Sea, it attracts thousands of tourists and locals alike. The nearby ferry rides to Elephanta Caves and its historical significance make it a must-visit spot in the city."
            },
            {
                "title": "Chhatrapati Shivaji Maharaj Terminus",
                "description": "A UNESCO World Heritage Site, this historic railway station is an architectural marvel that blends Victorian Gothic and Indian styles. It serves as a bustling transit hub and a magnificent symbol of Mumbai’s colonial past."
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
        "name": "Pimpri Chinchwad to Mumbai Cab",
        "description": "Travel from Pimpri Chinchwad to Mumbai comfortably with Swara Cab’s reliable outstation cab service. Whether it’s for work, vacation, or a personal visit, we offer safe, timely, and smooth rides. Our cabs are regularly sanitized and maintained for your peace of mind. With experienced drivers and flexible pick-up options, your journey becomes stress-free. Book in advance or last-minute — we’re always ready to get you moving."
    },
    {
        "name": "Cab Hire Pimpri to Mumbai",
        "description": "Looking to hire a cab from Pimpri to Mumbai? Swara Cab provides professional cab hire services that ensure a premium travel experience. Choose from a fleet of clean and modern vehicles, including hatchbacks, sedans, and SUVs. Our pricing is transparent, and our drivers are punctual and courteous. Whether it’s a one-way or round trip, our cab hire service adapts to your travel schedule with ease."
    },
    {
        "name": "Online Cab Booking Pimpri Chinchwad to Mumbai",
        "description": "Swara Cab makes online cab booking from Pimpri Chinchwad to Mumbai simple and fast. Our intuitive booking system allows you to select your route, vehicle type, and travel time in just a few clicks. With 24/7 support and real-time booking confirmation, we ensure complete convenience. Say goodbye to long queues and waiting — book your ride anytime from the comfort of your home. Enjoy fast, secure, and reliable service every time."
    },
    {
        "name": "AC Taxi Pimpri Chinchwad to Mumbai",
        "description": "Beat the heat and travel in comfort with Swara Cab’s AC taxi service from Pimpri Chinchwad to Mumbai. All our cars are equipped with efficient air conditioning and plush interiors to ensure a relaxing journey. Our professional drivers take care of the road while you sit back and enjoy the ride. Whether it’s a long-distance haul or a quick drop-off, your comfort is always our priority. Perfect for both leisure and business travelers."
    },
    {
        "name": "Sedan Cab Pimpri to Mumbai",
        "description": "For those who value comfort and style, Swara Cab offers sedan cab options for travel from Pimpri to Mumbai. Our sedans are ideal for solo travelers, couples, or small families who want extra legroom and a smooth ride. Enjoy the journey in vehicles like Dzire, Amaze, or Etios, all driven by trained chauffeurs. The ride is not only elegant but also comes at an affordable price. Book a sedan and experience comfort without compromise."
    },
    {
        "name": "One-Way Taxi Pimpri Chinchwad to Mumbai",
        "description": "Need a one-way ride to Mumbai? Swara Cab provides budget-friendly and reliable one-way taxi services from Pimpri Chinchwad. You only pay for the distance you travel—no return fare or hidden costs. It's perfect for business meetings, dropping off family, or airport transfers. Travel safely with experienced drivers and on-time service. Book your one-way taxi online and ride without any hassle."
    },
    {
        "name": "Affordable Cab Service Pimpri Chinchwad",
        "description": "Swara Cab offers pocket-friendly cab services from Pimpri Chinchwad to Mumbai without compromising on quality. We understand the importance of value, especially for frequent commuters and family travelers. Our fare structure is transparent, and we provide various vehicle options to suit different budgets. Despite the low cost, you’ll enjoy clean cars, professional drivers, and reliable service. Book an affordable ride today and experience the Swara Cab standard."
    },
    {
        "name": "Executive Cabs Pimpri Chinchwad to Mumbai",
        "description": "Travel in class with Swara Cab’s executive cab services from Pimpri Chinchwad to Mumbai. Our executive fleet includes premium vehicles ideal for business professionals and high-comfort seekers. Get Wi-Fi-enabled cars, bottled water, trained chauffeurs, and smooth pickups. Whether you're heading to a corporate meeting or a hotel, arrive in style and comfort. Booking is quick and available 24/7 through our online platform."
    },
    {
        "name": "Pimpri Chinchwad to Mumbai Airport Cab",
        "description": "Catch your flight on time with Swara Cab’s reliable airport cab service from Pimpri Chinchwad to Mumbai. We monitor traffic and departure schedules to ensure timely drop-offs at Mumbai Airport. With door-to-door pickup, clean cars, and experienced drivers, airport transfers become stress-free. Our 24/7 availability means we’re always ready, whether you fly early in the morning or late at night. Book now and travel without any last-minute rush."
    },
    {
        "name": "Long-Distance Cab Pimpri Chinchwad",
        "description": "Planning a long-distance journey from Pimpri Chinchwad? Swara Cab specializes in safe and comfortable long-distance cab travel to Mumbai and beyond. Our drivers are trained for highway driving and our vehicles are regularly inspected for safety. Sit back and enjoy scenic routes in a cab that’s built for endurance. Ideal for both family and business travel, with no compromise on comfort. We also offer rest stops and flexible scheduling for your convenience."
    },
    {
        "name": "Round Trip Cab Pimpri to Mumbai",
        "description": "Make your travel flexible and efficient with Swara Cab’s round trip cab services from Pimpri to Mumbai. Whether you’re attending a one-day event or planning a short vacation, round trip bookings save time and cost. You’ll have the same cab and driver throughout, offering convenience and peace of mind. Avoid multiple bookings or delays—just book once and let us take care of both legs of the journey. Get premium service at a value-packed price."
    },
    {
        "name": "Business Travel Cab Pimpri to Mumbai",
        "description": "Swara Cab understands the needs of business professionals traveling from Pimpri to Mumbai. Our business travel cab service offers timely pickups, quiet cabins, and courteous drivers to help you stay focused during your ride. With GPS-tracked vehicles, e-receipts, and on-time performance, we cater to your corporate standards. Whether it's an airport drop or an office commute, we ensure you arrive prepared and relaxed. Book with us for a polished, professional ride."
    },
    {
        "name": "Pimpri Chinchwad to Mumbai SUV Taxi",
        "description": "Travel with your family or group in spacious comfort with Swara Cab’s SUV taxi service from Pimpri Chinchwad to Mumbai. Our SUVs offer ample seating, legroom, and luggage space—perfect for long drives. Vehicles like Ertiga and Innova provide a smooth ride with top-notch suspension and air-conditioning. Enjoy a road trip vibe while staying safe and organized. Choose Swara Cab for group comfort and a premium SUV experience."
    },
    {
        "name": "Family Cab Service Pimpri Chinchwad",
        "description": "Swara Cab provides safe and spacious family cab services from Pimpri Chinchwad to Mumbai. Whether it’s a weekend outing or a family function, we have vehicles to fit families of all sizes. With child seat options, clean interiors, and friendly drivers, family travel becomes enjoyable and stress-free. We treat your family like our own, focusing on comfort, safety, and punctuality. Book your family ride and make memories on the move."
    },
    {
        "name": "Safe Cab Ride Pimpri to Mumbai",
        "description": "Your safety is our top priority at Swara Cab. From Pimpri to Mumbai, we provide well-maintained vehicles, background-verified drivers, and real-time GPS tracking for every ride. We follow strict safety protocols, including car sanitization and seatbelt checks, to ensure a worry-free journey. Whether you’re traveling late at night or during busy hours, rest assured you’re in safe hands. Choose Swara Cab for secure, reliable transportation every time."
    }
],

"tableData": [
    ["Pimpri Chinchwad to Mumbai Cab", "Cab Hire Pimpri to Mumbai"],
    ["Online Cab Booking Pimpri Chinchwad to Mumbai", "AC Taxi Pimpri Chinchwad to Mumbai"],
    ["Sedan Cab Pimpri to Mumbai", "One-Way Taxi Pimpri Chinchwad to Mumbai"],
    ["Affordable Cab Service Pimpri Chinchwad", "Executive Cabs Pimpri Chinchwad to Mumbai"],
    ["Pimpri Chinchwad to Mumbai Airport Cab", "Long-Distance Cab Pimpri Chinchwad"],
    ["Round Trip Cab Pimpri to Mumbai", "Business Travel Cab Pimpri to Mumbai"],
    ["Pimpri Chinchwad to Mumbai SUV Taxi", "Family Cab Service Pimpri Chinchwad"],
    ["Safe Cab Ride Pimpri to Mumbai", ""]
],


"whychoose": [
  {
    "WhyChooseheading": "Reliable Cab Service from Pimpri Chinchwad to Mumbai",
    "WhyChoosedescription": "We understand the importance of punctuality for business travelers, airport drop-offs, and family trips. Our cabs are always on time, driven by professional chauffeurs who know the best and fastest routes from Pimpri Chinchwad to Mumbai. You can count on us for smooth and timely travel every single time."
  },
  {
    "WhyChooseheading": "Clean, Comfortable, and Spacious Vehicles",
    "WhyChoosedescription": "Travel in style and comfort with our fleet of sanitized, well-maintained sedans, SUVs, and premium vehicles. Whether you’re traveling alone or with family or colleagues, our cars offer ample legroom, luggage space, and modern features like AC, phone charging, and water bottles to make your journey pleasant."
  },
  {
    "WhyChooseheading": "Affordable Pricing with No Hidden Charges",
    "WhyChoosedescription": "Our fares are transparent and budget-friendly. We include tolls, taxes, driver allowance, and parking in the fare so that there are no surprises later. You’ll receive a detailed breakdown of costs upfront—what you see is exactly what you pay."
  },
  {
    "WhyChooseheading": "Professional and Verified Drivers",
    "WhyChoosedescription": "Our drivers are experienced, background-verified, and trained for long-distance trips. They’re courteous, speak multiple languages, and always put your comfort and safety first. Whether it’s early morning or late night, you can ride with peace of mind."
  },
  {
    "WhyChooseheading": "24/7 Cab Availability and Support",
    "WhyChoosedescription": "No matter what time you need to travel, we’re ready. Our services operate round the clock, with a support team always on standby to assist with booking modifications, urgent requests, or location guidance. Book your ride anytime, from anywhere."
  },
  {
    "WhyChooseheading": "One-Way and Round Trip Options",
    "WhyChoosedescription": "We offer flexible travel packages based on your needs—book a simple one-way ride to Mumbai or plan a round trip for return convenience. We even provide waiting time flexibility for meetings or errands en route."
  },
  {
    "WhyChooseheading": "Easy Online Booking with Instant Confirmation",
    "WhyChoosedescription": "Book your cab in just a few clicks through our website or app. Choose your vehicle, enter trip details, and get instant booking confirmation along with driver and vehicle info. Our hassle-free booking process is designed to save you time and stress."
  },
  {
    "WhyChooseheading": "GPS-Enabled Live Tracking",
    "WhyChoosedescription": "Stay updated on your cab’s exact location through our live GPS tracking system. Whether you're monitoring the ride for yourself or your loved ones, you'll know the real-time progress and estimated arrival time."
  }
]







    }



const faqData = [
    {
        question: "Do you provide cab service from Pimpri Chinchwad to Mumbai?",
        answer: "Yes, Swara Cabs offers reliable and comfortable cab services from Pimpri Chinchwad to Mumbai for both one-way and round trips."
    },
    {
        question: "What is the fare for a Pimpri Chinchwad to Mumbai cab?",
        answer: "Fares start from ₹5,800 for a sedan. The total cost depends on the vehicle type and travel timing. Contact us for an exact quote."
    },
    {
        question: "How do I book a cab from Pimpri Chinchwad to Mumbai?",
        answer: "You can book easily via our website or by calling +91 9697780707. We offer quick confirmation and flexible booking options."
    },
    {
        question: "Are toll charges and driver fees included in the fare?",
        answer: "Yes, all Swara Cabs fares are inclusive of tolls, driver allowance, and taxes. No surprise charges."
    },
    {
        question: "Which types of vehicles are available for this route?",
        answer: "We offer sedans, SUVs, and tempo travellers to match your group size and comfort preference."
    },
    {
        question: "Can I book a cab for immediate pickup from Pimpri Chinchwad?",
        answer: "Yes, subject to availability, we offer same-day and urgent pickups. Advance booking is recommended for guaranteed service."
    },
    {
        question: "Is night-time pickup available from Pimpri Chinchwad?",
        answer: "Yes, we operate 24/7. Night travel is fully supported, with a small additional charge during 10 PM to 6 AM."
    },
    {
        question: "Do you offer one-way and round trip options?",
        answer: "Yes, both one-way and round-trip cab services are available from Pimpri Chinchwad to Mumbai."
    },
    {
        question: "Is it safe for solo or female travellers?",
        answer: "Absolutely. All our drivers are verified and trained. Safety and comfort are our top priorities."
    },
    {
        question: "How early should I book for airport transfers to Mumbai?",
        answer: "We recommend booking at least 6 hours in advance for airport transfers, but we can arrange emergency cabs based on availability."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Sandeep Jadhav',
        review: 'I needed a cab from Pimpri Chinchwad to Mumbai airport and Swara Cabs delivered excellent service. On-time pickup, clean car, and a polite driver.'
    },
    {
        name: 'Ms. Anjali More',
        review: 'Swara Cabs made my Pimpri to Mumbai trip hassle-free. Booking was simple, the ride was comfortable, and the price was fair. Will use again!'
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
  "name": "Pimpri Chinchwad to Mumbai Cab",
  "image": "https://www.swaracabs.in/assets/images/pimpri-to-mumbai-cab.jpg",
  "description": "Book reliable Pimpri Chinchwad to Mumbai cabs with Swara Cabs. Choose from AC sedans and SUVs for one-way or round trips. Affordable, safe, and timely travel for airport, business, or family needs.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.6",
    "ratingCount": "12356"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2299",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/pimpri-chinchwad-to-mumbai-cab"
  }
};




    return (
        <div>
<Helmet>
  <title>Pimpri Chinchwad to Mumbai Cab | Safe & Affordable Rides | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book reliable Pimpri Chinchwad to Mumbai cabs with Swara Cabs. Choose from AC sedans and SUVs for one-way or round trips. Affordable, safe, and timely travel for airport, business, or family needs." 
  />
  <meta 
    name="keywords" 
    content="Pimpri Chinchwad to Mumbai Cab, Cab Hire Pimpri to Mumbai, Online Cab Booking Pimpri Chinchwad to Mumbai, AC Taxi Pimpri Chinchwad to Mumbai, Sedan Cab Pimpri to Mumbai, One-Way Taxi Pimpri Chinchwad to Mumbai, Affordable Cab Service Pimpri Chinchwad, Executive Cabs Pimpri Chinchwad to Mumbai, Pimpri Chinchwad to Mumbai Airport Cab, Long-Distance Cab Pimpri Chinchwad, Round Trip Cab Pimpri to Mumbai, Business Travel Cab Pimpri to Mumbai, Pimpri Chinchwad to Mumbai SUV Taxi, Family Cab Service Pimpri Chinchwad, Safe Cab Ride Pimpri to Mumbai" 
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
                            <img src='/images/keyword/3.jpg' alt='img' />
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

export default Pimprichichwadtomumbacab;