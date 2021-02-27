import {style} from '../ButtonStyled';

const SampleComponent = (props)=>{
    const h1Style = style.Input.bold;
    const btStyle = `${style.Button.green} ${style.Button.large}`;
    return (
        <div>
            <h1 className={h1Style}>Sample Component 1</h1>
           <button className={btStyle}>Hello Man</button> 
        </div>
    )
}

export default SampleComponent;