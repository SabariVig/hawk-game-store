import React from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

const client = new ApolloClient({ uri: 'http://ec2-15-164-100-57.ap-northeast-2.compute.amazonaws.com:1215/' })

export default (
	<ApolloProvider client={client}>
		<BrowserRouter>
			<App className='antialiased' />
		</BrowserRouter>
	</ApolloProvider>
)
