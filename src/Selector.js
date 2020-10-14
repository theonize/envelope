import React,{useEffect,useRef,useState} from 'react'
import bookData from './books.json'

function BookSelector({book, chapters=[], setBook}) {
	const selectable = useRef(null)

	const [bookName, setBookName] = useState('Select a Book')
	const [books, setBooks] = useState([])
	const [show, setShow] = useState(false)

	useEffect(() => {
  //   const url = 'https://raw.githubusercontent.com/theonize/charis/master/json/books.json'
  //   fetch(url)
  //   .then(res=>res.json())
  //   .then(data=>{
  //     setBooks(data)
  //   })
	//   .catch(error=>console.error(error))
		setBooks(bookData)
	}, [])

	function ChapterLink({index}) {
		function clickHandler(event) {
			const links = document.querySelectorAll('.chapter.link')
			
			links.forEach(el => el.classList.remove('highlight'))
			event.target.classList.add('highlight')
			toggleSelector()
		}

		if (index) return <a 
			className="chapter link"
			href={`#chapter_${index}`}
			id={`chapter_link_${index}`}
			onClick={clickHandler}
		>{index}</a>
		else return <></>
	}


	function selectBook(index) {
		return function(event) {
			setBook(index)
			setBookName(books[index])
			toggleSelector()
		}
	}

	function BookSelector({index,name}) {
		if (index) {
			const classes = ['book','selection']
			
			if (index === book) classes.push('highlight')

			return <span
				className={classes.join(' ')}
				key={index}
				onClick={selectBook(index)}
			>{name}</span>
		} else {
			return <></>
		}
	}

	function toggleSelector() {
		if (show) {
			selectable.current.style.display = 'flex'
			setShow(false)
			console.log('unshow',selectable)
		} else {
			selectable.current.style.display = 'none'
			setShow(true)
			console.log('show')
		}

	}

	return (<>
		<button onClick={toggleSelector}>{bookName}</button>

		<div ref={selectable}>
			<div className="book selector">
				{books.map((el,I)=><BookSelector index={I} name={el} />)}
			</div>

			<div className="chapter selector">
				{chapters ? chapters.map((el,I)=><ChapterLink key={I} index={I} />) : ''}
			</div>
		</div>
	</>)
}

export default BookSelector