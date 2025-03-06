import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import RecipieCard from "../Components/RecipieCard";
import { useQuery } from "@tanstack/react-query";
import { handleDataSearch } from "../Services/Api";

const Recipie = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchQuery, setSearchQuery] = useState(""); // ✅ Fix: Track search input

  // Fetch data using React Query
  const { data: searchData, isLoading, error, refetch } = useQuery({
    queryKey: ["searchData", searchQuery], 
    queryFn: () => handleDataSearch(searchQuery),
    enabled: false, // ✅ Prevent auto-fetching on mount
    refetchInterval: 30000,
    refetchIntervalInBackground: true,
  });

  // Handle search submission
  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      refetch(); // ✅ Trigger fetch when search button is clicked
    }
  };

  if (error) {
    return (
      <div>
        <Navbar />
        <div className="flex justify-center items-center">
          <p className="text-red-500">Error: {error.message}</p>
        </div>
        <Footer />
      </div>
    );
  }

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
              Discover thousands of recipes, cook delicious meals, and enjoy
              homemade food like never before!
            </p>
            <div className="flex w-full items-center space-x-2">
              <input
                type="text"
                className="w-[90%] py-3 bg-[#ffffff20] text-white rounded-2xl px-5 focus:outline-none placeholder:text-[#ffffff90]"
                placeholder="Search for Recipe"
                value={searchQuery} // ✅ Controlled input
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                onClick={handleSearch} // ✅ Correct function
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

      {/* Search Results */}
      <section className="my-20">
        <div className="mx-auto container px-4 max-w-[1200px] flex flex-col space-y-10">
          <p className="text-2xl font-semibold opacity-85">Search Result</p>
          {isLoading ? (
            <div className="flex flex-col justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"> </div>
            <p className="text-2xl font-semibold mt-6 text-red-700">Loading...</p>
          </div>
          ) : searchData?.meals?.length > 0 ? (
            <div className="flex flex-col gap-x-10 gap-y-5 mx-auto flex-wrap sm:flex-row">
              {searchData?.meals?.map((item, index) => (
                <RecipieCard key={index} {...item} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No recipes found.</p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Recipie;
