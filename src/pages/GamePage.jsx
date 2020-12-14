import React, { useContext } from 'react'
import '../assets/style/carousel.css'
import { AppContext } from './../Context/AppContext'
import GamePageSearch from '../Components/GamePageSearch'
import GamePageCarousel from './../Components/GamePageCarousel'
import GamePageDescription from './../Components/GamePageDescription'
import GamePageAbout from './../Components/GamePageAbout'
import GamePageFollow from '../Components/GamePageFollow'
import GamePageSpecification from '../Components/GamePageSpecification'
import useGameStore from '../Context/GameStore'

const GamePage = ({ match: { params } }) => {
	console.log(params)
	const gameList = useGameStore()
	let games = gameList.filter(game=> game.url === params.gamename)
	games = games[0]
	console.log(games)

	return (
		<div style={{ background: '#f5f5f5' }} className=' pt-20'>
			<GamePageSearch game={games} />
			<div className='content mt-0 mb-0'>
				<GamePageCarousel game={games} />
				<div className='container px-16'>
					<GamePageDescription game={games} />
					<GamePageAbout game={games} />
					<GamePageFollow game={games} />
					<GamePageSpecification specification={games.specification} />
				</div>

				<h1 className='text-6xl text-blue-500'>Hello</h1>
			</div>
		</div>
	)
}

export default GamePage
