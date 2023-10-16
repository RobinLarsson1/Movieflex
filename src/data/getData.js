import documentariesData from './documentaries.json'
import featureData from './feature-films.json'
import specialsData from './specials.json'

export function groupMoviesByLanguage() {
    const moviesByLanguage = {};

    // För specialsData
    specialsData.forEach(movie => {
        const language = movie.Language;

        if (!moviesByLanguage[language]) {
            moviesByLanguage[language] = [];
        }

        moviesByLanguage[language].push(movie);
    });

    // För documentariesData
    documentariesData.forEach(movie => {
        const language = movie.Language;

        if (!moviesByLanguage[language]) {
            moviesByLanguage[language] = [];
        }

        moviesByLanguage[language].push(movie);
    });

    // För featureData
    featureData.forEach(movie => {
        const language = movie.Language;

        if (!moviesByLanguage[language]) {
            moviesByLanguage[language] = [];
        }

        moviesByLanguage[language].push(movie);
    });

    return moviesByLanguage;
}
