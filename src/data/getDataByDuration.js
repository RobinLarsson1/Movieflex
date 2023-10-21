const colors = ["#f2f3f4"];

export function getAllMoviesByDurationConfig(documentaries, specials, feature) {
  const allData = [...documentaries, ...specials, ...feature];

  // Konvertera längden till minuter och lägg till en ny egenskap "DurationInMinutes" i filmobjekten
  allData.forEach((movie) => {
    const duration = movie.Runtime;
    const parts = duration.split(' ');
    let totalMinutes = 0;

    for (let i = 0; i < parts.length; i++) {
      if (parts[i] === 'h') {
        const hours = parseInt(parts[i - 1]);
        totalMinutes += hours * 60;
      } else if (parts[i] === 'min') {
        const minutes = parseInt(parts[i - 1]);
        totalMinutes += minutes;
      }
    }

    movie.DurationInMinutes = totalMinutes;
  });

  // Sortera filmerna efter längd i minuter
  allData.sort((a, b) => a.DurationInMinutes - b.DurationInMinutes);

  const durationData = {};
  allData.forEach((movie) => {
    const durationInMinutes = movie.DurationInMinutes;
    if (durationData[durationInMinutes]) {
      durationData[durationInMinutes]++;
    } else {
      durationData[durationInMinutes] = 1;
    }
  });

  const uniqueLengths = Object.keys(durationData);
  const durationCountArray = uniqueLengths.map((duration) => durationData[duration]);

  const labels = uniqueLengths.map((duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    if (hours === 0) {
      return`${minutes}min`
    } else {
      return `${hours}h ${minutes}min`;
    }
  });

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
