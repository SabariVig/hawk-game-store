import React  from 'react'
import { Link } from 'react-router-dom'


const GamePageSearch = ({game}) => {
    console.log(game)
    return (
        <div>
            <div style={{ marginLeft: '16%', marginRight: '16%' }} className='mb-4 text-sm hidden lg:flex '>
				<Link className='flex' to='/'>
					<svg style={{ marginTop: 7 }} className='mr-1 item-center' width='5' height='9' fill='none'>
						<path d='M4 8L1 4.5 4 1' stroke='#000' />
					</svg>
					<h1 className='text-gray-500 hover:text-gray-900 mr-4'>Go To Store</h1>
				</Link>
				|
				<h1 className='ml-4'>{game.name}</h1>
			</div>
        </div>
    )
}

export default GamePageSearch
