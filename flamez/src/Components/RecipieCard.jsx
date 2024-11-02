import React from 'react'
import Banner3 from '../Assets/Images/Banner-3.jpg';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ImArrowRight } from "react-icons/im";



const RecipieCard = ({strMeal, strMealThumb, idMeal}) => {
  return (
    <>
      <div className="pb-6 w-full lg:w-72 mt-10 rounded-t-2xl shadow-md  hover:shadow-xl">
        <img
          src={strMealThumb}
          alt=""
          className="w-full h-[50%] object-cover rounded-t-2xl"
        />
        <div className="flex flex-col space-y-3 w-[80%] mx-auto mt-4">
          <p className="text-xl font-semibold">{strMeal}</p>
          {/* <p className="text-sm">₦</p> */}
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center space-x-2">
              <FaStar className="text-xl text-[red]" />
              <p className="text-sm opacity-70">4.7</p>
            </div>
            <Link
              to={`/recipie/${idMeal}`}
              className="bg-primary px-4 py-2 rounded-lg flex justify-center text-white items-center"
            >
              <ImArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipieCard