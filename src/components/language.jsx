import React, { useState, useEffect } from 'react';
import { groupMoviesByLanguage } from '../data/getData';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Language = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        // Hämta data från groupMoviesByLanguage när komponenten monteras
        const moviesByLanguage = groupMoviesByLanguage();
        
        // Skapa en array av objekt med språk och antal filmer
        const languageData = Object.keys(moviesByLanguage).map(language => ({
            language: language,
            count: moviesByLanguage[language].length,
        }));

        languageData.sort((a, b) => b.count - a.count) 
        
        // Skapa labels och dataset för Pie chart
        const labels = languageData.map(item => `${item.language} (${item.count})`);
        const datasetData = languageData.map(item => item.count);

        const colors = ["#051200", "#79D61B", "#ECEFE8"]
        
        const chartData = {
            labels: labels,
            datasets: [{
                label: 'Number of movies',
                data: datasetData,
                backgroundColor: colors,
                borderWidth: 0,
                borderRadius: 1
            }]
        };
        
        setData(chartData);
    }, []);

    // Kontrollera om "data" är tomt innan du försöker rita Pie-chart
    if (Object.keys(data).length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <section>
            <h2>Movies by language!</h2>
            <Pie data={data} />
        </section>
    );
}

export default Language;
