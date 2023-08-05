const loadReviewData = async () => {
  const res = await fetch("/reviews.json");
  return res.json();
};

export default loadReviewData;
