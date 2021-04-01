import React from "react"
import "./radio.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Radio({ setPlatform }) {
	function handleChange(e) {
		setPlatform(e.target.value)
	}
	return (
		<div>
			<div className="icon-thread">
				<ul className="table">
					<li className="row">Platform: </li>
					<li className="row">
						<input
							onClick={handleChange}
							type="radio"
							name="optionsRadios"
							id="optionsRadios1"
							value="xbl"
						></input>
						<label class="radio" for="optionsRadios1">
							<FontAwesomeIcon icon={["fab", "xbox"]} size="lg" />
						</label>
					</li>
					<li className="row">
						<input
							onClick={handleChange}
							type="radio"
							name="optionsRadios"
							id="optionsRadios2"
							value="psn"
						></input>
						<label class="radio" for="optionsRadios2">
							<FontAwesomeIcon icon={["fab", "playstation"]} size="lg" />
						</label>
					</li>
					<li className="row">
						<input
							onClick={handleChange}
							type="radio"
							name="optionsRadios"
							id="optionsRadios3"
							value="battle"
						></input>
						<label class="radio" for="optionsRadios3">
							<FontAwesomeIcon icon={["fab", "battle-net"]} size="lg" />
						</label>
					</li>
				</ul>
			</div>
		</div>
	)
}
