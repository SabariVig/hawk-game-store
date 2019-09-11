import React, { useState, createContext } from 'react'

export const AppContext = createContext()

export const AppProvider = (props) => {
	const [ freeGame, setFreegame ] = useState([
		{
			id: 1,
			name: 'The End Is Nigh & Abuz',
			validTill: 'Free Now-Sep 12',
			url: 'free-game-c.jpg',
			available: 'Free Now',
			theme: 'primary'
		},
		{
			id: 2,
			name: 'Cornatium',
			validTill: 'Free Sep 12 -Sep 19',
			url: 'free-game-f.jpg',
			available: 'Comming Soon',
			theme: 'black'
		}
	])
	const [ games, setGames ] = useState([
		{
			name: "Borderlands 3",
			price: '$44.99',
			url:"borderland-3",
			pics:[1,2,3,4,5,6,7],
			about: {
				developer: 'Gearbox Software',
				publisher: '2K',
				releaseDate: 'Sep 13, 2019',
				tags: [ 'Co-op', 'RPGFPS' ],
				rating: 'MATURE 17+',
				platform: 'Windows'
			},
			specification: {
				minimum: {
					OS: 'Windows 7/10 (latest service pack)',
					processor: 'AMD FX-8350 (Intel i5-3570)',
					graphicCard: 'AMD Radeon™ HD 7970 (NVIDIA GeForce GTX 680 2GB)',
					ram: '6 GB RAM',
					storage: '75 GB'
				},
				recomended: {
					OS: 'Windows 7/10 (latest service pack)',
					processor: 'AMD Ryzen™ 5 2600 (Intel i7-4770)',
					graphicCard: 'AMD Radeon™ RX 590 (NVIDIA GeForce GTX 1060 6GB)',
					ram: '16 GB',
					storage: '75 GB'
				},
				addiitionalFeature: ''
			},
			languageSupport:
				'Audio: English, French, Italian, German, Spanish, Japanese, Korean, Simplified Chinese - Text: Russian, Portuguese (Brazilian)'
		},{
			name: 'Control',
			price: '$22.99',
			url:"control",
			about: {
				developer: 'Remedy Entertainment',
				publisher: '505 Games | Huya',
				releaseDate: 'Aug 27, 2019',
				tags: [ 'Action', 'Supernatural' ],
				rating: 'Mature 17+',
				platform: 'Windows'
			},
			specification: {
				minimum: {
					OS: 'Windows 7, 64-bit',
					processor: 'Intel Core i5-4690 / AMD FX 4350',
					graphicCard: 'NVIDIA GeForce GTX 780 / AMD Radeon R9 280X',
					ram: '8 GB',
					dx: 'DX 11'
				},
				recomended: {
					OS: 'Windows 10, 64-bit',
					processor: 'Intel Core i5-7600K / AMD Ryzen 5 1600X',
					graphicCard:
						'NVIDIA GeForce GTX 1660/1060 / AMD Radeon RX 580 AMD | For Ray Tracing: GeForce RTX 2060',
					ram: '16 GB',
					dx: 'DX11 / DX12'
				},
				addiitionalFeature:
					'Widescreen support 21:9 / Remappable controls / Uncapped frame-rate / G-Sync / Freesync support'
			},
			languageSupport:
				'Voice: English French German Spanish Text: Polish, Italian, Arabic, Russian, Portuguese, Korean, Traditional Chinese, Standard ChineseComing Autumn 2019: Japanese'
		},
		{
			name: 'WRC 8 FIA World Rally Championship',
			price: '$18.99',
			url:"WRC8",
			about: {
				developer: 'KT Racing',
				publisher: 'Bigben Interactive',
				releaseDate: 'Sep 05, 2019',
				tags: [ 'Racing', 'Multiplayer' ],
				rating: 'PEGI 3',
				platform: 'Windows'
			},
			specification: {
				minimum: {
					OS: 'Windows 7, 64-bit',
					processor: 'Intel Core i3-2100 or AMD FX-4350',
					graphicCard: 'Nvidia GeForce GTX 650 2GB or ATI Radeon HD 5870 2GB',
					ram: '6 GB RAM',
					dx: 'DX 11',
					storage: '19 GB',
					soundCard: 'DirectX Compatible Soundcard'
				},
				recomended: {
					OS: 'Windows 10, 64-bit',
					processor: 'Intel Core i5-6600 or AMD Ryzen 5 1600',
					graphicCard: 'Nvidia GeForce GTX 1060 3GB or Radeon RX 580 4GB',
					ram: '16 GB',
					dx: 'DX11 / DX12',
					storage: '19 GB',
					soundCard: 'DirectX Compatible Soundcard'
				},
				addiitionalFeature: ''
			},
			languageSupport:
				'Voice & Text: English, French, Italian, German, Spanish, Japanese, Simplified Chinese Text Only: Korean, Polish, Russian, Traditional Chinese'
		},
		
		{
			name: 'Apex Legends',
			price: 'FREE',
			url:"",
			about: {
				developer: 'Respawn Entertainment',
				publisher: 'EA',
				releaseDate: 'Aug 27, 2019',
				tags: [ 'FPS','Battle Royale' ],
				rating: 'Mature 17+',
				platform: 'Windows'
			},
			specification: {
				minimum: {
					OS: 'Windows 7, 64-bit',
					processor: 'Intel Core i5-4690 / AMD FX 4350',
					graphicCard: 'NVIDIA GeForce GTX 780 / AMD Radeon R9 280X',
					ram: '8 GB',
					dx: 'DX 11'
				},
				recomended: {
					OS: 'Windows 10, 64-bit',
					processor: 'Intel Core i5-7600K / AMD Ryzen 5 1600X',
					graphicCard:
						'NVIDIA GeForce GTX 1660/1060 / AMD Radeon RX 580 AMD | For Ray Tracing: GeForce RTX 2060',
					ram: '16 GB',
					dx: 'DX11 / DX12'
				},
				addiitionalFeature:
					'Widescreen support 21:9 / Remappable controls / Uncapped frame-rate / G-Sync / Freesync support'
			},
			languageSupport:
				'Voice: English French German Spanish Text: Polish, Italian, Arabic, Russian, Portuguese, Korean, Traditional Chinese, Standard ChineseComing Autumn 2019: Japanese'
		},
	])
	return <AppContext.Provider value={{ freeGame, setFreegame,games,setGames }}>{props.children}</AppContext.Provider>
}
