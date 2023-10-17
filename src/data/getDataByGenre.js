const colors = ["#051200", "#79D61B", "#ECEFE8"];

export function getAllMoviesByGenreConfig(documentaries, specials, feature) {
  const allData = [...documentaries, ...specials, ...feature];

  const genreData = {};

  allData.forEach((movie) => {
    let genre = movie.Genre;

    if (!genre) {
      genre = "Documentary";
    }

    if (genreData[genre]) {
      genreData[genre]++;
    } else {
      genreData[genre] = 1;
    }
  });

  const uniqueGenres = Object.keys(genreData);
  const genreCountArray = uniqueGenres.map((genre) => genreData[genre]);
  genreCountArray.sort((a, b) => b - a);

  return {
    labels: uniqueGenres,
    datasets: [
      {
        label: "Movies",
        data: genreCountArray,
        backgroundColor: colors,
      },
    ],
  };
}
