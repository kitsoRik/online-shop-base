import { Category } from "../../../../../../generated/graphql";

const getCategoryType = (
	categoryId: number,
	categories: Exclude<
		{
			id: number;
			name: string;
			parent?: {
				id: number;
				name: string;
				parent?: {
					id: number;
					name: string;
				} | null;
			} | null;
		},
		Category
	>[]
): "root" | "sub" | "subsub" => {
	if (categories.find(c => c.id === categoryId)) return "subsub";

	if (
		categories
			.filter(c => c.parent)
			.map(c => c.parent)
			.find(c => c?.id === categoryId)
	)
		return "sub";
	if (
		categories
			.filter(c => c.parent)
			.map(c => c.parent)
			.filter(c => c && c.parent)
			.map(c => c && c.parent)
			.find(c => c?.id === categoryId)
	)
		return "root";

	throw new Error("Unknown id");
};

export default getCategoryType;
