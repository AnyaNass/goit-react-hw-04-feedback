import PropTypes from 'prop-types';

import { ButtonList, Button } from './Buttons.styled'

export const Buttons = ({ state, onClick }) => {
	return (<ButtonList>
		{[...Object.keys(state)].map(item => {
			return <li key={item}>
				<Button type="button" name={item} onClick={onClick}>{item}</Button>
			</li>
		})}
	</ButtonList>
	)
}

Buttons.propTypes = {
	state: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired,
}
