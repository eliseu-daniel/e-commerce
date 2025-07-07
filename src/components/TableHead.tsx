type HeadProps = {
	head: string;
};

export default function TableHead({ head }: HeadProps) {
	return <th>{head}</th>;
}
