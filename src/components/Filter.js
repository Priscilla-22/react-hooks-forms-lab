import React, { useState,useEffect } from 'react';

function Filter({ onCategoryChange, onSearchChange ,search}) {
  const [searchInput, setSearchInput] = useState(search);

   useEffect(() => {
    setSearchInput(search);
   }, [search]);
  
  const handleSearchChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setSearchInput(inputValue);
    onSearchChange(inputValue);
  };

  return (
    <div className='Filter'>
      <input
        type='text'
        name='search'
        placeholder='Search...'
        value={searchInput}
        onChange={handleSearchChange}
      />
      <select name='filter' onChange={onCategoryChange}>
        <option value='All'>Filter by category</option>
        <option value='Produce'>Produce</option>
        <option value='Dairy'>Dairy</option>
        <option value='Dessert'>Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
