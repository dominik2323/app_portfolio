import React from 'react'

const RenderGridImage = ({ data }) => {
    return (
		<img src={ window.location.origin + '/public' + data.src } alt={ data.alt } />
    )
}

export default RenderGridImage