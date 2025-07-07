import { useEffect } from "react";
import Button from "./Button";

type freteProps = {
    valor:number;
    setFrete: (valor:number) => void;
}

export default function Frete({valor, setFrete}:freteProps){
    useEffect(() => {
        setFrete(valor);
    }, [valor, setFrete]);
    
    return(
        <>
            <label htmlFor="cep">CEP.:</label>
            <input type="text" name="cep" id="cep" placeholder="Digite seu cep"/>
            <Button tipo="button" text="Calcular" />
            <span>{valor}</span>
        </>
    )
}