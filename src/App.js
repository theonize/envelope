import React,{useEffect,useState} from 'react';
import './App.css';
import Book from "./Book";
import Selector from "./Selector";
import ChapterSelector from './ChapterSelector';

function App() {
  const [bible, setBible] = useState([])
  const [book, setBook] = useState(1)
  const [chapters, setChapters] = useState([])

  useEffect(() => {
    const url = 'https://raw.githubusercontent.com/theonize/charis/master/json/charis.json'
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setBible(data)
    })
    .catch(error=>console.error(error))
  }, [])

  useEffect(() => {
    setChapters(bible[book])
  }, [bible,book])

  return (
    <div>
      <header>
        <Selector book={book} chapters={chapters} setBook={setBook} />
        
        <ChapterSelector />
      </header>

      <Book chapters={chapters} />
    </div>
  );
}

export default App