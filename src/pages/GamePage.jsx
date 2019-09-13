import React, { useContext } from 'react'
import CarouselComponent from './../Components/Carousel'
import '../assets/style/carousel.css'
import { AppContext } from './../Context/AppContext'
import GamePageSearch from '../Components/GamePageSearch'
import GamePageCarousel from './../Components/GamePageCarousel'

const GamePage = () => {
	const { games } = useContext(AppContext)
	return (
		<div className='bg-gray-200 pt-32'>
			<GamePageSearch game={games[1]} />
			<div className='content mt-0 mb-0'>
				{/* <CarouselComponent>
					{games[0].pics.map((picId) => (
						<div key={picId}>
							<img
								className='image-gp'
								key={picId}
								src={`image/control-q-${picId}.jpg`}
								style={{ height: 'auto', width: '100%' }}
								alt='sdcdsc'
							/>
						</div>
					))}
				</CarouselComponent> */}
				<GamePageCarousel game={games[0]}/>
				<div className='mt-12 container px-8'>
					<div class='flex flex-wrap h-full'>
						<div class='w-1/3 bg-gray-500 '>
							<img src={`image/${games[1].url}-l.png`} alt='Sdsnck' />
						</div>
						<div class='w-full md:w-1/3 bg-gray-400 '>{games[0].description.short}</div>
						<div class='w-1/3 bg-gray-500 '>
							<div>{games[0].price}</div>
							<button className='bg-red-600'>BUY NOW</button>
						</div>
					</div>
					<h1 className='text-6xl text-blue-500'>Hello</h1>
				</div>
			</div>
		</div>
	)
}

export default GamePage
