import styled from 'styled-components';

export const ButtonList = styled.ul`
	display: flex;
	justify-content: center;
	gap: 20px;
	margin: 20px 0 0;
`

export const Button = styled.button`
	font-size: 16px;
	font-weight: 500;
	text-transform: uppercase;
	color: wheat;
	background-color: #9a6666;
	padding: 8px 0;
	min-width: 100px;
	border-radius: 5px;
	box-shadow: 5px 5px 10px #3b3939;
	transition: box-shadow 100ms linear;
	
	:hover, :focus{
		box-shadow: 1px 1px 4px #3b3939;
	}
`