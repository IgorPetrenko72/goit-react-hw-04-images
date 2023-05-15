import { useState } from "react";
import PropTypes from "prop-types";
import css from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState('');

  const handleNameChange = e => {
    setSearchName(e.currentTarget.value.toLowerCase())
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (searchName.trim() === '') {
      return alert('Enter the name');
    };

    onSubmit(searchName);
    setSearchName('');
  };
  
  return (
    <header className={css.Searchbar}>
      <form
        onSubmit={handleSubmit}
        className={css.SearchForm}>
        <button
          type="submit"
          className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
          </svg>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchName"
          value={searchName}
          onChange={handleNameChange}
        />
      </form>
    </header>
  )
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;