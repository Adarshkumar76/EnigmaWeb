import React from "react";

const galleryImages = [
  "/gallery-1.jpg",
  "/gallery-2.jpg",
  "/gallery-4.jpg",
  "/gallery-3.jpg",
  "/gallery-5.jpg",
  "/gallery-3.jpg",
];

const MainGallery = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-blue-700 drop-shadow-md">
          OUR GALLERY
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Memories from our latest events and Workshops
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md group"
            >
              <img
                src={src}
                alt={`image ${index + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainGallery;
