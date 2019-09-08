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
	return <AppContext.Provider value={{ freeGame, setFreegame }}>{props.children}</AppContext.Provider>
}
