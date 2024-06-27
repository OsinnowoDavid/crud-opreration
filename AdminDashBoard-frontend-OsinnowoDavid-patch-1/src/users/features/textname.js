import React from "react";

const TextFielD = ({lable,Inputprops,onChange,value}) =>{
    return (
        <div>
            <lable >{lable}
            </lable>
            <input {...Inputprops} onChange={onChange} value={value} />
            
        </div>
    )
}
export default TextFielD