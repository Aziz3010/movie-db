import React, { Component } from 'react';
import style from './NotFound.module.css';

class NotFound extends Component {
    render() {
        return (
            <>
            <div className={style.body}>
                <h3>Error 404 | Page Not Found</h3>
            </div>
            </>
        );
    }
}

export default NotFound;