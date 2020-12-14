import React from 'react'
import useGameStore from '../Context/GameStore'
import GamesGrid from './GamesGrid'

const GameServe = () => {
const {games: game} = useGameStore()	
console.log(game)
	return (
		<div>
			{game && <GamesGrid games={game} />}
		</div>
	)
}

export default GameServe

