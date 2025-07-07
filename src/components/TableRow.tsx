type RowProps = {
	row: string | number;
};
export default function TableRows({ row }: RowProps) {
	return (
		<>
			<td>{row}</td>
		</>
	);
}
