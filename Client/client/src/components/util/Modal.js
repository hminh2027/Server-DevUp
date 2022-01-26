import React from 'react'
import { useDispatch } from 'react-redux'

import {RiCloseLine} from 'react-icons/ri'

import styles from './Modal.module.css'

const Modal = (props) => {
    const dispatch = useDispatch()

    const offModal = () => {
        dispatch({type:'MODAL', payload: false});
        props.setIsEdit(false);
    }

    return (
        <>
            <div onClick={offModal} className={styles.black_bg}></div>
            <div style={{width: props.width, height: props.height}} className={styles.modal}>
                <div onClick={offModal} className={styles.icon_wrapper}><RiCloseLine/></div>
                {props.children}
            </div>
        </>
    )
}

export default Modal
