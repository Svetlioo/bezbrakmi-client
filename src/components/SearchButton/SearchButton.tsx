import styles from "./SearchButton.module.css";

interface SearchButtonProps {
  handleSearchOptionClick: () => void;
  filterOption: string;
}

function SearchButton({
  handleSearchOptionClick,
  filterOption,
}: SearchButtonProps) {
  return (
    <button
      className={styles["search-button"]}
      onClick={handleSearchOptionClick}
    >
      {filterOption}
    </button>
  );
}

export default SearchButton;
