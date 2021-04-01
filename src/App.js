import "./App.css"
import Nav from "./Nav"
import About from "./About"
import Shop from "./Shop"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"
library.add(fab, faCheckSquare, faCoffee)

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/shop" component={Shop} />
				</Switch>
			</div>
		</Router>
	)
}
const Home = () => (
	<div>
		<h1>Home page</h1>
	</div>
)

export default App
