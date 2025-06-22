import React from "react";

const Home = () => {
  return (
    <div className="container py-5">
      <div className="text-center">
        <h1 className="display-4">Welcome to Our Simple Website</h1>
        <p className="lead mt-4">
          This is a basic and functional example of a ReactJS home page.
        </p>
        <hr className="my-4" />
        <p>
          It uses Bootstrap for styling and demonstrates how you can create a
          clean and responsive layout quickly.
        </p>
        <a
          className="btn btn-primary btn-lg mt-3"
          href="#"
          role="button"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Home;
