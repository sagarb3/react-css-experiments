import buttons from './Button.module.css';
const Button = (props)=>{
    const classNames = `${buttons.red} ${buttons.large}`
    return (<button className={
        classNames
    }>{
        props.children
    }</button>)
}

export default Button;