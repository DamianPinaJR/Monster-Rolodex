import "./search-bar.style.scss";

const SearchBar = ({ className, inputType, placeholder, onChangeHandler }) => {
  return (
    <input
      className={className}
      type={inputType}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBar;
