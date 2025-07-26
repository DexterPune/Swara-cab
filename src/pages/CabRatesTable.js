import React from "react";

const CabRatesTable = () => {
  const ratesData = [
    { type: "Dzire, Etios, Xcent", capacity: "4+1", oneWay: "₹2600", roundTrip: "₹7000", toll: "Including" },
    { type: "Ertiga", capacity: "6+1", oneWay: "₹3200", roundTrip: "₹6000", toll: "Including" },
    { type: "Tourist Special Innova", capacity: "7+1", oneWay: "₹4000", roundTrip: "₹7500", toll: "Including" },
    { type: "Innova Crysta", capacity: "6+1", oneWay: "₹5000", roundTrip: "₹9000", toll: "Including" },
    { type: "Kia Carens", capacity: "6+1", oneWay: "₹4000", roundTrip: "₹7500", toll: "Including" },
    { type: "Tavera & Xylo", capacity: "6+1", oneWay: "₹4500", roundTrip: "₹8000", toll: "Including" },
    { type: "Tempo Traveller", capacity: "13 Seater", oneWay: "On Call", roundTrip: "On Call", toll: "Including" },
    { type: "Tempo Traveller", capacity: "17 Seater", oneWay: "On Call", roundTrip: "On Call", toll: "Including" },
    { type: "Mini Bus", capacity: "20, 28, 32, 50 Seater", oneWay: "On Call", roundTrip: "On Call", toll: "Including" },
  ];

  const handleWhatsAppClick = (vehicleType) => {
    const phone = "919697780707";
    const message = `Hi, I would like to inquire about the ${vehicleType} cab from Pune to Mumbai.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "30px",
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

  const buttonStyle = {
    backgroundColor: "#AA5225",
    color: "white",
    padding: "8px 14px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div className="container p-3">
      <h2 className="text-center my-4">Customized Packages for Pune Mumbai Cab Service</h2>
      <div className="table-responsive">
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>TYPE OF VEHICLE</th>
              <th style={thStyle}>OUTSTATION CAPACITY</th>
              <th style={thStyle}>ONE WAY PRICES</th>
              <th style={thStyle}>ROUND TRIP PRICING</th>
              <th style={thStyle}>TOLL PARKING</th>
              <th style={thStyle}>BOOK NOW</th>
            </tr>
          </thead>
          <tbody>
            {ratesData.map((item, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f4f4f4" : "#ffffff" }}>
                <td style={thTdStyle}>{item.type}</td>
                <td style={thTdStyle}>{item.capacity}</td>
                <td style={thTdStyle}>{item.oneWay}</td>
                <td style={thTdStyle}>{item.roundTrip}</td>
                <td style={thTdStyle}>{item.toll}</td>
                <td style={thTdStyle}>
                  <button style={buttonStyle} onClick={() => handleWhatsAppClick(item.type)}>
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

export default CabRatesTable;
