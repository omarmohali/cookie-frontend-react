import React from "react";
import "./InputField.css";

function InputField(props) {

    var [text, setText] = React.useState("");
    var [error, setError] = React.useState(null);

    const placeholder = props.placeholder;
    const type = props.type;
    const validate = props.validate; // input: string, output: error string
    
    function textChanged(event) {
        console.log(event.target.value);
        setText(event.target.value);
    }

    return <div>
        <input className={error ? "textField-InputField field-error" : "textField-InputField"} onChange= { textChanged } type={ type } placeholder= {placeholder}/>
        <p className={!error ? "" : "field-error-label"}>{error}</p>
    </div>;
}


export default InputField;