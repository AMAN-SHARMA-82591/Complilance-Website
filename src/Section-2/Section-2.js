import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import SettingsIcon from '@material-ui/icons/Settings';
import AlarmIcon from '@material-ui/icons/Alarm';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Donut from './Donut';
import '../App.css'
import Compilance_items from '../Section-1/Compilance-items';
function Section_2() {
    return (
        <div className="section-2">
                <div className="section-2-container">
                        <div class="admin-section">
                                <div class="admin-sec-logo">
                                        <EmailIcon className="admin-images-item-1"/>
                                        <SettingsIcon  className="admin-images-item-1" />
                                        <AlarmIcon  className="admin-images-item-1" />
                                </div>
                                <div class="admin-sec-info">
                                    <div className="admin-image"></div>
                                    <div>
                                        <h1 className="admin-name">Vicky Kaushal</h1>
                                        <p>Admin <ArrowDropDownIcon className="admin-drop-down" />   </p>
                                        
                                    </div>
                                </div>
                        </div>
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

export default Section_2
