import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import Footer from "../Components/Footer";
import axios from "axios";

const RecipieDetails = () => {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchRecipeData = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        console.log({ RecipeData: response.data.meals });
        setRecipeDetails(response.data.meals);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipeData();
  }, []);

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
            <p className="text-2xl font-nunito uppercase font-extrabold opacity-85">
              {recipeDetails[0]?.strMeal}
            </p>
            <p className="opacity-70">{recipeDetails[0]?.strInstructions}</p>
            <div className="flex items-center space-x-4">
              <img
                src={recipeDetails[0]?.strMealThumb}
                alt=""
                className="w-24 object-cover h-24 rounded-xl "
              />
              <a
                href={recipeDetails[0]?.strYoutube}
                className="px-10 py-3 bg-primary rounded-2xl w-56 flex justify-center items-center space-x-4"
              >
                <FaYoutube className="text-2xl text-white" />
                <p className="text-white">Watch Video</p>
              </a>
            </div>

            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col space-y-5 pt-10">
                <p className="text-xl font-nunito font-extrabold opacity-85">
                  INGREDIENTS
                </p>
                <ul className="list-disc pl-5 space-y-2 opacity-70">
                  <li>
                    {recipeDetails[0]?.strIngredient1 &&
                      recipeDetails[0]?.strIngredient1}
                    (
                    {recipeDetails[0]?.strMeasure1 &&
                      recipeDetails[0]?.strMeasure1}
                    )
                  </li>
                  <li>
                    {recipeDetails[0]?.strIngredient2 &&
                      recipeDetails[0]?.strIngredient2}
                    (
                    {recipeDetails[0]?.strMeasure2 &&
                      recipeDetails[0]?.strMeasure2}
                    )
                  </li>
                  <li>
                    {recipeDetails[0]?.strIngredient3 &&
                      recipeDetails[0]?.strIngredient3}
                    (
                    {recipeDetails[0]?.strMeasure3 &&
                      recipeDetails[0]?.strMeasure3}
                    )
                  </li>
                  <li>
                    {recipeDetails[0]?.strIngredient4 &&
                      recipeDetails[0]?.strIngredient4}
                    (
                    {recipeDetails[0]?.strMeasure4 &&
                      recipeDetails[0]?.strMeasure4}
                    )
                  </li>
                  <li>
                    {recipeDetails[0]?.strIngredient5 &&
                      recipeDetails[0]?.strIngredient5}
                    (
                    {recipeDetails[0]?.strMeasure5 &&
                      recipeDetails[0]?.strMeasure5}
                    )
                  </li>

                  <li>
                    {recipeDetails[0]?.strIngredient6 &&
                      recipeDetails[0]?.strIngredient6}
                    (
                    {recipeDetails[0]?.strMeasure6 &&
                      recipeDetails[0]?.strMeasure6}
                    )
                  </li>

                  <li>
                    {recipeDetails[0]?.strIngredient7 &&
                      recipeDetails[0]?.strIngredient7}
                    (
                    {recipeDetails[0]?.strMeasure7 &&
                      recipeDetails[0]?.strMeasure7}
                    )
                  </li>
                  <li>
                    {recipeDetails[0]?.strIngredient8 &&
                      recipeDetails[0]?.strIngredient8}
                    (
                    {recipeDetails[0]?.strMeasure8 &&
                      recipeDetails[0]?.strMeasure8}
                    )
                  </li>

                  <li>
                    {recipeDetails[0]?.strIngredient9 &&
                      recipeDetails[0]?.strIngredient9}
                    (
                    {recipeDetails[0]?.strMeasure9 &&
                      recipeDetails[0]?.strMeasure9}
                    )
                  </li>
                  <li>
                    {recipeDetails[0]?.strIngredient10 &&
                      recipeDetails[0]?.strIngredient10}
                    (
                    {recipeDetails[0]?.strMeasure10 &&
                      recipeDetails[0]?.strMeasure10}
                    )
                  </li>

                  <li>
                    {recipeDetails[0]?.strIngredient11 &&
                      recipeDetails[0]?.strIngredient11}
                    (
                    {recipeDetails[0]?.strMeasure11 &&
                      recipeDetails[0]?.strMeasure11}
                    )
                  </li>

                  <li>
                    {recipeDetails[0]?.strIngredient12 &&
                      recipeDetails[0]?.strIngredient12}
                    (
                    {recipeDetails[0]?.strMeasure12 &&
                      recipeDetails[0]?.strMeasure12}
                    )
                  </li>

                  <li>
                    {recipeDetails[0]?.strIngredient13 &&
                      recipeDetails[0]?.strIngredient13}
                    (
                    {recipeDetails[0]?.strMeasure13 &&
                      recipeDetails[0]?.strMeasure13}
                    )
                  </li>

                  {/* <li>
                    {recipeDetails[0]?.strIngredient14 &&
                      recipeDetails[0]?.strIngredient14}
                    (
                    {recipeDetails[0]?.strMeasure14 &&
                      recipeDetails[0]?.strMeasure14}
                    )
                  </li> */}

                  {/* <li>
                    {recipeDetails[0]?.strIngredient15 &&
                      recipeDetails[0]?.strIngredient15}
                    (
                    {recipeDetails[0]?.strMeasure15 &&
                      recipeDetails[0]?.strMeasure15}
                    )
                  </li> */}

                  {/* <li>
                    {recipeDetails[0]?.strIngredient16 &&
                      recipeDetails[0]?.strIngredient16}
                    (
                    {recipeDetails[0]?.strMeasure16 &&
                      recipeDetails[0]?.strMeasure16}
                    )
                  </li> */}

                  {/* <li>
                    {recipeDetails[0]?.strIngredient17 &&
                      recipeDetails[0]?.strIngredient17}
                    (
                    {recipeDetails[0]?.strMeasure17 &&
                      recipeDetails[0]?.strMeasure17}
                    )
                  </li> */}

                  {/* <li>
                    {recipeDetails[0]?.strIngredient18 &&
                      recipeDetails[0]?.strIngredient18}
                    (
                    {recipeDetails[0]?.strMeasure18 &&
                      recipeDetails[0]?.strMeasure18}
                    )
                  </li> */}

                  {/* <li>
                    {recipeDetails[0]?.strIngredient19 &&
                      recipeDetails[0]?.strIngredient19}
                    (
                    {recipeDetails[0]?.strMeasure19 &&
                      recipeDetails[0]?.strMeasure19}
                    )
                  </li> */}

                  {/* <li>
                    {recipeDetails[0]?.strIngredient20 &&
                      recipeDetails[0]?.strIngredient20}
                    (
                    {recipeDetails[0]?.strMeasure20 &&
                      recipeDetails[0]?.strMeasure20}
                    )
                  </li> */}
                </ul>
              </div>

              {/* Measurement Section starts */}
              {/* <div className="flex flex-col space-y-5 pt-10">
                <p className="text-xl font-nunito font-extrabold opacity-85">
                  INSTRUCTIONS
                </p>
                <ol className="list-decimal pl-5 space-y-2 opacity-70">
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia, culpa!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia, culpa
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia, culpa
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia, culpa
                  </li>
                </ol>
              </div> */}
              {/* Instruction Section Ends */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RecipieDetails;
