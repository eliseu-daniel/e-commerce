

type RowProps = {
	row: number | string;
};

export default function TableRows({ row }: RowProps) {
	
	return (
		<>
			<td>{row}</td>
		</>
	);
}