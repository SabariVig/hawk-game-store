import React, { useState } from 'react'
import GamePageFollow from './GamePageFollow'

const GamePageMain = ({ game }) => {
	const [ height_v, setHeight ] = useState(2000)
	return (
		<div className='container px-16  mt-4 h-full w-full  '>
			<div style={{ height: height_v }} className='overflow-hidden'>
				<div className='flex flex-wrap '>
					<div style={{ fontSize: 20 }} className='w-full lg:w-1/4 fixed relative h-full  sticky'>
						About Game
					</div>
					<div style={{ fontSize: 16 }} className='w-full lg:w-3/4  h-full '>
						<div className='flex flex-wrap '>
							<div className='w-1/2 md:w-1/3 h-full  p-4'>
								Developver
								<br />
								{game.about.developer}
							</div>
							<div className='w-1/2 md:w-1/3 h-full  p-4'>
								Publisher
								<br />
								{game.about.publisher}
							</div>
							<div className='w-1/2 md:w-1/3 h-full  p-4'>
								Release Date
								<br />
								{game.about.releaseDate}
							</div>
							<div className='w-1/2 md:w-1/3 h-full  p-4'>
								Tags
								<br />
								{game.about.tags}
							</div>
							<div className='w-1/2 md:w-1/3 h-full  p-4'>
								Rating
								<br />
								{game.about.rating}
							</div>
							<div className='w-1/2 md:w-1/3 h-full  p-4'>
								Platform
								<div className='flex '>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className=' h-4 w-4 mr-4'
										viewBox='0 0 512 512'
									>
										<g>
											<path
												fill='currentColor'
												d='M0.175 256l-0.175-156.037 192-26.072v182.109zM224 69.241l255.936-37.241v224h-255.936zM479.999 288l-0.063 224-255.936-36.008v-187.992zM192 471.918l-191.844-26.297-0.010-157.621h191.854z'
											/>
										</g>
									</svg>
									{game.about.platform.includes('Mac') ? (
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className=' h-4 w-4'
											viewBox='0 0 512 512'
										>
											<g>
												<path
													fill='currentColor'
													d='M395.749 272.046c-0.647-64.841 52.879-95.938 55.271-97.483-30.076-44.010-76.925-50.039-93.621-50.736-39.871-4.037-77.798 23.474-98.033 23.474-20.184 0-51.409-22.877-84.476-22.276-43.458 0.646-83.529 25.269-105.906 64.19-45.152 78.349-11.563 194.42 32.445 257.963 21.504 31.102 47.146 66.038 80.813 64.79 32.421-1.294 44.681-20.979 83.878-20.979s50.214 20.979 84.525 20.335c34.887-0.648 56.991-31.699 78.346-62.898 24.695-36.084 34.863-71.019 35.462-72.813-0.774-0.353-68.030-26.118-68.704-103.567zM331.281 81.761c17.869-21.679 29.93-51.756 26.64-81.761-25.739 1.048-56.939 17.145-75.405 38.775-16.571 19.188-31.074 49.813-27.187 79.218 28.733 2.242 58.064-14.602 75.952-36.232z'
												/>
											</g>
										</svg>
									) : null}
								</div>
							</div>
						</div>
					</div>
					<div className='w-full lg:w-1/4 mt-8 h-full text-sm md:text-md' />
					<div style={{ fontSize: 16, color: '#6d6d6d' }} className='w-full lg:w-3/4  mt-8 h-full'>
						{game.name}
						<br />
						{game.description.long.map((line) => (
							<div key={line}>
								{line}
								<br /> <br />
							</div>
						))}
					</div>

					<div className='w-full lg:w-1/4 mt-8 h-full text-sm md:text-md ' />
					<div style={{ fontSize: 16, color: '#6d6d6d' }} className='w-full lg:w-3/4  mt-8 h-full'>
						<div className='flex flex-wrap'>
							<div className='h-full w-full  '>
								<img className='mb-8' src={`image/control-q-1.jpg`} alt='svzdv' />
							</div>
							<div className='w-full md:w-1/2 h-full  '>
								<img className='mr-8 mb-8' src={`image/control-q-2.jpg`} alt='svzdv' />
							</div>
							<div className='w-full md:w-1/2 h-full '>
								<img className='ml-0 md:ml-8 mb-8' src={`image/control-q-3.jpg`} alt='svzdv' />
							</div>
						</div>
					</div>
					<div style={{ fontSize: 20 }} className='w-full lg:w-1/4 mt-8 h-full text-sm md:text-md '>
						Follow Us
					</div>
					<div className='w-full lg:w-3/4  mt-8 h-32 bg-gray-300'>
						<GamePageFollow  game={game}/>
					</div>
				</div>
			</div>
			<button className='w-full h-24 bg-red-600 overflow-visible' onClick={() => setHeight('100%')}>
				Show More
			</button>
		</div>
	)
}

export default GamePageMain
