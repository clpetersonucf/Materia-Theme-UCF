import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider, QueryCache } from 'react-query'
import SamlLoginPage from './components/saml-login-page'

const queryCache = new QueryCache()
export const queryClient = new QueryClient({ queryCache })

ReactDOM.render(<QueryClientProvider client={queryClient} contextSharing={true}>
	<SamlLoginPage />
</QueryClientProvider>, document.getElementById('app'))
