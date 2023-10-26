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

  //skapar listor för alla
  const languageData = Object.keys(languageCount).map((language) => ({
    language: language, //lista med alla språk
    count: languageCount[language], //antalet i varje språk
  }));

  //sorterar datan i fallande ordning (från högst till lägst antal filmer per språk)
  languageData.sort((a, b) => b.count - a.count);

  const border = "#7259ff"; // Färg för gränsen (border)
  const backgroundColors = [
    "rgba(19, 25, 47, 1)",
    "rgba(242, 243, 244, 0.5)",
    "rgba(114, 89, 255, 0.5)",
  ];

  return {
    labels: languageData.map((data) => data.language),
    datasets: [
      {
        label: "Number of movies",
        data: languageData.map((data) => data.count),
        backgroundColor: backgroundColors,
        borderColor: border,
        borderWidth: 1.5,
        radius: 170,
        hoverBackgroundColor: backgroundColors,
        borderRadius: 5,
      },
    ],
  };
}
