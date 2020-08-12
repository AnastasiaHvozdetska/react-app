import React from 'react'
import { useLocalStore } from 'mobx-react-lite'
import PropTypes from 'prop-types'

export const StoreContext = React.createContext()

const StoreProvider = ({ children }) => {
	const store = useLocalStore(() => ({
		bugs: ['my life'],
	}))

	return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

StoreProvider.propTypes = {
	children: PropTypes.node.isRequired,
}

export default StoreProvider
