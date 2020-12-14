import React from 'react'
// import { Link } from 'react-router-dom';

const GamePageFollow = ({ game }) => {
	return (
		 <div className='flex flex-wrap'>
			 {game.social &&
			 <>
			<div style={{ fontSize: 20 }} className='w-full lg:w-1/4 mt-8 h-full text-sm md:text-md '>
				Follow Us
			</div>
			<div className='w-full lg:w-3/4  mt-8 h-full min-h-32 max-h-32 bg-gray-300'>
				<div>
					<div className='flex flex-wrap space-between justify-center'>
						{game.social.youtube ? (
							<div className='iconSoc'>
								<a href={game.social.youtube} rel='noopener noreferrer' target='_blank'>
									<svg className='social-ic  ' viewBox='0 0 25 18'>
										<g fill='none' fillRule='evenodd'>
											<path
												d='M12.35.14s-7.5 0-9.39.51C1.96.95 1.12 1.82.84 2.9.35 4.86.35 8.94.35 8.94s0 4.1.49 6.05a3.13 3.13 0 0 0 2.12 2.22c1.9.53 9.4.53 9.4.53s7.52 0 9.4-.52a3.06 3.06 0 0 0 2.1-2.22c.51-1.95.51-6.04.51-6.04s.01-4.1-.5-6.07a3.03 3.03 0 0 0-2.11-2.2c-1.88-.55-9.4-.55-9.4-.55zM9.97 5.17l6.24 3.77-6.25 3.76V5.17z'
												fill='currentColor'
												fillRule='nonzero'
											/>
											<path d='M-6-9h36v36H-6z' />
										</g>
									</svg>
								</a>
							</div>
						) : null}
						{game.social.instagram ? (
							<div className='iconSoc'>
								<a href={game.social.instagram}>
									<svg className='social-ic  ' fill='none'>
										<mask id='a' maskUnits='userSpaceOnUse' x='0' y='0' width='22' height='22'>
											<path d='M0 0h22v22H0V0z' fill='#fff' />
										</mask>
										<g mask='url(#a)'>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M11 0C8 0 7.64.03 6.46.08A8.12 8.12 0 0 0 3.8.58c-.73.28-1.4.71-1.94 1.27-.56.55-1 1.22-1.27 1.95C.3 4.5.12 5.3.07 6.47A76.25 76.25 0 0 0 0 11c0 2.99.01 3.36.07 4.54.05 1.17.24 1.97.5 2.67.28.73.72 1.4 1.28 1.94.54.56 1.2 1 1.94 1.27.7.28 1.5.46 2.67.51C7.64 22 8.01 22 11 22c2.98 0 3.36-.01 4.53-.07a8.12 8.12 0 0 0 2.67-.5c.73-.28 1.4-.72 1.95-1.28.56-.54.99-1.2 1.27-1.94.27-.7.45-1.5.5-2.67.06-1.18.07-1.55.07-4.54 0-2.98-.01-3.36-.06-4.53a8.1 8.1 0 0 0-.51-2.67 5.4 5.4 0 0 0-1.27-1.95C19.6 1.3 18.93.86 18.2.58c-.7-.27-1.5-.45-2.67-.5A76.82 76.82 0 0 0 11 0zM11 2c2.93 0 3.28.01 4.44.06a6.1 6.1 0 0 1 2.04.38c.52.2.88.44 1.27.82.38.39.62.75.82 1.27.15.39.33.97.38 2.04C20 7.72 20 8.06 20 11c0 2.94-.01 3.29-.06 4.45a6.1 6.1 0 0 1-.38 2.04c-.2.51-.44.88-.82 1.26a3.4 3.4 0 0 1-1.27.83 6.1 6.1 0 0 1-2.04.38c-1.16.05-1.5.06-4.44.06-2.94 0-3.29-.01-4.45-.06a6.1 6.1 0 0 1-2.04-.38 3.4 3.4 0 0 1-1.26-.83 3.4 3.4 0 0 1-.83-1.26 6.1 6.1 0 0 1-.38-2.04C2 14.29 1.98 13.94 1.98 11c0-2.93.01-3.28.06-4.44a6.1 6.1 0 0 1 .38-2.04c.2-.51.44-.88.83-1.27a3.4 3.4 0 0 1 1.26-.82 6.1 6.1 0 0 1 2.04-.38C7.71 2 8.05 2 11 2z'
												fill='#000'
											/>
										</g>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M11 14.67a3.67 3.67 0 1 1 0-7.33 3.67 3.67 0 0 1 0 7.33zm0-9.31a5.65 5.65 0 1 0-.15 11.29A5.65 5.65 0 0 0 11 5.35zm7.19-.23a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0'
											fill='#000'
										/>
									</svg>
								</a>
							</div>
						) : null}
						{game.social.discord ? (
							<div className='iconSoc'>
								<a href={game.social.discord} rel='noopener noreferrer' target='_blank'>
									<svg className='social-ic ' viewBox='0 0 26 19'>
										<g fill='none' fillRule='evenodd'>
											<path d='M-5-9h36v36H-5z' />
											<path
												d='M9.41 0c-.34 0-3.2.08-6.2 2.32C3.2 2.32 0 8.09 0 15.2c0 0 1.87 3.2 6.8 3.36 0 0 .82-.98 1.49-1.83-2.83-.85-3.9-2.6-3.9-2.6s.22.15.62.37c.03 0 .05.03.1.05l.2.11a17.07 17.07 0 0 0 4.9 1.72 15.63 15.63 0 0 0 9-.94c.77-.29 1.64-.71 2.56-1.31 0 0-1.12 1.8-4.04 2.62l1.47 1.79c4.93-.16 6.8-3.37 6.8-3.34 0-7.11-3.2-12.88-3.2-12.88C19.6-.07 16.54 0 16.54 0l-.3.36c3.78 1.13 5.54 2.8 5.54 2.8a18.52 18.52 0 0 0-6.7-2.11 18.85 18.85 0 0 0-4.5.04 17.49 17.49 0 0 0-5.44 1.45c-.83.36-1.32.62-1.32.62S5.66 1.4 9.67.26L9.45 0H9.4zm-.56 8.22c1.27 0 2.29 1.1 2.27 2.45 0 1.36-1 2.45-2.27 2.45-1.25 0-2.28-1.09-2.28-2.45s1-2.45 2.28-2.45zm8.13 0c1.24 0 2.27 1.1 2.27 2.45s-1 2.45-2.27 2.45c-1.25 0-2.28-1.09-2.28-2.45s1-2.45 2.28-2.45z'
												fill='currentColor'
												fillRule='nonzero'
											/>
											<path d='M-5-9h36v36H-5z' />
										</g>
									</svg>
								</a>
							</div>
						) : null}
						{game.social.twitter ? (
							<div className='iconSoc'>
								<a href={game.social.twitter} rel='noopener noreferrer' target='_blank'>
									<svg className='social-ic  ' viewBox='0 0 24 20'>
										<path
											d='M7.83 19.14c8.49 0 13.13-7.03 13.13-13.13l-.01-.6a9.4 9.4 0 0 0 2.3-2.39 9.21 9.21 0 0 1-2.65.73 4.63 4.63 0 0 0 2.03-2.55 9.25 9.25 0 0 1-2.93 1.12 4.62 4.62 0 0 0-7.87 4.2A13.1 13.1 0 0 1 2.32 1.7a4.62 4.62 0 0 0 1.43 6.17 4.58 4.58 0 0 1-2.1-.58v.06c0 2.2 1.55 4.09 3.7 4.52a4.6 4.6 0 0 1-2.08.08 4.62 4.62 0 0 0 4.31 3.2 9.26 9.26 0 0 1-6.83 1.92 13.07 13.07 0 0 0 7.08 2.07'
											fill='currentColor'
										/>
									</svg>
								</a>
							</div>
						) : null}
					</div>
				</div>
			</div></>}
		</div>
								)
}

export default GamePageFollow
