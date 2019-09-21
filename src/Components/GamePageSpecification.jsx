import React from 'react'

const GamePageSpecification = ({ specification }) => {
	const specs = Object.entries(specification.windows)
	specs.map((lolz) => console.log(lolz))
	return (
		<div className='flex flex-wrap'>
			<div style={{ fontSize: 20 }} className='w-full lg:w-1/4 mt-8 h-full text-sm md:text-md  '>
				Specification
			</div>
			<div className='flex flex-wrap w-full lg:w-3/4  mt-8 h-full min-h-32 bg-gray-300 pb-8'>
				<div className='flex text-sm font-b border-b-2 border-orange-200 uppercase xs:text-xs'>
					<div className=''>
						<div className='border-b-4 border-gray-900 m-3 mb-0 p-4'>Windows</div>
					</div>
					{specification.mac && (
						<div>
							<div className='border-b-4 hover:border-gray-900 m-3 mb-0 p-4'>Mac</div>
						</div>
					)}
				</div>
				<div style={{ fontSize: 16 }} className='flex w-full text-gray-600 mb-2  mt-4 p-6 px-12 '>
					<div className='w-1/2 '>Minimum</div>
					{<div className='w-1/2 '>Recommended</div>}
				</div>
				{specs.map((spec) => (
					<div key={spec[0]} className='text-xs md:text-sm  w-full  h-full p-6 px-12'>
						<div style={{ fontSize: 16 }} className='flex text-gray-600 mb-2  '>
							<div className='w-1/2 '>{spec[1][2]}</div>
							{<div className='w-1/2 '>{spec[1][2]}</div>}
						</div>
						<div className='flex flex-wrap'>
							<div className='w-1/2 pr-12'>{spec[1][0]}</div>
							<div className='w-1/2'>{spec[1][1]}</div>
						</div>
					</div>
				))}

				{specification.additionalFeature && (
					<div className='w-full h-full p-3 px-12'>
						<div style={{ fontSize: 16 }} className='text-sm text-gray-600 mb-2'>
							Additional Features
						</div>
						<div className='text-sm'>{specification.additionalFeature}</div>
					</div>
				)}

				{specification.languageSupport && (
					<div className='w-full h-full p-3 px-12'>
						<div style={{ fontSize: 16 }} className='text-sm text-gray-600 mb-2'>
							Languages Supported
						</div>
						<div className='text-sm'>{specification.languageSupport}</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default GamePageSpecification
