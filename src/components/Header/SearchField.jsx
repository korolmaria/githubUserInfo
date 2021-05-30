import React from 'react';
import state from '../../redux/state';

const SearchField = () => {
  async function handlerKeyPress (e) {
    if (e.key === 'Enter') { 
      state.searchForm.userName = e.target.value;

      const response = await fetch(`https://github.com/raw?url=https://localhost/`);
      const items = await response.json();
      console.log(items);
    }    
  }
  return (
    <input type="text" onKeyPress={handlerKeyPress} className="header__search" placeholder="Enter GitHub username" />
  );
}

export default SearchField;