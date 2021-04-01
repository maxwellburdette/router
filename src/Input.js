import React from "react"
import "./from.css"

export default function Input({ setName, setLabel, setInput }) {
	return (
		<div className="formContainer">
			<div id="form" className="form">
				<input type={setInput} name={setName} autoComplete="off" required />
				<label htmlFor={setName} className="label-name">
					<span className="content-name">{setLabel}</span>
				</label>
			</div>
		</div>
	)
}
