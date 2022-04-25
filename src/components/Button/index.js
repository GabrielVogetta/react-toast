import styles from './styles.module.css';

const Button = ({color, label, handleClick}) => (
    <button 
        className={styles.button} 
        onClick={handleClick}
        style={{backgroundColor: `var(--${color})`, borderColor: `var(--dark-${color})`}}
    >
        {label}
    </button>
);

export default Button;