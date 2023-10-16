import { useState } from 'react'
import './App.css'
import { groupMoviesByLanguage } from './data/getData'
import Language from './components/language';

const moviesByLanguage = groupMoviesByLanguage();
console.log('Filmer grupperade efter språk:', moviesByLanguage);

function App() {
  return (
    <main>
      <Language />
    </main>
  )
}

export default App
