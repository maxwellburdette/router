import React, { useState, useEffect } from "react";
import "./App.css";
var unirest = require("unirest");

export default function Shop() {
	useEffect(() => {
		fetchItems();
	}, []);

	const [games, setGames] = useState([]);
	const [stats, setStats] = useState([]);

    // psn, steam, xbl, battle, uno (Activision ID), acti (Activision Tag)
	const fetchItems = async () => {
		//Gets matches
		var req = unirest(
			"GET",
			"https://call-of-duty-modern-warfare.p.rapidapi.com/warzone-matches/All Fake Dreams/xbl"
		);

		req.headers({
			"x-rapidapi-key": "b2e2e79081msh3491391bf560a7fp16de1bjsn89130ec3eef0",
			"x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
			useQueryString: true,
		});

		req.end(function (res) {
			if (res.error) throw new Error(res.error);
			const json = res.body;
			console.log(json.matches);
			setStats(json.matches);
		});

		//Gets stats

		var req = unirest(
			"GET",
			"https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/All Fake Dreams/xbl"
		);

		req.headers({
			"x-rapidapi-key": "b2e2e79081msh3491391bf560a7fp16de1bjsn89130ec3eef0",
			"x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
			useQueryString: true,
		});

		req.end(function (res) {
			if (res.error) throw new Error(res.error);

			console.log(res.body);
		});
	};

	return (
		<div>
			{stats.map((stat) => (
				<h1>Player Stats:{}</h1>
			))}
		</div>
	);
}
