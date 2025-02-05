import React from 'react';
import Slider from 'react-slick';
// import Slider from "react-slick";

const eventItems = [
  { title: 'Family Reunion 2025', date: 'March 15, 2025', description: 'Join us for a grand reunion in Lagos.' },
  { title: 'Anniversary Celebration', date: 'July 20, 2025', description: 'Celebrating 50 years of togetherness.' },
  { title: 'Christmas Gathering', date: 'December 24, 2025', description: 'A joyful holiday event for the whole family.' }
];

export const FamilyEvents = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className="events bg-green-50 py-12  p-[2%]" id="events">
      <h2 className="text-3xl font-semibold text-black mb-6">Family Events</h2>
      <Slider {...settings}>
        {eventItems.map((event, index) => (
          <div key={index} className="p-4 bg-white rounded shadow-lg">
            <h3 className="text-xl font-bold text-green-700 mb-2">{event.title}</h3>
            <p className="text-sm text-gray-600 mb-1">{event.date}</p>
            <p className="text-gray-700">{event.description}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FamilyEvents