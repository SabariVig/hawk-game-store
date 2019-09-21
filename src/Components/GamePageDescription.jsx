import React from 'react'

const GamePageDescription = ({ game }) => {
	return (
		<div>
			<div className='   mt-4'>
				<div style={{ fontSize: 18 }} className='flex flex-wrap h-full justify-center items-center border-b-2 '>
					<div className='w-1/3 md:w-1/4  '>
						<div className='sm:block hidden bg-gray-300 p-8 '>
							<img src={`image/${game.url}-l-i.png`} width='220' alt='Sdsnck' />
						</div>
					</div>
					<div className='w-full sm:w-2/3 md:w-2/4 '>
						<h1 className='text-center '>{game.description.short}</h1>
					</div>
					<div className=' w-full md:w-1/4  '>
						<div className='flex flex-wrap m-4 justify-end'>
							<div>{game.price}</div>
							<button className='bg-red-600 block w-full m-2 p-2 px-4 text-white'>BUY NOW</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GamePageDescription
