import React, { useContext } from 'react'
import '../assets/style/carousel.css'
import { AppContext } from './../Context/AppContext'
import GamePageSearch from '../Components/GamePageSearch'
import GamePageCarousel from './../Components/GamePageCarousel'
import GamePageDescription from './../Components/GamePageDescription'
import GamePageAbout from './../Components/GamePageAbout'
import GamePageFollow from '../Components/GamePageFollow'
import GamePageSpecification from '../Components/GamePageSpecification'

const GamePage = () => {
	const { games } = useContext(AppContext)
	return (
		<div style={{ background: '#f5f5f5' }} className=' pt-20'>
			<GamePageSearch game={games[1]} />
			<div className='content mt-0 mb-0'>
				<GamePageCarousel game={games[1]} />
				<div className='container px-16'>
					<GamePageDescription game={games[1]} />
					<GamePageAbout game={games[1]} />
					<GamePageFollow game={games[1]} />
					<GamePageSpecification specification={games[0].specification} />
				</div>

				<h1 className='text-6xl text-blue-500'>Hello</h1>
			</div>
		</div>
	)
}

export default GamePage
