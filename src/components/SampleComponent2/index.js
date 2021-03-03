import { style } from '@bit/sagarb3.css-module.button-styled'
const SampleComponent2 = (props)=>{
    const h1Style = `${style.Input.bold}`;
    const btStyle = `${style.Button.red} ${style.Button.medium}`;
    return (
        <div>
            <h1 className={h1Style}>SampleComponet2</h1>
           <button className={btStyle}>Hi</button> 
           <button className="red">Second Button</button>
        </div>
    )
}

export default SampleComponent2;