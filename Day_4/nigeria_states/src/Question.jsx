import React from "react";

export default function Question({
  question,
  options,
  selected,
  onSelect,
  current,
  total,
}) {
  return (
    <div className="question-box">
      <h3>
        Question {current} of {total}
      </h3>
      <p className="question-text">{question}</p>

      <div className="options">
        {options.map((option, index) => (
          <label
            key={index}
            className={`option ${selected === option ? "selected" : ""}`}
          >
            <input
              type="radio"
              name="option"
              value={option}
              checked={selected === option}
              onChange={() => onSelect(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}
