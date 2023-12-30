import React from 'react'
import ProductCard from '../layouts/ProductCard'


const Products = () => {

    const data = [
        {
            id: 13,
            img: "src/assets/img/product4.jpg",
            name: "Nike Air",
            price: "198.00",
            discount: "20% off",
          },
          {
            id: 14,
            img: "src/assets/img/product1.jpg",
            name: "Kiabi Jumper",
            price: "300.00",
            discount: "10% off",
          },
          {
            id: 15,
            img: "src/assets/img/product2.jpg",
            name: "Laptop Bag",
            price: "399.00",
            discount: "40% off",
          },
          {
            id: 16,
            img: "src/assets/img/product3.jpg",
            name: "Gucci Purse",
            price: "3000.00",
            discount: "25% off",
          },
          {
            id: 17,
            img: "src/assets/img/product5.jpg",
            name: "Women Heels",
            price: "999.00",
            discount: "15% off",
          },
          {
            id: 18,
            img: "src/assets/img/product6.jpg",
            name: "Faded Denim Jeans",
            price: "1699.00",
            discount: "12% off",
          },
    ]


  return (
    <div className='min-h-screen flex flex-col justify-center px-5 pt-24 lg:pt-16 bg-PrimaryColor'>
        {/* heading section */}

        <h1 className='font-semibold text-4xl text-center text-ExtraDarkColor '>New Arrivals</h1>

        {/* cards section */}
        <div className='flex flex-wrap justify-center gap-5 pt-8'>
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
      </div>

    </div>
  )
}

export default Products