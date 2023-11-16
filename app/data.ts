const getPopularCars = async () => {
    const response = await fetch(
        "https://api.staging.myautochek.com/v1/inventory/make?popular=true"
      );

      if (!response.ok) {
        throw new Error('Failed to fetch popular cars')
      }
      return response.json();
};


const getListCars = async ({page}: {page: number}) => {
    const response = await fetch(
        `https://api.staging.myautochek.com/v1/inventory/car/search?page=${page}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch list of cars')
      }
      return response.json();
}

export {getPopularCars, getListCars}