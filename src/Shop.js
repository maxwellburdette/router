import React, { useState } from "react"
import Input from "./Input"
import Radio from "./Radio"
var axios = require("axios")
var matchUrl =
	"https://call-of-duty-modern-warfare.p.rapidapi.com/warzone-matches/"
var statUrl = "https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/"

export default function Shop() {
	const [games, setGames] = useState([])
	const [stats, setStats] = useState([])
	const [platform, setPlatform] = useState("")

	function gameMode(mode) {
		if (mode === "br_brtrios") {
			return "Trios"
		} else if (mode === "br_brduos") {
			return "Duos"
		} else if (mode === "br_brquads") {
			return "Quads"
		} else if (mode === "br_brsolos") {
			return "Solo"
		} else if (mode === "br_rebirth_rbrthduos") {
			return "Rebirth Duos"
		}
		return mode
	}
	// psn, steam, xbl, battle, uno (Activision ID), acti (Activision Tag)

	async function handleClick(e) {
		e.preventDefault()

		var gt =
			e.target.childNodes[0].childNodes[1].childNodes[0].childNodes[0].value

		if (platform === "battle") {
			gt = gt.replace("#", "%23")
		}
		var newStatUrl = statUrl + gt + "/" + platform
		var newMatchUrl = matchUrl + gt + "/" + platform
		await getMatches(newMatchUrl)
		await getItems(newStatUrl)
	}

	async function getItems(url) {
		await axios
			.get(url, {
				headers: {
					"x-rapidapi-key":
						"b2e2e79081msh3491391bf560a7fp16de1bjsn89130ec3eef0",
					"x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
				},
			})
			.then((res) => {
				//console.log(res.data)
				setStats(res.data.br)
			})
			.catch(function (err) {
				console.log(err)
			})
			.then(function () {})
	}

	async function getMatches(url) {
		await axios
			.get(url, {
				headers: {
					"x-rapidapi-key":
						"b2e2e79081msh3491391bf560a7fp16de1bjsn89130ec3eef0",
					"x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
				},
			})
			.then((res) => {
				//console.log(res.data)
				setGames(res.data.matches)
			})
			.catch(function (err) {
				console.log(err)
			})
			.then(function () {})
	}

	return (
		<div>
			<h1>Stats</h1>
			<Radio setPlatform={setPlatform} />
			<form onSubmit={handleClick}>
				<div className="container">
					<div className="header">
						<h1>Form</h1>
					</div>
					<Input setInput={"text"} setLabel={"GamerTag"} setName={"gt"} />
					<br />
					<div className="buttonContainer">
						<button type="submit">Submit</button>
					</div>
				</div>
			</form>
			<br />
			<div className="container">
				{games[0] ? (
					<div className="header">
						<h1>{games[0].player.username}</h1>
					</div>
				) : (
					""
				)}
				<ul>
					<li>Wins: {stats ? stats.wins : <p></p>}</li>
					<li>Kills: {stats ? stats.kills : <p></p>}</li>
					<li>K/D: {stats ? Math.ceil(stats.kdRatio * 100) / 100 : <p></p>}</li>
				</ul>
			</div>
			<div className="container">
				{games ? (
					<div>
						<div className="header">
							<h1>Matches</h1>
						</div>
						{games.map((match) => (
							<ul>
								<li>Mode: {gameMode(match.mode)}</li>
								<li>Kills: {match.playerStats.kills}</li>
								<li>Deaths: {match.playerStats.deaths}</li>
							</ul>
						))}
					</div>
				) : (
					<ul>
						<li>No Matches</li>
					</ul>
				)}
			</div>
		</div>
	)
}
