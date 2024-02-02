import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState('');
    const [shoppingItems, setShoppingItems] = useState(items); 

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

    function handleSearchChange(text) {
      setSearchText(text); 
    }
  
  //   function handleItemFormSubmit(newItem) {
  //   setShoppingItems([...shoppingItems, newItem]);
  // }
  
  const itemsToDisplay = shoppingItems
    .filter((item) => {
      if (selectedCategory === 'All') return true;

      return item.category === selectedCategory;
    })
    .filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );

  return (
    <div className='ShoppingList'>
      <ItemForm
        onItemFormSubmit={(newItem) =>
          setShoppingItems([...shoppingItems, newItem])
        }
      />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        search={searchText}
      />
      <ul className='Items'>
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
