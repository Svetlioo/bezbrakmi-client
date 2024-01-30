import styles from "../SearchOption/SearchOption.module.css";

import { useState } from "react";
import Modal from "../Modal/Modal";
import SearchButton from "../SearchButton/SearchButton";

function SearchOption({
  filterOption,
  forceScroll,
  handleBrandChange,
}: {
  filterOption: BrandModelOption;
  forceScroll?: boolean;
  handleBrandChange: (brand: string) => void;
}) {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSearchOptionClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleClickOption = (brand: string) => {
    handleBrandChange(brand);
    setModalOpen(false);
  };

  return (
    <>
      <SearchButton
        handleSearchOptionClick={handleSearchOptionClick}
        filterOption={filterOption.name}
      />
      <Modal
        onClose={handleCloseModal}
        isOpen={isModalOpen}
        filterOptionName={filterOption.name}
        forceScroll={forceScroll}
      >
        {filterOption.options.map((filterOption) => (
          <SearchButton
            filterOption={filterOption.brand}
            handleSearchOptionClick={handleSearchOptionClick}
            key={filterOption.brand}
          />
        ))}
      </Modal>
    </>
  );
}

export default SearchOption;
