import normalizeSearchProductsCategory from "./normalizeSearchProductsCategory";

describe("normalizeSearchProductsCategory", () => {
	it("should return normalized categories", () => {
		expect(
			normalizeSearchProductsCategory([
				{
					id: 0,
					name: "Category",
					parent: {
						id: 1,
						name: "Subname",
						parent: {
							id: 2,
							name: "Root"
						}
					}
				}
			])
		).toEqual({
			2: {
				id: 2,
				name: "Root",
				children: {
					1: {
						id: 1,
						name: "Subname",
						children: {
							0: {
								id: 0,
								name: "Category"
							}
						}
					}
				}
			}
		});
	});
});
