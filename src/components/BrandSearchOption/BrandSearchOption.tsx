import { useState } from "react";
import Modal from "../Modal/Modal";
import SearchButton from "../SearchButton/SearchButton";

function SearchOption({
  filterOption,
  forceScroll,
}: {
  filterOption: BrandModelOption;
  forceScroll?: boolean;
}) {
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
