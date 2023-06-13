import {
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
} from "@tremor/react";

const users: {
	id: string;
	name: string;
	email: string;
	github: string;
}[] = [
	{
		id: "1",
		name: "Angelica",
		email: "angelica@gmail.com",
		github: "@yessblack",
	},
	{
		id: "2",
		name: "Miguel",
		email: "midu@gmail.com",
		github: "@midudev",
	},
	{
		id: "2",
		name: "Natalia",
		email: "nati@gmail.com",
		github: "@natioterom",
	},
];

export default function ListOfUsers() {
	return (
		<Card>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeaderCell>Id</TableHeaderCell>
						<TableHeaderCell className="text-right">Nombre</TableHeaderCell>
						<TableHeaderCell className="text-right">Email</TableHeaderCell>
						<TableHeaderCell className="text-right">GitHub</TableHeaderCell>
						<TableHeaderCell className="text-right">Acciones</TableHeaderCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{users.map((item) => (
						<TableRow key={item.id}>
							<TableCell>{item.id}</TableCell>
							<TableCell className="text-right">{item.name}</TableCell>
							<TableCell className="text-right">{item.email}</TableCell>
							<TableCell className="text-right">{item.github}</TableCell>
							<TableCell className="text-right">Acciones</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
