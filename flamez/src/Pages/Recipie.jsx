import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import RecipieCard from "../Components/RecipieCard";
import axios from 'axios';

const Recipie = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [searchData, setSearchData] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const handleDataSearch = async() => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchData}`
      );
      console.log(response.data);
      setSearchResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Navbar />
      <section className="w-full py-32 text-white gradient rounded-b-2xl">
        <div className="px-4 mx-auto container max-w-[1200px] flex flex-col-reverse items-center justify-between gap-14 md:flex-row">
          <div className="flex flex-col space-y-8 w-full md:w-1/2">
            <p className="text-2xl font-extrabold font-nunito lg:text-4xl">
              Search, See, Practice, Enjoy
            </p>
            <p className="opacity-70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              repellat beatae explicabo maxime dolores numquam in nihil totam
              unde quisquam officiis ratione, harum rerum impedit ut mollitia
              deleniti perspiciatis quasi.
            </p>
            <div className="flex w-full items-cente space-x-2">
              <input
                type="text"
                className="w-[90%] py-3 bg-[#ffffff20] text-white rounded-2xl px-5 focus:outline-none placeholder:text-[#ffffff90]"
                placeholder="Search for Recipe"
                value={searchData}
                onChange={(e) => setSearchData(e.target.value)}
              />
              <button
                onClick={handleDataSearch}
                className="bg-black px-4 py-3 rounded-2xl"
              >
                <IoSearchOutline className="text-2xl" />
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <MdOutlineRestaurantMenu className="text-8xl opacity-75" />
          </div>
        </div>
      </section>

      <section className="my-20">
        <div className="mx-auto container px-4 max-w-[1200px] flex flex-col space-y-10">
          <p className="text-2xl font-semibold opacity-85">Search Result</p>
          <div className="flex flex-col gap-x-10 gap-y-5 mx-auto flex-wrap sm:flex-row">
            {
              searchResult?.meals?.map((item, index) => (
                <RecipieCard
                  key={index}
                  {...item}
                />
              ))
            }
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Recipie;
