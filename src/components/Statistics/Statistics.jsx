import PropTypes from 'prop-types';
import { StatisticsList, ListItem, ListItemTitle, FeedbackAmount } from './Statistics.styled'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
	return (<StatisticsList>
		<ListItem><ListItemTitle>Good:</ListItemTitle><FeedbackAmount>{good}</FeedbackAmount></ListItem>
		<ListItem><ListItemTitle>Neutral:</ListItemTitle><FeedbackAmount>{neutral}</FeedbackAmount></ListItem>
		<ListItem><ListItemTitle>Bad:</ListItemTitle><FeedbackAmount>{bad}</FeedbackAmount></ListItem>
		<ListItem><ListItemTitle>Total:</ListItemTitle><FeedbackAmount>{total}</FeedbackAmount></ListItem>
		<ListItem><ListItemTitle>Positive feedback:</ListItemTitle><FeedbackAmount>{positivePercentage}%</FeedbackAmount></ListItem>
	</StatisticsList>)
}

Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positivePercentage: PropTypes.number.isRequired,
}

