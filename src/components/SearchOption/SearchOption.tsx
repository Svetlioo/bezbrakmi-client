import { useState } from "react";
import Modal from "../Modal/Modal";
import SearchButton from "../SearchButton/SearchButton";

interface SearchOptionProps {
  filterOption: FilterOption;
  selectedFilters: FilterState[];
  setSelectedFilters: React.Dispatch<React.SetStateAction<FilterState[]>>;
}

function SearchOption({
  filterOption,
  selectedFilters,
  setSelectedFilters,
}: SearchOptionProps) {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSearchOptionClick = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "scroll";
  };

  const handleOptionClick = (name: string, option: string) => {
    setSelectedFilters((prevFilters) => {
      const existingFilterIndex = prevFilters.findIndex(
        (filter) => filter.name === name
      );

      if (existingFilterIndex !== -1) {
        // Filter with the current name already exists
        const newFilters = [...prevFilters];
        const existingOptionIndex =
          newFilters[existingFilterIndex].selectedOptions.indexOf(option);

        if (existingOptionIndex !== -1) {
          // Option already exists in selectedOptions, remove it
          newFilters[existingFilterIndex] = {
            ...newFilters[existingFilterIndex],
            selectedOptions: newFilters[
              existingFilterIndex
            ].selectedOptions.filter(
              (existingOption) => existingOption !== option
            ),
          };
        } else {
          // Option doesn't exist in selectedOptions, add it
          newFilters[existingFilterIndex] = {
            ...newFilters[existingFilterIndex],
            selectedOptions: [
              ...newFilters[existingFilterIndex].selectedOptions,
              option,
            ],
          };
        }
        return newFilters;
      } else {
        // Filter with the current name doesn't exist, add a new filter object
        return [...prevFilters, { name: name, selectedOptions: [option] }];
      }
    });
  };

  const selectedFilter = selectedFilters.find(
    (filter) => filter.name === filterOption.name
  );

  const handleClearFilters = () => {
    setSelectedFilters((prevFilters) => {
      return prevFilters.filter((filter) => filter.name !== filterOption.name);
    });
  };
  const selectedOptions = selectedFilter?.selectedOptions || [];

  const filterOptionText =
    selectedOptions.length > 0
      ? `: ${selectedOptions[0]}${
          selectedOptions.length > 1 ? `... +${selectedOptions.length - 1}` : ""
        }`
      : "";

  const areOptionsSelected = selectedOptions.length > 0;
  return (
    <>
      <SearchButton
        handleSearchOptionClick={handleSearchOptionClick}
        filterOption={`${filterOption.name}${filterOptionText}`}
        areOptionsSelected={areOptionsSelected}
        handleClearFilters={handleClearFilters}
      />
      <Modal
        onClose={handleCloseModal}
        isOpen={isModalOpen}
        filterOptionName={filterOption.name}
      >
        {filterOption.options.map((filterOpt) => (
          <SearchButton
            filterOption={filterOpt}
            filterName={filterOption.name}
            handleSearchOptionClick={handleSearchOptionClick}
            selectedFilters={selectedFilters}
            handleOptionClick={handleOptionClick}
            key={filterOpt}
          />
        ))}
      </Modal>
    </>
  );
}

export default SearchOption;
