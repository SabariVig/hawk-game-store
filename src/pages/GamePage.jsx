import React ,{useContext} from 'react'
import CarouselComponent from './../Components/Carousel'
import '../assets/style/carousel.css'
import { AppContext } from './../Context/AppContext';

const GamePage = () => {
	const {games} = useContext(AppContext)
	return (
		<div className=' bg-gray-200'>
			<div className='content'>
				<CarouselComponent >
					{/* <div>
						<img src='https://picsum.photos/id/757/1920/2080' height="150px" alt="kshbhjsa" />
					</div>
					<div>
						<img src='https://picsum.photos/id/74/1920/2800' alt="kshbhjsa" />
					</div>
					<div>
						<img src='https://picsum.photos/id/449/1920/2800' alt="kshbhjsa" />
					</div> */}
						{games[0].pics.map(picId =>(<div key={picId}>
							<img className="image-gp" key={picId} src={`image/control-q-${picId}.jpg`} style={{height: "auto" ,width: "100%" }} alt="sdcdsc"/>
							
						</div>))}
						
			
				</CarouselComponent>
			</div>

			<h1 className='text-6xl text-white'>Hello</h1>
		</div>
	)
}

export default GamePage
