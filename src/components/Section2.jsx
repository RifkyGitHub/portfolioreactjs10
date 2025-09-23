
import laptop from "../assets/laptop.png";
import bussines from "../assets/bussines.png";
const Section2 = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center">
        <img src={laptop} alt="Work" className="rounded-lg shadow-lg" />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-yellow-500">
            We take our work seriously
          </h2>
          <p className="mb-6">
            Wasting time is not in our vocabulary. You can expect to get effective results in no time.
          </p>
          <a
            href="#"
            className="bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Bagian 2 */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left order-2 md:order-1">
          <h2 className="text-3xl font-bold mb-4 text-yellow-500">
            Grow your business fast
          </h2>
          <p className="mb-6">
            We understand how hard it is to grow a business. That’s why we’re here to do it for you.
          </p>
          <a
            href="#"
            className="bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Contact Us
          </a>
        </div>
        <img src={bussines} alt="Business" className="rounded-lg shadow-lg order-1 md:order-2" /> 
      </div>
    </section>
  );
};

export default Section2;
