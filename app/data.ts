
const api = process.env.API_URL;
const getPopularCars = async () => {
  const response = await fetch(
    `${api}/make?popular=true`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch popular cars");
  }
  return response.json();
};

const getListCars = async ({ page }: { page: number }) => {
  const response = await fetch(
    `${api}/car/search?page=${page}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch list of cars");
  }
  return response.json();
};

const getCar = async (id: string) => {
  const response = await fetch(
    ` ${api}/car/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch list of cars");
  }
  return response.json();
};

export { getPopularCars, getListCars, getCar };
