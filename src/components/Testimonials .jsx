import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Ahmed",
      position: "CEO, AponTech",
      review: "Working with your agency has been a transformative experience. The team is highly skilled and truly understands our needs.",
      rating: 5,
    },
    {
      name: "James Smith",
      position: "Founder, QuickPOS",
      review: "The POS solution they delivered was fast, stable, and beautifully designed. Support has also been fantastic.",
      rating: 4,
    },
    {
      name: "Nusrat Jahan",
      position: "Marketing Head, UrbanLook",
      review: "Their creative ideas and technical excellence really made our app stand out. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto bg-gradient-to-b from-blue-100 to-blue-200 py-20 px-5">
      <div className=" text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">
          What Our <span className="text-blue-600">Clients Say</span>
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 text-left">
              <div className="mb-4 flex text-yellow-400">
                {Array(r.rating).fill().map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">“{r.review}”</p>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{r.name}</h4>
                <p className="text-sm text-gray-500">{r.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
