import React from "react";
import ProductCard from "../layouts/ProductCard";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




const Shop = () => {
  const data = [
    {
      id: 0,
      img: "src/assets/img/product4.jpg",
      name: "Nike Air",
      price: "198.00",
      discount: "20% off",
    },
    {
      id: 1,
      img: "src/assets/img/product1.jpg",
      name: "Kiabi Jumper",
      price: "300.00",
      discount: "10% off",
    },
    {
      id: 2,
      img: "src/assets/img/product2.jpg",
      name: "Laptop Bag",
      price: "399.00",
      discount: "40% off",
    },
    {
      id: 3,
      img: "src/assets/img/product3.jpg",
      name: "Gucci Purse",
      price: "3000.00",
      discount: "25% off",
    },
    {
      id: 4,
      img: "src/assets/img/product5.jpg",
      name: "Women Heels",
      price: "999.00",
      discount: "15% off",
    },
    {
      id: 5,
      img: "src/assets/img/product6.jpg",
      name: "Faded Denim Jeans",
      price: "1699.00",
      discount: "12% off",
    },
    {
      id: 6,
      img: "src/assets/img/product7.jpg",
      name: "Mariano di Viao - two shade Shirt",
      price: "450.00",
      discount: "5% off",
    }
];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1023,
                setting: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                setting: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                setting: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
        ],
      };


  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-14">
      {/* heading section */}

      <div>
        <h1 className="font-semibold text-4xl text-center text-ExtraDarkColor">
          Best Seller
        </h1>
      </div>

      {/* carousel section */}

      <div className="mt-8">
        <Slider {...settings}>
        {data.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            discount={item.discount}
          />
        ))}
        </Slider>
      </div>
    </div>
  );
};

export default Shop;
