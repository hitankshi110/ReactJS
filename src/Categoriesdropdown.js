import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoryDropdown = () => {
 const [categories, setCategories] = useState([]);

 useEffect(() => {
    getCategories();
 }, []);

 const getCategories = async () => {
    try {
      const response = await axios.get('https://your-website-api-domain.com/api/categories');
      setCategories(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
 };

 return (
    // form
    // <form action='#'>
    //  <input type="text" name="name" value="name" /> 
    // </form> <br />
    // dropdown
    <select>
      <option>All Categories</option>
      {categories.map(category => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
    // `<div class="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
    //               <div class="search-bar row bg-light p-2 my-2 rounded-4">
    //                 <div class="col-md-4 d-none d-md-block">
    //                   <select class="form-select border-0 bg-transparent">
    //                     <option>All Categories</option>
    //                     <option>Groceries</option>
    //                     <option>Drinks</option>
    //                     <option>Chocolates</option>
    //                   </select>
    //                 </div>
    //                 <div class="col-11 col-md-7">
    //                   <form id="search-form" class="text-center" action="#" method="post">
    //                     <input type="text" class="form-control border-0 bg-transparent" placeholder="Search for more than 20,000 products" />
    //                   </form>
    //                 </div>
    //                 <div class="col-1">
    //                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"/></svg>
    //                 </div>
    //               </div>
    //             </div>`
 );
};

export default CategoryDropdown;