import React from "react";
import Navbar from "../Shared/Navbar";

function Blog() {
  return (
    <div>
      <Navbar />
      <div className=" container mx-auto px-9">
        <div className="qextion-1 py-12">
          <h1 className="font-bold text-left text-2xl">
            Q-1: Difference between javascript and nodejs?
          </h1>
          <article className="text-justify text-center py-4">
            JavaScript is a simple programming language that runs in any browser
            JavaScript Engine. Whereas Node JS is an interpreter or running
            environment for a JavaScript programming language that holds many
            excesses, it requires libraries that can easily be accessed from
            JavaScript programming for better use.
          </article>
        </div>
        <div className="qextion-2 py-12">
          <h1 className="font-bold text-left text-2xl">
            Q-2: When should you use nodejs and when should you use mongodb?
          </h1>
          <article className="text-justify text-center py-4">
            Node. js is a rapidly growing technology that has been overtaking
            the world of server-side programming with surprising speed. MongoDB
            is a technology that's revolutionizing database usage.
          </article>
        </div>
        <div className="qextion-3 py-12">
          <h1 className="font-bold text-left text-2xl">
            Q-3: Differences between sql and nosql databases?
          </h1>
          <article className="text-justify text-center py-4">
            SQL databases provide great benefits for transactional data whose
            structure doesn't change frequently (or at all) and where data
            integrity is paramount. It's also best for fast analytical queries.
            NoSQL databases provide much more flexibility and scalability,
          </article>
        </div>
      </div>
    </div>
  );
}

export default Blog;
