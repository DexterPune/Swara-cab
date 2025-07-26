
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Mumbaiairporttopunecab() {



    const cardData =
    {
        keyword: 'Mumbai Airport to Pune Cab',
        heading: 'Swara Cabs : Mumbai Airport to Pune Cab',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable cab services for your journey from Mumbai Airport to Pune. Pune, Maharashtra’s vibrant cultural and educational hub, is known for its historic landmarks, lush landscapes, and dynamic urban life. Whether you are arriving for a business meeting, visiting family, or heading to your hotel, Swara Cabs ensures a smooth and hassle-free experience from the moment you step off the plane. The road distance from Mumbai Airport to Pune is approximately 150 kilometers via the Expressway, with a travel time of around 3 to 4 hours depending on traffic conditions. With our well-maintained fleet and professional drivers, Swara Cabs guarantees a safe, punctual, and comfortable ride tailored to your travel needs.',

        top: 'Top Places to Visit in Pune with Swara Cabs',

        "topPlaces": [
    {
        "title": "Sinhagad Fort",
        "description": "Sinhagad Fort is a majestic hill fortress located about 30 kilometers from Pune, standing tall at an altitude of 1,312 meters. Known for its strategic location, the fort has played a crucial role in many battles, including the famous battle of Tanaji Malusare, a brave Maratha warrior. Today, it is a favorite trekking destination for adventure lovers and history buffs alike. Once at the top, visitors are rewarded with stunning views of the surrounding Sahyadri hills, rustic food stalls serving traditional Maharashtrian dishes like pithla-bhakri, and a strong sense of Maratha pride."
    },
    {
        "title": "Pataleshwar Cave Temple",
        "description": "Hidden amidst the urban chaos of JM Road, the Pataleshwar Cave Temple is a serene, 8th-century rock-cut shrine carved out of a single basalt rock. Dedicated to Lord Shiva, the temple features a beautifully carved sanctum, a circular Nandi Mandapa (pavilion), and intricate stone pillars that reflect ancient Indian architecture. Despite its location in the city, the temple offers a peaceful escape for spiritual seekers and architecture lovers. It’s also recognized as a protected monument by the Archaeological Survey of India."
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
        "name": "Mumbai Airport to Pune Cab",
        "description": "Arriving at Mumbai Airport and heading to Pune? Swara Cabs offers reliable and prompt cab services directly from Mumbai Airport to Pune. Whether you're landing at Terminal 1 or Terminal 2, our driver will meet you at the pickup point and ensure a smooth, safe, and stress-free journey to your destination in Pune."
    },
    {
        "name": "Mumbai Airport to Pune AC Taxi",
        "description": "Beat the heat and enjoy a comfortable ride with our Mumbai Airport to Pune AC taxi service. Swara Cabs provides well-maintained, air-conditioned vehicles to ensure your journey is relaxing, especially after a long flight. Travel in comfort no matter the time of day or weather."
    },
    {
        "name": "Airport Pickup Mumbai to Pune Cab",
        "description": "Book your airport pickup in advance and avoid last-minute hassles. Swara Cabs provides door-to-door pickup service from Mumbai Airport to Pune with professional drivers and clean vehicles. Our team monitors your flight to ensure timely pickup, even if your flight is early or delayed."
    },
    {
        "name": "One-Way Cab Mumbai Airport to Pune",
        "description": "Only need to go one way? Our one-way cab service from Mumbai Airport to Pune is a convenient and affordable solution for solo travelers, families, or business commuters. No return fare, no hidden charges—just a direct and seamless ride to your destination."
    },
    {
        "name": "Mumbai Airport to Pune Online Booking",
        "description": "Book your Mumbai Airport to Pune cab online in just a few clicks. Our easy-to-use platform lets you choose your cab type, confirm pricing, and get instant booking confirmation. Avoid long queues and enjoy priority service the moment you land."
    },
    {
        "name": "Affordable Cab from Mumbai Airport",
        "description": "Looking for budget-friendly travel options from Mumbai Airport to Pune? Swara Cabs offers competitive rates on all vehicle types—be it sedan, SUV, or executive class. Get the best value without compromising on safety, cleanliness, or punctuality."
    },
    {
        "name": "Sedan Taxi Mumbai Airport to Pune",
        "description": "Travel economically and comfortably with our sedan cabs from Mumbai Airport to Pune. Ideal for solo travelers or small groups, our sedans offer smooth rides, air conditioning, and enough luggage space for your airport travel needs."
    },
    {
        "name": "SUV Cab Mumbai Airport to Pune",
        "description": "Need extra space or traveling with family? Book our spacious SUV cabs from Mumbai Airport to Pune. SUVs like Ertiga, Innova, or Crysta provide maximum comfort for longer journeys, especially with multiple passengers or larger luggage."
    },
    {
        "name": "Executive Cab Mumbai Airport",
        "description": "Make a stylish and professional arrival with our executive cab services from Mumbai Airport to Pune. Enjoy plush seating, premium interiors, and a professional driver—perfect for business travelers and executives who value comfort and class."
    },
    {
        "name": "Airport to Pune Verified Drivers",
        "description": "Your safety is our priority. All Swara Cabs drivers are background-verified, experienced, and trained for airport pickups. Expect courteous service, on-time arrivals, and a secure ride from Mumbai Airport to Pune every time."
    },
    {
        "name": "Corporate Cab Mumbai Airport to Pune",
        "description": "We provide dedicated corporate cab services for companies needing consistent, high-quality transport from Mumbai Airport to Pune. Perfect for VIP pickups, employee shuttles, and business travel, with billing and invoicing support available."
    },
    {
        "name": "24/7 Airport Cab to Pune",
        "description": "No matter when your flight lands, Swara Cabs is ready. We offer 24/7 cab availability from Mumbai Airport to Pune, so you can book a ride even for early morning or late-night arrivals. Our customer support is always on standby to assist."
    },
    {
        "name": "Quick Transfer Mumbai Airport to Pune",
        "description": "In a hurry? Our express transfer service ensures the fastest route from Mumbai Airport to Pune via the expressway. Our drivers are familiar with the quickest paths, helping you save time without compromising on safety or comfort."
    },
    {
        "name": "Luggage Friendly Cab Mumbai Airport",
        "description": "Traveling with extra luggage or large suitcases? Swara Cabs provides luggage-friendly vehicles with ample boot space, whether you choose a sedan or SUV. Your comfort and convenience during airport transfers is our top priority."
    },
    {
        "name": "Family Travel Cab Mumbai Airport to Pune",
        "description": "Planning a family trip from Mumbai Airport to Pune? Our cabs are perfect for families with children or elders, offering clean interiors, comfortable seating, and professional drivers who understand your needs. Child seats available on request."
    }
],

"tableData": [
    ["Mumbai Airport to Pune Cab", "Mumbai Airport to Pune AC Taxi"],
    ["Airport Pickup Mumbai to Pune Cab", "One-Way Cab Mumbai Airport to Pune"],
    ["Mumbai Airport to Pune Online Booking", "Affordable Cab from Mumbai Airport"],
    ["Sedan Taxi Mumbai Airport to Pune", "SUV Cab Mumbai Airport to Pune"],
    ["Executive Cab Mumbai Airport", "Airport to Pune Verified Drivers"],
    ["Corporate Cab Mumbai Airport to Pune", "24/7 Airport Cab to Pune"],
    ["Quick Transfer Mumbai Airport to Pune", "Luggage Friendly Cab Mumbai Airport"],
    ["Family Travel Cab Mumbai Airport to Pune", ""]
],




"whychoose": [
  {
    "WhyChooseheading": "Convenient Pickup Right at Mumbai Airport",
    "WhyChoosedescription": "We provide hassle-free, timely pickup services directly from all Mumbai Airport terminals (T1, T2, and T3). Our drivers monitor your flight status in real-time to ensure they are there when you land, minimizing waiting time and stress after a long journey."
  },
  {
    "WhyChooseheading": "Wide Range of Comfortable Vehicles",
    "WhyChoosedescription": "Choose from a fleet of well-maintained, air-conditioned vehicles including sedans, SUVs, Ertigas, and luxury Innova Crystas. Whether you’re traveling alone or with family, we have the perfect cab to ensure a comfortable and relaxing ride from Mumbai Airport to Pune."
  },
  {
    "WhyChooseheading": "Transparent Pricing with No Hidden Charges",
    "WhyChoosedescription": "Our Mumbai Airport to Pune cab fares are upfront and all-inclusive, covering tolls, taxes, driver allowances, and airport surcharges. This means no surprises at the end of your trip—just a fair, competitive price for quality service."
  },
  {
    "WhyChooseheading": "Experienced Drivers Familiar with Airport Routes",
    "WhyChoosedescription": "Our professional drivers are experienced in navigating Mumbai Airport traffic and the fastest routes to Pune. They handle your luggage carefully and maintain a courteous attitude, ensuring your trip starts and ends with comfort and safety."
  },
  {
    "WhyChooseheading": "Safe and Sanitized Vehicles for Your Protection",
    "WhyChoosedescription": "We prioritize your health and safety by thoroughly sanitizing every vehicle before each trip. Our cabs are equipped with modern safety features and regularly inspected to provide a clean, secure environment, giving you peace of mind during your journey."
  },
  {
    "WhyChooseheading": "24/7 Service for Any Flight Time",
    "WhyChoosedescription": "No matter when your flight lands—early morning or late at night—we operate round the clock to accommodate your schedule. Our flexible booking and reliable service ensure you can depend on us for timely transport any time of day."
  },
  {
    "WhyChooseheading": "Easy Online Booking and Instant Confirmation",
    "WhyChoosedescription": "Booking your cab from Mumbai Airport to Pune is quick and convenient with our online platform. Receive instant confirmation, driver details, and real-time updates, making your travel planning smooth and stress-free."
  },
  {
    "WhyChooseheading": "Customized Travel Solutions for Business and Leisure",
    "WhyChoosedescription": "Whether you’re traveling for business meetings, conferences, or a leisurely vacation, we offer tailored cab services to suit your specific needs. Request special amenities or additional stops, and we’ll ensure your journey is comfortable and personalized."
  }
]



















    }



const faqData = [
    {
        question: "Do you offer cab service from Mumbai Airport to Pune?",
        answer: "Yes, Swara Cabs provides reliable and on-time cab service from Mumbai Airport (Domestic and International terminals) to Pune."
    },
    {
        question: "What is the fare for a cab from Mumbai Airport to Pune?",
        answer: "Fares start from ₹5,800 for a one-way sedan trip. Pricing may vary depending on vehicle type and pickup time."
    },
    {
        question: "How do I book a cab from Mumbai Airport to Pune?",
        answer: "You can pre-book online via our website or call us at +91 9697780707. We also accommodate last-minute airport pickups."
    },
    {
        question: "Will the driver wait at the airport terminal?",
        answer: "Yes, our drivers track your flight and wait at the arrival terminal with a placard for easy identification."
    },
    {
        question: "What vehicle options are available from Mumbai Airport to Pune?",
        answer: "We offer sedans, SUVs, Innova Crysta, and tempo travellers depending on your group size and comfort needs."
    },
    {
        question: "Are tolls and driver charges included in the fare?",
        answer: "Yes, our fares are inclusive of all tolls, taxes, and driver allowances. No hidden costs."
    },
    {
        question: "Is night pickup available from Mumbai Airport?",
        answer: "Yes, we operate 24/7. Night pickups are available with a small surcharge from 10 PM to 6 AM."
    },
    {
        question: "Can I book a round trip from Pune back to Mumbai Airport?",
        answer: "Yes, round-trip bookings are available and can be scheduled based on your return flight timing."
    },
    {
        question: "Is it safe to travel with Swara Cabs late at night?",
        answer: "Absolutely. Our drivers are verified and trained, ensuring a secure and professional experience at all hours."
    },
    {
        question: "What payment methods do you accept for airport transfers?",
        answer: "We accept UPI, cash, debit/credit cards, and major digital wallets for seamless transactions."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Nikhil Mehta',
        review: 'I had a late-night flight to Mumbai and needed to get to Pune. Swara Cabs was punctual and the ride was very smooth. Highly recommended!'
    },
    {
        name: 'Ms. Rucha Kulkarni',
        review: 'Excellent airport pickup service! The driver waited at the terminal and the drive to Pune was clean and comfortable.'
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
  "name": "Mumbai Airport to Pune Cab",
  "image": "https://www.swaracabs.in/assets/images/mumbai-airport-to-pune-cab.jpg",
  "description": "Book Mumbai Airport to Pune Cab with Swara Cabs for a smooth, AC ride. One-way transfers, sedan & SUV options, 24/7 pickup, luggage-friendly vehicles, and verified drivers ensure reliable airport travel.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "10256"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2599",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/mumbai-airport-to-pune-cab"
  }
};






    return (
        <div>
<Helmet>
  <title>Mumbai Airport to Pune Cab | 24/7 Pickup | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Mumbai Airport to Pune Cab with Swara Cabs for a smooth, AC ride. One-way transfers, sedan & SUV options, 24/7 pickup, luggage-friendly vehicles, and verified drivers ensure reliable airport travel." 
  />
  <meta 
    name="keywords" 
    content="Mumbai Airport to Pune Cab, Mumbai Airport to Pune AC Taxi, Airport Pickup Mumbai to Pune Cab, One-Way Cab Mumbai Airport to Pune, Mumbai Airport to Pune Online Booking, Affordable Cab from Mumbai Airport, Sedan Taxi Mumbai Airport to Pune, SUV Cab Mumbai Airport to Pune, Executive Cab Mumbai Airport, Airport to Pune Verified Drivers, Corporate Cab Mumbai Airport to Pune, 24/7 Airport Cab to Pune, Quick Transfer Mumbai Airport to Pune, Luggage Friendly Cab Mumbai Airport, Family Travel Cab Mumbai Airport to Pune" 
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
                            <img src='/images/keyword/22.jpg' alt='img' />
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

export default Mumbaiairporttopunecab;