import React from "react"
import { useState } from "react"
import { CiSearch } from "react-icons/ci";



const cars = [
  {name: "Toyota Avalon", price: 23456,  image: "https://d3ogcz7gf2u1oh.cloudfront.net/dealers/1000islands/assets/cc_2018toc010002_01_640_03r0.png", desc: "The Toyota Avalon is a full-size sedan that offers a comfortable and spacious interior, a smooth ride, and a powerful V6 engine. It is known for its reliability and safety features, making it a popular choice for families and commuters alike. It is known for comfort.", Status: "Available"},
  {name: "Toyota Camry", price: 23456,  image: "https://d3ogcz7gf2u1oh.cloudfront.net/dealers/1000islands/assets/2019camry.png", desc: "The Toyota Camry is a compact sedan that offers a comfortable ride, good fuel economy, and a range of safety features. It is known for its reliability and low maintenance costs. The 2026 Toyota Camry is a highly efficient midsize sedan.", Status: "Available"},
  {name: "Toyota Corolla", price: 23456,  image: "https://d3ogcz7gf2u1oh.cloudfront.net/dealers/1000islands/assets/2020corolla.png", desc: "The Toyota Corolla is a compact car that offers excellent fuel efficiency, a comfortable ride, and a reputation for reliability. It is a popular choice for daily commuting and family transportation. It is Known for reliability and with great efficiency in an affordable price", Status: "Available"},
  {name: "Toyota Prius", price: 23456, image: "https://d3ogcz7gf2u1oh.cloudfront.net/dealers/1000islands/assets/2019prius.png", desc: "The Toyota Prius is a hybrid sedan that offers exceptional fuel economy and a commitment to environmental responsibility. It combines the comfort of a sedan with the efficiency of a hybrid powertrain.", Status: "Sold Out"},
  {name: "Toyota Tacoma", price: 23456, image: "https://d3ogcz7gf2u1oh.cloudfront.net/dealers/1000islands/assets/2019tacoma.png", desc: "The Toyota Tacoma is a compact pickup truck that offers a balance of capability and comfort. It features a robust build quality and reliable performance in various driving conditions. It is one of the friendly driving experience", Status: "Available"},
  {name: "Toyota Tundra", price: 23456, image: "https://d3ogcz7gf2u1oh.cloudfront.net/dealers/1000islands/assets/2019tundra.png", desc: "The Toyota Tundra is a full-size pickup truck that delivers powerful performance and rugged durability. It offers ample cargo space and advanced technology features. It is known for high resale value and reliability", Status: "Available"},
  {name: "Toyota RAV4", price: 23456, image: "https://d3ogcz7gf2u1oh.cloudfront.net/dealers/1000islands/assets/2019rav4.png", desc: "The Toyota RAV4 is a compact SUV that provides versatility and reliability. It features a spacious interior, good fuel economy, and strong safety ratings.", Status: "Available"},
  {name: "Toyota Highlander", price: 23456, image: "https://d3ogcz7gf2u1oh.cloudfront.net/dealers/1000islands/assets/2019highlander.png", desc: "The Toyota Highlander is a midsize SUV that combines comfort with capability. It offers seating for up to eight passengers and includes advanced safety features.", Status: "Reserved"},
  {name: "Toyota Sienna", price: 23456, image: "https://d3ogcz7gf2u1oh.cloudfront.net/dealers/1000islands/assets/2019sienna.png", desc: "The Toyota Sienna is a spacious minivan designed for families. It provides comfortable seating for up to eight passengers and includes modern technology features.", Status: "Available"},
  {name: "Toyota C-HR", price: 23894, image: "https://d3ogcz7gf2u1oh.cloudfront.net/dealers/1000islands/assets/2019chr.png", desc: "The Toyota C-HR is a compact crossover SUV built for style-conscious drivers seeking a sporty and efficient ride. It features a bold coupe-like design and reliable hybrid performance. A great choice to stand out.", Status: "Available"},
  {name: "Toyota 4Runner", price: 23456, image: "https://d3ogcz7gf2u1oh.cloudfront.net/dealers/1000islands/assets/20194runner2.png", desc: "The Toyota 4Runner is a rugged midsize SUV built for both everyday driving and off-road adventure. It features a powerful engine, legendary reliability. A better choice to buy in reliability and efficiency and at affordable prices, ", Status: "Available"},
  {name: "Toyota Yaris", price: 16789, image: "https://d3ogcz7gf2u1oh.cloudfront.net/dealers/1000islands/assets/2019yaris.png", desc: "The Toyota Yaris is a subcompact car that offers outstanding fuel efficiency and easy maneuverability in urban environments. It features a stylish design, modern safety features, and a surprisingly spacious interior.", Status: "Available"},

]
  const statusStyle = {
  Available: "bg-green-100 text-green-700",
  Sold:      "bg-red-100 text-red-700",
  Reserved:  "bg-yellow-100 text-yellow-700",
  Coming_soon: "bg-blue-100 text-blue-700"
}


const Marketplace = () => {

  const [searchCar, setSearchCar] = useState("")

  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(searchCar.toLowerCase()))

  return (
    <div>
      <div className="bg-blue-900 text-white p-6 rounded-2xl">
        <h1 className="text-2xl font-bold">Marketplace 🚗</h1>
        <p className="text-sm mt-2">Browse available Toyota vehicles</p>
      </div>

      <div>
        <input
          type="search"
          placeholder={<CiSearch /> + "Search for cars......"}
          value={searchCar}
          onChange={(e) => setSearchCar(e.target.value)}
          className="w-[80%] p-2 border border-blue-900 rounded mt-4 items-center bg-blue-900 text-white placeholder:text-white mx-auto block"
        />
      </div>

      <div className="grid grid-cols-3 gap-6 mt-6">
        {filteredCars.map((car, index) => (
          <div key={index} className="bg-white border-2 border-emerald-500 rounded-2xl overflow-hidden cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <div>
              <img src={car.image} alt={car.name} className="w-full h-[70%] object-cover bg-black" />
              <div className="p-2 pb-[0] bg-blue-900">
                <h2 className="text-emerald-300 font-semibold text-[15px] text-center">{car.name}</h2>
                <p className="text-white mx-[20px] text-center">{car.desc}</p>
                <p className="text-xl font-bold text-green-500 mt-2 text-center">${car.price.toLocaleString()}</p>
                <button className="mt-4 w-full bg-emerald-500 mb-[20px] text-white py-2 rounded-xl hover:bg-emerald-600 transition duration-300">
                View Details
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Marketplace