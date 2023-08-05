const loadTouristData = async () => {
  const res = await fetch("/tourist.json");
  return res.json();
};

export default loadTouristData;
