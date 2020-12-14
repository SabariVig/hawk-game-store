import React from 'react'
import useGameStore from '../Context/GameStore'
import GamesGrid from './GamesGrid'

const GameServe = () => {
const game = useGameStore()	
console.log(game[0].url)
	return (
		<div>
			{game && <GamesGrid games={game} />}
		</div>
	)
}

export default GameServe

