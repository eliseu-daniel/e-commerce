import Frete from "./components/Frete";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Table from "./components/Table";
import Title from "./components/Title";

function App() {
	return (
		<>
			<Header />
			<Title titulo="Carrinho de compras" />
			<Table />
			<Frete />
			<Summary />
		</>
	);
}

export default App;
