const normalizeSearchProductsCategory = (
	categories: {
		id: number;
		name: string;
		parent?: {
			id: number;
			name: string;
			parent?: { id: number; name: string } | null;
		} | null;
	}[]
) => {
	const allCategories = getAllCategories(categories);
	const normalized = normalizeCategories(allCategories);

	return normalized;
};

export default normalizeSearchProductsCategory;

const getAllCategories = (
	inCategories: {
		id: number;
		name: string;
		parent?: {
			id: number;
			name: string;
			parent?: { id: number; name: string } | null;
		} | null;
	}[]
) => {
	const categories: {
		id: number;
		name: string;
		parent?: { id: number; name: string } | null;
	}[] = [];
	for (let i = 0; i < inCategories.length; i++) {
		const category = inCategories[i];
		categories.push({
			id: category.id,
			name: category.name,
			parent: category.parent
		});

		if (category.parent) {
			const parent = category.parent;
			categories.push(parent);
			if (parent.parent) {
				categories.push(parent.parent);
			}
		}
	}
	return categories;
};

type Parent = {
	id: number;
	name: string;
	children: { [id: number]: Sub };
};

type Sub = {
	id: number;
	name: string;
	children: { [id: number]: SubSub };
};

type SubSub = {
	id: number;
	name: string;
};

const normalizeCategories = (
	categories: {
		id: number;
		name: string;
		parent?: { id: number; name: string } | null;
	}[]
) => {
	const parents: { [id: number]: Parent } = {};
	const subs: { [id: number]: Sub } = {};

	for (let i = 0; i < categories.length; i++) {
		const category = categories[i];
		if (!category.parent) {
			parents[category.id] = {
				id: category.id,
				name: category.name,
				children: {}
			};
		}
	}

	for (let i = 0; i < categories.length; i++) {
		const category = categories[i];
		if (category.parent) {
			const parent = parents[category.parent.id];
			if (parent) {
				subs[category.id] = {
					id: category.id,
					name: category.name,
					children: {}
				};
				parent.children[category.id] = subs[category.id];
			}
		}
	}
	for (let i = 0; i < categories.length; i++) {
		const category = categories[i];
		if (category.parent) {
			const subparent = subs[category.parent.id];
			if (subparent) {
				subparent.children[category.id] = {
					id: category.id,
					name: category.name
				};
			}
		}
	}

	return parents;
};
