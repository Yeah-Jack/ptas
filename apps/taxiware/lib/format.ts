const euro = new Intl.NumberFormat("de-DE", {
	currency: "EUR",
	style: "currency",
});

export function formatEuro(amount: number) {
	return euro.format(amount);
}
