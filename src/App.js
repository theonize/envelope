import React,{useEffect,useState} from 'react';
import './App.css';
import BibleText from './charis.json'
import Book from "./Book";
import BookSelector from "./BookSelector";

function App() {
  const [bible, setBible] = useState([])
  const [book, setBook] = useState(1)
  const [chapters, setChapters] = useState([])

  useEffect(() => {
    setBible(BibleText)
  }, [])

  useEffect(() => {
    setChapters(bible[book])
  }, [bible,book])

  return (
    <div>
      <header>
        <BookSelector book={book} setBook={setBook} />
        <Book chapters={chapters} />
      </header>
    </div>
  );
}

export default App