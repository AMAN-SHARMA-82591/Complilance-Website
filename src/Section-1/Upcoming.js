import React from 'react'
import FilterOverdue from './FilterOverdue'
import OverdueLinkAdmin from './OverdueLinkAdmin'
function Upcoming() {
    return (
        <div>
            <OverdueLinkAdmin />
            <FilterOverdue background="#6773fd" h1="5" title="Upcoming" width="250px" />
        </div>
    )
}

export default Upcoming
