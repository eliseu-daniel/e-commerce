import Button from "./Button";

type SummaryProps = {
    subtotal: number;
    frete: number
}

export default function Summary({subtotal, frete}: SummaryProps){
return(
    <>
        <h4>Resumo da compra:</h4>
        <p>Sub-total: {subtotal = subtotal ? subtotal : 0}</p>
        <p>Frete: {frete}</p>
        <h5>Total: {subtotal + frete}</h5>
        <Button tipo="submit" text="FINALIZAR COMPRA" />
    </>
)
}