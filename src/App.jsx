import { useState } from "react";
import "./App.css";
// import { groupMoviesByLanguage } from "./data/getDataByLanguage";
import Language from "./components/language";
import Month from "./components/releaseMonth";
import Duration from "./components/duration";
import Genre from "./components/genre";
import Search from "./components/Search";

// const moviesByLanguage = groupMoviesByLanguage();
// console.log("Filmer grupperade efter språk:", moviesByLanguage);
// const specialsByMonth = groupSpecialsByMonth();
// const featuredByMonth = groupFeatureByMonth();
// const documentariesByMonth = groupDocumentariesByMonth();
// console.log("Specials grupperade efter månad", specialsByMonth);
// console.log("Featured grupperade efter månad", featuredByMonth);
// console.log("Dokumentärer grupperade efter månad", documentariesByMonth);

function App() {
  return (
    <main>
      <Language />
      <Month />
      <Duration />
      <Genre />
      <Search />
    </main>
  );
}

export default App;
