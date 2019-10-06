import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
// import { AppContext } from '../Context/AppContext'

const GameRouter = ({ match: { params } }) => {


	 const {data,networkStatus}=useQuery(GETGAME)
	 console.log(data,networkStatus)
	return (
		
		<div className='text-6xl text-white mt-12'>
			Hi
      {params.gamename}
	  {data && data.getGames.map(game=>(<h1 key={game.name}>{game.name}</h1>))}
	  
		</div>
	)
}


export default GameRouter
const GETGAME = gql`
	query lol {
		getGames {
			name
			price
			about {
				publisher
			}
		}
	}
`