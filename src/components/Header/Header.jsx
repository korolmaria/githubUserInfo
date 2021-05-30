import React from 'react';
import IconHeader from './IconHeader';
import SearchField from './SearchField';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <IconHeader />
        <SearchField />
      </div>
    </header>
  );
}

export default Header;