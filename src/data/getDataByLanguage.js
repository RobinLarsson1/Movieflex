export function getMoviesByLanguageConfig(movies, ascending = false) {
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

  const languageData = uniqueLanguages.map((language, index) => ({
    language: language,
    count: languageCountsArray[index],
  }));

  languageData.sort((a, b) =>
    ascending ? a.count - b.count : b.count - a.count
  );

  uniqueLanguages.length = 0;
  languageCountsArray.length = 0;

  languageData.forEach((data) => {
    uniqueLanguages.push(data.language);
    languageCountsArray.push(data.count);
  });

  const border = "#7259ff"; // Färg för gränsen (border)
  const backgroundColor = "rgba(19, 25, 47, 0.5)";

  return {
    labels: uniqueLanguages,
    datasets: [
      {
        label: "Number of movies",
        data: languageCountsArray,
        backgroundColor: backgroundColor, // Sätt fyllningsfärgen till transparent
        borderColor: border,
        borderWidth: 1.5,
        radius: 170,
        lineTension: 0.8,
        hoverBackgroundColor: "#7259ff",
        borderRadius: 10,
        // hoverBackgroundColor: "#D33636",
      },
    ],
  };
}
