import documentariesData from "../data/documentaries.json";
import featureData from "../data/feature-films.json";
import specialsData from "../data/specials.json";
const colors = ["#051200", "#79D61B", "#ECEFE8"];
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
// Funktion för att gruppera filmer per månad och kategori
export function groupMoviesByMonth(data) {
  const monthsData = {};

  data.forEach((movie) => {
    const premiere = movie.Premiere;
    const premiereDate = new Date(premiere);
    const month = monthNames[premiereDate.getMonth()];

    if (!monthsData[month]) {
      monthsData[month] = 0;
    }
   

    monthsData[month]++;
  });

  // Sortera månaderna i ordning
  const sortedMonthsData = Object.keys(monthsData)
    .sort((a, b) => monthNames.indexOf(a) - monthNames.indexOf(b))
    .reduce((sorted, key) => {
      sorted[key] = monthsData[key];
      return sorted;
    }, {});

  return sortedMonthsData;
}

// En separat modul för att generera konfigurationer
export function generateMonthConfig(data, title, colors) {
  const monthData = groupMoviesByMonth(data);

  const border = "#7259ff"; // Färg för gränsen (border)
  const backgroundColor = "rgba(19, 25, 47, 0.5)";
  
  // Skapa en lista med alla månader
  const allMonths = monthNames;

  // Fyll i nollor för de månader som saknar data
  allMonths.forEach((month) => {
    if (!monthData[month]) {
      monthData[month] = 0;
    }
  });

  // Sortera månaderna i ordning
  const sortedMonthData = Object.keys(monthData)
    .sort((a, b) => monthNames.indexOf(a) - monthNames.indexOf(b))
    .reduce((sorted, key) => {
      sorted[key] = monthData[key];
      return sorted;
    }, {});

  return {
    labels: Object.keys(sortedMonthData),
    datasets: [
      {
        label: title,
        data: Object.values(sortedMonthData),
        backgroundColor: backgroundColor, // Sätt fyllningsfärgen till transparent
        borderColor: border,
        borderWidth: 2,
        borderRadius: 10,
      },
    ],
  };
}

  // Använd funktionerna för att generera konfigurationer för olika kategorier
  export function getDocumentariesByMonthConfig() {
    return generateMonthConfig(
      documentariesData,
      "Documentaries by Month",
      colors
    );
  }

export function getFeatureByMonthConfig() {
  return generateMonthConfig(featureData, "Feature Films", colors);
}

export function getSpecialsByMonthConfig() {
  return generateMonthConfig(specialsData, "Specials by Month", colors);
}
