import React, { useState } from "react";
import SearchBar from "./SearchBar";
import RegionFilter from "./RegionFilter";
import StatesList from "./StatesList";

const StatesExplorer = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");

  const states = [
    { name: "Lagos", capital: "Ikeja", region: "South West" },
    { name: "Kano", capital: "Kano", region: "North West" },
    { name: "Rivers", capital: "Port Harcourt", region: "South South" },
    { name: "Kaduna", capital: "Kaduna", region: "North West" },
    { name: "Anambra", capital: "Awka", region: "South East" },
    { name: "Oyo", capital: "Ibadan", region: "South West" },
    { name: "Plateau", capital: "Jos", region: "North Central" },
    { name: "Borno", capital: "Maiduguri", region: "North East" },
    { name: "Edo", capital: "Benin City", region: "South South" },
    { name: "Enugu", capital: "Enugu", region: "South East" },
  ];

  // ✅ Fixed: Proper matching for search and region filter
  const filteredStates = states.filter((state) => {
    const matchSearch =
      state.name.toLowerCase().includes(search.toLowerCase()) ||
      state.capital.toLowerCase().includes(search.toLowerCase());
    const matchRegion =
      region === "All" ||
      state.region.toLowerCase().includes(region.toLowerCase());
    return matchSearch && matchRegion;
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #e3f2fd, #fff3e0)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#ffffffcc",
          padding: "30px 25px",
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "700px",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "28px",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          🇳🇬 Nigerian States Explorer
        </h2>

        <SearchBar search={search} setSearch={setSearch} />
        <RegionFilter region={region} setRegion={setRegion} />

        <div
          style={{
            flex: 1,
            overflowY: "auto",
            paddingRight: "5px",
            marginTop: "10px",
          }}
        >
          <StatesList states={filteredStates} />
        </div>

        <div style={{ textAlign: "center", color: "#555", marginTop: "10px" }}>
          <hr style={{ margin: "15px 0" }} />
          <p>
            Showing {filteredStates.length} of {states.length} states
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatesExplorer;
