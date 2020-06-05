import React from "react";

export default function Input(props) {
    console.log('input render')
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="input-group">
                    <input
                        className="form-control bg-light"
                        value={props.value}
                        autoFocus
                        placeholder={props.placeholder}
                        onKeyUp={props.handleSubmitForm}
                        onChange={props.handleChange}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-info" onClick={props.handleClick}>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}