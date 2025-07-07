export type Produto = {
	order: number;
	product: string;
	quantity: number;
	price: number;
};

export const data: Produto[] = [
	{
		order: 1,
		product: "Memoria Ram",
		quantity: 5,
		price: 150,
	},
	{
		order: 2,
		product: "Cabo de força",
		quantity: 3,
		price: 15,
	},
];