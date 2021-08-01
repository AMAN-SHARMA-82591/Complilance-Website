/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Compilance_items from '../Section-1/Compilance-items';
import '../App.css'
import Donut from './Donut';

function Home2() {
    return (
        <div>
            <div className="section-2-container">
                        <div class="pie-chart-section">
                           <Donut className="donut-pie-chart"/>

                        </div>
                        <div class="people-tags-section">
                                <div className="people-tags-items-1">
                                    <h1>People</h1>
                                    <p>View All &gt;</p>
                                </div>
                                <div className="people-tags-items-2">
                                        <div className="people-tags-image-1 "></div>
                                        <div className="people-tags-image-1 people-img-2"></div>
                                        <div className="people-tags-image-1 people-img-3">
                                            <p>25+</p>
                                        </div>
                                </div>
                        </div>
                        <div class="today-compilance-section">
                                <div class="today-tags-items-1">
                                    <h1>Today</h1>
                                    <p>View All &gt;</p>
                                </div>
                                <div class="today-tags-items-2">
                                    <Compilance_items className="compilance-small-item" width="300px"/>
                                    <Compilance_items className="compilance-small-item" width="300px"/>
                                    <Compilance_items className="compilance-small-item" width="300px"/>
                                </div>
                        </div>
                </div>    
        </div>
    )
}

export default Home2
