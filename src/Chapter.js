import React from 'react'

function Chapter({chapter}) {
	function Verse({index,verse}) {
		return <tr>
			<td>{index}</td>
			<td>{verse}</td>
		</tr>
	}

	function Verses() {
		if (chapter) {
			return chapter.map((el,i)=>i
				?<Verse index={i} verse={el} />
				:<></>)
		} else {
			return <></>
		}
	}

	return (
		<table><tbody>
			<Verses />
		</tbody>
		</table>
	)
}

export default Chapter