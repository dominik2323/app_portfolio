import React, { Component } from 'react';
import { Row, Container } from 'reactstrap'
import * as R from 'ramda'
import { Link } from 'react-router-dom'
import { Footer,
ProjectTitle,
ProjectAnnotation,
ProjectContent } from './StyledComponents/StyledProjectEngine'
import EvalGrid from './Components/EvalGrid'

export default class ProjectEngine extends Component {
	render() {
		const { projectData } = this.props
		return (
			<div>
				<img 
					src={ window.location.origin + '/public' + projectData.intro.src } 
					alt={ projectData.intro.alt } 
					style={{ maxHeight: "100vh", objectFit: "cover" }}/>
				<Container fluid>
					<Row>
						<ProjectTitle 
								xl={{ size: 8, offset: 0 }}
								lg={{ size: 8, offset: 0 }}
								md={{ size: 10, offset: 1 }}
								sm={{ size: 12, offset: 0 }}
								xs={{ size: 12, offset: 0 }}
								>
							<h1>{ projectData.projectName }</h1>
							<p>
								{ projectData.subTitle }
								{ !R.isEmpty(projectData.cooperation) && '\nSpolupráce: ' + projectData.cooperation }
							</p>
							<p className="awards">
								{ projectData.awards.active && projectData.awards.content.map(x => {
									const ranking = place => {
										return (place === 'A' ? 'Ocenění\u2003' : place + ' místo\u2003')
									}
									return ranking(x.place) + x.name + '\n'
								}) }
							</p>
						</ProjectTitle>
					</Row>
					<Row>
						<ProjectAnnotation 
								xl={{ size: 6, offset: 3 }}  
								lg={{ size: 8, offset: 2 }}  
								md={{ size: 10, offset: 1 }}  
								sm={{ size: 12, offset: 0 }}  
								xs={{ size: 12, offset: 0 }}>
							<p>{ projectData.annotation }</p>
						</ProjectAnnotation>
					</Row>
					<EvalGrid data={ projectData.content } />
					<Footer to="/">
						Zpět na hlavní stránku
					</Footer>
				</Container>
			</div>
		)
	}
}
