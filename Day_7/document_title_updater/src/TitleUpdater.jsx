import React, { useState, useEffect } from "react";

function TitleUpdater() {
  const defaultTitle = "React App";
  const [customTitle, setCustomTitle] = useState("");
  const [title, setTitle] = useState(defaultTitle);

  // Update browser tab title dynamically
  useEffect(() => {
    document.title = title;
  }, [title]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= 60) {
      setCustomTitle(value);
      setTitle(value ? `React App - ${value}` : defaultTitle);
    }
  };

  const handleReset = () => {
    setCustomTitle("");
    setTitle(defaultTitle);
  };

  return (
    <div className="title-updater">
      <h1>📝 Document Title Updater</h1>

      <label htmlFor="title-input">Custom Title:</label>
      <input
        id="title-input"
        type="text"
        placeholder="Type here..."
        value={customTitle}
        onChange={handleChange}
      />

      <div className="counter">
        {customTitle.length}/60 characters
      </div>

      <p className="preview">
        Preview: <span>"{title}"</span>
      </p>

      <button onClick={handleReset}>Reset to Default</button>
    </div>
  );
}

export default TitleUpdater;
