import React from 'react'

function Chapter({chapter}) {
	function Verse({index,verse}) {
		return <span
			data-index={index}
			key={index}
		>
			{verse}&nbsp;&nbsp;
		</span>
	}

	function Verses() {
		if (chapter) {
			return chapter.map((el,i)=>{
				if (i) return <Verse index={i} key={i} verse={el} />
			})
		} else {
			return <></>
		}
	}

	return (
		<div>
			<Verses />
		</div>
	)
}

export default Chapter