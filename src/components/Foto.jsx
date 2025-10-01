import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.jpg";
import foto3 from "../assets/foto3.jpg";
import foto4 from "../assets/foto4.jpg";

const Foto = () => {
  const photos = [foto1, foto2, foto3, foto4];
  const captions = [
    "Halaqah",
    "Halaqah",
    "Tasmi'",
    "Rihlah",
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Foto Bersama Teman
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transform transition duration-300 
            ${index === photos.length - 1 ? "md:col-span-3 md:w-1/3 mx-auto" : ""}`}
          >
            <img
              src={photo}
              alt={`Foto ${index + 1}`}
              className="w-full h-56 object-cover"
            />
            <div className="p-3 text-center">
              <p className="text-gray-700 font-medium">{captions[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foto;
