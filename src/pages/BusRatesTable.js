import React from 'react';

const BusRatesTable = () => {
  const ratesData = [
    { type: "Dzire, Etios, Xcent", capacity: "4+1", oneWay: "₹2600", roundTrip: "₹7000", toll: "Including" },
    { type: "Ertiga", capacity: "6+1", oneWay: "₹3200", roundTrip: "₹6000", toll: "Including" },
    { type: "Tourist Special Innova", capacity: "7+1", oneWay: "₹4000", roundTrip: "₹7500", toll: "Including" },
    { type: "Innova Crysta", capacity: "6+1", oneWay: "₹5000", roundTrip: "₹9000", toll: "Including" },
    { type: "Kia Carens", capacity: "6+1", oneWay: "₹4000", roundTrip: "₹7500", toll: "Including" },
    { type: "Tavera & Xylo", capacity: "6+1", oneWay: "₹4500", roundTrip: "₹8000", toll: "Including" },
    { type: "Tempo Traveller (13 Seater)", capacity: "13 Seater", oneWay: "On Call", roundTrip: "On Call", toll: "Including" },
    { type: "Tempo Traveller (17 Seater)", capacity: "17 Seater", oneWay: "On Call", roundTrip: "On Call", toll: "Including" },
    { type: "Mini Bus", capacity: "20, 28, 32, 50 Seater", oneWay: "On Call", roundTrip: "On Call", toll: "Including" },
  ];

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    margin: "30px 0",
  };

  const thTdStyle = {
    padding: "12px",
    border: "1px solid #ccc",
    textAlign: "center",
  };

  const thStyle = {
    ...thTdStyle,
    backgroundColor: "#AA5225",
    color: "white",
  };

  return (
    <div className="container p-3">
      <h2 className="text-center my-4">Customized Packages for Pune Mumbai Cab Service</h2>
      <div className="table-responsive">
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Type of Vehicle</th>
              <th style={thStyle}>Outstation Capacity</th>
              <th style={thStyle}>One Way Prices</th>
              <th style={thStyle}>Round Trip Pricing</th>
              <th style={thStyle}>Toll Parking</th>
              <th style={thStyle}>Book Now</th>
            </tr>
          </thead>
          <tbody>
            {ratesData.map((item, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff" }}>
                <td style={thTdStyle}>{item.type}</td>
                <td style={thTdStyle}>{item.capacity}</td>
                <td style={thTdStyle}>{item.oneWay}</td>
                <td style={thTdStyle}>{item.roundTrip}</td>
                <td style={thTdStyle}>{item.toll}</td>
                <td style={thTdStyle}>
                  <button
                    style={{
                      backgroundColor: "#AA5225",
                      color: "#fff",
                      padding: "10px 18px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      window.open(`https://wa.me/919697780707?text=${encodeURIComponent(`Hi, I want to book ${item.type} for Pune Mumbai trip.`)}`, "_blank")
                    }
                  >
                    Book Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusRatesTable;
