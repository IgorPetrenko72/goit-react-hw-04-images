import PropTypes from "prop-types";
import  { useEffect } from 'react';
import css from "./Modal.module.css"

const Modal = ({onClose, imgUrl}) => { 

    useEffect(() => {
        const handleKeydown = e => {
        if (e.code === 'Escape') {
            onClose();
        }
    }
        window.addEventListener('keydown', handleKeydown)
        return () => {
        window.removeEventListener('keydown', handleKeydown)   
        }
    }, [onClose]);

    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    }

        return (
          <div className={css.Overlay} onClick={handleBackdropClick}>
                <div className={css.Modal}>
                    <img src={imgUrl} alt="No foto" />
                </div>
            </div>      
        )
    };

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    imgUrl: PropTypes.string.isRequired,
};
export default Modal;