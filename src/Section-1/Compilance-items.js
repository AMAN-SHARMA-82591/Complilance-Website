import React from 'react'
import '../App.css'
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import MoreVertIcon from '@material-ui/icons/MoreVert';
function Compilance_items(props) {
    return (
        <div style={{width:props.width}} className="compilance-small-item-sec">
            <div className="comp-logo">
                <ViewHeadlineIcon style={{ color: "#6773fd" }} fontSize="large" />
            </div>
            <div className="comp-text">
                <h1>Compilance-1</h1>
            </div>
            <div className="comp-more-items-logo comp-more-push">
                <MoreVertIcon fontSize="large" style={{ color:"rgb(56, 55, 55)" }}/>
            </div>
        </div>
    )
}

export default Compilance_items
