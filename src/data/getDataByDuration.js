const colors = ["#f2f3f4"];

export function getAllMoviesByDurationConfig(documentaries, specials, feature) {
  const allData = [...documentaries, ...specials, ...feature];

  const durationData = {};

  allData.forEach((movie) => {
    const duration = movie.Runtime;
    if (durationData[duration]) {
      durationData[duration]++;
    } else {
      durationData[duration] = 1;
    }
  });

  const uniqueLengths = Object.keys(durationData);
  const durationCountArray = uniqueLengths.map(
    (duration) => durationData[duration]
  );

  const labels = uniqueLengths;

  return {
    labels,
    datasets: [
      {
        label: "Length of movie",
        borderColor: "#7259ff",
        data: durationCountArray,
        backgroundColor: colors,
        lineTension: 0.8,
        hitRadius: 30,
        hoverRadius: 8,
      },
    ],
  };
}
