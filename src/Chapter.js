import React, { useRef } from 'react'

function Chapter({ chapter }) {
	function Verse({ index, verse }) {
		const tooltipId = `tooltip_${chapter}_${verse}`

		function hideTooltip(event) {
			document.getElementById(tooltipId).style.display = 'none'
		}	
		function showTooltip(event) {
			document.getElementById(tooltipId).style.display = 'inline'
		}	

		return <>
			<span className="verse tooltip" id={tooltipId}>{index}</span>
			<span
				data-index={index}
				key={index}
				onMouseOut={hideTooltip}
				onMouseOver={showTooltip}
				onClick={showTooltip}
			>
				{verse}&nbsp;&nbsp;
			</span>
		</>
	}

	function Verses() {
		if (chapter) {
			return chapter.map((el, i) => {
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