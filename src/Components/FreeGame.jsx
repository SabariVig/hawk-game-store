import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { Link } from 'react-router-dom'


const FreeGame = () => {
	const { freeGame } = useContext(AppContext)
	// console.log(freeGame);
	const url = 'image/'
	return (
		<div>
			<div className='bg-purple_c mt-16 w-full h-full'>
				<div className='flex flex-wrap mb-4 '>
					<div className='w-full md:w-1/3 sm:w-full'>
						<div className='flex'>
							<span className=' m-4 md:m-12 text-white text-md'>
								Get a free game to play <span className='text-yellow-500'>every week</span>
							</span>
						</div>
					</div>

					{freeGame.map((game) => (
						<div key={game.id} className='w-full md:w-1/3 sm:1/2 '>
  							<Link to={`/game/${game.url}`}>
							<div className='m-4  tracking-wide'>
								<img
									className='opacity-75 hover:opacity-100'
									src={`${url}${game.url}-f.jpg`}
									alt='Free Game 1'
								/>
								<div className={`card-fg bg-${game.theme} `}>
									<span className='mx-auto my-2'>{game.available}</span>
								</div>
								<div className='text-sm text-white'>
									<h1>{game.name}</h1>
									<h1 className='font-s text-purple-600'>{game.validTill}</h1>
								</div>
							</div>
								

 						 </Link>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default FreeGame
