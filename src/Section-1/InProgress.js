import React from 'react'
import FilterOverdue from './FilterOverdue'
import OverdueLinkAdmin from './OverdueLinkAdmin'

function InProgress() {
    return (
        <div>
            <OverdueLinkAdmin />
            <FilterOverdue background="#f8b84a" h1="10" title="In Progress"  width="250px" />
        </div>
    )
}

export default InProgress
