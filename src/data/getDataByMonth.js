import documentariesData from "../data/documentaries.json";
import featureData from "../data/feature-films.json";
import specialsData from "../data/specials.json";
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// // Sorteringsfunktion för månader
// function sortMonths(monthData) {
//   return Object.keys(monthData)
//     .sort((a, b) => monthNames.indexOf(a) - monthNames.indexOf(b))
//     .reduce((sorted, key) => {
//       sorted[key] = monthData[key];
//       return sorted;
//     }, {});
// }

// // Funktion för att gruppera filmer per månad och kategori
// export function groupMoviesByMonth(data) {
//   const monthsData = {};

//   data.forEach((movie) => {
//     const premiere = movie.Premiere;
//     const premiereDate = new Date(premiere);
//     const month = monthNames[premiereDate.getMonth()];

//     if (!monthsData[month]) {
//       monthsData[month] = 0;
//     }

//     monthsData[month]++;
//   });

//   // Använd sorteringsfunktionen för att sortera månaderna
//   return sortMonths(monthsData);
// }

// // Funktion för att generera konfigurationer
// export function generateMonthConfig(data, title) {
//   const monthData = groupMoviesByMonth(data);
// Färg för gränsen (border)

//   // Skapa en lista med alla månader
//   const allMonths = monthNames;

//   // Fyll i nollor för de månader som saknar data
//   allMonths.forEach((month) => {
//     if (!monthData[month]) {
//       monthData[month] = 0;
//     }
//   });

//   // Använd sorteringsfunktionen för att sortera månaderna
//   const sortedMonthData = sortMonths(monthData);

//   return {
//     labels: Object.keys(sortedMonthData),
//     datasets: [
//       {
//         label: title,
//         data: Object.values(sortedMonthData),
//         backgroundColor: backgroundColor, // Sätt fyllningsfärgen till transparent
//         borderColor: border,
//         borderWidth: 2,
//         borderRadius: 10,
//       },
//     ],
//   };
// }

// // Använd funktionerna för att generera konfigurationer för olika kategorier
// export function getDocumentariesByMonthConfig() {
//   return generateMonthConfig(documentariesData, "Documentaries by Month");
// }

// export function getFeatureByMonthConfig() {
//   return generateMonthConfig(featureData, "Feature Films");
// }

// export function getSpecialsByMonthConfig() {
//   return generateMonthConfig(specialsData, "Specials by Month");
// }

export function groupMoviesByPremiere() {
  const specialsReleaseData = {};
  const featureReleaseData = {};
  const documentariesReleaseData = {};

  function groupMoviesByMonth(monthData, newObject) {
    monthNames.forEach((month) => {
      newObject[month] = 0;
    });

    monthData.forEach((movie) => {
      const premiereMonth = movie.Premiere.split(" ")[0];
      if (monthNames.includes(premiereMonth)) {
        newObject[premiereMonth]++;
      }
    });
  }
  groupMoviesByMonth(specialsData, specialsReleaseData);
  groupMoviesByMonth(featureData, featureReleaseData);
  groupMoviesByMonth(documentariesData, documentariesReleaseData);

  function sortData(data) {
    return Object.keys(data).map((Premiere) => ({
      Premiere,
      count: data[Premiere],
    }));
  }

  const sortedSpecials = sortData(specialsReleaseData);
  const sortedFeatures = sortData(featureReleaseData);
  const sortedDocumentaries = sortData(documentariesReleaseData);
  const backgroundColors = [
    "rgba(19, 25, 47, 1)",
    "rgba(242, 243, 244, 0.5)",
    "rgba(114, 89, 255, 0.5)",
  ];
  const border = "#7259ff";

  const releaseChartData = {
    labels: monthNames.map((item) => item),
    datasets: [
      {
        label: "Features",
        data: sortedFeatures.map((item) => item.count),
        backgroundColor: backgroundColors[0], // Använd rätt index för färg
        borderColor: border,
        borderWidth: 2,
        borderRadius: 6,
      },
      {
        label: "Specials",
        data: sortedSpecials.map((item) => item.count),
        backgroundColor: backgroundColors[1], // Använd rätt index för färg
        borderColor: border,
        borderWidth: 2,
        borderRadius: 6,
      },
      {
        label: "Documentaries",
        data: sortedDocumentaries.map((item) => item.count),
        backgroundColor: backgroundColors[2], // Använd rätt index för färg
        borderColor: border,
        borderWidth: 2,
        borderRadius: 6,
      },
    ],
  };

  return releaseChartData;
}
