import React from 'react'
import { Player, ControlBar, BigPlayButton } from 'video-react'

const RenderGridVideo = ({ data }) => {
    return (
        <Player
        	fluid={ false }
        	width={ '100%' }
        	height={ '100%' }
	      	poster={ window.location.origin + '/public' + data.cover }
	      	src={ window.location.origin + '/public' + data.src }
	      	startTime={ data.startTime }
	      	autoPlay={ data.autoPlay }
	      	style={{ minHeight: '500px' }}>
	    <ControlBar autoHide={ true } />
	    <BigPlayButton position="center" />
	    </Player>
    )
}

export default RenderGridVideo
