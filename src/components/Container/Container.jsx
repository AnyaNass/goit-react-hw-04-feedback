import PropTypes from 'prop-types';
import { ContainerMain } from './Container.styled'

export const Container = ({ children }) => {
	return <ContainerMain>{children}</ContainerMain>
}

Container.propTypes = {
	children: PropTypes.node.isRequired,
}