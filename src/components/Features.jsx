import React from "react";
import ProductCard from "../layouts/ProductCard";

const Features = () => {
  const data = [
    {
      id: 7,
      img: "src/assets/img/product4.jpg",
      name: "Nike Air",
      price: "198.00",
      discount: "20% off",
    },
    {
      id: 8,
      img: "src/assets/img/product1.jpg",
      name: "Kiabi Jumper",
      price: "300.00",
      discount: "10% off",
    },
    {
      id: 9,
      img: "src/assets/img/product2.jpg",
      name: "Laptop Bag",
      price: "399.00",
      discount: "40% off",
    },
    {
      id: 10,
      img: "src/assets/img/product3.jpg",
      name: "Gucci Purse",
      price: "3000.00",
      discount: "25% off",
    },
    {
      id: 11,
      img: "src/assets/img/product5.jpg",
      name: "Women Heels",
      price: "999.00",
      discount: "15% off",
    },
    {
      id: 12,
      img: "src/assets/img/product6.jpg",
      name: "Faded Denim Jeans",
      price: "1699.00",
      discount: "12% off",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center pt-24">
      {/* heading section */}
      <h1 className="font-semibold text-4xl text-center text-ExtraDarkColor">
        Exclusive Products
      </h1>

      {/* card section */}
      <div className="flex flex-wrap justify-center gap-5 pt-8">
        {data.map((item) => (
          <div className="md:w-2/4 lg:w-1/4">
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              discount={item.discount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
