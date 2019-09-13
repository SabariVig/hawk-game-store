import React from 'react'
import CarouselComponent from './Carousel';
const GamePageCarousel = ({game}) => {
	return (
		<div>
			<div className='content mt-0 mb-0'>
            <CarouselComponent>
					{game.pics.map((picId) => (
						<div key={picId}>
							<img
								className='image-gp'
								key={picId}
								src={`image/control-q-${picId}.jpg`}
								style={{ height: 'auto', width: '100%' }}
								alt='sdcdsc'
							/>
						</div>
					))}
				</CarouselComponent>
                </div>
		</div>
	)
}

export default GamePageCarousel
