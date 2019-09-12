import styled, { css } from 'styled-components'
import { scheme } from '../../../consts/scheme'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'

export const CoverPhoto = styled.img`
	@media (max-width: 768px) {
		min-height: 700px;
	}
`

export const Footer = styled(Link)`
	padding: 30px 60px;
	display: inline-block;
	background-color: ${ scheme.antracite };
	letter-spacing: .06em;
	text-transform: uppercase;
	font-size: 12px;
	margin-left: 15px;
	color: ${ scheme.whiteBlue };
	&:visited {
		color: ${ scheme.whiteBlue };
	}
	&:hover {
		text-decoration: none;
	}
`
export const ProjectTitle = styled(Col)`
	h1 {
		margin: 22px 0 18px 0;
	}
	p {
		color: ${ scheme.gray };
		line-height: 28px;
	}
	.awards {
		color: ${ scheme.antracite };
	}
`
export const ProjectAnnotation = styled(Col)`
	p {
		margin: 70px 0 100px 0;
	}
`
export const ProjectContent = styled(Col)`
	margin-bottom: 30px;
	img {
		object-fit: cover;
	}
`

