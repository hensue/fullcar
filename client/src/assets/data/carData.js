// import all images from assets/images directory
import img01 from "../../assets/car/1.png";
import img02 from "../../assets/car/2.png";
import img03 from "../../assets/car/13.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    id: 1,
    brand: "Ford",
    rating: 112,
    carName: "Ford Fiesta",
    imgUrl: img01,
    model: "Head Curtain Air Bags",
    price: 90,
    speed: "Alloy Wheels",
    gps: "Fog Lights",
    seatType: "Heated seats",
    automatic: "Power Door Locks and Perimeter Alam System",
    description:
      "Our 2019 Ford Fiesta is the perfect rental car for anyone in need of a reliable and fun vehicle. This car is always well-naintained and has a clean title, so you can feel confident hitting the road. It's perfect for friving around town or taking a road trip, with plenty of space in the back for your luggage or gear. We take pride in providing our customers with a top-notch car rental experience, and our 2019 Ford Fiesta is sure to exceed your expectations.",
  },
  {
    id: 2,
    brand: "Ford",
    rating: 112,
    carName: "Ford Fiesta",
    imgUrl: img02,
    model: "Head Curtain Air Bags",
    price: 90,
    speed: "Alloy Wheels",
    gps: "Fog Lights",
    seatType: "Heated seats",
    automatic: "Power Door Locks and Perimeter Alam System",
    description:
      "Our 2019 Ford Fiesta is the perfect rental car for anyone in need of a reliable and fun vehicle. This car is always well-naintained and has a clean title, so you can feel confident hitting the road. It's perfect for friving around town or taking a road trip, with plenty of space in the back for your luggage or gear. We take pride in providing our customers with a top-notch car rental experience, and our 2019 Ford Fiesta is sure to exceed your expectations.",
  },
  {
    id: 3,
    brand: "Ford",
    rating: 112,
    carName: "Ford Fiesta",
    imgUrl: img03,
    model: "Head Curtain Air Bags",
    price: 90,
    speed: "Alloy Wheels",
    gps: "Fog Lights",
    seatType: "Heated seats",
    automatic: "Power Door Locks and Perimeter Alam System",
    description:
      "Our 2019 Ford Fiesta is the perfect rental car for anyone in need of a reliable and fun vehicle. This car is always well-naintained and has a clean title, so you can feel confident hitting the road. It's perfect for friving around town or taking a road trip, with plenty of space in the back for your luggage or gear. We take pride in providing our customers with a top-notch car rental experience, and our 2019 Ford Fiesta is sure to exceed your expectations.",
  },

  // {
  //   id: 2,
  //   brand: "Toyota",
  //   rating: 102,
  //   carName: "Toyota Aventador",
  //   imgUrl: img02,
  //   model: "Model-2022",
  //   price: 50,
  //   speed: "20kmpl",
  //   gps: "GPS Navigation",
  //   seatType: "Heated seats",
  //   automatic: "Automatic",
  //   description:
  //     " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  // },

  // {
  //   id: 3,
  //   brand: "BMW",
  //   rating: 132,
  //   carName: "BMW X3",
  //   imgUrl: img03,
  //   model: "Model-2022",
  //   price: 65,
  //   speed: "20kmpl",
  //   gps: "GPS Navigation",
  //   seatType: "Heated seats",
  //   automatic: "Automatic",
  //   description:
  //     " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  // },

  // {
  //   id: 4,
  //   brand: "Nissan",
  //   rating: 102,
  //   carName: "Nissan Mercielago",
  //   imgUrl: img04,
  //   model: "Model-2022",
  //   price: 70,
  //   speed: "20kmpl",
  //   gps: "GPS Navigation",
  //   seatType: "Heated seats",
  //   automatic: "Automatic",
  //   description:
  //     " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  // },

  // {
  //   id: 5,
  //   brand: "Ferrari",
  //   rating: 94,
  //   carName: "Ferrari Camry",
  //   imgUrl: img05,
  //   model: "Model-2022",
  //   price: 45,
  //   speed: "20kmpl",
  //   gps: "GPS Navigation",
  //   seatType: "Heated seats",
  //   automatic: "Automatic",
  //   description:
  //     " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  // },

  // {
  //   id: 6,
  //   brand: "Mercedes",
  //   rating: 119,
  //   carName: "Mercedes Benz XC90",
  //   imgUrl: img06,
  //   model: "Model-2022",
  //   price: 85,
  //   speed: "20kmpl",
  //   gps: "GPS Navigation",
  //   seatType: "Heated seats",
  //   automatic: "Automatic",
  //   description:
  //     " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  // },

  // {
  //   id: 7,
  //   brand: "Audi",
  //   rating: 82,
  //   carName: "Audi Fiesta",
  //   imgUrl: img07,
  //   model: "Model 3",
  //   price: 50,
  //   speed: "20kmpl",
  //   gps: "GPS Navigation",
  //   seatType: "Heated seats",
  //   automatic: "Automatic",
  //   description:
  //     " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  // },

  // {
  //   id: 8,
  //   brand: "Colorado",
  //   rating: 52,
  //   carName: "Rolls Royce Colorado",
  //   imgUrl: img08,
  //   model: "Model 3",
  //   price: 50,
  //   speed: "20kmpl",
  //   gps: "GPS Navigation",
  //   seatType: "Heated seats",
  //   automatic: "Automatic",
  //   description:
  //     " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  // },
];

export default carData;
