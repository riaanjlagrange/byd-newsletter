function News() {
  const newslist = [
    { }
  ]

  return (
    <div className="flex flex-col justify-center items-center gap-10 mb-10">
      <div className="flex flex-col justify-center items-center gap-5 w-[800px]">
        <h1 className="uppercase text-2xl font-bold text-Mocha text-center">New Menu Items You Must Try!☕</h1>
        <p  className="text-Mocha-light font-medium text-lg text-center">
          We've Introduced fresh and exciting options, from seasonal lattes to delicious vegan snacks. Stop by toady and let your taste buds explore!
        </p>
      </div>
      <div className="flex gap-5 items-center">
        <div className="flex1 w-72 bg-Mocha-lighter rounded-md h-96 overflow-hidden">
          <img src="/events/latte-art.jpg" />
          <div className="px-5 py-2">
            <h2 className="font-bold text-white text-lg mb-5">Latte Art Workshop</h2>
            <p className="text-white mb-5">Learn how to make beautiful latte art with our expert baristas</p>
            <p className="italic text-white">October 10, 2024</p>
            <p className="italic text-white">10:00 AM - 12:00 PM</p>
          </div>
        </div>
        <div className="flex1 w-72 bg-Mocha-lighter rounded-md overflow-hidden h-96">
          <img src="/events/brewing.jpg" />
          <div className="px-5 py-2">
            <h2 className="font-bold text-white text-lg mb-5">Coffee Tasting</h2>
            <p className="text-white mb-5">20% off for all students! Taste the best coffee in Bellville</p>
            <p className="italic text-white">October 15, 2024</p>
            <p className="italic text-white">2:00 PM - 4:00 PM</p>
          </div>
        </div>
        <div className="flex1 w-72 bg-Mocha-lighter rounded-md overflow-hidden h-96">
          <img src="/events/open-mic.jpg" />
          <div className="px-5 py-2">
            <h2 className="font-bold text-white text-lg mb-5">Open Mic Night</h2>
            <p className="text-white mb-5">Join us for an evening of music and poetry</p>
            <p className="italic text-white">October 20, 2024</p>
            <p className="italic text-white">6:00 PM - 8:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default News;
