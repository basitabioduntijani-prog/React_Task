import React, { useState } from "react";
import "./NameTag.css";

const NameTag = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");

  const handleDownload = () => {
    if (!name && !title && !company) {
      alert("Please fill in your details before downloading!");
      return;
    }

    const formattedTag = `
--- NAME TAG ---
Hello, my name is
${name.toUpperCase()}
${title}
${company}
    `;
    alert(formattedTag);
  };

  return (
    <div className="name-tag-container">
      <h2>Name Tag Generator</h2>

      <div className="inputs">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your job title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div className="tag-preview">
        <h3>--- NAME TAG ---</h3>
        <p className="greeting">Hello, my name is</p>
        <h2 className="name">{name || "Your Name Here"}</h2>
        <p className="title">{title || "Your Job Title"}</p>
        <p className="company">{company || "Your Company"}</p>
      </div>

      <button className="download-btn" onClick={handleDownload}>
        Download
      </button>
    </div>
  );
};

export default NameTag;
