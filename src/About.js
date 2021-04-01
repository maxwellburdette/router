import React from "react"
import Input from "./Input"

function About() {
	return (
		<div>
			<h1>About Page</h1>
			<div className="container">
				<div className="header">
					<h1>Form</h1>
				</div>
				<Input setInput={"text"} setLabel={"First Name"} setName={"fName"} />
				<Input setInput={"text"} setLabel={"Last Name"} setName={"lName"} />
				<Input setInput={"text"} setLabel={"Email"} setName={"email"} />
				<Input
					setInput={"password"}
					setLabel={"Password"}
					setName={"password"}
				/>
				<br />
				<div className="buttonContainer">
					<a href="localhost:3000">Submit</a>
				</div>
			</div>
		</div>
	)
}

export default About
