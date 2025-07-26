
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Onewaytaximumbaitopune() {



    const cardData =
    {
        keyword: 'One Way Taxi Mumbai to Pune',
        heading: 'Swara Cabs : One Way Taxi Mumbai to Pune',
        headingDescription: 'Swara Cabs offers a dependable and comfortable one-way taxi service from Mumbai to Pune, tailored for business travelers, families, and tourists. Covering approximately 150 to 170 km, the journey typically takes around 3 to 4 hours via the Mumbai–Pune Expressway, with timing varying based on traffic. Enjoy door-to-door pickup anywhere in Mumbai, whether from your home, hotel, or office, in clean, well-maintained, air-conditioned vehicles driven by professional, courteous drivers who know the route and local conditions well. With flexible booking options, transparent pricing, and round-the-clock customer support, Swara Cabs makes your Mumbai to Pune trip hassle-free, punctual, and designed to suit your schedule—whether you are headed for a meeting, returning home, or exploring new places.',

        top: 'Top Places to Visit in Pune with Swara Cabs',

      "topPlaces": [
  {
    "title": "Osho Ashram (Osho International Meditation Resort)",
    "description": "Located in the lush and upscale Koregaon Park area, the Osho International Meditation Resort is a globally renowned spiritual retreat founded by spiritual teacher Osho. The ashram offers a wide range of meditation practices, wellness programs, spa treatments, and dynamic activities aimed at personal growth and mindfulness. Surrounded by tall bamboo trees, modern architecture, and a calm atmosphere, it attracts seekers from around the world. Visitors can take day passes or stay longer to experience a unique blend of spiritual retreat and luxurious comfort."
  },
  {
    "title": "Pataleshwar Cave Temple",
    "description": "Hidden amidst the urban chaos of JM Road, the Pataleshwar Cave Temple is a serene, 8th-century rock-cut shrine carved out of a single basalt rock. Dedicated to Lord Shiva, the temple features a beautifully carved sanctum, a circular Nandi Mandapa (pavilion), and intricate stone pillars that reflect ancient Indian architecture. Despite its location in the city, the temple offers a peaceful escape for spiritual seekers and architecture lovers. It’s also recognized as a protected monument by the Archaeological Survey of India."
  },
  {
    "title": "Sinhagad Fort",
    "description": "Sinhagad Fort is a majestic hill fortress located about 30 kilometers from Pune, standing tall at an altitude of 1,312 meters. Known for its strategic location, the fort has played a crucial role in many battles, including the famous battle of Tanaji Malusare, a brave Maratha warrior. Today, it is a favorite trekking destination for adventure lovers and history buffs alike. Once at the top, visitors are rewarded with stunning views of the surrounding Sahyadri hills, rustic food stalls serving traditional Maharashtrian dishes like pithla-bhakri, and a strong sense of Maratha pride."
  },
  {
    "title": "Raja Dinkar Kelkar Museum",
    "description": "The Raja Dinkar Kelkar Museum is a rich cultural repository, home to over 20,000 artifacts collected by Dr. Dinkar G. Kelkar in memory of his son. The museum showcases an incredible variety of items ranging from antique musical instruments and ancient sculptures to everyday household items from bygone eras. Each gallery offers a fascinating glimpse into India’s diverse artistic and cultural traditions. Located in the heart of Pune, it is a must-visit destination for art lovers, history buffs, and curious travelers alike."
  },
  {
    "title": "Shaniwar Wada",
    "description": "Shaniwar Wada is one of the most iconic historical structures in Pune, built in 1732 by the Peshwas of the Maratha Empire. The fort was originally the seat of power for the Peshwas and witnessed several key events in Maratha history. Though much of the structure was destroyed by fire in 1828, the remaining ruins, including the massive Dilli Darwaza (main gate), strong ramparts, and open courtyards, speak volumes about its glorious past. The fort is also known for its haunting legends, making it a popular spot for heritage walks and history enthusiasts."
  },
  {
    "title": "Aga Khan Palace",
    "description": "The Aga Khan Palace is a majestic building located in the Yerwada area of Pune, built in 1892 by Sultan Aga Khan III. It holds great historical importance as it served as a prison for Mahatma Gandhi, Kasturba Gandhi, and other freedom fighters during the Quit India Movement. The palace now houses a museum dedicated to Mahatma Gandhi, with photographs, personal items, and his ashes. The beautiful Italian arches, sprawling lawns, and peaceful surroundings make it a tranquil place to explore the legacy of India’s freedom struggle."
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
    "name": "One Way Taxi Mumbai to Pune",
    "description": "Travel one way from Mumbai to Pune with ease using our reliable taxi service. Perfect for travelers who want a simple, efficient, and cost-effective ride without worrying about return trips. Enjoy transparent pricing and a comfortable journey every time."
  },
  {
    "name": "AC Taxi Mumbai to Pune",
    "description": "Stay cool and comfortable on your Mumbai to Pune trip with our fully air-conditioned taxis. Whether it's the hot summer months or a humid day, our AC cabs provide a refreshing environment for a relaxing and pleasant ride."
  },
  {
    "name": "Sedan Cab Mumbai to Pune",
    "description": "Our sedan cabs offer a smooth, stylish, and economical way to travel from Mumbai to Pune. Ideal for individuals or small groups, these vehicles provide great mileage, comfortable seating, and a quiet atmosphere for an enjoyable journey."
  },
  {
    "name": "SUV One-Way Cab Mumbai to Pune",
    "description": "Need extra space for luggage or passengers? Our SUV one-way cabs from Mumbai to Pune are spacious, comfortable, and perfect for families or groups traveling together. Enjoy a smooth ride on highways with plenty of room for everyone."
  },
  {
    "name": "Online Booking Mumbai to Pune Cab",
    "description": "Book your Mumbai to Pune cab easily online through our intuitive platform. Get real-time availability, multiple payment options, and instant confirmation to ensure your trip is booked securely and quickly with no hassle."
  },
  {
    "name": "Verified Driver Mumbai to Pune",
    "description": "Travel safely with our verified and trained drivers who have undergone thorough background checks and safety training. We prioritize your security and professionalism on every Mumbai to Pune ride."
  },
  {
    "name": "Safe Ride Mumbai to Pune",
    "description": "Your safety is paramount. Our vehicles are sanitized regularly and maintained to the highest standards. Our drivers adhere strictly to traffic laws and safety protocols to ensure you reach Pune securely and comfortably."
  },
  {
    "name": "Affordable One-Way Taxi Mumbai",
    "description": "Get the best value on one-way taxi rides from Mumbai to Pune with competitive pricing and no hidden charges. Enjoy a budget-friendly yet comfortable and reliable journey."
  },
  {
    "name": "Corporate Cab Mumbai to Pune",
    "description": "Our corporate cab service from Mumbai to Pune caters to business travelers with premium vehicles, dedicated support, flexible scheduling, and monthly invoicing to keep your company’s travel smooth and professional."
  },
  {
    "name": "Executive Travel Mumbai Pune",
    "description": "Experience luxury and professionalism with our executive travel service. Premium cars and highly trained chauffeurs provide a first-class ride from Mumbai to Pune, perfect for executives and VIP clients."
  },
  {
    "name": "Airport Drop Mumbai to Pune",
    "description": "Catch your flight or arrive at Pune airport on time with our dedicated airport drop service. Drivers monitor traffic and flight schedules to provide timely, stress-free transfers."
  },
  {
    "name": "Expressway Taxi Mumbai Pune",
    "description": "Take the fastest route with our expressway taxi service. Our experienced drivers expertly navigate the Mumbai-Pune Expressway to get you to your destination quickly and comfortably."
  },
  {
    "name": "Round Trip Optional Mumbai to Pune",
    "description": "Planning to return the same day or later? Our round trip service offers flexibility with fixed pricing and the convenience of a dedicated driver for both legs of your Mumbai to Pune journey."
  },
  {
    "name": "Quick Cab Hire Mumbai Pune",
    "description": "Need a cab on short notice? Our quick cab hire service ensures prompt pickup and speedy bookings for your Mumbai to Pune trips without compromising comfort or safety."
  },
  {
    "name": "24/7 Taxi Mumbai to Pune",
    "description": "Our taxis operate round the clock from Mumbai to Pune, offering 24/7 availability to fit your schedule no matter the time. Early morning flights or late-night meetings, we’ve got you covered."
  }
],
"tableData": [
  ["One Way Taxi Mumbai to Pune", "Online Booking Mumbai to Pune Cab"],
  ["AC Taxi Mumbai to Pune", "Sedan Cab Mumbai to Pune"],
  ["SUV One-Way Cab Mumbai to Pune", "Affordable One-Way Taxi Mumbai"],
  ["Verified Driver Mumbai to Pune", "Safe Ride Mumbai to Pune"],
  ["Corporate Cab Mumbai to Pune", "Executive Travel Mumbai Pune"],
  ["Airport Drop Mumbai to Pune", "Expressway Taxi Mumbai Pune"],
  ["Round Trip Optional Mumbai to Pune", "Quick Cab Hire Mumbai Pune"],
  ["24/7 Taxi Mumbai to Pune", ""]
],

  "whychoose": [
    {
      "WhyChooseheading": "Convenient One Way Taxi from Mumbai to Pune",
      "WhyChoosedescription": "Enjoy the flexibility of a one-way trip without the extra costs of a round journey. Our Mumbai to Pune one-way taxi service is designed for travelers who need a reliable, direct transfer without worrying about return logistics or hidden charges."
    },
    {
      "WhyChooseheading": "Comfortable Fleet Tailored to Your Travel Needs",
      "WhyChoosedescription": "Choose from a wide selection of clean, air-conditioned vehicles including budget-friendly sedans, spacious SUVs, and premium cars. Whether you’re a solo traveler, with family, or on a corporate trip, we have the right vehicle for you."
    },
    {
      "WhyChooseheading": "Affordable and Transparent Pricing",
      "WhyChoosedescription": "Our one-way taxi rates from Mumbai to Pune are competitively priced and fully transparent. The fare includes all tolls, parking, state taxes, and driver charges—no last-minute surprises, just clear and honest pricing."
    },
    {
      "WhyChooseheading": "Professional and Well-Trained Drivers",
      "WhyChoosedescription": "Our experienced drivers are courteous, safety-conscious, and thoroughly familiar with the Mumbai-Pune Expressway and alternate routes. They ensure smooth driving, timely arrival, and a friendly service attitude throughout the journey."
    },
    {
      "WhyChooseheading": "24/7 Availability with Flexible Scheduling",
      "WhyChoosedescription": "No matter the time—day or night—our taxis are ready to serve. Early morning airport rides, late-night returns, or last-minute plans, our round-the-clock service ensures you’ll always have a cab when you need it."
    },
    {
      "WhyChooseheading": "Instant Booking and Real-Time Tracking",
      "WhyChoosedescription": "Booking your Mumbai to Pune one-way taxi is simple with our online platform or mobile app. Get instant confirmations, driver contact details, real-time tracking, and live trip updates for a fully connected experience."
    },
    {
      "WhyChooseheading": "Hygienic and Sanitized Cabs",
      "WhyChoosedescription": "We maintain the highest standards of cleanliness. Every vehicle is sanitized before each trip and maintained regularly to ensure you travel in a safe, fresh, and hygienic environment."
    },
    {
      "WhyChooseheading": "Multiple Payment Options with E-Bills",
      "WhyChoosedescription": "Pay your way using UPI, debit/credit cards, net banking, wallets, or cash. After the trip, receive a detailed e-invoice for full transparency and hassle-free record keeping."
    }
  ]












    }


const faqData = [
    {
        question: "Do you offer one way taxi service from Mumbai to Pune?",
        answer: "Yes, Swara Cabs provides convenient and affordable one way taxi services from Mumbai to Pune."
    },
    {
        question: "What is the fare for a one way taxi from Mumbai to Pune?",
        answer: "Fares start from ₹6,000 for a sedan. The final fare depends on the vehicle type, pickup location in Mumbai, and time of travel."
    },
    {
        question: "How can I book a one way taxi from Mumbai to Pune?",
        answer: "You can book your taxi through our website or by calling us directly at +91 9697780707."
    },
    {
        question: "Are tolls and driver charges included in the fare?",
        answer: "Yes, all tolls, taxes, and driver allowances are included in the fare. No hidden charges."
    },
    {
        question: "Is night travel available for Mumbai to Pune one way trips?",
        answer: "Yes, we operate 24/7, including night-time travel with a nominal night surcharge."
    },
    {
        question: "Do you offer pickup from any location in Mumbai?",
        answer: "Yes, we offer doorstep pickup from anywhere in Mumbai and drop you at your chosen destination in Pune."
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






// const mumbaiToPuneOneWayTaxiSchema = {
//   "@context": "https://schema.org",
//   "@type": "Product",
//   "name": "One Way Taxi Mumbai to Pune",
//   "image": "https://www.swaracabs.in/assets/images/mumbai-to-pune-one-way-cab.jpg",
//   "description": "Book affordable and reliable one way taxi service from Mumbai to Pune with AC, sedan, and SUV options. Ideal for airport drops, corporate travel, or quick one-way rides with verified drivers and 24/7 support.",
//   "brand": {
//     "@type": "Brand",
//     "name": "Swara Cabs"
//   },
//   "aggregateRating": {
//     "@type": "AggregateRating",
//     "ratingValue": "4.7",
//     "ratingCount": "15645",
//     "bestRating": "5",
//     "worstRating": "1"
//   },
//   "offers": {
//     "@type": "Offer",
//     "priceCurrency": "INR",
//     "price": "1250",
//     "availability": "https://schema.org/InStock",
//     "url": "https://www.swaracabs.in/one-way-taxi-mumbai-to-pune"
//   }
// };


const mumbaiToPuneOneWayTaxiSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "One Way Taxi Mumbai to Pune",
  "image": "https://www.swaracabs.in/assets/images/mumbai-to-pune-one-way-cab.jpg",
  "description": "Book reliable one-way taxi from Mumbai to Pune starting at ₹1250. AC sedan & SUV options for airport, business or family travel. Verified drivers, express pickup & 24x7 service.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "ratingCount": "15645",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "1250",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/one-way-taxi-mumbai-to-pune"
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
  "serviceType": "One Way Cab Service"
};



    return (
        <div>


<Helmet>
  <title>One Way Taxi Mumbai to Pune | 24x7 Booking – Swara Cabs</title>
  <meta
    name="description"
    content="Book one way taxi from Mumbai to Pune starting at ₹1250. Choose AC sedan or SUV for fast airport drop, corporate or family ride. Verified drivers. 24/7 instant booking with Swara Cabs."
  />
  <meta
    name="keywords"
    content="One Way Taxi Mumbai to Pune, Mumbai to Pune AC Taxi Booking, One Way Sedan SUV Taxi Mumbai, Verified Driver One Way Taxi Mumbai Pune, Airport Drop Cab Mumbai to Pune, Quick One Way Cab Mumbai Pune, Affordable Taxi Mumbai to Pune, 24x7 Mumbai Pune One Way Cab, Online Booking One Way Taxi, Mumbai to Pune Expressway Taxi, Safe One Way Cab Mumbai to Pune, Corporate Ride One Way Taxi, Cheap Taxi Mumbai to Pune"
  />
  <meta property="og:title" content="One Way Taxi Mumbai to Pune | AC Cab from ₹1250 – Swara Cabs" />
  <meta property="og:description" content="Get safe and reliable one way taxi from Mumbai to Pune. AC sedan & SUV at fixed fare. Verified drivers, express pickup, and online booking 24/7." />
  <meta property="og:image" content="https://www.swaracabs.in/assets/images/mumbai-to-pune-one-way-cab.jpg" />
  <meta property="og:url" content="https://www.swaracabs.in/one-way-taxi-mumbai-to-pune" />
  <meta property="og:type" content="website" />

  <script type="application/ld+json">
    {JSON.stringify(mumbaiToPuneOneWayTaxiSchema)}
  </script>
</Helmet>






{/* <Helmet>
  <title>One Way Taxi Mumbai to Pune | Book AC, Sedan & SUV Cab | Swara Cabs</title>
  <meta
    name="description"
    content="Book affordable and reliable one way taxi service from Mumbai to Pune with AC, sedan, and SUV options. Ideal for airport drops, corporate travel, or quick one-way rides with verified drivers and 24/7 support."
  />
  <meta
    name="keywords"
    content="One Way Taxi Mumbai to Pune, AC Taxi Mumbai to Pune, Sedan Cab Mumbai to Pune, SUV One-Way Cab Mumbai to Pune, Online Booking Mumbai to Pune Cab, Verified Driver Mumbai to Pune, Safe Ride Mumbai to Pune, Affordable One-Way Taxi Mumbai, Corporate Cab Mumbai to Pune, Executive Travel Mumbai Pune, Airport Drop Mumbai to Pune, Expressway Taxi Mumbai Pune, Round Trip Optional Mumbai to Pune, Quick Cab Hire Mumbai Pune, 24/7 Taxi Mumbai to Pune"
  />
  <script type="application/ld+json">
    {JSON.stringify(mumbaiToPuneOneWayTaxiSchema)}
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
                            <img src='/images/keyword/67.jpg' alt='img' />
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

export default Onewaytaximumbaitopune;