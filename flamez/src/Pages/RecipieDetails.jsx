import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { FaYoutube } from "react-icons/fa";
import Footer from "../Components/Footer";
import { useQuery } from "@tanstack/react-query";
import { fetchRecipeData } from "../Services/Api";

const RecipieDetails = () => {
  const { id } = useParams();
  // console.log("id", id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    data: recipeDetails,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recipeDetails"],
    queryFn: () => fetchRecipeData(id),
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
  });

  // console.log("recipeDetails", recipeDetails);

  if (error) {
    return (
      <div>
        <Navbar />
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary">
            {" "}
          </div>
          <p className="text-2xl font-semibold mt-6 text-red-700">
            Something went wrong
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary">
            {" "}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      {/* Banner Section Starts */}
      <div className="flex w-full h-[40vh]">
        <img
          src={recipeDetails[0]?.strMealThumb}
          alt=""
          className="w-full object-cover h-full "
        />
        <div className="w-full bg-[#00000090] h-[40vh] absolute">
          <div className="flex flex-col h-full pb-6 justify-end px-4 mx-auto container max-w-[1200px]">
            <p className="text-white text-3xl uppercase font-nunito font-extrabold lg:text-4xl">
              {recipeDetails[0]?.strMeal}
            </p>
          </div>
        </div>
      </div>
      {/* Banner Section Ends  */}
      <section className="my-10">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="flex flex-col space-y-5">
            {/* Meal Title */}
            <p className="text-2xl font-nunito uppercase font-extrabold opacity-85">
              {recipeDetails?.[0]?.strMeal || "Loading..."}
            </p>

            {/* Meal Instructions */}
            <p className="opacity-70">
              {recipeDetails?.[0]?.strInstructions ||
                "No instructions available."}
            </p>

            {/* Image & YouTube Link */}
            <div className="flex items-center space-x-4">
              {recipeDetails?.[0]?.strMealThumb && (
                <img
                  src={recipeDetails[0].strMealThumb}
                  alt={recipeDetails[0].strMeal}
                  className="w-24 h-24 object-cover rounded-xl"
                />
              )}
              {recipeDetails?.[0]?.strYoutube && (
                <a
                  href={recipeDetails[0].strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-3 bg-primary rounded-2xl w-56 flex justify-center items-center space-x-4"
                >
                  <FaYoutube className="text-2xl text-white" />
                  <p className="text-white">Watch Video</p>
                </a>
              )}
            </div>

            {/* Ingredients List */}
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col space-y-5 pt-10">
                <p className="text-xl font-nunito font-extrabold opacity-85">
                  INGREDIENTS
                </p>
                <ul className="list-disc pl-5 space-y-2 opacity-70">
                  {Array.from({ length: 20 }).map((_, index) => {
                    const ingredient =
                      recipeDetails?.[0]?.[`strIngredient${index + 1}`];
                    const measure =
                      recipeDetails?.[0]?.[`strMeasure${index + 1}`];

                    return ingredient ? (
                      <li key={index}>
                        {ingredient} ({measure})
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default RecipieDetails;
