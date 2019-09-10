import React, { useContext } from 'react'
import { AppContext } from './../Context/AppContext'

const GamesGrid = () => {
	const { games } = useContext(AppContext)
	console.log(games)
	const url = 'image/'
	return (
		<div>
			<div className='flex flex-wrap mt-8'>
				<div className='w-full md:w-1/2 '>
					<div className="mb-0 bg-gray_c_card">
						<div style={{ position: 'relative', left: 0, top: 0 }}>
							<picture>
								<source media='(min-width: 768px)' srcSet={`${url}${games[0].url}-t.jpg`} />
								<img src={`${url}${games[0].url}-f.jpg`} alt='scd'style={{ position: 'relative', top: 0, left: 0 }}	loading='lazy'/>
							</picture>
							<img
								src={`${url}${games[0].url}-l.png`}
								alt='dscds'
								style={{ position: 'absolute', top: '35%', left: '28%', width: '45%' }}
							/>
						</div>
						<div className='text-sm text-white p-2  '>
							<div className="m-1">
								<span className="font-b">{games[0].name}</span>
							<div className="flex  content-end">
								<div className="w-2/3 w-full">
									<span >{games[0].about.publisher} | {games[0].about.developer}</span>
								</div>
								<div className="w-2/2  float-right" >
									<span className=" font-b">{games[0].price}</span>
								</div>
							</div>
							</div>
						</div>
					</div>
				</div>

				<div className='w-full md:w-1/2  '>
					<div>
						<div style={{ height: '50%' }} className='w-full  '>
							<div className="xs:m-0 md:m-5 xs:mt-3 md:mt-0 bg-gray_c_card">
								<div className='relative top-0 left-0'>
									<img
										src={`${url}/${games[1].url}-f.jpg`}
										className='relative top-0 left-0'
										alt='scd'
										loading='lazy'
									/>
									<img
										src={`${url}/${games[1].url}-l.png`}
										alt='Logo'
										style={{ position: 'absolute', top: '35%', left: '28%', width: '45%' }}
									/>
								</div>
								<div className='text-sm text-white p-2  '>
							<div className="">
								<span className="font-b">{games[1].name}</span>
							<div className="flex  content-end">
								<div className="w-2/3 w-full">
									<span >{games[1].about.publisher} | {games[1].about.developer}</span>
								</div>
								<div className="w-2/2  float-right" >
									<span className=" font-b">{games[1].price}</span>
								</div>
							</div>
							</div>
						</div>
							</div>
						</div>
						<div style={{ height: '50%' }} className='w-full'>
						<div className="xs:m-0 md:m-5 xs:mt-3 md:mt-0 bg-gray_c_card">
							<div className='relative top-0 left-0'>
								<img
									src={`${url}/${games[2].url}-f.jpg`}
									className='relative top-0 left-0'
									alt='scd'
									loading='lazy'
								/>
								<img
									src={`${url}/${games[2].url}-l.png`}
									alt='Logo'
									style={{ position: 'absolute', top: '35%', left: '28%', width: '45%' }}
								/>
							</div>
							<div className='text-sm text-white p-2  '>
							<div className="">
								<span className="font-b">{games[2].name}</span>
							<div className="flex content-end">
								<div className="w-2/3 w-full">
									<span >{games[2].about.publisher} | {games[2].about.developer}</span>
								</div>
								<div className="w-2/2  float-right" >
									<span className=" font-b">{games[2].price}</span>
								</div>
							</div>
							</div>
						</div>
						</div>
						</div>
					</div>
				</div>
			</div>

			{/* skdjbcsaudbcusBcks DIviding  ,ashV,S.KCJKJSBC */}

			{/* <div className='flex flex-wrap mt-8'>
				<div className='w-full md:w-1/2 bg-gray-400'>
					<div>
						<div style={{ position: 'relative', left: 0, top: 0 }}>
							<picture>
								<source media='(min-width: 768px)' srcSet={`${url}${games[0].url}-t.jpg`} />
								<img
									src={`${url}${games[0].url}-f.jpg`}
									alt='scd'
									style={{ position: 'relative', top: 0, left: 0 }}
									loading='lazy'
								/>
							</picture>
							<img
								src={`${url}${games[0].url}-l.png`}
								alt='dscds'
								style={{ position: 'absolute', top: '35%', left: '28%', width: '45%' }}
							/>
						</div>
						<div className='text-xs'>
							{games[0].name}
							<br />
							{games[0].price}
							{games[0].about.developer}
							{games[0].about.publisher}
						</div>
					</div>
				</div>

				<div className='w-full md:w-1/2 bg-gray-500 '>
					<div style={{ height: '50%' }} className='w-full  bg-blue-500 '>
						<div className='relative top-0 left-0'>
							<img
								src={`${url}/${games[1].url}-f.jpg`}
								className='relative top-0 left-0'
								alt='scd'
								loading='lazy'
							/>
							<img
								src={`${url}/${games[1].url}-l.png`}
								alt='Logo'
								style={{ position: 'absolute', top: '35%', left: '28%', width: '45%' }}
							/>
						</div>

						<div className='text-xs'>
							{games[1].name}
							<br />
							{games[1].price}
							{games[1].about.developer}
							{games[1].about.publisher}
						</div>

						<div style={{ height: '50%' }} className='bg-blue-800 '>
							<div style={{ position: 'relative', left: 0, top: 0 }}>
								<img
									src={`${url}/${games[2].url}-f.jpg`}
									alt='scd'
									style={{ position: 'relative', top: 0, left: 0 }}
									loading='lazy'
								/>
								<img
									src={`${url}/${games[2].url}-l.png`}
									alt='Logo'
									style={{ position: 'absolute', top: '35%', left: '28%', width: '45%' }}
								/>
							</div>
							<div className='text-xs'>
								{games[2].name}
								<br />
								{games[2].price}
								{games[2].about.developer}
								{games[2].about.publisher}
							</div>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	)
}

export default GamesGrid
