import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-gray-100 p-6 sm:p-12 text-gray-900">
      <header className="text-center mb-10 flex flex-col items-center justify-center gap-5">
        <img src="/logo.png" className="w-36 h-36 rotate-[20deg]" />
        <h1 className="text-4xl font-bold text-Mocha">BYD Café News</h1>
        <p className="text-lg text-Mocha-light">October 2024 Edition</p>
      </header>

      <section className="bg-white p-6 rounded-lg shadow-lg mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-Mocha">
          NEW MENU ITEMS YOU MUST TRY!☕
        </h2>
        <p className="text-lg mb-4 text-Mocha-light">
          We’ve introduced fresh and exciting options, from seasonal lattes to
          delicious vegan snacks. Stop by today and let your taste buds
          explore!
        </p>
        <img
          className="w-full h-full object-cover rounded-lg"
          src="/banner.jpg"
          alt="New Menu"
        />
      </section>


      <section className="bg-Mocha-dark text-white p-6 rounded-lg shadow-lg mb-10 text-center">
        <h2 className="text-2xl font-bold mb-2">Special Offer: 20% Off Workspace Bookings</h2>
        <p className="text-lg mb-4">
          Use code <span className="font-semibold">BYD20</span> when booking online to get 20% off your workspace booking.
        </p>
        <p>Valid from October 15-17</p>
      </section>

      <section className="grid sm:grid-cols-2 gap-6 mb-10">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-Mocha">
            Freelancer Networking Event
          </h3>
          <p className="text-sm mb-2 text-Mocha-light">October 12th, 4:00 PM – 6:00 PM</p>
          <p className="text-lg">
            Come meet other freelancers and remote workers over a cup of coffee.
            Free Wi-Fi, great connections!
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-Mocha">
            Private Rooms Now Available for Booking
          </h3>
          <p className="text-lg mb-10">
            Looking for a quiet space to focus? Book our private rooms, perfect
            for meetings or deep work sessions.
          </p>
          <a href="https://byd-cafe.riaanjlagrange.com/bookings" className="px-5 py-2 bg-Mocha text-white hover:bg-Mocha-light transition-all rounded-sm">Book Now</a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-Mocha">Study Group Meet-Up</h3>
          <p className="text-sm mb-2 text-Mocha-light">October 25th, 3:00 PM</p>
          <p className="text-lg">
            Join fellow students in our dedicated workspace for an afternoon of
            study and collaboration.
          </p>
        </div>
      </section>

      <footer className="text-center text-gray-700">
        <p className="mb-4">Visit Us: Cleveland St, Boston, Cape Town, 7530</p>
        <p className="mb-2">Call: +27 71 616 4951</p>
        <p className="mb-4">Email: info@brewyourday.com</p>
        <div className="space-x-4">
          <a href="https://facebook.com/bydcafe">
            Facebook
          </a>
          <a href="https://instagram.com/bydcafe">
            Instagram
          </a>
          <a href="https://twitter.com/bydcafe">
            Twitter
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Newsletter;
