import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import SettingsIcon from '@material-ui/icons/Settings';
import AlarmIcon from '@material-ui/icons/Alarm';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import '../App.css'
function LogInAdmin() {
    return (
        <div>
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
        </div>
    )
}

export default LogInAdmin
