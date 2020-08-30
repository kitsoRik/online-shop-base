import { Test, TestingModule } from "@nestjs/testing";
import { CategoryService } from "./category.service";
import { Connection, Repository } from "typeorm";
import { getRepositoryToken } from "@nestjs/typeorm";
import { CategoryEntity } from "./category.entity";
import { FilterEntity } from "./filter/filter.entity";
import { GraphQLError } from "graphql";

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;
const createMockRepository = <T = any>(): MockRepository<T> => ({
	findOne: jest.fn(),
	create: jest.fn()
});

describe("CategoryService", () => {
	let service: CategoryService;
	let categoryRepository: MockRepository;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				CategoryService,
				{
					provide: Connection,
					useValue: {}
				},
				{
					provide: getRepositoryToken(CategoryEntity),
					useValue: createMockRepository()
				},
				{
					provide: getRepositoryToken(FilterEntity),
					useValue: createMockRepository()
				}
			]
		}).compile();

		service = module.get<CategoryService>(CategoryService);
		categoryRepository = module.get<MockRepository>(
			getRepositoryToken(CategoryEntity)
		);
	});

	it("should be defined", () => {
		expect(service).toBeDefined();
	});

	describe("findById", () => {
		it("should return the category object", async () => {
			const id = 1;
			const expectedCategory = {};

			categoryRepository.findOne.mockReturnValue(expectedCategory);

			const category = await service.findById(id);
			expect(category).toEqual(expectedCategory);
		});
		it("should throw 'GraphQLError' if not found", async () => {
			const id = 0;
			categoryRepository.findOne.mockReturnValue(undefined);

			try {
				const category = await service.findById(id);
			} catch (e) {
				expect(e).toBeInstanceOf(GraphQLError);
				expect(e.message).toEqual("NOT_FOUND");
			}
		});
	});
});
