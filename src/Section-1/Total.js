import React from 'react'
import FilterOverdue from './FilterOverdue'
import OverdueLinkAdmin from './OverdueLinkAdmin'

function Total() {
    return (
        <div>
            <OverdueLinkAdmin />
            <FilterOverdue background="#1da193" h1="15" title="Total"  width="250px"/>
        </div>
    )
}

export default Total
