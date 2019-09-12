import React from 'react'
import RenderGridImage from './RenderGridImage'
import RenderGridVideo from './RenderGridVideo'
import RenderGridText from './RenderGridText'
import RenderGridImageText from './RenderGridImageText'
import { ProjectContent } from '../StyledComponents/StyledProjectEngine'
import { Row } from 'reactstrap'

const EvalItem = ({ item }) => {
	switch ( item.type ) {
        case 'image':
        	return <RenderGridImage data={ item } />
        case 'video':
        	return <RenderGridVideo data={ item } />
        case 'text':
            return <RenderGridText data={ item } />
        case 'imageText':
            return <RenderGridImageText data={ item } />
        default:
        	return 'default'
    }
}

const RenderGrid = ({ data }) => {
    return (		
    	<Row>
		    { data.map(( item, i ) => {
		    	return (
					<ProjectContent key={ i } xl={ item.cols } lg={ item.cols } md={ 12 } sm={ 12 } xs={ 12 }>
				      	<EvalItem item={ item } />
				    </ProjectContent>
		    	)
		    }) }			
    	</Row>
    )
}
export default RenderGrid
