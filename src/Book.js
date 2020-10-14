import React,{useEffect,useState} from 'react'
import Chapter from "./Chapter";

function Book({chapters}) {
	const [chapter, setChapter] = useState(1)
	const [verses, setVerses] = useState([])


	useEffect(() => {
		if (chapters) setVerses(chapters[chapter])
		// console.log('book',chapters)
	}, [chapters,chapter])

	// useEffect(() => {
	// 	console.log('verses',verses)
	// }, [verses])


	function ChapterRows() {
		if (chapters) {
			return chapters.map((el,i)=>i
				?<tr id={`chapter_${i}`}>
					<td>
						{i}
					</td>
					<td>
						<Chapter chapter={chapters[i]} key={i} />
					</td>
				</tr>
				:<></>)
		} else{
			return <></>
		}
	}

	return (
		<div>
			<table><tbody>
				<ChapterRows />
			</tbody></table>
		</div>
	)
}

export default Book