import React from 'react'
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import '../App.css'
function WeekTable() {
    return (
        <div className="week-table-container">
            <div className="week-table-container-items">
                <div class="date-section">
                    <WatchLaterIcon fontSize="large"  className="date-logo-item" />
                    
                </div>
                <div class="week-section">
                        <div class="week-items">
                            <h1>Mon</h1>
                            <p>9</p>
                        </div>
                        <div class="week-items">
                            <h1>Tue</h1>
                            <p>10</p>
                        </div>
                        <div class="week-items">
                            <h1>Wed</h1>
                            <p>11</p>
                        </div>
                        <div class="week-items">
                            <h1>Thu</h1>
                            <p>12</p>
                        </div>
                        <div class="week-items">
                            <h1>Fri</h1>
                            <p>13</p>
                        </div>
                        <div class="week-items">
                            <h1>Sat</h1>
                            <p>14</p>
                        </div>
                        <div class="week-items">
                            <h1>Sun</h1>
                            <p>15</p>
                        </div>

                </div>
                <div class="calender-section">
                    <CalendarTodayIcon fontSize="large" className="calender-logo-item"/>

                </div>
            </div>
                
        </div>
    )
}

export default WeekTable
