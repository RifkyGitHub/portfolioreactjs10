
const HeroSection = () => {
  return (
    <>
      <section className="bg-black text-white pt-32 pb-20">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center px-6">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Halo nama ana
              <span className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
                {" "}Muhammad Rifky Himawan Widitama
              </span>
            </h1>
            <p className="text-gray-300 mb-6 max-w-lg mx-auto md:mx-0">
              Santri Pondok Tahfizh Plus IT Abudzar — menggabungkan hafalan
              Al-Qur'an dengan keterampilan teknologi untuk masa depan.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:brightness-95 transform hover:scale-105 transition duration-300">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  alt="Team Work"
  className="w-80 md:w-[400px] rounded-lg shadow-lg"
/>

            {/* "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" */}
          </div>
        </div>
      </section>

      <section className="bg-yellow-400 py-12 text-center">
        <h2 className="text-lg font-semibold mb-6 text-black">My Skills</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          {["Tahfizh", "IT", "Futsal", "Design"].map((skill) => (
            <div
              key={skill}
              className="bg-white px-6 py-3 rounded shadow font-semibold cursor-pointer transform hover:scale-110 hover:shadow-xl transition duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="py-20 bg-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4 text-black">
          Discover new business strategies
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Unlock the potential of your company with proven strategies that drive
          growth, improve efficiency, and help you stay ahead of the competition.
          Our team provides insights tailored to your industry so you can make
          smarter decisions and achieve long-term success.
        </p>
        <div className="flex justify-center">
          <button className="px-6 py-3 bg-black text-yellow-400 font-semibold rounded-lg shadow hover:bg-gray-800 transform hover:scale-105 transition duration-300">
            About Us
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
