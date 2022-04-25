import { useEffect } from 'react';
import styles from './styles.module.css';

const Toast = ({type, description, open, onClose}) => {

    useEffect(() => {
        
        if(open){
            const myTimeout = setTimeout(() => {
                onClose();
            }, 5000);

            return () => {
                clearTimeout(myTimeout);
            };
        }

    }, [open, onClose]);
    
    return(
        open &&
        <div
            className={`${styles.toast} ${styles['bottom-right']} ${styles[type]}`}
        >
            <button className={styles.closeToast} onClick={onClose}>X</button>

            <div className={styles.toastContent}>

                <div className={styles.toastType}>
                    <img src={`./${type}.svg`} alt='Tipo do toast'/>
                    <p>{type}</p>
                </div>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Toast; 