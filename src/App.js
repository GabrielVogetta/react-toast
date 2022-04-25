import { useState } from 'react';
import styles from './App.module.css';
import Buttons from './components/Buttons';
import MainHeader from './components/MainHeader';
import Toast from './components/Toast';

function App() {

  const [toast, setToast] = useState({});
  const [open, setOpen] = useState(false);

  const showToast = (type) => {

    let toastProperties = {};

    switch(type){
      case 'success':
        toastProperties = {
          type: type,
          description: 'Este é um Toast de Sucesso!',
        };
        break;
      case 'error':
        toastProperties = {
          type: type,
          description: 'Este é um Toast de Erro!',
        };
        break;
      case 'info':
        toastProperties = {
          type: type,
          description: 'Este é um Toast de Informação!',
        };
        break;
      case 'warning':
        toastProperties = {
          type: type,
          description: 'Este é um Toast de Aviso!',
        };
        break;

        default:
          toastProperties = {
            type: '',
            description: '',
          };
      }


      setToast({...toastProperties});

      setOpen(false);

      setTimeout(() => {
        setOpen(true);
      }, 0);
    };

  return (
    <div className={styles.app}>

      <MainHeader/>

      <Buttons handleClick={showToast}/>

      <Toast 
        type={toast.type} 
        description={toast.description} 
        open={open}
        onClose={() => {setOpen(false)}}
      />
    </div>
  );
}

export default App;