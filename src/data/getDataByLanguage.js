const colors = ["#74C1FF", "#7266FF", "#D3D5D9"];

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

  // languageCountsArray.sort((a, b) => b  a);

  return {
    labels: uniqueLanguages,
    datasets: [
      {
        label: "Number of movies",
        data: languageCountsArray,
        backgroundColor: colors, // Anpassa färger efter ditt behov
        borderWidth: 0,
      },
    ],
  };
}
