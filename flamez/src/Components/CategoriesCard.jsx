import React from 'react'


const CategoriesCard = ({ strCategory, strCategoryThumb}) => {
  return (
    <>
      <div className="div flex flex-row items-center">
        <img
          src={strCategoryThumb}
          className="w-32 h-32 rounded-full object-cover z-10"
          alt=""
        />
        <div className="flex justify-center items-center w-56 py-4 -ml-4 z-0 rounded-e-3xl bg-[#ffb59e]">
          <p className="text-black opacity-100">{strCategory}</p>
        </div>
      </div>
    </>
  );
};

export default CategoriesCard