import { useState } from 'react';
import { Container } from '../Container/Container'
import { Buttons } from '../Buttons/Buttons'
import { Section } from '../Section/Section'
import { Statistics } from '../Statistics/Statistics'
import { FirstPage } from '../FirstPage/FirstPage'



export function Feedback() {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const state = { good, neutral, bad };

	const handleClick = e => {
		switch (e.target.name) {
			case "good":
				setGood(good + 1);
				break;

			case "neutral":
				setNeutral(neutral + 1);
				break;

			case "bad":
				setBad(bad + 1);
				break;

			default: return;
		}
	}

	const totalFeedback = () => {
		return good + neutral + bad;
	}

	const positiveFeedbackPercentage = () => {
		return Math.round(good * 100 / totalFeedback())
	}

	return (
		<Container>
			<Section title="Please, leave your feedback">
				<Buttons state={state} onClick={handleClick} />
			</Section>
			{totalFeedback() === 0
				?
				(<FirstPage text="No feedback" />)
				:
				(<Section title="Statistics">
					<Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback()} positivePercentage={positiveFeedbackPercentage()} />
				</Section>)}
		</Container>
	)
}