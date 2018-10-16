import styled, { css } from 'styled-components'
import { scheme } from '../../../consts/scheme'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'

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
export const ImageTitle = styled.div`
	position: absolute;
	bottom: 30px;
	left: 45px;
	font-size: 19px;
	letter-spacing: .03em;
	h1 {
		font-size: 20px;
		letter-spacing: .04em;
	}
	p {
		font-size: 14px;
		letter-spacing: .07em;
		margin: 0;
	}
	${ props => props.inverse && css`
		color: ${ scheme.white }
		h1 {
			letter-spacing: .07em;
		}
		h2 {
			letter-spacing: .1em;
		}
	`}
`
