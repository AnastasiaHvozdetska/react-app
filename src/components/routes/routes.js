import React from 'react'
import { Route } from 'react-router-dom'

export const ROUTES = [
	{ path: '/', key: 'ROOT', exact: true, component: () => <h1>Log in</h1> },
	{
		path: '/app',
		key: 'APP',
		component: () => <h1>App</h1>,
		routes: [
			{
				path: '/app',
				key: 'APP_ROOT',
				exact: true,
				component: () => <h1>App Index</h1>,
			},
			{
				path: '/app/page',
				key: 'APP_PAGE',
				exact: true,
				component: () => <h1>App Page</h1>,
			},
		],
	},
]

export const RouteWithSubRoutes = (route) => {
	return (
		<Route
			path={route.path}
			exact={route.exact}
			render={(props) => <route.component {...props} routes={route.routes} />}
		/>
	)
}
