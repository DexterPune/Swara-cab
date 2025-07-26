
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Dadartopunecabs() {



    const cardData =
    {
        keyword: 'Dadar to Pune Cab',
        heading: 'Swara Cabs : Dadar to Pune Cab',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable cab services for your journey from Dadar to Pune. Pune, Maharashtra’s thriving cultural and educational hub, is known for its historic landmarks, green landscapes, and vibrant city life. Whether you are traveling for a business meeting, visiting family, or catching a flight, Swara Cabs ensures a smooth and hassle-free experience. The road distance from Dadar to Pune is approximately 150 kilometers via the Expressway, with a travel time of around 3 to 4 hours depending on traffic conditions. With our well-maintained fleet and professional drivers, Swara Cabs guarantees a safe, punctual, and comfortable ride tailored to your travel needs.',

        top: 'Top Places to Visit in Pune with Swara Cabs',

        "topPlaces": [
    {
        "title": "Pataleshwar Cave Temple",
        "description": "Hidden amidst the urban chaos of JM Road, the Pataleshwar Cave Temple is a serene, 8th-century rock-cut shrine carved out of a single basalt rock. Dedicated to Lord Shiva, the temple features a beautifully carved sanctum, a circular Nandi Mandapa (pavilion), and intricate stone pillars that reflect ancient Indian architecture. Despite its location in the city, the temple offers a peaceful escape for spiritual seekers and architecture lovers. It’s also recognized as a protected monument by the Archaeological Survey of India."
    },
    {
        "title": "Sinhagad Fort",
        "description": "Sinhagad Fort is a majestic hill fortress located about 30 kilometers from Pune, standing tall at an altitude of 1,312 meters. Known for its strategic location, the fort has played a crucial role in many battles, including the famous battle of Tanaji Malusare, a brave Maratha warrior. Today, it is a favorite trekking destination for adventure lovers and history buffs alike. Once at the top, visitors are rewarded with stunning views of the surrounding Sahyadri hills, rustic food stalls serving traditional Maharashtrian dishes like pithla-bhakri, and a strong sense of Maratha pride."
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
        "name": "Dadar to Pune Cab",
        "description": "Looking for a comfortable and hassle-free ride from Dadar to Pune? Swara Cabs offers top-quality cab services for travelers commuting between Mumbai’s Dadar area and Pune. Whether you're traveling for business, family, or leisure, enjoy a safe, smooth, and affordable journey with our experienced drivers and well-maintained vehicles."
    },
    {
        "name": "AC Cab Dadar to Pune",
        "description": "Beat the Mumbai heat and travel in comfort with our air-conditioned cabs from Dadar to Pune. Our AC cabs ensure a refreshing and relaxing journey, especially during long-distance travel on the expressway. Enjoy a clean, cool, and peaceful ride with Swara Cabs."
    },
    {
        "name": "One-Way Taxi Dadar to Pune",
        "description": "Need a simple drop to Pune from Dadar without the return? Swara Cabs provides one-way taxi services that are convenient and cost-effective. Perfect for individual travelers, families, and professionals needing a direct transfer with no hidden costs or return obligations."
    },
    {
        "name": "Round Trip Dadar to Pune Cab",
        "description": "Planning a return trip on the same day or over the weekend? Book our Dadar to Pune round trip cab service for complete convenience. Enjoy a comfortable journey both ways with the same driver and vehicle. Ideal for business visits, sightseeing, or family functions."
    },
    {
        "name": "Online Booking Dadar to Pune Cab",
        "description": "With Swara Cabs, you can book your Dadar to Pune taxi online within minutes. Choose your preferred vehicle, schedule the pickup time, and get instant confirmation. Our online booking system is user-friendly and available 24/7 for your convenience."
    },
    {
        "name": "Affordable Taxi Dadar to Pune",
        "description": "Traveling on a budget? Swara Cabs offers affordable taxi options from Dadar to Pune without compromising on comfort or quality. Our pricing is transparent, and there are no hidden charges. Choose the best value for your journey with us."
    },
    {
        "name": "Executive Taxi Dadar to Pune",
        "description": "Experience premium travel with our executive taxi services from Dadar to Pune. Our executive fleet includes top-tier sedans and SUVs ideal for business travelers, VIPs, and anyone looking for a first-class ride with professional service."
    },
    {
        "name": "Dadar to Pune Sedan Cab",
        "description": "For small groups or solo travelers, our sedan cabs offer the perfect combination of comfort and economy. Travel from Dadar to Pune in a clean, well-maintained sedan driven by courteous and experienced drivers."
    },
    {
        "name": "SUV Cab Hire Dadar to Pune",
        "description": "Need extra space for passengers or luggage? Hire an SUV cab for your trip from Dadar to Pune. Our SUVs, like Ertiga or Innova, are perfect for families, groups, or travelers carrying more baggage and seeking a spacious ride."
    },
    {
        "name": "Quick Pickup Dadar Cab to Pune",
        "description": "In a hurry? Swara Cabs offers quick cab pickups from Dadar to Pune. Whether you need an urgent ride or pre-scheduled service, our drivers arrive on time and take the fastest route to ensure a swift and safe journey."
    },
    {
        "name": "24/7 Cabs Dadar to Pune",
        "description": "Travel anytime with Swara Cabs' 24/7 availability for Dadar to Pune cab service. Whether it's an early morning airport transfer or a late-night journey, we're ready around the clock to serve you with reliable and punctual rides."
    },
    {
        "name": "Corporate Cabs from Dadar",
        "description": "Swara Cabs offers dedicated corporate cab services from Dadar to Pune, perfect for professionals and company executives. Enjoy hassle-free billing, punctual pickups, and professional chauffeurs with our business travel solutions."
    },
    {
        "name": "Verified Driver Dadar to Pune",
        "description": "All our drivers are background-verified and trained for long-distance travel. When you book a cab from Dadar to Pune with Swara Cabs, you can rest assured your driver is professional, courteous, and safety-focused."
    },
    {
        "name": "Safe Ride Dadar to Pune",
        "description": "Your safety is our top priority. Swara Cabs ensures every Dadar to Pune ride includes seat belts, sanitization, and GPS tracking. Trust us for a worry-free and secure travel experience—day or night."
    },
    {
        "name": "Luggage Cab Dadar to Pune",
        "description": "Traveling with multiple suitcases or bulky items? Choose Swara Cabs’ luggage-friendly vehicles for your trip from Dadar to Pune. Our sedans and SUVs offer generous space to accommodate your travel gear comfortably."
    }
],

"tableData": [
    ["Dadar to Pune Cab", "AC Cab Dadar to Pune"],
    ["One-Way Taxi Dadar to Pune", "Round Trip Dadar to Pune Cab"],
    ["Online Booking Dadar to Pune Cab", "Affordable Taxi Dadar to Pune"],
    ["Executive Taxi Dadar to Pune", "Dadar to Pune Sedan Cab"],
    ["SUV Cab Hire Dadar to Pune", "Quick Pickup Dadar Cab to Pune"],
    ["24/7 Cabs Dadar to Pune", "Corporate Cabs from Dadar"],
    ["Verified Driver Dadar to Pune", "Safe Ride Dadar to Pune"],
    ["Luggage Cab Dadar to Pune", ""]
],




"whychoose": [
  {
    "WhyChooseheading": "Convenient and Prompt Pickup from Dadar",
    "WhyChoosedescription": "Our cab service ensures timely and hassle-free pickups right from Dadar, one of Mumbai’s busiest hubs. Whether you’re starting your journey from the railway station or local areas around Dadar, our drivers arrive promptly to get you on the road without delay."
  },
  {
    "WhyChooseheading": "Wide Range of Comfortable and Well-Maintained Vehicles",
    "WhyChoosedescription": "Choose from a variety of clean and air-conditioned cars including sedans, SUVs, and luxury vehicles. All our vehicles undergo regular maintenance checks to ensure safety, cleanliness, and a comfortable ride for your trip from Dadar to Pune."
  },
  {
    "WhyChooseheading": "Transparent and Competitive Pricing",
    "WhyChoosedescription": "Our fares for Dadar to Pune cabs are transparent and competitively priced with no hidden costs. We provide detailed fare breakdowns including tolls and taxes upfront, allowing you to budget your travel without surprises or last-minute charges."
  },
  {
    "WhyChooseheading": "Experienced Drivers Skilled in Efficient Routing",
    "WhyChoosedescription": "Our professional drivers know the best and quickest routes from Dadar to Pune, avoiding traffic snarls and delays wherever possible. Their knowledge of local roads and expressways ensures you have a smooth, safe, and timely journey."
  },
  {
    "WhyChooseheading": "Safe and Sanitized Vehicles for Peace of Mind",
    "WhyChoosedescription": "Your safety is paramount. We sanitize every vehicle thoroughly before and after each ride, following strict hygiene protocols. Our fleet is equipped with safety features like seat belts, airbags, and GPS tracking to ensure your journey is secure and comfortable."
  },
  {
    "WhyChooseheading": "24/7 Availability to Suit Your Schedule",
    "WhyChoosedescription": "Whether you need an early morning ride or a late-night cab from Dadar to Pune, our service operates round the clock. We accommodate all schedules and provide flexible booking options to match your travel plans."
  },
  {
    "WhyChooseheading": "Easy Online Booking with Instant Confirmation",
    "WhyChoosedescription": "Booking your Dadar to Pune cab is seamless through our website or mobile app. Get instant confirmation and real-time updates on your booking status and driver details, making your travel experience stress-free and transparent."
  },
  {
    "WhyChooseheading": "Customized Service for Business and Leisure Travelers",
    "WhyChoosedescription": "Whether traveling for corporate meetings, family vacations, or personal errands, we tailor our services to your needs. You can request additional stops, special assistance, or vehicle preferences to make your trip comfortable and convenient."
  }
]




















    }



const faqData = [
    {
        question: "Do you provide cab service from Dadar to Pune?",
        answer: "Yes, Swara Cabs offers reliable and comfortable cab services from Dadar, Mumbai to Pune for both one-way and round trips."
    },
    {
        question: "What is the fare for a Dadar to Pune cab?",
        answer: "Fares start from ₹5,500 for a one-way sedan. Final fare may vary depending on vehicle type and travel time."
    },
    {
        question: "How do I book a cab from Dadar to Pune?",
        answer: "You can book online through our website or call us at +91 9697780707 for instant booking and support."
    },
    {
        question: "What types of vehicles are available for the Dadar to Pune route?",
        answer: "We offer a range of vehicles including sedans, SUVs, Innova Crysta, and tempo travellers depending on your group size and comfort preference."
    },
    {
        question: "Are tolls, taxes, and driver charges included in the fare?",
        answer: "Yes, our fares are all-inclusive. There are no hidden charges for tolls or driver allowances."
    },
    {
        question: "Do you provide late-night pickups from Dadar to Pune?",
        answer: "Yes, we offer 24/7 cab service. Late-night pickups are available with a nominal surcharge between 10 PM and 6 AM."
    },
    {
        question: "Can I book a round trip from Dadar to Pune?",
        answer: "Yes, round-trip options are available with flexible scheduling to suit your plans."
    },
    {
        question: "Is it safe to travel with Swara Cabs?",
        answer: "Absolutely. All our drivers are background-verified and professionally trained for your safety and comfort."
    },
    {
        question: "Do you offer doorstep pickup in Dadar?",
        answer: "Yes, our cab will pick you up directly from your location in Dadar and drop you safely at your Pune destination."
    },
    {
        question: "What payment methods are accepted?",
        answer: "We accept UPI, cash, debit/credit cards, and popular digital wallets for secure and easy payments."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Suresh Patankar',
        review: 'Swara Cabs gave us a smooth ride from Dadar to Pune. Clean car, polite driver, and very professional service.'
    },
    {
        name: 'Ms. Meena Vaidya',
        review: 'I regularly travel from Dadar to Pune and Swara Cabs is my go-to option. Reliable, on-time, and great drivers!'
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
  "name": "Dadar to Pune Cab",
  "image": "https://www.swaracabs.in/assets/images/dadar-to-pune-cab.jpg",
  "description": "Book Dadar to Pune cab with Swara Cabs for comfortable, affordable travel. One-way and round trip options available with AC sedans and SUVs. 24/7 service, verified drivers, and luggage-friendly vehicles.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "8978"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2399",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/dadar-to-pune-cab"
  }
};





    return (
        <div>

<Helmet>
  <title>Dadar to Pune Cab | One-Way & Round Trip | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Dadar to Pune cab with Swara Cabs for comfortable, affordable travel. One-way and round trip options available with AC sedans and SUVs. 24/7 service, verified drivers, and luggage-friendly vehicles." 
  />
  <meta 
    name="keywords" 
    content="Dadar to Pune Cab, AC Cab Dadar to Pune, One-Way Taxi Dadar to Pune, Round Trip Dadar to Pune Cab, Online Booking Dadar to Pune Cab, Affordable Taxi Dadar to Pune, Executive Taxi Dadar to Pune, Dadar to Pune Sedan Cab, SUV Cab Hire Dadar to Pune, Quick Pickup Dadar Cab to Pune, 24/7 Cabs Dadar to Pune, Corporate Cabs from Dadar, Verified Driver Dadar to Pune, Safe Ride Dadar to Pune, Luggage Cab Dadar to Pune" 
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
                            <img src='/images/keyword/23.jpg' alt='img' />
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

export default Dadartopunecabs;