import React, { Component } from 'react';
import style from './Footer.module.css';

class Footer extends Component {
    render() {
        return (
            <>
            <div className={style.bg}>
                <h6 className="text-center">Created With <i className={ ` ${style.icon } fas fa-heartbeat `}></i> By Ahmed Abdelaziz</h6>   
            </div>
            </>
        );
    }
}

export default Footer;