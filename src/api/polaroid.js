import axios from "axios";

const getPolaroid = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/polaroid`
  );
  return response;
};

const addPolaroid = async (newPolaroid) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/polaroid`, newPolaroid);
};

export { getPolaroid, addPolaroid };
