import React from 'react'
import './Header.css'
import tinderLogo from '../../assets/images/tinder.svg'

import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import AnalyticsIcon from '@mui/icons-material/Analytics';


function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>

            <img
            className="header__logo"
            src={tinderLogo}
            alt="Tinder Logo"
            />

            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>

            <IconButton>
                <AnalyticsIcon fontSize="large" className="header__icon" />
            </IconButton>


        </div>
    )
}

export default Header
