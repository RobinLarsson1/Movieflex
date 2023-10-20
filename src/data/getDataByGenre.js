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

  const border = "#7259ff"; // Färg för gränsen (border)
  const backgroundColor = "rgba(19, 25, 47, 0.5)";

  const uniqueGenres = Object.keys(genreData);
  const genreCountArray = uniqueGenres.map((genre) => genreData[genre]);
  genreCountArray.sort((a, b) => b - a);

  return {
    labels: uniqueGenres,
    datasets: [
      {
        label: "Movies",
        data: genreCountArray,
        backgroundColor: backgroundColor, // Sätt fyllningsfärgen till transparent
        borderColor: border,
        borderWidth: 1.5,
        radius: 250,
        hoverBackgroundColor: "#7259ff",
        borderRadius: 10,
        width: 50,
      },
    ],
  };
}
