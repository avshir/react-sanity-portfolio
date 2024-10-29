import React from "react";

import bgImg from "../assets/cat-3169476_1920.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={bgImg}
        alt="black cat"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8 ">
        <h1 className="text-6xl text-gray-200 font-bold cursive leading-none lg:leading-snug home-name">
          Hi! I'm Anna!
        </h1>
      </section>
    </main>
  );
}
