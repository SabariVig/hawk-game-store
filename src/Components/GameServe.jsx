import React,{ useState} from 'react'
import GamesGrid from './GamesGrid'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import InfiniteScroll from 'react-infinite-scroller';

const game=[]
const GameServe = () => {
	const [skip,setSkip]=useState(0)
	const { data, fetchMore, loading } = useQuery(GETGAME, { variables: { skip } })
	const  size = useQuery(GETSIZE)

	
	// console.log(!((size.data.getGamesSize-(skip+3))<2))
	return (
		<div>
			{size.data && <InfiniteScroll
                pageStart={0}
				loadMore={() =>
					fetchMore(
						{
							query:GETGAME,
							variables: {
								skip
							},
							updateQuery: (prev, { fetchMoreResult }) => {
							setSkip(skip+3)
							// console.log(fetchMoreResult)
							if (!fetchMoreResult) return prev
							return Object.assign({}, prev, {
								getGamesPage: [...prev.getGamesPage, ...fetchMoreResult.getGamesPage]
							  });
							
						}
						
					}
					
					)}
                hasMore={!((size.data.getGamesSize-(skip+3))<2)}
                loader={<h1 className="text-white text-6xl">Loading...</h1>}>
					{console.log(game)}
			{game.map(getGame=>(<GamesGrid games={getGame} />))}
				
            </InfiniteScroll>}

			{/* {game.map(getGame=>(<GamesGrid games={getGame} />))} */}

		</div>
	)
}

export default GameServe

const GETGAME = gql`
	query lol($skip: Int!) {
		getGamesPage(skip: $skip) {
			name
			price
			url
			about {
				publisher
				developer
			}
		}
	}
`


const GETSIZE = gql`
	query size{
		getGamesSize
	}
`
