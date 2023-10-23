export function getAllMoviesByGenreConfig(documentaries, specials, feature) {
  const allData = [...documentaries, ...specials, ...feature];

  const genreCounts = {};

  allData.forEach((movie) => {
    const genre = movie.Genre || "Documentary"; // Använd "Documentary" som standard om genre är falskt

    if (genreCounts[genre]) {
      genreCounts[genre]++;
    } else {
      genreCounts[genre] = 1;
    }
  });

  const border = "#7259ff"; // Färg för gränsen (border)
  const backgroundColor = "rgba(19, 25, 47, 0.5)";

  const uniqueGenres = Object.keys(genreCounts); // lista med alla genrer med keys
  const genreCountArray = uniqueGenres.map((genre) => genreCounts[genre]); //antalet i varje genre

  genreCountArray.sort((a, b) => b - a); // Sortera i fallande ordning

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
