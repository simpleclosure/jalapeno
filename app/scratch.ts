// test my fetch-movies route

const testFetchMovies = async () => {
  const response = await fetch("/api/fetch-movies");
  const data = await response.json();
  console.log(data);
};

testFetchMovies();
