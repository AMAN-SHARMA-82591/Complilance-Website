import React from 'react'
import '../App.css'
import FilterOverdue from './FilterOverdue'
import OverdueLinkAdmin from './OverdueLinkAdmin'


function Overdue() {
    return (
        <div className="overdue-section">
                <OverdueLinkAdmin />
                <FilterOverdue background="rgb(233, 82, 63)" width="250px" h1="8" title="Overdue"/>

        </div>
    )
}

export default Overdue
