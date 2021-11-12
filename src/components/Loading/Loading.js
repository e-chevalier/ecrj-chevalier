import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const Loading = () => {
    return (
        <Spinner animation="grow" variant="secondary" role="status" className="my-5" >
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}

export default Loading
