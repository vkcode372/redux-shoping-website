import React from 'react'
import { useState} from 'react';
import { useDispatch,useSelector} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
const CategoryMenu = () => {
   const navigater=useNavigate();
    const categories=useSelector((state)=>state.category.categories)

    // const [selectedCategory, setSelectedCategory] = useState(categories);

    const handleCategoryChange = (event) => {
    //   setSelectedCategory(event.target.value);
 if(event.target.value!=""){

     navigater(`/products/${event.target.value}`);
 }else{
    navigater("/")
 }
   
    };
  return (
    <div>
    <label htmlFor="category">Select a category:</label>
    <select id="category"  onChange={handleCategoryChange}>
      <option value="">-- Select a category --</option>
      {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
    </select>
  </div>
  )
}

export default CategoryMenu