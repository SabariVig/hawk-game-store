import React, { useContext } from 'react'
import { AppContext } from './../Context/AppContext'

const GamesGrid = () => {
	const { games } = useContext(AppContext)
	console.log(games)
	const url = 'image/'
	return (
		<div>
			<div className='flex flex-wrap mt-8'>
				<div className='w-full  md:w-1/2 bg-gray-400 h-full'>
					<picture>
						<source media='(min-width: 768px)' srcSet={`${url}/${games[0].url}-t.jpg`} />
						<img src={`${url}/${games[0].url}-f.jpg`} alt={games[0].name} />
					</picture>
					{games[0].name}
					{games[0].price}
					{games[0].developver}
					{games[0].publisher}
				</div>

				<div className='w-full md:w-1/2 bg-gray-500 h-full'>
					<div className='flex flex-wrap'>
						<div className='w-full mb-4 bg-blue-500 h-96'>
						{games[0].name}
					{games[0].price}
					{games[0].developver}
					{games[0].publisher}
						</div>
						<div className='w-full mt-4 bg-blue-800 h-96'>
							3rd
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GamesGrid
