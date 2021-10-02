import React from 'react'
import {useParams, useHistory} from 'react-router-dom'
import servicesData from './servicesData'

function ServiceDetail(props) {
    const {serviceId} = useParams()
    const history = useHistory()

    const thisService = servicesData.find(service => service._id === serviceId)

    function handleClick() {
        // history.goBack()
        history.go(-1)
    }
    return (
        <div>   
            <h1>Service Detail Page</h1>
            <h3>{thisService.name}</h3>
            <p>{thisService.description}</p>
            <button onClick={handleClick}>Go back to all services</button>
        </div>
    )
}

export default ServiceDetail