import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ onPageChange }) => {
  const pages = [
    { label: 'Home', value: 'home' },
    { label: 'Games', value: 'gameList' },
    { label: 'User Stats', value: 'userStats' }, 
    { label: 'Game Result Form', value: 'gameResultForm' },
  ];

  return (
    <nav>
      <ul>
        {pages.map(({ label, value }) => (
          <li key={value}>
            <button type="button" onClick={() => onPageChange(value)}>
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  onPageChange: PropTypes.func.isRequired,
};

export default Navbar;