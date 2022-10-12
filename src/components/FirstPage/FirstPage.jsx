import PropTypes from 'prop-types';
import { Text } from './FirstPage.styled'

export const FirstPage = ({ text }) => {
	return <Text>{text}</Text>
}

FirstPage.propTypes = {
	text: PropTypes.string.isRequired,
}