import React from "react";
import "./Card.css";

function Card({ courname, content, level, instructor, credits, description }) {
  return (
    <div className="card">
      <h3><b>{courname}</b></h3>
      <p><strong>Content:</strong>{content}</p>
      <p><strong>Level:</strong> {level}</p>
      <p><strong>Instructor:</strong> {instructor}</p>
      <p><strong>Credits:</strong> {credits}</p>
      <p><strong>Details:</strong>{description}</p>
    </div>
  );
}

export default Card;
