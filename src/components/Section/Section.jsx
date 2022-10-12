import PropTypes from 'prop-types';
import { SectionTag, Title } from './Section.styled'

export const Section = ({ title, children }) => {
	return (<SectionTag>
		<Title>{title}</Title>
		{children}
	</SectionTag>)
}

Section.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
}