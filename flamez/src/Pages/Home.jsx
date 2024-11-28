import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Assets/Images/Assorted meat.webp";
import CategoriesCard from "../Components/CategoriesCard";
import RecipieCard from "../Components/RecipieCard";
import Footer from "../Components/Footer";
import axios from "axios";

const Home = () => {
  const [recipeCategory, setRecipeCategory] = useState([]);
  const [popularRecipe, setPopularRecipe] = useState([]);
  const [displayedItems, setDisplayedItems] = useState(6);

  const loadMore = () => setDisplayedItems((prev) => prev + 6);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        console.log(response.data.categories);
        setRecipeCategory(response.data.categories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    const fetchPopularData = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
        );
        console.log({ popularData: response.data.meals });
        setPopularRecipe(response.data.meals);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPopularData();
  }, []);

  return (
    <>
      <Navbar />
      <section className="gradient pt-10 px-4 md:py-24 z-0 h-auto">
        <div className="mx-auto container py-10 px-4 md:px-10 lg:px-4 max-w-[1200px] flex flex-col lg:flex-row gap-12 lg:items-center">
          <div className="flex pt-14 text-white flex-col space-y-10 w-full lg:w-1/2">
            <p className="text-3xl lg:text-5xl font-poppins font-semibold">
              Explore Your Culinary Horizon
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              autem, placeat saepe nobis sunt molestias corporis maiores
              praesentium, magnam sequi, veritatis cupiditate voluptatum. Unde,
              assumenda consequuntur.
            </p>
            <button className="bg-black w-56 py-2 rounded-xl hover:scale-105 transition-all duration-700 ease-in-out">
              Explore Now
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src={Banner}
              alt=""
              className="rounded-[360px] object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* Categories Section Start */}
      <section className="pt-20 pb-10" id="about">
        <div className="flex flex-col space-y-5 mx-auto container px-4 md:px-10 lg:px-4 max-w-[1200px] my-20">
          <p className="text-3xl font-poppins font-semibold opacity-85">
            Explore Our Categories
          </p>
          <p className="opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            quibusdam vitae quasi eius dolorum temporibus sequi corrupti tempore
            natus magnam
          </p>
          <div className="flex flex-col flex-wrap gap-x-20 gap-y-5 sm:flex-row">
            {recipeCategory.slice(0, displayedItems).map((item, index) => (
              <CategoriesCard key={index} {...item} />
            ))}
          </div>
          {displayedItems < recipeCategory.length && (
            <button
              onClick={loadMore}
              className="bg-black text-white w-56 py-2 rounded-xl hover:scale-105 transition-all duration-700 ease-in-out"
            >
              View More
            </button>
          )}
        </div>
      </section>
      {/* Categories Section End */}

      {/* Popular Section Start */}
      <section className="my-20 z-0" id="category">
        <div className="mx-auto container px-4 max-w-[1200px] flex flex-col space-y-5">
          <p className="text-3xl font-poppins font-semibold opacity-85">
            Popular Recipe
          </p>
        </div>
        <div className="max-w-[1200px] px-6 flex flex-col gap-x-10 gap-y-5 mx-auto sm:flex-row">
          {popularRecipe.map((item, index) => (
            <RecipieCard key={index} {...item} />
          ))}
        </div>
      </section>
      {/* Popular Section End */}

      {/* Banner Section Start */}
      <div>
        <div className="flex w-full h-[40vh]">
          <img
            src="https://i.ytimg.com/vi/iQ38VKAjQgo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBYeSca3xOzPVWec6G-I6XqaZ8z4Q"
            alt=""
            className="w-full object-cover h-full "
          />
          <div className="w-full bg-[#00000090] h-[40vh] absolute">
            <div className="flex flex-col h-full pb-6 justify-end px-4 mx-auto container max-w-[1200px]"></div>
          </div>
        </div>
      </div>
      {/* Banner Section End */}

      <Footer />
    </>
  );
};

export default Home;
