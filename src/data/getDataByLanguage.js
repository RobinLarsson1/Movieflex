const colors = ["#74C1FF", "#7266FF", "#D3D5D9"];

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

  const uniqueLanguages = Object.keys(languageCount);
  const languageCountsArray = uniqueLanguages.map(
    (language) => languageCount[language]
  );

  return {
    labels: uniqueLanguages,
    datasets: [
      {
        label: "Number of movies",
        data: languageCountsArray,
        backgroundColor: colors,
        borderWidth: 0,
        // hoverBackgroundColor: "#D33636",
      },
    ],
  };
}
