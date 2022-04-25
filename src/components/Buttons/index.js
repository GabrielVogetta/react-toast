import styles from './styles.module.css';
import React from 'react';
import Button from '../Button';

const Buttons = ({handleClick}) => {
    return(
        <div className={styles.buttons}>
            <Button 
                color='green' 
                label='Success'
                handleClick={() => handleClick('success')} 
            />
            <Button
                color='red' 
                label='Error'
                handleClick={() => handleClick('error')} 
            />
            <Button 
                color='yellow' 
                handleClick={() => handleClick('info')} 
                label='Info'
            />
            <Button
                color='orange' 
                handleClick={() => handleClick('warning')} 
                label='Warning'
            />
        </div>
    );
};

export default Buttons;