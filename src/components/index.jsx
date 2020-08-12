import React, { useContext } from 'react'
import { ROUTES } from './routes/routes'
import RenderRoutes from './routes/AppRouter'
import Header from './common/Header'
import styles from '../App.module.scss'
import { StoreContext } from '../provider'

const App = () => {
	const store = useContext(StoreContext)
	// console.log(store, 'store')
	return (
		<div className={styles.app}>
			<Header />
			<RenderRoutes routes={ROUTES} />
			{store.bugs[0]}
		</div>
	)
}

export default App
