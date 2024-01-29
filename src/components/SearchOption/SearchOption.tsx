import { useState } from "react";
import Modal from "../Modal/Modal";
import SearchButton from "../SearchButton/SearchButton";

function SearchOption({ filterOption }: { filterOption: FilterOption }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSearchOptionClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
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
      >
        {filterOption.options.map((filterOption) => (
          <SearchButton
            filterOption={filterOption}
            handleSearchOptionClick={handleSearchOptionClick}
            key={filterOption}
          />
        ))}
      </Modal>
    </>
  );
}

export default SearchOption;
