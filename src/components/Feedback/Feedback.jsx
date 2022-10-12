import React from 'react';
import { Container } from '../Container/Container'
import { Buttons } from '../Buttons/Buttons'
import { Section } from '../Section/Section'
import { Statistics } from '../Statistics/Statistics'
import { FirstPage } from '../FirstPage/FirstPage'



export const Feedback = class Feedback extends React.Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0
	}

	handleClick = (e) => {
		const { name } = e.target;

		this.setState((prevState) => ({ [name]: prevState[name] + 1 }))
	}

	countTotalFeedback = () => {
		return Object.values(this.state).reduce((a, b) => (a + b), 0)
	}

	countPositiveFeedbackPercentage = () => {
		return Math.round(this.state.good * 100 / this.countTotalFeedback())
	}

	render() {
		const totalFeedback = this.countTotalFeedback();
		const positiveFeedBack = this.countPositiveFeedbackPercentage();
		const { good, neutral, bad } = this.state;
		return (
			<Container>
				<Section title="Please, leave your feedback">
					<Buttons state={this.state} onClick={this.handleClick} />
				</Section>
				{totalFeedback === 0
					?
					(<FirstPage text="No feedback" />)
					:
					(<Section title="Statistics">
						<Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positiveFeedBack} />
					</Section>)}
			</Container>
		)
	}
}