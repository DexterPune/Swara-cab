
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Mumbaitopunedailycab() {



    const cardData =
    {
        keyword: 'Mumbai to Pune Daily Cab',
        heading: 'Swara Cabs : Mumbai to Pune Daily Cab',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable daily cab services for your journey from Mumbai to Pune. Ideal for commuters, corporate travelers, or frequent visitors, our daily cab option ensures you enjoy a flexible, convenient, and stress‑free travel experience every time. Pune, Maharashtra’s vibrant cultural and educational hub, is known for its historic landmarks, lush greenery, and dynamic urban life. Covering approximately 150–160 kilometers via the Mumbai–Pune Expressway, each trip typically takes around 3 to 4 hours depending on traffic conditions. With Swara Cabs’ well‑maintained fleet, professional drivers, and personalized service, you can count on a safe, punctual, and comfortable ride tailored to your daily travel needs.',

        top: 'Top Places to Visit in Pune with Swara Cabs',

        "topPlaces": [
     {
        "title": "Sinhagad Fort",
        "description": "Sinhagad Fort is a majestic hill fortress located about 30 kilometers from Pune, standing tall at an altitude of 1,312 meters. Known for its strategic location, the fort has played a crucial role in many battles, including the famous battle of Tanaji Malusare, a brave Maratha warrior. Today, it is a favorite trekking destination for adventure lovers and history buffs alike. Once at the top, visitors are rewarded with stunning views of the surrounding Sahyadri hills, rustic food stalls serving traditional Maharashtrian dishes like pithla-bhakri, and a strong sense of Maratha pride."
    },
    {
        "title": "Aga Khan Palace",
        "description": "The Aga Khan Palace is a majestic building located in the Yerwada area of Pune, built in 1892 by Sultan Aga Khan III. It holds great historical importance as it served as a prison for Mahatma Gandhi, Kasturba Gandhi, and other freedom fighters during the Quit India Movement. The palace now houses a museum dedicated to Mahatma Gandhi, with photographs, personal items, and his ashes. The beautiful Italian arches, sprawling lawns, and peaceful surroundings make it a tranquil place to explore the legacy of India’s freedom struggle."
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
        "title": "Pataleshwar Cave Temple",
        "description": "Hidden amidst the urban chaos of JM Road, the Pataleshwar Cave Temple is a serene, 8th-century rock-cut shrine carved out of a single basalt rock. Dedicated to Lord Shiva, the temple features a beautifully carved sanctum, a circular Nandi Mandapa (pavilion), and intricate stone pillars that reflect ancient Indian architecture. Despite its location in the city, the temple offers a peaceful escape for spiritual seekers and architecture lovers. It’s also recognized as a protected monument by the Archaeological Survey of India."
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
      "name": "Mumbai to Pune Daily Cab",
      "description": "Commute daily between Mumbai and Pune with our dependable cab service. Enjoy scheduled pickups, comfortable vehicles, and experienced drivers who know the highway well—ideal for office commuters, students, and frequent travelers seeking convenience and reliability."
    },
    {
      "name": "Daily Shared Cab Mumbai to Pune",
      "description": "Save on your daily commute with our shared cab option. Travel with like-minded passengers going your way, splitting costs while retaining comfort and punctuality. A smart, eco-friendly option for daily travelers."
    },
    {
      "name": "AC Daily Taxi Mumbai",
      "description": "Stay cool every day on your Mumbai–Pune commute with our fully air-conditioned taxis. Perfect for travelers who want a comfortable, temperature-controlled ride year-round—no matter the midday heat or monsoon humidity."
    },
    {
      "name": "Mumbai Pune Regular Cab Booking",
      "description": "Set up a regular daily cab for your Mumbai–Pune route with easy advance booking. Whether used weekly or month-long, get fixed schedules, consistent vehicle quality, and priority service so you never miss a ride."
    },
    {
      "name": "Daily Commute Cab Mumbai to Pune",
      "description": "Our daily commute cab offers same pickup/drop timings every weekday. With reliable cars and courteous drivers, this plan is ideal for professionals requiring consistency and comfort in their daily travel."
    },
    {
      "name": "Mumbai to Pune Fixed Daily Cab",
      "description": "Get a dedicated car each day—no sharing or last-minute changes. Our fixed-daily-cab plan ensures the same vehicle and driver serve you every commute, giving you peace of mind and familiarity."
    },
    {
      "name": "Affordable Daily Taxi Mumbai to Pune",
      "description": "Looking for value on your daily commute? Our affordable daily taxi service is priced competitively without compromising on safety, punctuality, or vehicle comfort—perfect for everyday travel needs."
    },
    {
      "name": "Daily Online Cab Booking Mumbai",
      "description": "Book your daily Mumbai–Pune ride online with instant confirmation, GPS tracking, and multiple payment options. Manage your week with ease, knowing your daily commute is just a few clicks away."
    },
    {
      "name": "SUV Daily Cabs Mumbai to Pune",
      "description": "Need more space on your daily commute? Our SUV daily cab service gives you room for family members, co‑workers, or extra luggage—while providing highway comfort and smooth running on the expressway."
    },
    {
      "name": "Sedan Daily Taxi Mumbai",
      "description": "Our sedan daily taxi offers a refined, fuel-efficient ride for one to three passengers. A great choice for solo commuters or small families wanting a peaceful, cost-effective Jamaica route twice-daily."
    },
    {
      "name": "Corporate Daily Cabs Mumbai to Pune",
      "description": "Designed for business travelers, our corporate daily cab service offers invoicing, account management, priority routes, and trained drivers—ideal for consistent, professional commute needs."
    },
    {
      "name": "Daily Ride Verified Driver",
      "description": "Every daily commute is driven by our verified and experienced drivers. Rest assured, your driver is background-checked, trained in highway travel, and committed to safe and courteous service."
    },
    {
      "name": "24/7 Daily Cab Booking Mumbai",
      "description": "Book your daily commute anytime—even for early mornings or nights. Our systems are open 24/7 so you can adjust schedules, cancel rides, or rebook easily according to your changing routine."
    },
    {
      "name": "Safe Daily Taxi Ride Mumbai Pune",
      "description": "Safety is at the heart of our daily service. Each ride includes seatbelts, GPS tracking, vehicle sanitization, and strict adherence to traffic rules—ensuring punctual and secure travel on every trip."
    },
    {
      "name": "Mumbai to Pune Everyday Cab Service",
      "description": "An everyday cab service tailored for your regular commuting needs. With standing booking arrangements, consistent service, and highway expertise, you get a smooth and dependable routine every day."
    }
  ],
  "tableData": [
    ["Mumbai to Pune Daily Cab", "Daily Shared Cab Mumbai to Pune"],
    ["AC Daily Taxi Mumbai", "Mumbai Pune Regular Cab Booking"],
    ["Daily Commute Cab Mumbai to Pune", "Mumbai to Pune Fixed Daily Cab"],
    ["Affordable Daily Taxi Mumbai to Pune", "Daily Online Cab Booking Mumbai"],
    ["SUV Daily Cabs Mumbai to Pune", "Sedan Daily Taxi Mumbai"],
    ["Corporate Daily Cabs Mumbai to Pune", "Daily Ride Verified Driver"],
    ["24/7 Daily Cab Booking Mumbai", "Safe Daily Taxi Ride Mumbai Pune"],
    ["Mumbai to Pune Everyday Cab Service", ""]
  ],




"whychoose": [
  {
    "WhyChooseheading": "Reliable Daily Commute Service",
    "WhyChoosedescription": "Our Mumbai to Pune daily cab service ensures punctual pickups and drop-offs every day, making your regular commute stress-free and dependable, whether for work or personal needs."
  },
  {
    "WhyChooseheading": "Flexible Scheduling to Suit Your Routine",
    "WhyChoosedescription": "Choose cab timings that perfectly fit your daily schedule with options for early morning, evening, or customized timings to match your unique requirements."
  },
  {
    "WhyChooseheading": "Comfortable and Well-Maintained Vehicles",
    "WhyChoosedescription": "Travel daily in clean, air-conditioned vehicles that offer ample space and comfort, helping you start and end your day refreshed and relaxed."
  },
  {
    "WhyChooseheading": "Cost-Effective and Transparent Pricing",
    "WhyChoosedescription": "Enjoy competitive daily rental rates with no hidden charges. Our transparent pricing includes all taxes, tolls, and fees, making budgeting easier for your daily travels."
  },
  {
    "WhyChooseheading": "Experienced and Professional Drivers",
    "WhyChoosedescription": "Our drivers are skilled, courteous, and familiar with the Mumbai-Pune route, ensuring your safety and timely arrivals every single day."
  },
  {
    "WhyChooseheading": "24/7 Customer Support for Daily Riders",
    "WhyChoosedescription": "We provide round-the-clock support to assist with booking changes, cancellations, or any queries to make your daily commute seamless and hassle-free."
  },
  {
    "WhyChooseheading": "Convenient Online Booking and Management",
    "WhyChoosedescription": "Easily book, modify, or cancel your daily cab rides through our website or app, with instant confirmations and real-time tracking for peace of mind."
  },
  {
    "WhyChooseheading": "Customizable Daily Travel Plans",
    "WhyChoosedescription": "Tailor your daily cab service with options for multi-stop routes, additional luggage space, or preferred vehicle types to suit your specific commuting needs."
  }
]


























    }


const faqData = [
    {
        question: "Do you provide daily cab services from Mumbai to Pune?",
        answer: "Yes, Swara Cabs offers reliable and convenient daily cab services between Mumbai and Pune."
    },
    {
        question: "Can I book a daily cab for regular commuting between Mumbai and Pune?",
        answer: "Absolutely! We provide flexible daily cab services tailored to your commuting schedule."
    },
    {
        question: "What types of vehicles are available for daily Mumbai to Pune cab services?",
        answer: "We offer sedans, SUVs, and Innova Crysta options depending on your preference and group size."
    },
    {
        question: "How do I book a daily cab from Mumbai to Pune?",
        answer: "You can book daily cab services by calling +91 9697780707 or through our website booking form."
    },
    {
        question: "Are tolls and driver allowances included in the daily cab fare?",
        answer: "Yes, all tolls, taxes, and driver charges are included in the fare with no hidden costs."
    },
    {
        question: "Is the driver available for daily cab services at specific times?",
        answer: "Yes, drivers adhere to your specified pickup and drop-off times to ensure punctuality."
    },
    {
        question: "Can I customize my daily cab package based on my requirements?",
        answer: "Certainly! We offer customizable daily cab packages to fit your specific commuting needs."
    },
    {
        question: "Is night-time daily cab service available between Mumbai and Pune?",
        answer: "Yes, we provide 24/7 service including night trips with a nominal surcharge during late hours."
    },
    {
        question: "Is it safe to travel daily with Swara Cabs?",
        answer: "Absolutely. Our drivers are trained, background-verified, and committed to your safety."
    },
    {
        question: "What payment methods are accepted for daily cab bookings?",
        answer: "We accept UPI, cash, debit/credit cards, and popular digital wallets for hassle-free payments."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Vivek Kulkarni',
        review: 'Swara Cabs’ daily service between Mumbai and Pune has been very reliable and convenient for my office commute.'
    },
    {
        name: 'Ms. Rina Desai',
        review: 'I have been using Swara Cabs daily for my Mumbai to Pune commute. The drivers are punctual and the rides comfortable.'
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
//   "name": "Mumbai to Pune Daily Cab",
//   "image": "https://www.swaracabs.in/assets/images/mumbai-to-pune-daily-cab.jpg",
//   "description": "Book Mumbai to Pune daily cab service with Swara Cabs for affordable, reliable, and safe daily commute options including AC, SUV, and sedan taxis. Available 24/7.",
//   "brand": {
//     "@type": "Brand",
//     "name": "Swara Cabs"
//   },
//   "aggregateRating": {
//     "@type": "AggregateRating",
//     "bestRating": "5",
//     "worstRating": "1",
//     "ratingValue": "4.8",
//     "ratingCount": "16589"
//   },
//   "offers": {
//     "@type": "Offer",
//     "priceCurrency": "INR",
//     "price": "1200",
//     "availability": "https://schema.org/InStock",
//     "url": "https://www.swaracabs.in/mumbai-to-pune-daily-cab"
//   }
// };

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Mumbai to Pune Daily Cab",
  "image": "https://www.swaracabs.in/images/keyword/33.jpg",
  "description": "Daily cab service from Mumbai to Pune by Swara Cabs. AC sedan/SUV options with verified drivers starting from ₹1200. Ideal for regular office or business commute. 24x7 online booking.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "16589"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "1200",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/mumbai-to-pune-daily-cab"
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
      "name": "Verified Passenger"
    }
  },
  "areaServed": {
    "@type": "Place",
    "name": "Mumbai, Pune"
  },
  "serviceType": "Daily Cab Commute"
};





    return (
        <div>

<Helmet>
  <title>Mumbai to Pune Daily Cab | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Mumbai to Pune daily cab from ₹1200. Comfortable AC sedans & SUVs with verified drivers for daily office, corporate or student travel. 24/7 online booking – Swara Cabs." 
  />
  <meta 
    name="keywords" 
    content="Mumbai to Pune Daily Cab, Daily Office Cab Mumbai to Pune, Daily Taxi Booking Mumbai Pune, AC Shared Daily Cab Mumbai, Regular Cab Mumbai to Pune, Daily Corporate Cab Service Mumbai, Verified Daily Commute Taxi Mumbai Pune, 24x7 Daily Cab Mumbai Pune, Affordable Daily Cab Mumbai to Pune, Online Cab Booking Mumbai to Pune, Fixed Daily Cab Fare Mumbai, Daily Business Travel Cab Mumbai to Pune, Safe Daily Ride Mumbai Pune, AC SUV Daily Cab Booking" 
  />
  <meta property="og:title" content="Mumbai to Pune Daily Cab | Fixed Fare Commute ₹1200 – Swara Cabs" />
  <meta property="og:description" content="Daily cabs from Mumbai to Pune by Swara Cabs. Book safe & reliable commute in AC sedans/SUVs with verified drivers. 24/7 availability from ₹1200." />
  <meta property="og:image" content="https://www.swaracabs.in/images/keyword/33.jpg" />
  <meta property="og:url" content="https://www.swaracabs.in/mumbai-to-pune-daily-cab" />
  <meta property="og:type" content="website" />
  
  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
  </script>
</Helmet>


{/* <Helmet>
  <title>Mumbai to Pune Daily Cab | Affordable & Reliable Daily Taxi Service | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Mumbai to Pune daily cab service with Swara Cabs for affordable, reliable, and safe daily commute options including AC, SUV, and sedan taxis. Available 24/7." 
  />
  <meta 
    name="keywords" 
    content="Mumbai to Pune Daily Cab, Daily Shared Cab Mumbai to Pune, AC Daily Taxi Mumbai, Mumbai Pune Regular Cab Booking, Daily Commute Cab Mumbai to Pune, Mumbai to Pune Fixed Daily Cab, Affordable Daily Taxi Mumbai to Pune, Daily Online Cab Booking Mumbai, SUV Daily Cabs Mumbai to Pune, Sedan Daily Taxi Mumbai, Corporate Daily Cabs Mumbai to Pune, Daily Ride Verified Driver, 24/7 Daily Cab Booking Mumbai, Safe Daily Taxi Ride Mumbai Pune, Mumbai to Pune Everyday Cab Service" 
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
                            <img src='/images/keyword/33.jpg' alt='img' />
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

export default Mumbaitopunedailycab;