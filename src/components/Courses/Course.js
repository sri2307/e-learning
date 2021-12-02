import React from "react";
import classes from "./Course.module.css";

const courseData = [
  {
    title: "React Js",
    author: "Srikanth",
    rating: 4,
    enrolled: 1000,
    price: 10000,
    discount: 25,
    image: "url",
  },
  {
    title: "React Js",
    author: "Srikanth",
    rating: 4,
    enrolled: 1000,
    price: 10000,
    discount: 25,
  },
  {
    title: "React Js",
    author: "Srikanth",
    rating: 4,
    enrolled: 1000,
    price: 10000,
    discount: 25,
  },
];

const Course = () => {
  return (
    <>
      {courseData.map((course) => (
        <div className={classes.card}>
          <h2>{course.title}</h2>
          <p>{course.author}</p>
          <div className={classes.rating}>
            <span>{course.rating}</span>
            <span>({course.enrolled})</span>
          </div>

          <h3>₹{course.price}</h3>
        </div>
      ))}
    </>
  );
};

export default Course;
