import { useState } from "react";
import SearchOption from "../SearchOption/SearchOption";
import styles from "./SearchBar.module.css";
import { brandModelOptions, filterOptions } from "../../data/options";
import BrandSearchOption from "../BrandSearchOption/BrandSearchOption";

function SearchBar() {
  const [selectedFilters, setSelectedFilters] = useState<FilterState[]>([]);

  return (
    <div className={styles["search-bar"]}>
      <BrandSearchOption filterOption={brandModelOptions} forceScroll={true} />
      {filterOptions.map((filterOption) => (
        <SearchOption
          filterOption={filterOption}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          key={filterOption.name}
        />
      ))}
    </div>
  );
}
export default SearchBar;
