import React from 'react'
import AggregateIcon from './AggregateIcon'
import CementIcon from './CementIcon'
import SteelIcon from './SteelIcon'
import BricksIcon from './BricksIcon'
import SandIcon from './SandIcon'
import FlooringIcons from './FlooringIcons'
import PaintIcon from './PaintIcon'

const Icons = ({ icon }) => {
    if (icon === "Aggregate") {
        return (
            <div>
                <AggregateIcon></AggregateIcon>
            </div>
        )
    }
    if (icon === "Cement") {
        return (
            <CementIcon></CementIcon>
        )
    }
    if (icon === "Bricks") {
        return (
            <BricksIcon></BricksIcon>
        )
    }
    if (icon === "Steel") {
        return (
            <SteelIcon></SteelIcon>
        )
    }
    if (icon === "Sand") {
        return (
            <SandIcon></SandIcon>
        )
    }
    if (icon === "Tiles") {
        return (
            <FlooringIcons></FlooringIcons>
        )
    }

    if (icon === "Paint") {
        return (
            <PaintIcon></PaintIcon>
        )
    }

}

export default Icons
