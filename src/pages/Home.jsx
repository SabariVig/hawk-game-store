import React from 'react'
import SearchBox from '../Components/SearchBox'
import FreeGame from '../Components/FreeGame'
// import { AppContext } from './../Context/AppContext'
import GameServe from './../Components/GameServe'

const Home = () => {
	// const { gamedata } = useContext(AppContext)
	// console.log(gamedata)
	return (
		<div>
			<div className='container px-8'>
				<SearchBox />
				<FreeGame />
				<GameServe />
				
				<h1 className='text-4xl m-16 text-blue-200'>Hello World</h1>
			</div>
		</div>
	)
}

export default Home
