import getCategoryType from "./getCategoryType";

describe("getCategoryType", () => {
	it("should return 'root'", () => {
		expect(
			getCategoryType(3, [
				{
					id: 1,
					name: "",
					parent: {
						id: 2,
						name: "",
						parent: {
							id: 3,
							name: ""
						}
					}
				}
			])
		).toBe("root");
		expect(
			getCategoryType(6, [
				{
					id: 1,
					name: "",
					parent: {
						id: 2,
						name: "",
						parent: {
							id: 3,
							name: ""
						}
					}
				},
				{
					id: 4,
					name: "",
					parent: {
						id: 5,
						name: "",
						parent: {
							id: 6,
							name: ""
						}
					}
				}
			])
		).toBe("root");
	});
	it("should return 'subsub'", () => {
		expect(
			getCategoryType(2, [
				{
					id: 1,
					name: "",
					parent: {
						id: 2,
						name: "",
						parent: {
							id: 3,
							name: ""
						}
					}
				}
			])
		).toBe("sub");
		expect(
			getCategoryType(5, [
				{
					id: 1,
					name: "",
					parent: {
						id: 2,
						name: "",
						parent: {
							id: 3,
							name: ""
						}
					}
				},
				{
					id: 4,
					name: "",
					parent: {
						id: 5,
						name: "",
						parent: {
							id: 6,
							name: ""
						}
					}
				}
			])
		).toBe("sub");
	});
	it("should return 'sub'", () => {
		expect(
			getCategoryType(1, [
				{
					id: 1,
					name: "",
					parent: {
						id: 2,
						name: "",
						parent: {
							id: 3,
							name: ""
						}
					}
				}
			])
		).toBe("subsub");
		expect(
			getCategoryType(4, [
				{
					id: 1,
					name: "",
					parent: {
						id: 2,
						name: "",
						parent: {
							id: 3,
							name: ""
						}
					}
				},
				{
					id: 4,
					name: "",
					parent: {
						id: 5,
						name: "",
						parent: {
							id: 6,
							name: ""
						}
					}
				}
			])
		).toBe("subsub");
	});
});
