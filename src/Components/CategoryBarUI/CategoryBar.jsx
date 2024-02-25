import React from 'react'
import Categories from './Categories';
import { categoryItems } from '../DataArray'; 

function CategoryBar() {
    
      return (
        <div className="hidden lg:flex justify-center items-center p-3.5 bg-gray-200 w-full">
          <ul className="flex items-center justify-between">
            <Categories items={categoryItems}/>
          </ul>
        </div>
      );
    }

export default CategoryBar