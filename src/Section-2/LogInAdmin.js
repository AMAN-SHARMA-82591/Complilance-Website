import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import SettingsIcon from '@material-ui/icons/Settings';
import AlarmIcon from '@material-ui/icons/Alarm';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Button from '@material-ui/core/Button'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import '../App.css'
function LogInAdmin() {
    
    function dropDownMenu(){
        let dropLogo = document.querySelector('.admin-drop-down')
        let dropdown = document.querySelector('.admin-drop-down-menu');
        if(dropdown.style.display === 'block'){
            dropdown.style.display = 'none'
            dropLogo.style.transform = 'rotate(0deg)';
        }else {
            dropdown.style.display = 'block'
            dropLogo.style.transform = 'rotate(180deg)';

    }
        
    }

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
                                        <p>Admin <ArrowDropDownIcon  onClick={dropDownMenu} className="admin-drop-down" />   </p>
                                        <div className="admin-drop-down-menu">
                                                <div className="drop-down-menu-admin-items">
                                                        <div className="drop-down-sec-logo-cont1"></div>
                                                        <div className="drop-down-sec-logo-cont2">
                                                            <h1>Vicky Kaushal</h1>
                                                            <p>Admin</p>
                                                        </div>
                                                        <div className="drop-down-sec-help-cont3">
                                                            <p>Help </p>
                                                           <HelpOutlineIcon fontSize="small" />
                                                        </div>
                                                </div>
                                                <div className="drop-down-menu-admin-text-items">
                                                    <p>Delhi Land & Finance Ltd.</p>
                                                </div>
                                                <div className="drop-down-menu-admin-button-items">
                                                    <button>Manage Account</button>
                                                </div>
                                                <div className="drop-down-menu-admin-add-comp-items">
                                                    <AddCircleOutlineIcon />
                                                    <p> Add Another 
                                                    Company</p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
        </div>
    )
}

export default LogInAdmin
