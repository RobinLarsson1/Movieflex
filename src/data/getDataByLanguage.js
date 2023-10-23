export function getMoviesByLanguageConfig(movies) {
  const languageCount = {};

  movies.forEach((movie) => {
    const language = movie.Language;
    if (languageCount[language]) {
      languageCount[language]++;
    } else {
      languageCount[language] = 1;
    }
  });

  const languageData = Object.keys(languageCount).map((language) => ({
    language: language, //språket
    count: languageCount[language], //antalet
  }));

  //sorterar datan i fallande ordning (från högst till lägst antal filmer per språk)
  languageData.sort((a, b) => b.count - a.count);

  const border = "#7259ff"; // Färg för gränsen (border)

  return {
    labels: languageData.map((data) => data.language),
    datasets: [
      {
        label: "Number of movies",
        data: languageData.map((data) => data.count),
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderColor: border,
        borderWidth: 1.5,
        radius: 170,
        lineTension: 0.8,
        hoverBackgroundColor: "#7259ff",
        borderRadius: 10,
      },
    ],
  };
}
