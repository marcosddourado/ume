export function convertNumberToReal(amount: number) {
  return `R$ ${amount.toFixed(2).replace(".", ",")}`;
}
