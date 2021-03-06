import React from 'react';
import style from './styles.module.scss';
import classNames from 'classnames';

const Switch = (props) => {
    return (
        <div className={style.Switch}>
            <p>
                Theme <span>{props.theme === 'light' ? 'light' : "dark"}</span>
            </p>
            <label className={style.switch}>
                <input type="checkbox" onChange={() => props.changeTheme()}></input>
                <span className={classNames(style.slider, style.round)}></span>
            </label>
        </div>
    )
}
export default Switch;