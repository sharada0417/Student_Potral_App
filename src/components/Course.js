import React from "react";
import Card from "./Card";
import "./Course.css";
import Footer from "./Footer";

function Course() {
  // Manually added course data
  const cards = [
    { courname: "IT", content: "Introduction to Information Technology", level: "Beginner", instructor: "John Doe", credits: 3, description: "Covers the basics of IT systems, software, and hardware." },
    { courname: "Computer Science", content: "Data Structures and Algorithms", level: "Intermediate", instructor: "Jane Smith", credits: 4, description: "Focuses on efficient algorithms and data organization." },
    { courname: "Engineering", content: "Engineering Fundamentals", level: "Advanced", instructor: "Michael Brown", credits: 2, description: "In-depth study of engineering principles and applications." },
    { courname: "Mathematics", content: "Linear Algebra", level: "Beginner", instructor: "Sarah Johnson", credits: 3, description: "Explores matrices, vectors, and linear transformations." },
    { courname: "Business", content: "Principles of Management", level: "Intermediate", instructor: "Robert Wilson", credits: 4, description: "Covers leadership and strategic management techniques." },
    { courname: "Design", content: "Graphic Design Basics", level: "Advanced", instructor: "Emily Davis", credits: 3, description: "An introduction to tools and techniques for graphic design." },
    { courname: "Physics", content: "Classical Mechanics", level: "Beginner", instructor: "James Anderson", credits: 2, description: "Covers Newton's laws and fundamental mechanics principles." },
    { courname: "Medicine", content: "Human Anatomy", level: "Intermediate", instructor: "Laura Martinez", credits: 4, description: "In-depth study of human body structures and functions." },
    { courname: "Psychology", content: "Introduction to Psychology", level: "Advanced", instructor: "Daniel White", credits: 5, description: "An overview of human behavior and mental processes." },
    { courname: "Environmental Science", content: "Sustainable Development", level: "Beginner", instructor: "Jessica Garcia", credits: 3, description: "Focuses on environmental challenges and sustainable solutions." },
    { courname: "Sociology", content: "Social Theories", level: "Intermediate", instructor: "Christopher Martinez", credits: 4, description: "Explores sociological perspectives and social behavior." },
    { courname: "Economics", content: "Microeconomics", level: "Advanced", instructor: "Sophia Lopez", credits: 5, description: "Covers demand, supply, and market equilibrium principles." },
    { courname: "History", content: "World History", level: "Beginner", instructor: "William Gonzalez", credits: 3, description: "An overview of global historical events and civilizations." },
    { courname: "Chemistry", content: "Organic Chemistry", level: "Intermediate", instructor: "Olivia Perez", credits: 4, description: "Focuses on organic compounds and chemical reactions." },
    { courname: "Nursing", content: "Fundamentals of Nursing", level: "Advanced", instructor: "Benjamin Hall", credits: 5, description: "Covers essential nursing practices and patient care." },
    { courname: "Astronomy", content: "Introduction to Astronomy", level: "Beginner", instructor: "Ava Adams", credits: 3, description: "Explores celestial objects and space phenomena." },
    { courname: "Linguistics", content: "Phonetics and Phonology", level: "Intermediate", instructor: "Ethan Hernandez", credits: 4, description: "Covers speech sounds and linguistic structures." }
  ];
  

  // Divide cards into left and right groups
  const leftCards = cards.slice(0, 10); // First 10 cards
  const rightCards = cards.slice(10, 20); // Last 10 cards

  return (
    <>
      <div className="full">
        <div className="left">
          <div className="cards-container">
          <h1 className="subtitles">Online Course</h1>
            {leftCards.map((card, index) => (
              <Card
                key={index}
                courname={card.courname}
                content={card.content}
                level={card.level}
                instructor={card.instructor}
                credits={card.credits}
                description={card.description}
              />
            ))}
          </div>
        </div>
        <div className="right">
          <div className="cards-container">
          <h1 className="subtitles">Physical Course</h1>
            {rightCards.map((card, index) => (
              <Card
                key={index}
                courname={card.courname}
                content={card.content}
                level={card.level}
                instructor={card.instructor}
                credits={card.credits}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="end">

      </div>
      <div className="endof">
        <Footer />
      </div>
    </>
  );
}

export default Course;
