import React from 'react'
import Compilance_items from './Compilance-items'
import {useHistory} from 'react-router-dom'
import Overdue from './Overdue'


function Home() {
    return (
        <div className="home">
                <div className="home-section">
                        <div className="home-section-1">
                            <div style={{background:"#e9523f"}} className="home-sec-item-1">
                                    <h1>8</h1>
                                    <p>Overdue</p>
                            </div>
                            <div style={{background:"#6773fd"}} className="home-sec-item-1">
                                    <h1>5</h1>
                                    <p>Upcoming</p>
                            </div>
                            <div style={{background:"#f8b84a"}} className="home-sec-item-1">
                                    <h1>10</h1>
                                    <p>In Progress</p>
                            </div>
                            <div style={{background:"#1da193"}} className="home-sec-item-1">
                                    <h1>15</h1>
                                    <p>Total</p>
                            </div>

                        </div>
                        <div className="home-section-2 active">
                            <div className="home-sec-2-item-1">
                                <h1>Recently Missed</h1>
                                <div className="home-sec-viewall-sec">
                                    <h1>View All &gt;</h1>
                                </div>
                            </div>
                            <div class="compilance-container-small">
                                    <Compilance_items className="compilance-small-item" width="350px"/>
                                    <Compilance_items className="compilance-small-item"  width="350px"/>
                                    <Compilance_items className="compilance-small-item" width="350px"/>
                                    <Compilance_items className="compilance-small-item" width="350px"/>
                            </div>

                        </div>
                </div>
        </div>
    )
}

export default Home
