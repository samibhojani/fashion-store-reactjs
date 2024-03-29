import React from "react";
import img from "../assets/img/collection.png";
const Collections = () => {
  return (
    <div  className="h-screen lg:h-[70vh] flex flex-col justify-center lg:flex-row items-center bg-PrimaryColor mt-14 lg:px-32 px-5">
      {/* img section */}
      <div>
        <img src={img} alt="" />
      </div>

      {/* content section */}
      <div className="w-full lg:w-2/4 space-y-4 pt-5 text-center lg:text-start">
        <h1 className="text-4xl font-semibold text-ExtraDarkColor">Best Winter Collection</h1>

        <h3 className="text-lg font-medium text-DarkColor">Sale Get up to 60% Off</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          laboriosam est temporibus, necessitatibus similique corrupti qui optio
          sapiente quod officiis!
        </p>

        <button className="bg-ExtraDarkColor text-white px-4 py-2 font-medium active:bg-amber-800">
            Shop Now!
        </button>
      </div>
    </div>
  );
};

export default Collections;
