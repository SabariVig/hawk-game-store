import React, { useContext } from 'react'
import '../assets/style/carousel.css'
import { AppContext } from './../Context/AppContext'
import GamePageSearch from '../Components/GamePageSearch'
import GamePageCarousel from './../Components/GamePageCarousel'
import GamePageDescription from './../Components/GamePageDescription'
import GamePageMain from './../Components/GamePageMain'

const GamePage = () => {
	const { games } = useContext(AppContext)
	return (
		<div style={{ background: '#f5f5f5' }} className=' pt-20'>
			<GamePageSearch game={games[1]} />
			<div className='content mt-0 mb-0'>
				<GamePageCarousel game={games[1]} />
				<GamePageDescription game={games[1]} />
				<GamePageMain game={games[1]}/>

				<h1 className='text-6xl text-blue-500'>Hello</h1>
			</div>
		</div>
	)
}

export default GamePage
