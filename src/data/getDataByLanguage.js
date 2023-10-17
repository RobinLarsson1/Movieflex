const colors = ["#051200", "#79D61B", "#ECEFE8"];

export function getAllMoviesByLanguageConfig(documentaries, specials, feature) {
  // Kombinera data från alla kategorier
  const allData = [...documentaries, ...specials, ...feature];

  const languageCount = {};

  allData.forEach((movie) => {
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
        backgroundColor: colors, // Anpassa färger efter ditt behov
      },
    ],
  };
}
