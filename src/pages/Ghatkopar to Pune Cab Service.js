
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Ghatkopertopunecabservice() {



    const cardData =
    {
        keyword: 'Ghatkopar to Pune Cab Service',
        heading: 'Swara Cabs : Ghatkopar to Pune Cab Service',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable cab services for your journey from Ghatkopar to Pune. Pune, a bustling city known as Maharashtra’s cultural and IT capital, is home to historical forts, renowned universities, and a vibrant urban lifestyle. Whether you are traveling for a corporate meeting, a leisure trip, or to visit family and friends, Swara Cabs ensures a seamless and stress-free experience. The distance between Ghatkopar and Pune is approximately 150 to 160 kilometers, and the journey via the Mumbai–Pune Expressway typically takes around 3 to 4 hours depending on traffic conditions. With our well-maintained fleet, professional drivers, and round-the-clock support, Swara Cabs guarantees a safe, timely, and comfortable ride tailored to your travel needs.',

        top: 'Top Places to Visit in Pune with Swara Cabs',

        "topPlaces": [
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
    "name": "Ghatkopar to Pune Cab Service",
    "description": "Enjoy a reliable and hassle-free cab journey from Ghatkopar to Pune with our professional taxi service. Ride comfortably on the Mumbai–Pune Expressway in clean, well-maintained vehicles operated by trained and courteous drivers. Whether you're traveling for work or leisure, we ensure punctual pickups, transparent pricing, and a smooth highway experience every time."
  },
  {
    "name": "Online Booking Ghatkopar to Pune Cab",
    "description": "Book your cab from Ghatkopar to Pune with ease through our secure and user-friendly online booking platform. Get instant vehicle availability, real-time pricing, and immediate confirmation. Whether you’re planning your trip in advance or need a last-minute ride, our online system is designed for convenience and flexibility."
  },
  {
    "name": "One-Way Taxi Ghatkopar to Pune",
    "description": "Choose our one-way taxi service from Ghatkopar to Pune for cost-effective and convenient travel. This is perfect for travelers who only need a one-time drop, with no return fare or unnecessary charges. Travel solo, with friends, or for work purposes and enjoy a comfortable, well-priced ride without commitment to round trips."
  },
  {
    "name": "AC Cab Ghatkopar to Pune",
    "description": "Beat the heat with our fully air-conditioned cab service from Ghatkopar to Pune. Travel in climate-controlled comfort with modern AC taxis that ensure a cool and pleasant journey, no matter the weather. Ideal for long-distance travel, business trips, or family vacations requiring extra comfort."
  },
  {
    "name": "Round Trip Cab Ghatkopar to Pune",
    "description": "Plan your entire journey with our round trip cab service from Ghatkopar to Pune. Enjoy round trip discounts, the same cab and driver for both legs of your journey, and complete flexibility in scheduling return travel. Perfect for short business visits or weekend getaways requiring return travel the same day or next."
  },
  {
    "name": "Sedan Cab Ghatkopar",
    "description": "Opt for our sedan cab service in Ghatkopar for a blend of comfort, style, and affordability on your way to Pune. Ideal for solo travelers, couples, or small families looking for a smooth ride with ample legroom and modern interiors at a budget-friendly price point."
  },
  {
    "name": "SUV Taxi Ghatkopar to Pune",
    "description": "Travel with your family or group in our spacious SUV taxis from Ghatkopar to Pune. With ample luggage space, comfortable seating for up to 6 passengers, and powerful performance on highways, our SUVs are perfect for group outings, family trips, or travel with extra baggage."
  },
  {
    "name": "Affordable Taxi Ghatkopar to Pune",
    "description": "Enjoy quality taxi service from Ghatkopar to Pune at affordable rates. We provide competitive fares with no hidden costs, ensuring budget-friendly options for students, professionals, and families without compromising on safety, punctuality, or comfort."
  },
  {
    "name": "Verified Driver Ghatkopar to Pune",
    "description": "Your safety is our priority. All our drivers operating on the Ghatkopar to Pune route are background-verified, well-trained, and experienced in long-distance travel. Expect polite, professional conduct and a safe driving experience every time you ride with us."
  },
  {
    "name": "Executive Travel Ghatkopar to Pune",
    "description": "Experience luxury and professionalism with our executive cab services from Ghatkopar to Pune. Ideal for business travelers, our fleet features high-end vehicles, experienced chauffeurs, onboard amenities, and priority support—ensuring a premium and punctual travel experience."
  },
  {
    "name": "Corporate Cab Hire Ghatkopar",
    "description": "Our corporate cab hire service from Ghatkopar to Pune is tailored for businesses and professionals. Benefit from monthly billing, premium vehicles, trained chauffeurs, and guaranteed on-time pickups—perfect for daily commutes, client visits, or intercity business travel."
  },
  {
    "name": "24/7 Cab Ghatkopar to Pune",
    "description": "Need a cab at odd hours? Our 24/7 cab service from Ghatkopar to Pune ensures that you’re always covered. Whether it’s an early-morning airport drop or a late-night return, we guarantee dependable service around the clock with prompt customer support."
  },
  {
    "name": "Safe Ride Ghatkopar to Pune",
    "description": "Enjoy complete peace of mind with our safe cab rides from Ghatkopar to Pune. All vehicles are regularly sanitized and maintained, and our drivers are trained in road safety and hygiene protocols. Perfect for solo travelers, women, and families who prioritize security."
  },
  {
    "name": "Airport Cab Ghatkopar to Pune",
    "description": "Get seamless airport transfers from Ghatkopar to Pune with timely pickups, luggage assistance, and real-time flight monitoring. Our airport cabs ensure you never miss a flight and arrive relaxed and on time, whether traveling for business or leisure."
  },
  {
    "name": "Ghatkopar Expressway Cab to Pune",
    "description": "Take the fast lane from Ghatkopar to Pune via the Mumbai–Pune Expressway with our express cab service. Designed for efficiency and speed, these cabs are perfect for travelers looking to save time without compromising comfort or safety."
  }
],
"tableData": [
  ["Ghatkopar to Pune Cab Service", "Online Booking Ghatkopar to Pune Cab"],
  ["One-Way Taxi Ghatkopar to Pune", "AC Cab Ghatkopar to Pune"],
  ["Round Trip Cab Ghatkopar to Pune", "Sedan Cab Ghatkopar"],
  ["SUV Taxi Ghatkopar to Pune", "Affordable Taxi Ghatkopar to Pune"],
  ["Verified Driver Ghatkopar to Pune", "Executive Travel Ghatkopar to Pune"],
  ["24/7 Cab Ghatkopar to Pune", "Safe Ride Ghatkopar to Pune"],
  ["Airport Cab Ghatkopar to Pune", "Ghatkopar Expressway Cab to Pune"],
  ["Corporate Cab Hire Ghatkopar", ""]
],




"whychoose": [
  {
    "WhyChooseheading": "Reliable Ghatkopar to Pune Cab Service",
    "WhyChoosedescription": "We offer a highly dependable Ghatkopar to Pune cab service, ensuring punctual pickups and drop-offs every time. Our service is ideal for business trips, weekend getaways, or family outings, letting you travel without the stress of delays or cancellations."
  },
  {
    "WhyChooseheading": "Wide Range of Vehicle Options",
    "WhyChoosedescription": "Choose from a broad selection of vehicles for your Ghatkopar to Pune cab service, including budget-friendly sedans, spacious SUVs for families or groups, and premium luxury cars for a more elegant travel experience. Every vehicle is regularly inspected and sanitized for your comfort and safety."
  },
  {
    "WhyChooseheading": "Transparent and Affordable Pricing",
    "WhyChoosedescription": "Our Ghatkopar to Pune cab fares are competitively priced with no hidden fees. The rates include tolls, state taxes, and driver charges, giving you complete clarity on your travel expenses. Get value for your money without compromising on quality or service."
  },
  {
    "WhyChooseheading": "Experienced and Courteous Drivers",
    "WhyChoosedescription": "Enjoy a smooth ride with our experienced drivers who are well-acquainted with the Ghatkopar to Pune route. They follow the safest and fastest roads while maintaining professionalism, politeness, and readiness to assist you throughout your journey."
  },
  {
    "WhyChooseheading": "Convenient Online Booking",
    "WhyChoosedescription": "Book your Ghatkopar to Pune cab in just a few clicks through our user-friendly website or mobile app. You’ll receive instant confirmation, real-time tracking, and flexible rescheduling or cancellation options to suit your travel plans."
  },
  {
    "WhyChooseheading": "24/7 Customer Support",
    "WhyChoosedescription": "Our dedicated customer support team is available 24/7 to help you with bookings, special requests, changes to your itinerary, or any travel-related concerns. Whether it’s early morning or late at night, we’re just a call or message away."
  },
  {
    "WhyChooseheading": "Clean and Well-Maintained Vehicles",
    "WhyChoosedescription": "Travel in comfort with our regularly cleaned and well-maintained cabs. Each vehicle for the Ghatkopar to Pune journey is equipped with air conditioning, comfortable seating, and hygiene kits, ensuring a pleasant and safe ride."
  },
  {
    "WhyChooseheading": "Multiple Secure Payment Options",
    "WhyChoosedescription": "Pay for your Ghatkopar to Pune cab service securely using a variety of methods—credit/debit cards, UPI, wallets, or cash. We provide instant invoices and transparent billing for your peace of mind and easy expense tracking."
  }
]






























    }


const faqData = [
    {
        question: "Do you offer cab services from Ghatkopar to Pune?",
        answer: "Yes, Swara Cabs provides reliable and comfortable cab services from Ghatkopar to Pune."
    },
    {
        question: "What is the fare for a cab from Ghatkopar to Pune?",
        answer: "Fares start from ₹6,000 for a sedan. The exact fare depends on vehicle type and travel time."
    },
    {
        question: "How can I book a cab from Ghatkopar to Pune?",
        answer: "You can book a cab through our website or call us directly at +91 9697780707."
    },
    {
        question: "What types of vehicles are available for Ghatkopar to Pune trips?",
        answer: "We offer a range of vehicles including sedans, SUVs, Innova Crysta, and tempo travellers."
    },
    {
        question: "Are tolls and driver charges included in the cab fare?",
        answer: "Yes, all tolls, taxes, and driver allowances are included in the fare. No hidden charges."
    },
    {
        question: "Can I book a cab for night travel from Ghatkopar to Pune?",
        answer: "Yes, we offer 24/7 cab services including night travel with a nominal night-time surcharge."
    },
    {
        question: "Is a round trip option available from Ghatkopar to Pune?",
        answer: "Yes, you can book both one-way and round-trip rides based on your convenience."
    },
    {
        question: "Is it safe to travel with Swara Cabs?",
        answer: "Absolutely. Our drivers are professional, trained, and background-verified to ensure your safety."
    },
    {
        question: "Do you offer doorstep pickup in Ghatkopar?",
        answer: "Yes, we provide hassle-free doorstep pickup from any location in Ghatkopar."
    },
    {
        question: "What payment methods can I use?",
        answer: "We accept UPI, cash, debit/credit cards, and all major digital wallets for your convenience."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Nilesh Jadhav',
        review: 'Booked a cab from Ghatkopar to Pune with Swara Cabs. The ride was smooth, the driver was friendly, and the vehicle was in great condition.'
    },
    {
        name: 'Ms. Rupal Thakur',
        review: 'Fantastic experience with Swara Cabs. On-time pickup from Ghatkopar, clean vehicle, and courteous driver. Highly recommend their service!'
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
  "name": "Ghatkopar to Pune Cab Service",
  "image": "https://www.swaracabs.in/assets/images/ghatkopar-pune-cab.jpg",
  "description": "Reliable Ghatkopar to Pune cab service with AC, sedan, SUV taxis. Affordable, safe rides available 24/7 with online booking, airport transfers, and executive travel.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "9858",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "1400",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/ghatkopar-to-pune-cab-service"
  }
};



    return (
        <div>
<Helmet>
  <title>Ghatkopar to Pune Cab Service | Affordable & Reliable Taxi | Swara Cabs</title>
  <meta
    name="description"
    content="Reliable Ghatkopar to Pune cab service with AC, sedan, SUV taxis. Affordable, safe rides available 24/7 with online booking, airport transfers, and executive travel."
  />
  <meta
    name="keywords"
    content="Ghatkopar to Pune Cab Service, AC Cab Ghatkopar to Pune, One-Way Taxi Ghatkopar to Pune, Round Trip Cab Ghatkopar to Pune, Online Booking Ghatkopar to Pune Cab, Affordable Taxi Ghatkopar to Pune, Sedan Cab Ghatkopar, SUV Taxi Ghatkopar to Pune, Airport Cab Ghatkopar to Pune, Executive Travel Ghatkopar to Pune, Corporate Cab Hire Ghatkopar, Verified Driver Ghatkopar to Pune, Safe Ride Ghatkopar to Pune, 24/7 Cab Ghatkopar to Pune, Ghatkopar Expressway Cab to Pune"
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
                            <img src='/images/keyword/41.jpg' alt='img' />
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

export default Ghatkopertopunecabservice;