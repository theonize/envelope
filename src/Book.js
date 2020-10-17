import React,{useEffect,useState} from 'react'
import Chapter from "./Chapter";

function Book({chapters}) {
	const [chapter, ] = useState(1)
	const [, setVerses] = useState([])


	useEffect(() => {
		if (chapters) setVerses(chapters[chapter])
	}, [chapters,chapter])

	function ChapterRows() {
		if (chapters) {
			return chapters.map((el,i)=>{
				if (i) {
					return <tr key={i} id={`chapter_${i}`}>
						<td>
							{i}
						</td>
						<td>
							<Chapter chapter={chapters[i]} key={i} />
						</td>
					</tr>
				}
			})
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