import React, { useContext } from 'react'
import { AppContext } from './../Context/AppContext'

const GamesGrid = () => {
	const { games } = useContext(AppContext)
	console.log(games)
	const url = 'image/'
	return (
		<div>
			<div className='flex flex-wrap mt-8'>

				<div className='w-full md:w-1/2 bg-gray-400'>
					<div className="">
						<picture className="">
							<source media='(min-width: 768px)' srcSet={`${url}/${games[0].url}-t.jpg`} />
							<img src={`${url}/${games[0].url}-f.jpg`} alt={games[0].name} />
						</picture>
						<div className='text-xs'>
							{games[0].name}
							<br></br>
							{games[0].price}
							{games[0].about.developer}
							{games[0].about.publisher}
						</div>
					</div>
				</div>

				<div className='w-full md:w-1/2 bg-gray-500 '>
					<div className=''>
						<div style={{height:"50%" }}className='w-full  bg-blue-500 '>
							<img src={`${url}/${games[1].url}-f.jpg`} alt={games[1].name} />
							<div className="text-xs">
								{games[1].name}
								<br></br>
								{games[1].price}
								{games[1].about.developer}
								{games[1].about.publisher}
							</div>
						</div>
						<div style={{height:"50%" }} className='w-full bg-blue-800 '>
							<img  src={`${url}/${games[2].url}-f.jpg`} alt={games[2].name} />
							<div className="text-xs">
								{games[2].name}
								<br></br>
								{games[2].price}
								{games[2].about.developer}
								{games[2].about.publisher}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GamesGrid
