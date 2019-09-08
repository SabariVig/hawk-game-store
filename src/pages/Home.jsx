import React from 'react'
import SearchBox from '../Components/SearchBox'
import FreeGame from '../Components/FreeGame'
import GamesGrid from '../Components/GamesGrid'

const Home = () => {
	return (
		<div>
			<div className='container px-4'>
				<SearchBox />
				<FreeGame />
				<GamesGrid />

				<h1 className='text-4xl m-16 text-blue-200'>Hello World</h1>
			</div>
		</div>
	)
}

export default Home
