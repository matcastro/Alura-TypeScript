import { ReactNode } from "react";
import style from './Botao.module.scss'

interface IProps {
    type?: 'button' | 'submit' | 'reset' | undefined,
    onClick?: () => void,
    children?: ReactNode
}

function Botao({type='button', onClick, children}: IProps) {
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {children}
        </button>
    )
}

export default Botao