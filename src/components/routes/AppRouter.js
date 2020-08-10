import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import { RouteWithSubRoutes } from './routes'

const RenderRoutes = ({ routes }) => {
	return (
		<Switch>
			{routes.map((route) => {
				return <RouteWithSubRoutes key={route.key} {...route} />
			})}
			<Route component={() => <h1>Not Found!</h1>} />
		</Switch>
	)
}

RenderRoutes.propTypes = {
	routes: PropTypes.array,
}

RenderRoutes.defaultProps = {
	routes: [],
}

export default memo(RenderRoutes)
