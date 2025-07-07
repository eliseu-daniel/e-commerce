import Button from "./Button";

export default function Summary(){
return(
    <>
        <h4>Resumo da compra:</h4>
        <p>Sub-total: </p>
        <p>Frete: </p>
        <h5>Total:</h5>
        <Button tipo="submit" text="FINALIZAR COMPRA" />
    </>
)
}