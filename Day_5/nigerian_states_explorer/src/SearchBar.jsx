import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="🔍 Search by state or capital..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        width: "100%",
        padding: "10px",
        fontSize: "16px",
        borderRadius: "10px",
        border: "1px solid #ccc",
        marginBottom: "15px",
        outline: "none",
      }}
    />
  );
};

export default SearchBar;
