
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Punetomumbaitaxifare() {



    const cardData =
    {
        keyword: 'Pune to Mumbai Taxi Fare',
        heading: 'Swara Cabs : Pune to Mumbai Taxi Fare',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable taxi services for your journey from Pune to Mumbai. Mumbai, the commercial capital of India, is known for its iconic landmarks, vibrant culture, and bustling city life. Whether you are traveling for a business meeting, a family visit, or an airport transfer, we ensure a smooth and hassle-free ride. The distance between Pune and Mumbai is approximately 150 to 155 km via the Expressway, with a travel time of around 3 hours depending on traffic conditions. With our well-maintained fleet and professional drivers, you can enjoy a safe, comfortable, and timely journey tailored to your travel needs.',

        top: 'Top Places to Visit in Mumbai with Swara Cabs',

        "topPlaces": [
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
                "name": "Pune to Mumbai Taxi Fare",
                "description": "Planning a trip from Pune to Mumbai? Swara Cab offers transparent and competitive taxi fares for a smooth and comfortable journey. We ensure you receive the best value with no hidden charges, reliable service, and professional drivers."
            },
            {
                "name": "Pune to Mumbai Cab Charges",
                "description": "Looking for the best cab charges for your Pune to Mumbai journey? Swara Cab provides detailed fare structures, ensuring affordable and clear pricing tailored to your travel needs."
            },
            {
                "name": "Taxi Rate Pune to Mumbai",
                "description": "Swara Cab offers reasonable and consistent taxi rates from Pune to Mumbai. Whether you choose a sedan, SUV, or luxury vehicle, we provide transparent rates with no surprises."
            },
            {
                "name": "Affordable Pune to Mumbai Taxi Fare",
                "description": "For budget-conscious travelers, Swara Cab delivers affordable taxi fare options from Pune to Mumbai. Travel comfortably without straining your wallet."
            },
            {
                "name": "Pune to Mumbai AC Taxi Fare",
                "description": "Enjoy the journey in comfort with Swara Cab’s AC taxi services from Pune to Mumbai. Our fares are competitive and include well-maintained air-conditioned vehicles for a relaxing ride."
            },
            {
                "name": "Lowest Fare Pune to Mumbai Taxi",
                "description": "Swara Cab ensures the lowest fares for your Pune to Mumbai taxi journey without compromising on service quality. Ideal for frequent travelers and budget trips."
            },
            {
                "name": "Pune to Mumbai One-Way Taxi Price",
                "description": "Travel one-way from Pune to Mumbai at a great price with Swara Cab. We offer dedicated one-way taxi services for travelers who don’t require a return ride."
            },
            {
                "name": "Pune to Mumbai Round Trip Fare",
                "description": "Book your round trip with Swara Cab and enjoy consistent and economical fares from Pune to Mumbai and back. Ideal for short vacations and business trips."
            },
            {
                "name": "Online Pune to Mumbai Fare Estimate",
                "description": "Use Swara Cab’s online fare estimator to get a quick and accurate cost for your Pune to Mumbai trip. Plan your travel budget in advance with ease."
            },
            {
                "name": "Pune to Mumbai Toll Inclusive Fare",
                "description": "Avoid toll surprises with Swara Cab’s toll-inclusive fare packages from Pune to Mumbai. All charges are included in your upfront quote for total transparency."
            },
            {
                "name": "Pune to Mumbai Long Distance Cab Fare",
                "description": "Swara Cab provides competitive long-distance cab fares for trips from Pune to Mumbai. Enjoy a seamless ride with experienced drivers at fair rates."
            },
            {
                "name": "Transparent Taxi Fare Pune to Mumbai",
                "description": "Swara Cab is committed to full transparency in taxi fares. From base fare to tolls, everything is clearly detailed so you can ride worry-free from Pune to Mumbai."
            },
            {
                "name": "Pune to Mumbai Private Taxi Fare",
                "description": "Book a private taxi with Swara Cab for a premium Pune to Mumbai journey. Enjoy personalized service and a dedicated driver at a transparent fare."
            },
            {
                "name": "Pune to Mumbai Fare with Driver Charges",
                "description": "Swara Cab includes all driver-related charges in the fare from Pune to Mumbai. No hidden costs—just reliable service at clear prices."
            },
            {
                "name": "Budget Taxi Fare Pune to Mumbai",
                "description": "Swara Cab offers budget-friendly taxi fares for your Pune to Mumbai journey. Perfect for solo travelers, students, or anyone seeking affordable comfort."
            }
        ],

        "tableData": [
            ["Pune to Mumbai Taxi Fare", "Pune to Mumbai Cab Charges"],
            ["Taxi Rate Pune to Mumbai", "Affordable Pune to Mumbai Taxi Fare"],
            ["Pune to Mumbai AC Taxi Fare", "Lowest Fare Pune to Mumbai Taxi"],
            ["Pune to Mumbai One-Way Taxi Price", "Pune to Mumbai Round Trip Fare"],
            ["Online Pune to Mumbai Fare Estimate", "Pune to Mumbai Toll Inclusive Fare"],
            ["Pune to Mumbai Long Distance Cab Fare", "Transparent Taxi Fare Pune to Mumbai"],
            ["Pune to Mumbai Private Taxi Fare", "Pune to Mumbai Fare with Driver Charges"],
            ["Budget Taxi Fare Pune to Mumbai", ""]
        ],


        "whychoose": [
            {
                "WhyChooseheading": "Transparent and Affordable Taxi Fares",
                "WhyChoosedescription": "We offer clear and competitive pricing for Pune to Mumbai taxi services with no hidden charges, so you know exactly what you’re paying for upfront."
            },
            {
                "WhyChooseheading": "Flexible Fare Options",
                "WhyChoosedescription": "Choose from various fare packages including one-way, round-trip, and hourly rentals to suit your travel needs and budget."
            },
            {
                "WhyChooseheading": "Fare Estimates Available Online",
                "WhyChoosedescription": "Get instant fare estimates online before booking, helping you plan your trip and expenses better without any surprises."
            },
            {
                "WhyChooseheading": "Affordable Luxury with Premium Cabs",
                "WhyChoosedescription": "Travel comfortably in premium vehicles like Innova Crysta and Ertiga at competitive prices, balancing affordability and luxury."
            },
            {
                "WhyChooseheading": "No Surge Pricing",
                "WhyChoosedescription": "We maintain consistent taxi fares regardless of demand, ensuring you get fair pricing even during peak travel times."
            },
            {
                "WhyChooseheading": "Fare Includes All Taxes and Tolls",
                "WhyChoosedescription": "Our taxi fare from Pune to Mumbai includes all applicable taxes and tolls for a hassle-free travel experience."
            },
            {
                "WhyChooseheading": "24/7 Fare Support",
                "WhyChoosedescription": "Our customer support is available around the clock to assist you with fare inquiries and booking assistance."
            },
            {
                "WhyChooseheading": "Safe and Transparent Payment Options",
                "WhyChoosedescription": "Pay securely through multiple payment modes with detailed invoices to keep your transactions transparent and convenient."
            }
        ]








    }



    const faqData = [
        {
            question: "What is the taxi fare from Pune to Mumbai with Swara Cabs?",
            answer: "Swara Cabs offers Pune to Mumbai taxi service starting from ₹5,500, depending on the vehicle type and trip type (one-way or round trip)."
        },
        {
            question: "Are tolls, parking, and taxes included in the fare?",
            answer: "Yes, our fares are all-inclusive and cover tolls, driver allowance, and taxes. No hidden charges."
        },
        {
            question: "Can I book a round trip from Pune to Mumbai with Swara Cabs?",
            answer: "Absolutely. We offer both one-way and round-trip packages tailored to your schedule and needs."
        },
        {
            question: "What types of vehicles are available for Pune to Mumbai travel?",
            answer: "We provide sedans, SUVs, and tempo travellers based on your group size and comfort preferences."
        },
        {
            question: "Is night travel available for Pune to Mumbai route?",
            answer: "Yes, night travel is available. A nominal night charge may apply between 10 PM and 6 AM."
        },
        {
            question: "How can I get a fare estimate before booking?",
            answer: "You can call us at +91 9697780707 or visit our website to get a quick fare quote based on your travel details."
        },
        {
            question: "Is the fare different on weekends or holidays?",
            answer: "Our standard fare applies all week, though high-demand days may reflect slight fare variations."
        },
        {
            question: "Can I book a Pune to Mumbai taxi at the last minute?",
            answer: "Yes, subject to availability, Swara Cabs accepts last-minute bookings. Early bookings are advised for guaranteed slots."
        },
        {
            question: "Do you charge for waiting time during the trip?",
            answer: "We provide up to 30 minutes of complimentary wait time. Extended waiting is chargeable at standard hourly rates."
        },
        {
            question: "How can I make a payment for my booking?",
            answer: "We accept UPI, cash, credit/debit cards, and online payments for your convenience."
        }
    ];

    const testimonialsData = [
        {
            name: 'Mr. Ajay Kulkarni',
            review: 'Booked a cab from Swara Cabs for a Pune to Mumbai airport drop. The car was punctual, clean, and the driver was very courteous. Highly professional service!'
        },
        {
            name: 'Mrs. Neeta Joshi',
            review: 'Used Swara Cabs for our family trip from Pune to Mumbai. The ride was smooth and comfortable. The driver knew the best routes and avoided traffic. Highly recommended!'
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
//   "name": "Pune to Mumbai Taxi Fare",
//   "image": "https://www.swaracabs.in/assets/images/pune-to-mumbai-taxi.jpg",
//   "description": "Book Pune to Mumbai taxi at affordable fares with Swara Cabs. Comfortable AC cabs for one-way or round trips. Transparent pricing with toll and driver charges included.",
//   "brand": {
//     "@type": "Brand",
//     "name": "Swara Cabs"
//   },
//   "aggregateRating": {
//     "@type": "AggregateRating",
//     "bestRating": "5",
//     "worstRating": "1",
//     "ratingValue": "4.7",
//     "ratingCount": "9785"
//   },
//   "offers": {
//     "@type": "Offer",
//     "priceCurrency": "INR",
//     "price": "2499",
//     "availability": "https://schema.org/InStock",
//     "url": "https://www.swaracabs.in/pune-to-mumbai-taxi-fare"
//   }
// };


const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Pune to Mumbai Taxi Fare",
  "image": "https://www.swaracabs.in/assets/images/pune-to-mumbai-taxi.jpg",
  "description": "Get lowest Pune to Mumbai taxi fare with Swara Cabs. One-way and round trip AC cabs starting from ₹2499. Includes tolls and driver allowance.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.7",
    "ratingCount": "17589"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2499",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/pune-to-mumbai-taxi-fare"
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the one-way taxi fare from Pune to Mumbai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Swara Cabs offers one-way taxi fare from Pune to Mumbai starting at ₹2499. The fare includes AC cab, toll charges, and driver allowance with no hidden costs."
      }
    },
    {
      "@type": "Question",
      "name": "Are toll and driver charges included in the fare?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all Swara Cabs Pune to Mumbai taxi fares are inclusive of toll charges and driver allowance, offering a fully transparent pricing model."
      }
    },
    {
      "@type": "Question",
      "name": "Can I book a round trip cab from Pune to Mumbai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Swara Cabs provides both one-way and round trip options between Pune and Mumbai. You can book based on your schedule and convenience."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book a Pune to Mumbai taxi with Swara Cabs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can book your cab online through the official website www.swaracabs.in or call the booking number provided on the site for instant reservations."
      }
    },
    {
      "@type": "Question",
      "name": "Is airport pickup or drop available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Swara Cabs provides airport pickup and drop services for both Pune and Mumbai airports, with professional drivers and on-time arrival."
      }
    }
  ]
};




    return (
        <div>


<Helmet>
  <title>Pune to Mumbai Taxi Fare | One-Way & Round Trip Cab Price</title>
  <meta 
    name="description" 
    content="Get lowest Pune to Mumbai taxi fare with Swara Cabs. One-way and round trip AC cabs starting from ₹2499. Includes tolls, driver charges, and online booking." 
  />
  <meta 
    name="keywords" 
    content="Pune to Mumbai Taxi Fare, Pune to Mumbai Cab Charges, One-Way Taxi Pune to Mumbai, Round Trip Taxi Pune to Mumbai, AC Cab Fare Pune Mumbai, Pune Mumbai Cab Booking, Lowest Taxi Price Pune to Mumbai, Mumbai Airport Pickup Drop Taxi, Pune to Mumbai Toll Included Fare, Pune to Mumbai Fare Estimate, Online Taxi Fare Pune to Mumbai" 
  />
  <meta property="og:title" content="Pune to Mumbai Taxi Fare | Affordable Cab Price – Swara Cabs" />
  <meta property="og:description" content="Book your Pune to Mumbai taxi at best price with Swara Cabs. Transparent fare with AC cabs, tolls, and driver included. One-way and round trip available." />
  <meta property="og:image" content="https://www.swaracabs.in/images/keyword/1.jpg" />
  <meta property="og:url" content="https://www.swaracabs.in/pune-to-mumbai-taxi-fare" />
  <meta property="og:type" content="website" />
  
  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
  </script>
  <script type="application/ld+json">
  {JSON.stringify(faqSchema)}
</script>
<script type="application/ld+json">
  {JSON.stringify(faqSchema)}
</script>

</Helmet>



{/*         
<Helmet>
  <title>Pune to Mumbai Taxi Fare | Affordable, Transparent Pricing | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Pune to Mumbai taxi at affordable fares with Swara Cabs. Comfortable AC cabs for one-way or round trips. Transparent pricing with toll and driver charges included." 
  />
  <meta 
    name="keywords" 
    content="Pune to Mumbai Taxi Fare, Pune to Mumbai Cab Charges, Taxi Rate Pune to Mumbai, Affordable Pune to Mumbai Taxi Fare, Pune to Mumbai AC Taxi Fare, Lowest Fare Pune to Mumbai Taxi, Pune to Mumbai One-Way Taxi Price, Pune to Mumbai Round Trip Fare, Online Pune to Mumbai Fare Estimate, Pune to Mumbai Toll Inclusive Fare, Pune to Mumbai Long Distance Cab Fare, Transparent Taxi Fare Pune to Mumbai, Pune to Mumbai Private Taxi Fare, Pune to Mumbai Fare with Driver Charges, Budget Taxi Fare Pune to Mumbai" 
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
                            <img src='/images/keyword/1.jpg' alt='img' />
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

export default Punetomumbaitaxifare;