
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Mumbaitopunecabs() {



    const cardData =
    {
        keyword: 'Mumbai to Pune Cabs',
        heading: 'Swara Cabs : Mumbai to Pune Cabs',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable cab services for your journey from Mumbai to Pune. Pune, Maharashtra’s thriving cultural and educational hub, is known for its historic landmarks, green landscapes, and vibrant city life. Whether you’re traveling for a business meeting, visiting family, or catching a flight, Swara Cabs ensures a smooth and hassle-free experience. The road distance from Mumbai to Pune is approximately 150 kilometers via the Expressway, with a travel time of around 3 to 4 hours depending on traffic conditions. With our well-maintained fleet and professional drivers, Swara Cabs guarantees a safe, punctual, and comfortable ride tailored to your travel needs.',

        top: 'Top Places to Visit in Pune with Swara Cabs',

        "topPlaces": [
    {
        "title": "Shaniwar Wada",
        "description": "Shaniwar Wada is one of the most iconic historical structures in Pune, built in 1732 by the Peshwas of the Maratha Empire. The fort was originally the seat of power for the Peshwas and witnessed several key events in Maratha history. Though much of the structure was destroyed by fire in 1828, the remaining ruins, including the massive Dilli Darwaza (main gate), strong ramparts, and open courtyards, speak volumes about its glorious past. The fort is also known for its haunting legends, making it a popular spot for heritage walks and history enthusiasts."
    },
    {
        "title": "Aga Khan Palace",
        "description": "The Aga Khan Palace is a majestic building located in the Yerwada area of Pune, built in 1892 by Sultan Aga Khan III. It holds great historical importance as it served as a prison for Mahatma Gandhi, Kasturba Gandhi, and other freedom fighters during the Quit India Movement. The palace now houses a museum dedicated to Mahatma Gandhi, with photographs, personal items, and his ashes. The beautiful Italian arches, sprawling lawns, and peaceful surroundings make it a tranquil place to explore the legacy of India’s freedom struggle."
    },
    {
        "title": "Sinhagad Fort",
        "description": "Sinhagad Fort is a majestic hill fortress located about 30 kilometers from Pune, standing tall at an altitude of 1,312 meters. Known for its strategic location, the fort has played a crucial role in many battles, including the famous battle of Tanaji Malusare, a brave Maratha warrior. Today, it is a favorite trekking destination for adventure lovers and history buffs alike. Once at the top, visitors are rewarded with stunning views of the surrounding Sahyadri hills, rustic food stalls serving traditional Maharashtrian dishes like pithla-bhakri, and a strong sense of Maratha pride."
    },
    {
        "title": "Pataleshwar Cave Temple",
        "description": "Hidden amidst the urban chaos of JM Road, the Pataleshwar Cave Temple is a serene, 8th-century rock-cut shrine carved out of a single basalt rock. Dedicated to Lord Shiva, the temple features a beautifully carved sanctum, a circular Nandi Mandapa (pavilion), and intricate stone pillars that reflect ancient Indian architecture. Despite its location in the city, the temple offers a peaceful escape for spiritual seekers and architecture lovers. It’s also recognized as a protected monument by the Archaeological Survey of India."
    },
    {
        "title": "Raja Dinkar Kelkar Museum",
        "description": "The Raja Dinkar Kelkar Museum is a rich cultural repository, home to over 20,000 artifacts collected by Dr. Dinkar G. Kelkar in memory of his son. The museum showcases an incredible variety of items ranging from antique musical instruments and ancient sculptures to everyday household items from bygone eras. Each gallery offers a fascinating glimpse into India’s diverse artistic and cultural traditions. Located in the heart of Pune, it is a must-visit destination for art lovers, history buffs, and curious travelers alike."
    },
    {
        "title": "Osho Ashram (Osho International Meditation Resort)",
        "description": "Located in the lush and upscale Koregaon Park area, the Osho International Meditation Resort is a globally renowned spiritual retreat founded by spiritual teacher Osho. The ashram offers a wide range of meditation practices, wellness programs, spa treatments, and dynamic activities aimed at personal growth and mindfulness. Surrounded by tall bamboo trees, modern architecture, and a calm atmosphere, it attracts seekers from around the world. Visitors can take day passes or stay longer to experience a unique blend of spiritual retreat and luxurious comfort."
    },
    {
        "title": "Pune Okayama Friendship Garden",
        "description": "Also known as Pu La Deshpande Garden, the Pune Okayama Friendship Garden is one of the largest Japanese-style gardens outside Japan, inspired by the famous Korakuen Garden in Okayama. Sprawling across 10 acres, the garden features meticulously landscaped lawns, flowing streams, arched bridges, and tranquil walking paths. It's an ideal place for family picnics, photography, meditation, or simply unwinding amidst nature. The garden also hosts a musical fountain show in the evenings, adding to the charm of this beautifully designed space."
    },
    {
        "title": "Dagdusheth Halwai Ganpati Temple",
        "description": "The Dagdusheth Halwai Ganpati Temple is one of Pune’s most beloved spiritual landmarks, visited by thousands of devotees each day. Dedicated to Lord Ganesha, the temple is known for its grand celebrations during Ganesh Chaturthi and its beautifully adorned deity that exudes peace and blessings. Located in Budhwar Peth, the temple is a fine example of modern temple architecture, with ornate gold embellishments and intricate carvings. The temple’s trust is also involved in numerous social welfare activities, adding a layer of social service to spiritual devotion."
    },
    {
        "title": "Khadakwasla Dam",
        "description": "Khadakwasla Dam, situated just 20 km from Pune, is a favorite weekend retreat for locals. The dam is built on the Mutha River and is surrounded by scenic hills and lush greenery, making it a perfect place for nature lovers and photographers. Visitors often enjoy local snacks like corn, bhel, and tea by the waterfront. The area is also en route to Sinhagad Fort and National Defence Academy (NDA), making it a good pitstop for a full-day trip. The cool breeze and calming ambiance make it ideal for morning drives and romantic evening outings."
    }
],

"services": [
    {
        "name": "Mumbai to Pune Cabs",
        "description": "Planning a trip from Mumbai to Pune? Swara Cabs offers reliable and comfortable cab services for this popular route. Whether you're traveling for business, leisure, or a family visit, our cabs are available 24/7 to provide you with a smooth, safe, and punctual ride on the Mumbai-Pune Expressway."
    },
    {
        "name": "Mumbai to Pune AC Cab",
        "description": "Enjoy a cool and relaxing journey from Mumbai to Pune with our air-conditioned cabs. Perfect for long distances, our AC cabs ensure maximum comfort, even during hot weather or peak traffic. Choose from a range of vehicle options tailored to your travel needs."
    },
    {
        "name": "Mumbai to Pune One-Way Cab",
        "description": "Need a ride to Pune without worrying about return fares? Swara Cabs offers convenient and affordable one-way taxi services from Mumbai to Pune. Ideal for travelers moving to Pune or visiting for a single day, with no hidden charges or return trip obligations."
    },
    {
        "name": "Mumbai to Pune Round Trip Taxi",
        "description": "Book a round trip cab from Mumbai to Pune for added convenience. Whether you're attending an event or planning a day-long excursion, our round trip service ensures you have a cab waiting to bring you back on your schedule. Flexible return times and affordable pricing."
    },
    {
        "name": "Online Cab Booking Mumbai to Pune",
        "description": "Booking a cab from Mumbai to Pune has never been easier. Use our fast and secure online platform to choose your vehicle, set your pickup time, and confirm your ride instantly. Perfect for last-minute travel or advance bookings with transparent fares."
    },
    {
        "name": "Affordable Taxi Mumbai to Pune",
        "description": "Looking for a pocket-friendly cab ride from Mumbai to Pune? Swara Cabs offers economical pricing without compromising on quality. Enjoy clean vehicles, professional drivers, and competitive rates on one-way or round trip bookings."
    },
    {
        "name": "Sedan Cab Mumbai to Pune",
        "description": "Travel in comfort with our sedan cabs from Mumbai to Pune. Suitable for individuals or small families, our sedans offer a smooth ride, ample luggage space, and affordable pricing. Choose from trusted models like Dzire, Etios, or Honda City."
    },
    {
        "name": "SUV Cab Mumbai to Pune",
        "description": "For group travel or extra space, our SUV cabs from Mumbai to Pune are the best choice. With large seating capacity and plenty of legroom, SUVs like Ertiga, Innova, and Crysta provide both comfort and convenience for long journeys."
    },
    {
        "name": "Mumbai to Pune Expressway Cab",
        "description": "Take the fast lane with our Mumbai to Pune expressway cabs. Our drivers are experienced with highway travel and ensure a swift, safe, and enjoyable ride via the Mumbai-Pune Expressway. Ideal for those who value speed and punctuality."
    },
    {
        "name": "Corporate Travel Mumbai to Pune",
        "description": "Swara Cabs offers professional and punctual corporate travel solutions for clients commuting between Mumbai and Pune. Whether it's an airport pickup or an intercity meeting, our executive vehicles and trained drivers ensure a seamless experience."
    },
    {
        "name": "Verified Drivers Mumbai to Pune",
        "description": "Your safety matters. All our drivers are thoroughly background-checked, professionally trained, and experienced in long-distance travel. With Swara Cabs, you can enjoy a secure and stress-free ride from Mumbai to Pune."
    },
    {
        "name": "Executive Cabs Mumbai to Pune",
        "description": "Upgrade your travel experience with our executive cab services. Travel from Mumbai to Pune in premium vehicles with plush interiors, professional drivers, and top-notch service. Perfect for business travelers and those seeking luxury and comfort."
    },
    {
        "name": "24/7 Cab Booking Mumbai to Pune",
        "description": "Need to travel late at night or early in the morning? Swara Cabs offers 24/7 booking support for Mumbai to Pune trips. Book anytime, and our cab will be there — always on time and ready to drive you safely."
    },
    {
        "name": "Family Cab Mumbai to Pune",
        "description": "Planning a family trip to Pune? Our spacious and comfortable family cabs make the journey easy and enjoyable. Choose from large sedans or SUVs to accommodate everyone comfortably, with space for luggage and child-friendly options if needed."
    },
    {
        "name": "Fast Pickup Cab Mumbai to Pune",
        "description": "Running on a tight schedule? Swara Cabs offers fast pickups for your Mumbai to Pune journey. Our cabs are dispatched quickly, with minimal wait time, ensuring you reach your destination on time, every time."
    }
],

"tableData": [
    ["Mumbai to Pune Cabs", "Mumbai to Pune AC Cab"],
    ["Mumbai to Pune One-Way Cab", "Mumbai to Pune Round Trip Taxi"],
    ["Online Cab Booking Mumbai to Pune", "Affordable Taxi Mumbai to Pune"],
    ["Sedan Cab Mumbai to Pune", "SUV Cab Mumbai to Pune"],
    ["Mumbai to Pune Expressway Cab", "Corporate Travel Mumbai to Pune"],
    ["Verified Drivers Mumbai to Pune", "Executive Cabs Mumbai to Pune"],
    ["24/7 Cab Booking Mumbai to Pune", "Family Cab Mumbai to Pune"],
    ["Fast Pickup Cab Mumbai to Pune", ""]
],




"whychoose": [
  {
    "WhyChooseheading": "Reliable Intercity Cab from Mumbai to Pune",
    "WhyChoosedescription": "We offer dependable Mumbai to Pune cab services that ensure you reach your destination on time, whether it’s for business, personal travel, or a family visit. Our cabs are always punctual and ready to serve, even during peak hours or odd times."
  },
  {
    "WhyChooseheading": "Multiple Vehicle Options to Suit Every Need",
    "WhyChoosedescription": "Choose from a wide range of cabs including budget-friendly sedans, spacious Ertigas, and luxurious Innova Crystas. Whether you’re traveling solo or with a group, we have the perfect cab tailored to your comfort and budget."
  },
  {
    "WhyChooseheading": "Doorstep Pickup Anywhere in Mumbai",
    "WhyChoosedescription": "Enjoy the convenience of being picked up from your home, hotel, office, or airport terminal. We cover all areas of Mumbai including Andheri, Bandra, Borivali, Navi Mumbai, and more with hassle-free doorstep service."
  },
  {
    "WhyChooseheading": "Affordable and Transparent Pricing",
    "WhyChoosedescription": "Our Mumbai to Pune cab fares are competitively priced with no hidden charges. You get an all-inclusive fare quote covering tolls, taxes, and driver allowance—so there are no surprises after your ride."
  },
  {
    "WhyChooseheading": "Safe and Sanitized Vehicles",
    "WhyChoosedescription": "All our cabs are sanitized before every trip and are well-maintained for performance and hygiene. We also equip our vehicles with essentials like sanitizers and follow strict safety guidelines for a secure ride."
  },
  {
    "WhyChooseheading": "Professional Drivers Familiar with the Route",
    "WhyChoosedescription": "Our drivers are experienced, courteous, and trained for long-distance travel. They are familiar with the Mumbai–Pune Expressway and alternative routes, ensuring a smooth, safe, and quick journey."
  },
  {
    "WhyChooseheading": "Perfect for Airport Transfers, Corporate Travel, and Leisure Trips",
    "WhyChoosedescription": "Whether you're catching a flight, attending a meeting, or planning a weekend getaway, our cabs provide a stress-free way to travel between Mumbai and Pune with reliability and comfort."
  },
  {
    "WhyChooseheading": "24/7 Availability with Real-Time Support",
    "WhyChoosedescription": "Our cab services operate round the clock, including late-night and early-morning pickups. You also get access to real-time customer support and tracking for a worry-free experience from booking to drop-off."
  }
]


















    }



const faqData = [
    {
        question: "Do you provide cab services from Mumbai to Pune?",
        answer: "Yes, Swara Cabs offers reliable and comfortable cab services from Mumbai to Pune for all your travel needs."
    },
    {
        question: "What is the fare for a cab from Mumbai to Pune?",
        answer: "The one-way fare starts at ₹5,500 for sedans. Prices vary depending on vehicle type and travel time."
    },
    {
        question: "How can I book a cab from Mumbai to Pune?",
        answer: "You can book online through our website or call +91 9697780707 for instant booking and confirmation."
    },
    {
        question: "What types of vehicles are available for the Mumbai to Pune route?",
        answer: "We provide sedans, SUVs, Innova Crysta, and tempo travellers to accommodate different group sizes and preferences."
    },
    {
        question: "Are tolls and driver charges included in the fare?",
        answer: "Yes, all tolls, taxes, and driver allowances are included in the fare with no hidden charges."
    },
    {
        question: "Is night travel service available from Mumbai to Pune?",
        answer: "Yes, we offer 24/7 service with a nominal surcharge for trips between 10 PM and 6 AM."
    },
    {
        question: "Can I book a round trip from Mumbai to Pune?",
        answer: "Yes, round-trip bookings are available and can be scheduled as per your convenience."
    },
    {
        question: "Is it safe to travel with Swara Cabs?",
        answer: "Absolutely. Our drivers are experienced, background-verified, and committed to passenger safety."
    },
    {
        question: "Do you provide airport transfers from Mumbai to Pune?",
        answer: "Yes, we specialize in airport pickups and drops between Mumbai and Pune airports."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept UPI, cash, debit/credit cards, and popular digital wallets for easy payment."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Rajesh Kumar',
        review: 'Swara Cabs provided a smooth and comfortable ride from Mumbai to Pune. The driver was professional and punctual.'
    },
    {
        name: 'Ms. Kavita Shah',
        review: 'Excellent service by Swara Cabs on my Mumbai to Pune trip. The cab was clean and the journey was hassle-free.'
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
//   "name": "Mumbai to Pune Cabs",
//   "image": "https://www.swaracabs.in/assets/images/mumbai-to-pune-cab.jpg",
//   "description": "Book Mumbai to Pune cab with Swara Cabs for safe and fast intercity travel. AC sedan and SUV options, one-way and round trip available. Affordable pricing with verified drivers, 24/7 service.",
//   "brand": {
//     "@type": "Brand",
//     "name": "Swara Cabs"
//   },
//   "aggregateRating": {
//     "@type": "AggregateRating",
//     "bestRating": "5",
//     "worstRating": "1",
//     "ratingValue": "4.9",
//     "ratingCount": "9856"
//   },
//   "offers": {
//     "@type": "Offer",
//     "priceCurrency": "INR",
//     "price": "2499",
//     "availability": "https://schema.org/InStock",
//     "url": "https://www.swaracabs.in/mumbai-to-pune-cab"
//   }
// };


const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Mumbai to Pune Cabs",
  "image": "https://www.swaracabs.in/assets/images/mumbai-to-pune-cab.jpg",
  "description": "Book Mumbai to Pune cab from ₹2499 with Swara Cabs. AC sedan & SUV options for one-way or round trip. Verified drivers, 24/7 availability, airport pickup, expressway travel & corporate service.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.9",
    "ratingCount": "9856"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2499",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/mumbai-to-pune-cab"
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
    "name": "Mumbai, Pune"
  },
  "serviceType": "Intercity Cab Service"
};




    return (
        <div>

<Helmet>
  <title>Mumbai to Pune Cabs | ₹2499 One-Way & Round Trip AC Taxi – Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Mumbai to Pune cabs online from ₹2499 with Swara Cabs. One-way & round trip AC sedan/SUV, verified drivers, express highway pickup, 24x7 support & affordable pricing." 
  />
  <meta 
    name="keywords" 
    content="Mumbai to Pune Cabs, One-Way Cab Mumbai Pune, Round Trip Cab Mumbai to Pune, AC Taxi Mumbai to Pune, Online Cab Booking Mumbai to Pune, SUV Sedan Taxi Mumbai Pune, Verified Cab Mumbai Pune, Affordable Intercity Cabs Mumbai, Airport Pickup Cab Mumbai Pune, Expressway Taxi Mumbai Pune, 24x7 Cab Booking Mumbai to Pune, Fast Cab from Mumbai to Pune, Corporate Taxi Mumbai Pune"
  />
  <meta property="og:title" content="Mumbai to Pune Cabs | Fast One-Way & Round Trip Booking – Swara Cabs" />
  <meta property="og:description" content="AC sedan & SUV cab from Mumbai to Pune at fixed fare ₹2499. One-way or round trip with Swara Cabs. Instant online booking, verified drivers, 24x7 cab availability." />
  <meta property="og:image" content="https://www.swaracabs.in/assets/images/mumbai-to-pune-cab.jpg" />
  <meta property="og:url" content="https://www.swaracabs.in/mumbai-to-pune-cab" />
  <meta property="og:type" content="website" />
  
  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
  </script>
</Helmet>




{/* <Helmet>
  <title>Mumbai to Pune Cabs | One-Way & Round Trip | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Mumbai to Pune cab with Swara Cabs for safe and fast intercity travel. AC sedan and SUV options, one-way and round trip available. Affordable pricing with verified drivers, 24/7 service." 
  />
  <meta 
    name="keywords" 
    content="Mumbai to Pune Cabs, Mumbai to Pune AC Cab, Mumbai to Pune One-Way Cab, Mumbai to Pune Round Trip Taxi, Online Cab Booking Mumbai to Pune, Affordable Taxi Mumbai to Pune, Sedan Cab Mumbai to Pune, SUV Cab Mumbai to Pune, Mumbai to Pune Expressway Cab, Corporate Travel Mumbai to Pune, Verified Drivers Mumbai to Pune, Executive Cabs Mumbai to Pune, 24/7 Cab Booking Mumbai to Pune, Family Cab Mumbai to Pune, Fast Pickup Cab Mumbai to Pune" 
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
                            <img src='/images/keyword/21.jpg' alt='img' />
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

export default Mumbaitopunecabs;