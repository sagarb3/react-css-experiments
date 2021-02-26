import {style} from '../ButtonStyled';

const SampleComponent = (props)=>{
    const h1Style = style.Input.bold;
    const btStyle = style.Button.red;
    return (
        <div>
            <h1 className={h1Style}>Hello</h1>
           <button className={btStyle}></button> 
        </div>
    )
}

export default SampleComponent;