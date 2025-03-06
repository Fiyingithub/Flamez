import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const fetchData = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}categories.php`
    );
    // console.log(response.data.categories);
    return response.data.categories;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchPopularData = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}search.php?f=a`
    );
    // console.log({ popularData: response.data.meals });
    return response.data.meals;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchRecipeData = async (id) => {
  try {
    const response = await axios.get(
      `${baseUrl}lookup.php?i=${id}`
    );
    //   console.log("response", response.data.meals);
    return response.data.meals;
  } catch (error) {
    //   console.error(error);
    return [];
  }
};

export const handleDataSearch = async(searchData) => {
    try {
      const response = await axios.get(
        `${baseUrl}search.php?s=${searchData}`
      );
    //   console.log(response.data);
      return response.data;
    } catch (error) {
    //   console.error(error);
    return [];
    }
  };
