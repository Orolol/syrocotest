export type ComputationOptionType = {
  id: string;
  name: string;
  photoUrL: string;
};
export type ComputationOptionCategoryType = {
  id: string;
  name: string;
  items: ComputationOptionType[];
};

const api = {
  getComputationOptionsData() {
    return fetch('/api/computation-options').then((res) => {
      return res.json();
    });
  },
};

export default api;
