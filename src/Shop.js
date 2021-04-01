import React, { useState, useEffect } from "react"
import "./App.css"
import Input from "./Input"
var unirest = require("unirest")
var axios = require("axios")
var matchUrl =
	"https://call-of-duty-modern-warfare.p.rapidapi.com/warzone-matches/"
var statUrl = "https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/"

export default function Shop() {
	const [games, setGames] = useState([])
	const [stats, setStats] = useState([])

	// psn, steam, xbl, battle, uno (Activision ID), acti (Activision Tag)
	// const fetchItems = async () => {
	// 	//Gets matches
	// 	var req = unirest(
	// 		"GET",
	// 		"https://call-of-duty-modern-warfare.p.rapidapi.com/warzone-matches/All Fake Dreams/xbl"
	// 	);

	// 	req.headers({
	// 		"x-rapidapi-key": "b2e2e79081msh3491391bf560a7fp16de1bjsn89130ec3eef0",
	// 		"x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
	// 		useQueryString: true,
	// 	});

	// 	req.end(function (res) {
	// 		if (res.error) throw new Error(res.error);
	// 		const json = res.body;
	// 		console.log(json.matches);
	// 		setStats(json.matches);
	// 	});

	// 	//Gets stats

	// 	var req = unirest(
	// 		"GET",
	// 		"https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/All Fake Dreams/xbl"
	// 	);

	// 	req.headers({
	// 		"x-rapidapi-key": "b2e2e79081msh3491391bf560a7fp16de1bjsn89130ec3eef0",
	// 		"x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
	// 		useQueryString: true,
	// 	});

	// 	req.end(function (res) {
	// 		if (res.error) throw new Error(res.error);

	// 		console.log(res.body);
	// 	});
	// };
	function handleClick(e) {
		e.preventDefault()

		var platform =
			e.target.childNodes[0].childNodes[1].childNodes[0].childNodes[0].value

		var gt =
			e.target.childNodes[0].childNodes[2].childNodes[0].childNodes[0].value

		var newUrl = statUrl + gt + "/" + platform
		getItems(newUrl)
	}

	async function getItems(url) {
		const res = await axios
			.get(url, {
				headers: {
					"x-rapidapi-key":
						"b2e2e79081msh3491391bf560a7fp16de1bjsn89130ec3eef0",
					"x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
				},
			})
			.then((res) => {
				setStats(res.data.br)
			})
			.catch(function (err) {
				console.log(err)
			})
			.then(function () {})
	}
	//{/* {stats.map((stat) => (
	//	<h1>Player Stats:{stat.data.br.wins}</h1>
	//))} */}
	return (
		<div>
			<h1>Stats</h1>
			<form onSubmit={handleClick}>
				<div className="container">
					<div className="header">
						<h1>Form</h1>
					</div>
					<Input setInput={"text"} setLabel={"Platform"} setName={"plat"} />
					<Input setInput={"text"} setLabel={"GamerTag"} setName={"gt"} />
					<br />
					<div className="buttonContainer">
						<button type="submit">Submit</button>
					</div>
				</div>
			</form>
			<h1>Wins: {stats ? stats.wins : ""}</h1>
			<h1>Kills: {stats ? stats.kills : ""}</h1>
			<h1>K/D: {stats ? Math.ceil(stats.kdRatio * 100) / 100 : ""}</h1>
			<h1></h1>
		</div>
	)
}
