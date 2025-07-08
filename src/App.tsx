import { useState } from "react";
import Frete from "./components/Frete";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Table from "./components/Table";
import Title from "./components/Title";

function App() {
	
	const [valorfrete, setValorFrete] = useState<number>(0);
	const [totalGeral, setTotalGeral] = useState<number>(0);

	const getTotal = (total:number) => {
		setTotalGeral(total);
	};
	
	return (
		<>
			<Header />
			<Title titulo="Carrinho de compras" />
			<Table totalGeral={getTotal}/>
			<Frete valor={0} setFrete = {setValorFrete}/>
			<Summary subtotal={totalGeral} frete={valorfrete}/>
		</>
	);
}

export default App;
