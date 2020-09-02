const groupsToFields = <
	F,
	G extends {
		fields: F[];
	} = {
		fields: F[];
	}
>(
	groups: G[]
): F[] => {
	let fields: F[] = [];

	groups.map(g => {
		fields = [...fields, ...g.fields];
	});

	return fields;
};

export default groupsToFields;
