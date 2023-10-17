const colors = ["#051200", "#79D61B", "#ECEFE8"];

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

  const uniqueLenghts = Object.keys(durationData);
  const durationCountArray = uniqueLenghts.map(
    (duration) => durationData[duration]
  );

  return {
    labels: uniqueLenghts,
    datasets: [
      {
        label: "Length of movie",
        data: durationCountArray,
        backgroundColor: colors,
      },
    ],
  };
}
