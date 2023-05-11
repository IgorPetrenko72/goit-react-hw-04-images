import PropTypes from "prop-types";
import  { Component } from 'react';
import css from "./Modal.module.css"


export default class Modal extends Component { 

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown)
    }

    handleKeydown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }

    render() {
        return (
          <div className={css.Overlay} onClick={this.handleBackdropClick}>
                <div className={css.Modal}>
                    <img src={this.props.imgUrl} alt="No foto" />
                </div>
            </div>      
        )
    }
};


Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    imgUrl: PropTypes.string.isRequired,
};
