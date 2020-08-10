import React from 'react'
// import PropTypes from 'prop-types'

import styles from './Header.module.scss'

const Header = () => {
	return (
		<div className={styles.root}>
			<img src="/games_logo.svg" alt="" />
			<a rel="noopener noreferrer" target="_blank" href="/">
				<i className="fal fa-external-link" />
			</a>
		</div>
	)
}

Header.propTypes = {}

export default Header
