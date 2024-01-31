interface FilterOption {
  name: string;
  options: string[];
}

interface BrandModelOption {
  name: string;
  options: { brand: string; models: string[] }[];
}

interface FilterState {
  name: string;
  selectedOptions: string[];
}
