import React from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

const client = new ApolloClient({ uri: 'http://localhost:1215' })

export default (
	<ApolloProvider client={client}>
		<BrowserRouter>
			<App className='antialiased' />
		</BrowserRouter>
	</ApolloProvider>
)
