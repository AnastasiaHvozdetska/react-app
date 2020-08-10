import React from 'react'
import { ROUTES } from './routes/routes'
import RenderRoutes from './routes/AppRouter'
import Header from './common/Header'

import styles from '../App.module.scss'

const App = () => {
	return (
		<div className={styles.app}>
			<Header />
			<RenderRoutes routes={ROUTES} />
		</div>
	)
}

export default App
