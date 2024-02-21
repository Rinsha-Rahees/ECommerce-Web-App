import React from 'react'
import Categories from './Categories';

function CategoryBar() {
  
    const categoryItems = [
        { href: "", itemName: "Caps" },
        { href: "", itemName: "T Shirts" },
        { href: "", itemName: "Bottoms" },
        { href: "", itemName: "Boots" },
      ];
    
      return (
        <div className="hidden lg:flex justify-center items-center p-3.5 bg-gray-200 w-full">
          <ul className="flex items-center justify-between">
            {categoryItems.map((itemData, idx) => {
              return (
                <Categories
                  key={`${idx}_${itemData.itemName}`}
                  itemDetails={itemData}
                />
              );
            })}
            
          </ul>
        </div>
      );
    }

export default CategoryBar