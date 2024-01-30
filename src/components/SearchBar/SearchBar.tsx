import { useState } from "react";
import SearchOption from "../SearchOption/SearchOption";
import styles from "./SearchBar.module.css";
import { brandModelOptions, filterOptions } from "../../data/options";
import BrandSearchOption from "../BrandSearchOption/BrandSearchOption";

interface FilterState {
  filters: { name: string; filter: string | string[] }[];
}

function SearchBar() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<FilterState>({
    filters: [],
  });

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand);
  };

  return (
    <div className={styles["search-bar"]}>
      <BrandSearchOption
        filterOption={brandModelOptions}
        forceScroll={true}
        handleBrandChange={handleBrandChange}
      />
      {filterOptions.map((filterOption) => (
        <SearchOption filterOption={filterOption} key={filterOption.name} />
      ))}
    </div>
  );
}
export default SearchBar;
