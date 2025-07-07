import Button from "./Button";

export default function Frete(){
    return(
        <>
            <label htmlFor="cep">CEP.:</label>
            <input type="text" name="cep" id="cep" placeholder="Digite seu cep"/>
            <Button tipo="button" text="Calcular" />
        </>
    )
}