const Section3 = () => {
  return (
    <section className="bg-yellow-500 text-black py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="uppercase tracking-wide mb-2">Testimonials</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Read what others say about us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white text-black p-6 rounded-lg shadow-md">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              alt="Ron Williams"
            />
            <h4 className="font-bold">Ron Williams</h4>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md">
            <img
              src="https://randomuser.me/api/portraits/women/45.jpg"
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              alt="Anna Phils"
            />
            <h4 className="font-bold">Anna Phils</h4>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md">
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              alt="Mary Madison"
            />
            <h4 className="font-bold">Mary Madison</h4>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section3;
