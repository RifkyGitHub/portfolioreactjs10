// import React from "react";
import cert1 from "../assets/Dicoding.png"; 
import cert2 from "../assets/Certificate.png";

const App = () => {
  return (
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-10">My Certificates</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[cert1, cert2].map((cert, i) => (
              <div
                key={i}
                className="border-4 border-yellow-400 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition"
              >
                <img src={cert} alt={`Certificate ${i + 1}`} className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default App;
