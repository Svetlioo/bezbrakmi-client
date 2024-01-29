import { useState } from "react";
import SearchOption from "../SearchOption/SearchOption";
import styles from "./SearchBar.module.css";
import { brandModelOptions, filterOptions } from "../../data/options";

function SearchBar() {
  const [selectedOptions, setSelectedOptions] = useState({});

  return (
    <div className={styles["search-bar"]}>
      {/* <SearchOption filterOption={brandModelOptions} options={} /> */}
      {filterOptions.map((filterOption) => (
        <SearchOption filterOption={filterOption} key={filterOption.name} />
      ))}
    </div>
  );
}
export default SearchBar;
