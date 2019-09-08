import React from 'react'

const GamesGrid = () => {
	return (
		<div>
			<div class='flex flex-wrap mt-16'>
				<div class='inline w-full h-96 md:w-1/2 bg-gray-400 md:h-200' >1st </div>
				<div class='inline w-full md:w-1/2 bg-gray-500 h-200'>
					<div className='flex flex-wrap'>
						<div className='w-full mb-8 bg-blue-500 h-96' >2nd</div>
						<div className='w-full bg-blue-800 h-96' >3rd</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GamesGrid
