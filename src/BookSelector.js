import React,{useEffect,useRef,useState} from 'react'
import bookData from './books.json'

function BookSelector({book, setBook}) {
	const selectable = useRef(null)
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

	function selectBook(index) {
		return function(event) {
			setBook(index)
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
		<button onClick={toggleSelector}>Select a Book</button>

		<div className="book selector" ref={selectable}>
			{books.map((el,I)=><BookSelector index={I} name={el} />)}
		</div>
	</>)
}

export default BookSelector