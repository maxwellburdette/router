import { useEffect } from "react"
import Input from "./Input"
const axios = require("axios")

function About() {
	useEffect(() => {
		getApiDetails()
	}, [])

	function getApiDetails() {
		return axios
			.get("wzapi.tracker.gg", {
				headers: {
					"TRN-Api-Key": "1e669f29-1ac9-4876-9ba3-d9077b40916a",
				},
			})
			.then((res) => {
				//console.log(res.data)
				console.log(res)
			})
			.catch(function (err) {
				console.log(err)
			})
			.then(function () {})
	}

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
