type TitleProps = {
	titulo: string;
};

export default function Title({ titulo }: TitleProps) {
	return (
		<>
			<h4>{titulo}</h4>
		</>
	);
}
