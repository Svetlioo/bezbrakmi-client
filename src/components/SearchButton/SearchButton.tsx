import styles from "./SearchButton.module.css";

interface SearchButtonProps {
  handleSearchOptionClick: () => void;
  filterOption: string;
  selectedFilters?: FilterState[];
  handleOptionClick?: (name: string, option: string) => void;
  filterName?: string;
  areOptionsSelected?: boolean;
  handleClearFilters?: () => void;
}

function SearchButton({
  handleSearchOptionClick,
  filterOption,
  selectedFilters,
  handleOptionClick,
  filterName,
  areOptionsSelected,
  handleClearFilters,
}: SearchButtonProps) {
  return (
    <button
      className={`${styles["search-button"]} ${
        selectedFilters
          ?.find((filter) => filter.name === filterName)
          ?.selectedOptions.includes(filterOption) || areOptionsSelected
          ? styles["selected-button"]
          : ""
      }`}
      onClick={
        handleOptionClick
          ? filterName
            ? () => handleOptionClick(filterName, filterOption)
            : undefined
          : handleSearchOptionClick
      }
    >
      {filterOption}
      {areOptionsSelected && (
        <span
          className={styles["clear-button"]}
          onClick={(e) => {
            e.stopPropagation();
            handleClearFilters?.();
          }}
        >
          X
        </span>
      )}
    </button>
  );
}

export default SearchButton;
