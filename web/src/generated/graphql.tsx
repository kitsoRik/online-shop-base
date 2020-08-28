import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  middleName: Scalars['String'];
  phone: Scalars['String'];
  email: Scalars['String'];
  role: Scalars['String'];
};

export type CategoryField = {
  __typename?: 'CategoryField';
  id: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['String'];
  defaultValue: Scalars['String'];
};

export type CategoryInfoField = {
  __typename?: 'CategoryInfoField';
  id: Scalars['Int'];
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
  categoryField: CategoryField;
};

export type Language = {
  __typename?: 'Language';
  id: Scalars['Int'];
  code: Scalars['String'];
};

export type CategoryInfo = {
  __typename?: 'CategoryInfo';
  id: Scalars['Int'];
  name: Scalars['String'];
  language: Language;
  fields?: Maybe<Array<CategoryInfoField>>;
  category: CategoryInfo;
};


export type CategoryInfoFieldsArgs = {
  filter?: Maybe<CategoryInfoFielddInput>;
};

export type CategoryInfoFielddInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  name: Scalars['String'];
  parent?: Maybe<Category>;
  level: Scalars['Int'];
  children?: Maybe<Array<Category>>;
  fields?: Maybe<Array<CategoryField>>;
  info: Array<CategoryInfo>;
  filter?: Maybe<Filter>;
};


export type CategoryFieldsArgs = {
  filter?: Maybe<CategoryInfoFielddInput>;
};


export type CategoryInfoArgs = {
  filter?: Maybe<CategoryInfoInput>;
};

export type CategoryInfoInput = {
  id?: Maybe<Scalars['Int']>;
  languageCode?: Maybe<Scalars['String']>;
};

export type Filter = {
  __typename?: 'Filter';
  id: Scalars['Int'];
  category: Category;
  groups: Array<FilterGroup>;
};


export type FilterGroupsArgs = {
  filter?: Maybe<FilterGroupsInput>;
};

export type FilterGroupsInput = {
  id: Scalars['String'];
};

export type FilterGroup = {
  __typename?: 'FilterGroup';
  id: Scalars['String'];
  name: Scalars['String'];
  index: Scalars['Int'];
  filter: Filter;
  fields: Array<FilterField>;
};


export type FilterGroupFieldsArgs = {
  filter?: Maybe<FilterGroupFieldsInput>;
};

export type FilterGroupFieldsInput = {
  id?: Maybe<Scalars['String']>;
};

export type FilterField = {
  __typename?: 'FilterField';
  id: Scalars['String'];
  name: Scalars['String'];
  index: Scalars['Int'];
  type: Scalars['String'];
  categoryField?: Maybe<CategoryField>;
};

export type ProductInfoField = {
  __typename?: 'ProductInfoField';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  value: Scalars['String'];
  categoryInfoField?: Maybe<CategoryInfoField>;
};

export type ProductInfo = {
  __typename?: 'ProductInfo';
  id: Scalars['Int'];
  name: Scalars['String'];
  language: Language;
  fields?: Maybe<Array<ProductInfoField>>;
  product: Product;
};


export type ProductInfoFieldsArgs = {
  filter?: Maybe<ProductInfoFieldInput>;
};

export type ProductInfoFieldInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['Int'];
  category: Category;
  info: Array<ProductInfo>;
};


export type ProductInfoArgs = {
  filter?: Maybe<ProductInfoInput>;
};

export type ProductInfoInput = {
  id?: Maybe<Scalars['Int']>;
};

export type SearchProductsOutput = {
  __typename?: 'SearchProductsOutput';
  productsInfo: Array<ProductInfo>;
  count: Scalars['Int'];
};

export type SearchType = {
  __typename?: 'SearchType';
  query: Scalars['String'];
  categories: Array<Category>;
};

export type Query = {
  __typename?: 'Query';
  currentUser?: Maybe<User>;
  findCategoryByNameTemplate: Array<Category>;
  categories?: Maybe<Array<Category>>;
  findCategoryInfoByNameTemplate: Array<CategoryInfo>;
  products: Array<Product>;
  searchProductsCategory: Array<Category>;
  searchProducts: SearchProductsOutput;
  languages: Array<Language>;
  search: SearchType;
};


export type QueryFindCategoryByNameTemplateArgs = {
  template?: Maybe<Scalars['String']>;
};


export type QueryCategoriesArgs = {
  filter?: Maybe<CategoryInput>;
};


export type QueryFindCategoryInfoByNameTemplateArgs = {
  template?: Maybe<Scalars['String']>;
};


export type QueryProductsArgs = {
  filter?: Maybe<ProductInput>;
};


export type QuerySearchProductsCategoryArgs = {
  filter?: Maybe<SearchProductsInput>;
};


export type QuerySearchProductsArgs = {
  pagination: SearchProductsPaginationInput;
  filter?: Maybe<SearchProductsInput>;
};


export type QuerySearchArgs = {
  query: Scalars['String'];
};

export type CategoryInput = {
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
};

export type ProductInput = {
  id?: Maybe<Scalars['Int']>;
};

export type SearchProductsInput = {
  nameTemplate?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Int']>;
  subCategoryId?: Maybe<Scalars['Int']>;
  rootCategoryId?: Maybe<Scalars['Int']>;
};

export type SearchProductsPaginationInput = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  joinUser: User;
  leaveUser: Scalars['Boolean'];
  createUser: User;
  createCategory: Category;
  changeCategory: Category;
  addCategoryInfoToCategory: Category;
  removeInfoFromCategory: Category;
  changeCategoryInfo: CategoryInfo;
  changeFieldInCategoryInfo: CategoryInfoField;
  initializeCategoryInfoField: CategoryInfoField;
  addFieldToCategory: Category;
  changeFieldInCategory: CategoryField;
  removeFieldFromCategory: Category;
  initializeCategoryFilter: Category;
  addFieldToFilterGroup: FilterField;
  changeFilterGroupField: FilterField;
  addFilterGroup: Filter;
  changeFilterGroup: FilterGroup;
  changeFilterGroupsOrder: Array<FilterGroup>;
  createProduct: Product;
  changeProduct: Product;
  changeCategoryInProduct: Product;
  addProductInfoToProduct: Product;
  removeInfoFromProduct: Product;
  changeProductInfo: ProductInfo;
  addFieldToProductInfo: ProductInfoField;
  changeFieldInProductInfo: ProductInfoField;
  addLanguage: Language;
  setLanguageJson: Scalars['Boolean'];
};


export type MutationJoinUserArgs = {
  remember: Scalars['Boolean'];
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};


export type MutationCreateCategoryArgs = {
  parentId?: Maybe<Scalars['Int']>;
  level: Scalars['Int'];
  name: Scalars['String'];
};


export type MutationChangeCategoryArgs = {
  name: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationAddCategoryInfoToCategoryArgs = {
  language: Scalars['Int'];
  categoryId: Scalars['Int'];
};


export type MutationRemoveInfoFromCategoryArgs = {
  infoId: Scalars['Int'];
  categoryId: Scalars['Int'];
};


export type MutationChangeCategoryInfoArgs = {
  change: ChangeCategoryInfoInput;
  infoId: Scalars['Int'];
  id: Scalars['Int'];
};


export type MutationChangeFieldInCategoryInfoArgs = {
  change: CategoryInfoFieldChangeInput;
  fieldId: Scalars['Int'];
};


export type MutationInitializeCategoryInfoFieldArgs = {
  categoryFieldId: Scalars['Int'];
  categoryInfoId: Scalars['Int'];
};


export type MutationAddFieldToCategoryArgs = {
  field: CategoryFieldInput;
  categoryId: Scalars['Int'];
};


export type MutationChangeFieldInCategoryArgs = {
  change: CategoryFieldChangeInput;
  fieldId: Scalars['Int'];
};


export type MutationRemoveFieldFromCategoryArgs = {
  fieldId: Scalars['Int'];
};


export type MutationInitializeCategoryFilterArgs = {
  categoryId: Scalars['Int'];
};


export type MutationAddFieldToFilterGroupArgs = {
  name: Scalars['String'];
  filterGroupId: Scalars['String'];
};


export type MutationChangeFilterGroupFieldArgs = {
  change: FilterFieldChangeInput;
  fieldId: Scalars['String'];
};


export type MutationAddFilterGroupArgs = {
  name: Scalars['String'];
  filterId: Scalars['Int'];
};


export type MutationChangeFilterGroupArgs = {
  change: FilterGroupChange;
  filterGroupId: Scalars['String'];
};


export type MutationChangeFilterGroupsOrderArgs = {
  orderedGroupsIds: Array<Scalars['String']>;
};


export type MutationCreateProductArgs = {
  categoryId: Scalars['Int'];
};


export type MutationChangeProductArgs = {
  id: Scalars['Int'];
};


export type MutationChangeCategoryInProductArgs = {
  categoryId: Scalars['Int'];
  id: Scalars['Int'];
};


export type MutationAddProductInfoToProductArgs = {
  language: Scalars['Int'];
  productId: Scalars['Int'];
};


export type MutationRemoveInfoFromProductArgs = {
  infoId: Scalars['Int'];
  productId: Scalars['Int'];
};


export type MutationChangeProductInfoArgs = {
  change: ChangeProductInfoInput;
  id: Scalars['Int'];
};


export type MutationAddFieldToProductInfoArgs = {
  value: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  categoryInfoFieldId?: Maybe<Scalars['Int']>;
  productInfoId: Scalars['Int'];
};


export type MutationChangeFieldInProductInfoArgs = {
  change: ProductInfoFieldChangeInput;
  id?: Maybe<Scalars['Int']>;
};


export type MutationAddLanguageArgs = {
  code: Scalars['String'];
};


export type MutationSetLanguageJsonArgs = {
  jsonName: Scalars['String'];
  id: Scalars['Int'];
};

export type ChangeCategoryInfoInput = {
  name?: Maybe<Scalars['String']>;
};

export type CategoryInfoFieldChangeInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type CategoryFieldInput = {
  name: Scalars['String'];
  type: Scalars['String'];
  defaultValue: Scalars['String'];
};

export type CategoryFieldChangeInput = {
  name: Scalars['String'];
  type: Scalars['String'];
  defaultValue: Scalars['String'];
};

export type FilterFieldChangeInput = {
  name: Scalars['String'];
  type: Scalars['String'];
  categoryFieldId: Scalars['Int'];
};

export type FilterGroupChange = {
  name?: Maybe<Scalars['String']>;
  orderedItemsIds?: Maybe<Array<Scalars['String']>>;
  deleteIndex?: Maybe<Scalars['Int']>;
  newGroupId?: Maybe<Scalars['String']>;
  newGroupIndex?: Maybe<Scalars['Int']>;
};

export type ChangeProductInfoInput = {
  name?: Maybe<Scalars['String']>;
};

export type ProductInfoFieldChangeInput = {
  name?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

export type GetApplicationLanguagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetApplicationLanguagesQuery = (
  { __typename?: 'Query' }
  & { languages: Array<(
    { __typename?: 'Language' }
    & Pick<Language, 'id' | 'code'>
  )> }
);

export type SearchProductsCategoryQueryVariables = Exact<{
  nameTemplate: Scalars['String'];
  languageCode: Scalars['String'];
}>;


export type SearchProductsCategoryQuery = (
  { __typename?: 'Query' }
  & { searchProductsCategory: Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name'>
    & { parent?: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
      & { parent?: Maybe<(
        { __typename?: 'Category' }
        & Pick<Category, 'id' | 'name'>
      )> }
    )>, info: Array<(
      { __typename?: 'CategoryInfo' }
      & Pick<CategoryInfo, 'id' | 'name'>
      & { language: (
        { __typename?: 'Language' }
        & Pick<Language, 'code'>
      ) }
    )> }
  )> }
);

export type SearchRootCategoryProductsQueryVariables = Exact<{
  nameTemplate: Scalars['String'];
  languageCode: Scalars['String'];
  rootCategoryId: Scalars['Int'];
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type SearchRootCategoryProductsQuery = (
  { __typename?: 'Query' }
  & { searchProducts: (
    { __typename?: 'SearchProductsOutput' }
    & { productsInfo: Array<(
      { __typename?: 'ProductInfo' }
      & Pick<ProductInfo, 'id' | 'name'>
    )> }
  ) }
);

export type SearchSubCategoryProductsQueryVariables = Exact<{
  nameTemplate: Scalars['String'];
  languageCode: Scalars['String'];
  subCategoryId: Scalars['Int'];
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type SearchSubCategoryProductsQuery = (
  { __typename?: 'Query' }
  & { searchProducts: (
    { __typename?: 'SearchProductsOutput' }
    & { productsInfo: Array<(
      { __typename?: 'ProductInfo' }
      & Pick<ProductInfo, 'id' | 'name'>
    )> }
  ) }
);

export type SearchSubsubCategoryProductsQueryVariables = Exact<{
  nameTemplate: Scalars['String'];
  languageCode: Scalars['String'];
  categoryId: Scalars['Int'];
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type SearchSubsubCategoryProductsQuery = (
  { __typename?: 'Query' }
  & { searchProducts: (
    { __typename?: 'SearchProductsOutput' }
    & { productsInfo: Array<(
      { __typename?: 'ProductInfo' }
      & Pick<ProductInfo, 'id' | 'name'>
    )> }
  ) }
);

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'middleName' | 'phone'>
  )> }
);

export type GetChildrenCategoryByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetChildrenCategoryByIdQuery = (
  { __typename?: 'Query' }
  & { categories?: Maybe<Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id'>
    & { children?: Maybe<Array<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
    )>> }
  )>> }
);

export type ChangeCategoryMutationVariables = Exact<{
  id: Scalars['Int'];
  name: Scalars['String'];
}>;


export type ChangeCategoryMutation = (
  { __typename?: 'Mutation' }
  & { changeCategory: (
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name'>
  ) }
);

export type AddFieldToCategoryMutationVariables = Exact<{
  categoryId: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['String'];
  defaultValue: Scalars['String'];
}>;


export type AddFieldToCategoryMutation = (
  { __typename?: 'Mutation' }
  & { addFieldToCategory: (
    { __typename?: 'Category' }
    & Pick<Category, 'id'>
    & { fields?: Maybe<Array<(
      { __typename?: 'CategoryField' }
      & Pick<CategoryField, 'id' | 'name' | 'type' | 'defaultValue'>
    )>> }
  ) }
);

export type RemoveFieldFromCategoryMutationVariables = Exact<{
  fieldId: Scalars['Int'];
}>;


export type RemoveFieldFromCategoryMutation = (
  { __typename?: 'Mutation' }
  & { removeFieldFromCategory: (
    { __typename?: 'Category' }
    & Pick<Category, 'id'>
    & { fields?: Maybe<Array<(
      { __typename?: 'CategoryField' }
      & Pick<CategoryField, 'id' | 'name'>
    )>> }
  ) }
);

export type GetFieldsCategoryByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetFieldsCategoryByIdQuery = (
  { __typename?: 'Query' }
  & { categories?: Maybe<Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id'>
    & { fields?: Maybe<Array<(
      { __typename?: 'CategoryField' }
      & Pick<CategoryField, 'id' | 'name'>
    )>> }
  )>> }
);

export type GetFieldByIdFromCategoryByIdQueryVariables = Exact<{
  id: Scalars['Int'];
  fieldId: Scalars['Int'];
}>;


export type GetFieldByIdFromCategoryByIdQuery = (
  { __typename?: 'Query' }
  & { categories?: Maybe<Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id'>
    & { fields?: Maybe<Array<(
      { __typename?: 'CategoryField' }
      & Pick<CategoryField, 'id' | 'name' | 'type' | 'defaultValue'>
    )>> }
  )>> }
);

export type ChangeFieldInCategoryMutationVariables = Exact<{
  fieldId: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['String'];
  defaultValue: Scalars['String'];
}>;


export type ChangeFieldInCategoryMutation = (
  { __typename?: 'Mutation' }
  & { changeFieldInCategory: (
    { __typename?: 'CategoryField' }
    & Pick<CategoryField, 'id' | 'name' | 'type' | 'defaultValue'>
  ) }
);

export type GetCategoryFilterQueryVariables = Exact<{
  categoryId: Scalars['Int'];
}>;


export type GetCategoryFilterQuery = (
  { __typename?: 'Query' }
  & { categories?: Maybe<Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id'>
    & { filter?: Maybe<(
      { __typename?: 'Filter' }
      & Pick<Filter, 'id'>
      & { groups: Array<(
        { __typename?: 'FilterGroup' }
        & Pick<FilterGroup, 'id' | 'name' | 'index'>
        & { fields: Array<(
          { __typename?: 'FilterField' }
          & Pick<FilterField, 'id' | 'name' | 'type' | 'index'>
        )> }
      )> }
    )> }
  )>> }
);

export type AddCategoryFilterGroupMutationVariables = Exact<{
  filterId: Scalars['Int'];
  name: Scalars['String'];
}>;


export type AddCategoryFilterGroupMutation = (
  { __typename?: 'Mutation' }
  & { addFilterGroup: (
    { __typename?: 'Filter' }
    & Pick<Filter, 'id'>
    & { groups: Array<(
      { __typename?: 'FilterGroup' }
      & Pick<FilterGroup, 'id' | 'name' | 'index'>
      & { fields: Array<(
        { __typename?: 'FilterField' }
        & Pick<FilterField, 'id'>
      )> }
    )> }
  ) }
);

export type CategoryFieldsQueryVariables = Exact<{
  categoryId: Scalars['Int'];
}>;


export type CategoryFieldsQuery = (
  { __typename?: 'Query' }
  & { categories?: Maybe<Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id'>
    & { fields?: Maybe<Array<(
      { __typename?: 'CategoryField' }
      & Pick<CategoryField, 'id' | 'name' | 'type' | 'defaultValue'>
    )>> }
  )>> }
);

export type GetCategoryFilterGroupQueryVariables = Exact<{
  categoryId: Scalars['Int'];
  groupId: Scalars['String'];
}>;


export type GetCategoryFilterGroupQuery = (
  { __typename?: 'Query' }
  & { categories?: Maybe<Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id'>
    & { filter?: Maybe<(
      { __typename?: 'Filter' }
      & Pick<Filter, 'id'>
      & { groups: Array<(
        { __typename?: 'FilterGroup' }
        & Pick<FilterGroup, 'id' | 'name' | 'index'>
        & { fields: Array<(
          { __typename?: 'FilterField' }
          & Pick<FilterField, 'id' | 'name' | 'index'>
        )> }
      )> }
    )> }
  )>> }
);

export type ChangeFilterGroupMutationVariables = Exact<{
  groupId: Scalars['String'];
  name: Scalars['String'];
}>;


export type ChangeFilterGroupMutation = (
  { __typename?: 'Mutation' }
  & { changeFilterGroup: (
    { __typename?: 'FilterGroup' }
    & Pick<FilterGroup, 'id' | 'name'>
  ) }
);

export type GetCategoryFilterGroupFieldQueryVariables = Exact<{
  categoryId: Scalars['Int'];
  groupId: Scalars['String'];
  fieldId: Scalars['String'];
}>;


export type GetCategoryFilterGroupFieldQuery = (
  { __typename?: 'Query' }
  & { categories?: Maybe<Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id'>
    & { filter?: Maybe<(
      { __typename?: 'Filter' }
      & Pick<Filter, 'id'>
      & { groups: Array<(
        { __typename?: 'FilterGroup' }
        & Pick<FilterGroup, 'id'>
        & { fields: Array<(
          { __typename?: 'FilterField' }
          & Pick<FilterField, 'id' | 'name' | 'type' | 'index'>
          & { categoryField?: Maybe<(
            { __typename?: 'CategoryField' }
            & Pick<CategoryField, 'id' | 'name' | 'type' | 'defaultValue'>
          )> }
        )> }
      )> }
    )> }
  )>> }
);

export type ChangeFilterGroupFieldMutationVariables = Exact<{
  fieldId: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
  categoryFieldId: Scalars['Int'];
}>;


export type ChangeFilterGroupFieldMutation = (
  { __typename?: 'Mutation' }
  & { changeFilterGroupField: (
    { __typename?: 'FilterField' }
    & Pick<FilterField, 'id' | 'name' | 'type'>
    & { categoryField?: Maybe<(
      { __typename?: 'CategoryField' }
      & Pick<CategoryField, 'id' | 'name' | 'type' | 'defaultValue'>
    )> }
  ) }
);

export type AddFieldToFilterGroupMutationVariables = Exact<{
  filterGroupId: Scalars['String'];
  name: Scalars['String'];
}>;


export type AddFieldToFilterGroupMutation = (
  { __typename?: 'Mutation' }
  & { addFieldToFilterGroup: (
    { __typename?: 'FilterField' }
    & Pick<FilterField, 'id' | 'name'>
  ) }
);

export type FilterWithGroupsFragment = (
  { __typename?: 'Filter' }
  & Pick<Filter, 'id'>
  & { groups: Array<(
    { __typename?: 'FilterGroup' }
    & Pick<FilterGroup, 'id' | 'name' | 'index'>
    & { fields: Array<(
      { __typename?: 'FilterField' }
      & Pick<FilterField, 'id' | 'name' | 'type' | 'index'>
    )> }
  )> }
);

export type ChangeFilterGroupsOrderMutationVariables = Exact<{
  orderedGroupsIds: Array<Scalars['String']>;
}>;


export type ChangeFilterGroupsOrderMutation = (
  { __typename?: 'Mutation' }
  & { changeFilterGroupsOrder: Array<(
    { __typename?: 'FilterGroup' }
    & Pick<FilterGroup, 'id' | 'index'>
    & { fields: Array<(
      { __typename?: 'FilterField' }
      & Pick<FilterField, 'id' | 'index'>
    )> }
  )> }
);

export type FilterGroupIndexFragment = (
  { __typename?: 'FilterGroup' }
  & Pick<FilterGroup, 'id' | 'index'>
);

export type ChangeFilterGroupItemsOrderMutationVariables = Exact<{
  filterGroupId: Scalars['String'];
  orderedItemsIds: Array<Scalars['String']>;
}>;


export type ChangeFilterGroupItemsOrderMutation = (
  { __typename?: 'Mutation' }
  & { changeFilterGroup: (
    { __typename?: 'FilterGroup' }
    & Pick<FilterGroup, 'id' | 'index'>
    & { fields: Array<(
      { __typename?: 'FilterField' }
      & Pick<FilterField, 'id' | 'index'>
    )> }
  ) }
);

export type ChangeFilterGroupItemLocationMutationVariables = Exact<{
  filterGroupId: Scalars['String'];
  deleteIndex: Scalars['Int'];
  newGroupId: Scalars['String'];
  newGroupIndex: Scalars['Int'];
}>;


export type ChangeFilterGroupItemLocationMutation = (
  { __typename?: 'Mutation' }
  & { changeFilterGroup: (
    { __typename?: 'FilterGroup' }
    & Pick<FilterGroup, 'id' | 'index'>
    & { fields: Array<(
      { __typename?: 'FilterField' }
      & Pick<FilterField, 'id' | 'index'>
    )> }
  ) }
);

export type FilterGroupFieldsIndexFragment = (
  { __typename?: 'FilterGroup' }
  & Pick<FilterGroup, 'id'>
  & { fields: Array<(
    { __typename?: 'FilterField' }
    & Pick<FilterField, 'index'>
  )> }
);

export type FilterFieldIndexFragment = (
  { __typename?: 'FilterField' }
  & Pick<FilterField, 'id' | 'index'>
);

export type InitializeCategoryFilterMutationVariables = Exact<{
  categoryId: Scalars['Int'];
}>;


export type InitializeCategoryFilterMutation = (
  { __typename?: 'Mutation' }
  & { initializeCategoryFilter: (
    { __typename?: 'Category' }
    & Pick<Category, 'id'>
    & { filter?: Maybe<(
      { __typename?: 'Filter' }
      & { category: (
        { __typename?: 'Category' }
        & Pick<Category, 'id'>
      ) }
    )> }
  ) }
);

export type AddCategoryInfoToCategoryMutationVariables = Exact<{
  id: Scalars['Int'];
  languageId: Scalars['Int'];
}>;


export type AddCategoryInfoToCategoryMutation = (
  { __typename?: 'Mutation' }
  & { addCategoryInfoToCategory: (
    { __typename?: 'Category' }
    & Pick<Category, 'id'>
    & { info: Array<(
      { __typename?: 'CategoryInfo' }
      & Pick<CategoryInfo, 'id'>
      & { language: (
        { __typename?: 'Language' }
        & Pick<Language, 'id' | 'code'>
      ) }
    )> }
  ) }
);

export type GetCategoryInfoLanguagesQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetCategoryInfoLanguagesQuery = (
  { __typename?: 'Query' }
  & { categories?: Maybe<Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id'>
    & { info: Array<(
      { __typename?: 'CategoryInfo' }
      & Pick<CategoryInfo, 'id'>
      & { language: (
        { __typename?: 'Language' }
        & Pick<Language, 'id' | 'code'>
      ) }
    )> }
  )>> }
);

export type GetCategoryInfoByCategoryIdAndInfoIdQueryVariables = Exact<{
  id: Scalars['Int'];
  infoId: Scalars['Int'];
}>;


export type GetCategoryInfoByCategoryIdAndInfoIdQuery = (
  { __typename?: 'Query' }
  & { categories?: Maybe<Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id'>
    & { info: Array<(
      { __typename?: 'CategoryInfo' }
      & Pick<CategoryInfo, 'id' | 'name'>
      & { language: (
        { __typename?: 'Language' }
        & Pick<Language, 'id'>
      ) }
    )> }
  )>> }
);

export type ChangeCategoryInfoMutationVariables = Exact<{
  id: Scalars['Int'];
  infoId: Scalars['Int'];
  name: Scalars['String'];
}>;


export type ChangeCategoryInfoMutation = (
  { __typename?: 'Mutation' }
  & { changeCategoryInfo: (
    { __typename?: 'CategoryInfo' }
    & Pick<CategoryInfo, 'id'>
  ) }
);

export type InitializeCategoryInfoFieldMutationVariables = Exact<{
  categoryInfoId: Scalars['Int'];
  categoryFieldId: Scalars['Int'];
}>;


export type InitializeCategoryInfoFieldMutation = (
  { __typename?: 'Mutation' }
  & { initializeCategoryInfoField: (
    { __typename?: 'CategoryInfoField' }
    & Pick<CategoryInfoField, 'id' | 'name' | 'value'>
    & { categoryField: (
      { __typename?: 'CategoryField' }
      & Pick<CategoryField, 'id'>
    ) }
  ) }
);

export type GetCategoryInfoFieldQueryVariables = Exact<{
  categoryId: Scalars['Int'];
  infoId: Scalars['Int'];
  fieldId: Scalars['Int'];
}>;


export type GetCategoryInfoFieldQuery = (
  { __typename?: 'Query' }
  & { categories?: Maybe<Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id'>
    & { info: Array<(
      { __typename?: 'CategoryInfo' }
      & Pick<CategoryInfo, 'id'>
      & { fields?: Maybe<Array<(
        { __typename?: 'CategoryInfoField' }
        & Pick<CategoryInfoField, 'id' | 'name' | 'value'>
      )>> }
    )> }
  )>> }
);

export type ChangeFieldInCategoryInfoMutationVariables = Exact<{
  fieldId: Scalars['Int'];
  name: Scalars['String'];
  value: Scalars['String'];
}>;


export type ChangeFieldInCategoryInfoMutation = (
  { __typename?: 'Mutation' }
  & { changeFieldInCategoryInfo: (
    { __typename?: 'CategoryInfoField' }
    & Pick<CategoryInfoField, 'id' | 'name' | 'value'>
  ) }
);

export type GetFieldsCategoryInfoByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetFieldsCategoryInfoByIdQuery = (
  { __typename?: 'Query' }
  & { categories?: Maybe<Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id'>
    & { fields?: Maybe<Array<(
      { __typename?: 'CategoryField' }
      & Pick<CategoryField, 'id' | 'name'>
    )>>, info: Array<(
      { __typename?: 'CategoryInfo' }
      & Pick<CategoryInfo, 'id'>
      & { fields?: Maybe<Array<(
        { __typename?: 'CategoryInfoField' }
        & Pick<CategoryInfoField, 'id' | 'value' | 'name'>
        & { categoryField: (
          { __typename?: 'CategoryField' }
          & Pick<CategoryField, 'id'>
        ) }
      )>> }
    )> }
  )>> }
);

export type GetCategoryInfoByCategoryIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetCategoryInfoByCategoryIdQuery = (
  { __typename?: 'Query' }
  & { categories?: Maybe<Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id'>
    & { info: Array<(
      { __typename?: 'CategoryInfo' }
      & Pick<CategoryInfo, 'id'>
      & { language: (
        { __typename?: 'Language' }
        & Pick<Language, 'id' | 'code'>
      ), fields?: Maybe<Array<(
        { __typename?: 'CategoryInfoField' }
        & Pick<CategoryInfoField, 'id' | 'value'>
      )>> }
    )> }
  )>> }
);

export type RemoveCategoryInfoFromCategoryMutationVariables = Exact<{
  categoryId: Scalars['Int'];
  infoId: Scalars['Int'];
}>;


export type RemoveCategoryInfoFromCategoryMutation = (
  { __typename?: 'Mutation' }
  & { removeInfoFromCategory: (
    { __typename?: 'Category' }
    & Pick<Category, 'id'>
    & { info: Array<(
      { __typename?: 'CategoryInfo' }
      & Pick<CategoryInfo, 'id'>
    )> }
  ) }
);

export type GetParentCategoryByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetParentCategoryByIdQuery = (
  { __typename?: 'Query' }
  & { categories?: Maybe<Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id'>
    & { parent?: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
    )> }
  )>> }
);

export type GetCategoryByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetCategoryByIdQuery = (
  { __typename?: 'Query' }
  & { categories?: Maybe<Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name' | 'level'>
    & { info: Array<(
      { __typename?: 'CategoryInfo' }
      & Pick<CategoryInfo, 'id'>
    )>, parent?: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
    )> }
  )>> }
);

export type CreateCategoryMutationVariables = Exact<{
  name: Scalars['String'];
  level: Scalars['Int'];
  parentId?: Maybe<Scalars['Int']>;
}>;


export type CreateCategoryMutation = (
  { __typename?: 'Mutation' }
  & { createCategory: (
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name'>
    & { parent?: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id'>
    )> }
  ) }
);

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = (
  { __typename?: 'Query' }
  & { categories?: Maybe<Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name'>
    & { children?: Maybe<Array<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
      & { children?: Maybe<Array<(
        { __typename?: 'Category' }
        & Pick<Category, 'id' | 'name'>
      )>> }
    )>> }
  )>> }
);

export type FindCategoryByNameTemplateQueryVariables = Exact<{
  template?: Maybe<Scalars['String']>;
}>;


export type FindCategoryByNameTemplateQuery = (
  { __typename?: 'Query' }
  & { findCategoryByNameTemplate: Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name' | 'level'>
  )> }
);

export type GetLanguagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLanguagesQuery = (
  { __typename?: 'Query' }
  & { languages: Array<(
    { __typename?: 'Language' }
    & Pick<Language, 'id' | 'code'>
  )> }
);

export type SetLanguageJsonMutationVariables = Exact<{
  id: Scalars['Int'];
  jsonName: Scalars['String'];
}>;


export type SetLanguageJsonMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'setLanguageJson'>
);

export type AddLanguageMutationVariables = Exact<{
  code: Scalars['String'];
}>;


export type AddLanguageMutation = (
  { __typename?: 'Mutation' }
  & { addLanguage: (
    { __typename?: 'Language' }
    & Pick<Language, 'id' | 'code'>
  ) }
);

export type CreateProductMutationVariables = Exact<{
  categoryId: Scalars['Int'];
}>;


export type CreateProductMutation = (
  { __typename?: 'Mutation' }
  & { createProduct: (
    { __typename?: 'Product' }
    & Pick<Product, 'id'>
    & { category: (
      { __typename?: 'Category' }
      & Pick<Category, 'id'>
    ) }
  ) }
);

export type FindProductInfoByNameTemplateQueryVariables = Exact<{
  template?: Maybe<Scalars['String']>;
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type FindProductInfoByNameTemplateQuery = (
  { __typename?: 'Query' }
  & { searchProducts: (
    { __typename?: 'SearchProductsOutput' }
    & { productsInfo: Array<(
      { __typename?: 'ProductInfo' }
      & Pick<ProductInfo, 'id' | 'name'>
      & { language: (
        { __typename?: 'Language' }
        & Pick<Language, 'id' | 'code'>
      ), product: (
        { __typename?: 'Product' }
        & Pick<Product, 'id'>
      ) }
    )> }
  ) }
);

export type FindCategoryByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindCategoryByIdQuery = (
  { __typename?: 'Query' }
  & { categories?: Maybe<Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name' | 'level'>
  )>> }
);

export type GetProductCategoryByProductIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetProductCategoryByProductIdQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id'>
    & { category: (
      { __typename?: 'Category' }
      & Pick<Category, 'id'>
    ) }
  )> }
);

export type ChangeCategoryInProductMutationVariables = Exact<{
  productId: Scalars['Int'];
  categoryId: Scalars['Int'];
}>;


export type ChangeCategoryInProductMutation = (
  { __typename?: 'Mutation' }
  & { changeCategoryInProduct: (
    { __typename?: 'Product' }
    & Pick<Product, 'id'>
    & { category: (
      { __typename?: 'Category' }
      & Pick<Category, 'id'>
    ) }
  ) }
);

export type GetProductInfoByProductIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetProductInfoByProductIdQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id'>
    & { info: Array<(
      { __typename?: 'ProductInfo' }
      & Pick<ProductInfo, 'id'>
      & { language: (
        { __typename?: 'Language' }
        & Pick<Language, 'id' | 'code'>
      ), fields?: Maybe<Array<(
        { __typename?: 'ProductInfoField' }
        & Pick<ProductInfoField, 'id' | 'value'>
      )>> }
    )> }
  )> }
);

export type AddProductInfoToProductMutationVariables = Exact<{
  id: Scalars['Int'];
  languageId: Scalars['Int'];
}>;


export type AddProductInfoToProductMutation = (
  { __typename?: 'Mutation' }
  & { addProductInfoToProduct: (
    { __typename?: 'Product' }
    & Pick<Product, 'id'>
    & { info: Array<(
      { __typename?: 'ProductInfo' }
      & Pick<ProductInfo, 'id'>
      & { language: (
        { __typename?: 'Language' }
        & Pick<Language, 'id' | 'code'>
      ) }
    )> }
  ) }
);

export type GetProductInfoLanguagesQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetProductInfoLanguagesQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id'>
    & { info: Array<(
      { __typename?: 'ProductInfo' }
      & Pick<ProductInfo, 'id'>
      & { language: (
        { __typename?: 'Language' }
        & Pick<Language, 'id' | 'code'>
      ) }
    )> }
  )> }
);

export type GetProductInfoByProductIdAndInfoIdQueryVariables = Exact<{
  id: Scalars['Int'];
  infoId: Scalars['Int'];
}>;


export type GetProductInfoByProductIdAndInfoIdQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id'>
    & { info: Array<(
      { __typename?: 'ProductInfo' }
      & Pick<ProductInfo, 'id' | 'name'>
      & { language: (
        { __typename?: 'Language' }
        & Pick<Language, 'id'>
      ) }
    )> }
  )> }
);

export type ChangeProductInfoMutationVariables = Exact<{
  id: Scalars['Int'];
  name: Scalars['String'];
}>;


export type ChangeProductInfoMutation = (
  { __typename?: 'Mutation' }
  & { changeProductInfo: (
    { __typename?: 'ProductInfo' }
    & Pick<ProductInfo, 'id'>
  ) }
);

export type ChangeCategoryFieldInProductInfoMutationVariables = Exact<{
  fieldId: Scalars['Int'];
  value: Scalars['String'];
}>;


export type ChangeCategoryFieldInProductInfoMutation = (
  { __typename?: 'Mutation' }
  & { changeFieldInProductInfo: (
    { __typename?: 'ProductInfoField' }
    & Pick<ProductInfoField, 'id' | 'name' | 'value'>
  ) }
);

export type InitializeProductInfoFieldMutationVariables = Exact<{
  label?: Maybe<Scalars['String']>;
  value: Scalars['String'];
  productInfoId: Scalars['Int'];
  categoryInfoFieldId: Scalars['Int'];
}>;


export type InitializeProductInfoFieldMutation = (
  { __typename?: 'Mutation' }
  & { addFieldToProductInfo: (
    { __typename?: 'ProductInfoField' }
    & Pick<ProductInfoField, 'id' | 'name' | 'value'>
    & { categoryInfoField?: Maybe<(
      { __typename?: 'CategoryInfoField' }
      & Pick<CategoryInfoField, 'id'>
    )> }
  ) }
);

export type GetFieldsProductByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetFieldsProductByIdQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id'>
    & { info: Array<(
      { __typename?: 'ProductInfo' }
      & Pick<ProductInfo, 'id'>
      & { language: (
        { __typename?: 'Language' }
        & Pick<Language, 'id'>
      ), fields?: Maybe<Array<(
        { __typename?: 'ProductInfoField' }
        & Pick<ProductInfoField, 'id' | 'name' | 'value'>
        & { categoryInfoField?: Maybe<(
          { __typename?: 'CategoryInfoField' }
          & Pick<CategoryInfoField, 'id'>
        )> }
      )>> }
    )>, category: (
      { __typename?: 'Category' }
      & Pick<Category, 'id'>
      & { info: Array<(
        { __typename?: 'CategoryInfo' }
        & Pick<CategoryInfo, 'id'>
        & { language: (
          { __typename?: 'Language' }
          & Pick<Language, 'id'>
        ), fields?: Maybe<Array<(
          { __typename?: 'CategoryInfoField' }
          & Pick<CategoryInfoField, 'id' | 'name' | 'value'>
          & { categoryField: (
            { __typename?: 'CategoryField' }
            & Pick<CategoryField, 'id' | 'name'>
          ) }
        )>> }
      )>, fields?: Maybe<Array<(
        { __typename?: 'CategoryField' }
        & Pick<CategoryField, 'id' | 'name'>
      )>> }
    ) }
  )> }
);

export type AddFieldToProductInfoMutationVariables = Exact<{
  productInfoId: Scalars['Int'];
  label: Scalars['String'];
  value: Scalars['String'];
}>;


export type AddFieldToProductInfoMutation = (
  { __typename?: 'Mutation' }
  & { addFieldToProductInfo: (
    { __typename?: 'ProductInfoField' }
    & Pick<ProductInfoField, 'id' | 'value'>
  ) }
);

export type GetProductInfoFieldQueryVariables = Exact<{
  infoId: Scalars['Int'];
  fieldId: Scalars['Int'];
}>;


export type GetProductInfoFieldQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id'>
    & { info: Array<(
      { __typename?: 'ProductInfo' }
      & Pick<ProductInfo, 'id'>
      & { fields?: Maybe<Array<(
        { __typename?: 'ProductInfoField' }
        & Pick<ProductInfoField, 'id' | 'name' | 'value'>
      )>> }
    )> }
  )> }
);

export type ChangeFieldInProductInfoMutationVariables = Exact<{
  id: Scalars['Int'];
  name: Scalars['String'];
  value: Scalars['String'];
}>;


export type ChangeFieldInProductInfoMutation = (
  { __typename?: 'Mutation' }
  & { changeFieldInProductInfo: (
    { __typename?: 'ProductInfoField' }
    & Pick<ProductInfoField, 'id' | 'name' | 'value'>
  ) }
);

export type RemoveProductInfoFromProductMutationVariables = Exact<{
  productId: Scalars['Int'];
  infoId: Scalars['Int'];
}>;


export type RemoveProductInfoFromProductMutation = (
  { __typename?: 'Mutation' }
  & { removeInfoFromProduct: (
    { __typename?: 'Product' }
    & Pick<Product, 'id'>
    & { info: Array<(
      { __typename?: 'ProductInfo' }
      & Pick<ProductInfo, 'id'>
    )> }
  ) }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  remember: Scalars['Boolean'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { joinUser: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

export type UnloginMutationVariables = Exact<{ [key: string]: never; }>;


export type UnloginMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'leaveUser'>
);

export type RegisterMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'middleName' | 'phone'>
  ) }
);

export const FilterWithGroupsFragmentDoc = gql`
    fragment FilterWithGroups on Filter {
  id
  groups {
    id
    name
    index
    fields {
      id
      name
      type
      index
    }
  }
}
    `;
export const FilterGroupIndexFragmentDoc = gql`
    fragment FilterGroupIndex on FilterGroup {
  id
  index
}
    `;
export const FilterGroupFieldsIndexFragmentDoc = gql`
    fragment FilterGroupFieldsIndex on FilterGroup {
  id
  fields {
    index
  }
}
    `;
export const FilterFieldIndexFragmentDoc = gql`
    fragment FilterFieldIndex on FilterField {
  id
  index
}
    `;
export const GetApplicationLanguagesDocument = gql`
    query GetApplicationLanguages {
  languages {
    id
    code
  }
}
    `;

/**
 * __useGetApplicationLanguagesQuery__
 *
 * To run a query within a React component, call `useGetApplicationLanguagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetApplicationLanguagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetApplicationLanguagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetApplicationLanguagesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetApplicationLanguagesQuery, GetApplicationLanguagesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetApplicationLanguagesQuery, GetApplicationLanguagesQueryVariables>(GetApplicationLanguagesDocument, baseOptions);
      }
export function useGetApplicationLanguagesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetApplicationLanguagesQuery, GetApplicationLanguagesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetApplicationLanguagesQuery, GetApplicationLanguagesQueryVariables>(GetApplicationLanguagesDocument, baseOptions);
        }
export type GetApplicationLanguagesQueryHookResult = ReturnType<typeof useGetApplicationLanguagesQuery>;
export type GetApplicationLanguagesLazyQueryHookResult = ReturnType<typeof useGetApplicationLanguagesLazyQuery>;
export type GetApplicationLanguagesQueryResult = ApolloReactCommon.QueryResult<GetApplicationLanguagesQuery, GetApplicationLanguagesQueryVariables>;
export const SearchProductsCategoryDocument = gql`
    query SearchProductsCategory($nameTemplate: String!, $languageCode: String!) {
  searchProductsCategory(filter: {nameTemplate: $nameTemplate, languageCode: $languageCode}) {
    id
    name
    parent {
      id
      name
      parent {
        id
        name
      }
    }
    info(filter: {languageCode: $languageCode}) {
      id
      name
      language {
        code
      }
    }
  }
}
    `;

/**
 * __useSearchProductsCategoryQuery__
 *
 * To run a query within a React component, call `useSearchProductsCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchProductsCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchProductsCategoryQuery({
 *   variables: {
 *      nameTemplate: // value for 'nameTemplate'
 *      languageCode: // value for 'languageCode'
 *   },
 * });
 */
export function useSearchProductsCategoryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchProductsCategoryQuery, SearchProductsCategoryQueryVariables>) {
        return ApolloReactHooks.useQuery<SearchProductsCategoryQuery, SearchProductsCategoryQueryVariables>(SearchProductsCategoryDocument, baseOptions);
      }
export function useSearchProductsCategoryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchProductsCategoryQuery, SearchProductsCategoryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SearchProductsCategoryQuery, SearchProductsCategoryQueryVariables>(SearchProductsCategoryDocument, baseOptions);
        }
export type SearchProductsCategoryQueryHookResult = ReturnType<typeof useSearchProductsCategoryQuery>;
export type SearchProductsCategoryLazyQueryHookResult = ReturnType<typeof useSearchProductsCategoryLazyQuery>;
export type SearchProductsCategoryQueryResult = ApolloReactCommon.QueryResult<SearchProductsCategoryQuery, SearchProductsCategoryQueryVariables>;
export const SearchRootCategoryProductsDocument = gql`
    query SearchRootCategoryProducts($nameTemplate: String!, $languageCode: String!, $rootCategoryId: Int!, $offset: Int!, $limit: Int!) {
  searchProducts(filter: {nameTemplate: $nameTemplate, languageCode: $languageCode, rootCategoryId: $rootCategoryId}, pagination: {offset: $offset, limit: $limit}) {
    productsInfo {
      id
      name
    }
  }
}
    `;

/**
 * __useSearchRootCategoryProductsQuery__
 *
 * To run a query within a React component, call `useSearchRootCategoryProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchRootCategoryProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchRootCategoryProductsQuery({
 *   variables: {
 *      nameTemplate: // value for 'nameTemplate'
 *      languageCode: // value for 'languageCode'
 *      rootCategoryId: // value for 'rootCategoryId'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useSearchRootCategoryProductsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchRootCategoryProductsQuery, SearchRootCategoryProductsQueryVariables>) {
        return ApolloReactHooks.useQuery<SearchRootCategoryProductsQuery, SearchRootCategoryProductsQueryVariables>(SearchRootCategoryProductsDocument, baseOptions);
      }
export function useSearchRootCategoryProductsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchRootCategoryProductsQuery, SearchRootCategoryProductsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SearchRootCategoryProductsQuery, SearchRootCategoryProductsQueryVariables>(SearchRootCategoryProductsDocument, baseOptions);
        }
export type SearchRootCategoryProductsQueryHookResult = ReturnType<typeof useSearchRootCategoryProductsQuery>;
export type SearchRootCategoryProductsLazyQueryHookResult = ReturnType<typeof useSearchRootCategoryProductsLazyQuery>;
export type SearchRootCategoryProductsQueryResult = ApolloReactCommon.QueryResult<SearchRootCategoryProductsQuery, SearchRootCategoryProductsQueryVariables>;
export const SearchSubCategoryProductsDocument = gql`
    query SearchSubCategoryProducts($nameTemplate: String!, $languageCode: String!, $subCategoryId: Int!, $offset: Int!, $limit: Int!) {
  searchProducts(filter: {nameTemplate: $nameTemplate, languageCode: $languageCode, subCategoryId: $subCategoryId}, pagination: {offset: $offset, limit: $limit}) {
    productsInfo {
      id
      name
    }
  }
}
    `;

/**
 * __useSearchSubCategoryProductsQuery__
 *
 * To run a query within a React component, call `useSearchSubCategoryProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchSubCategoryProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchSubCategoryProductsQuery({
 *   variables: {
 *      nameTemplate: // value for 'nameTemplate'
 *      languageCode: // value for 'languageCode'
 *      subCategoryId: // value for 'subCategoryId'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useSearchSubCategoryProductsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchSubCategoryProductsQuery, SearchSubCategoryProductsQueryVariables>) {
        return ApolloReactHooks.useQuery<SearchSubCategoryProductsQuery, SearchSubCategoryProductsQueryVariables>(SearchSubCategoryProductsDocument, baseOptions);
      }
export function useSearchSubCategoryProductsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchSubCategoryProductsQuery, SearchSubCategoryProductsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SearchSubCategoryProductsQuery, SearchSubCategoryProductsQueryVariables>(SearchSubCategoryProductsDocument, baseOptions);
        }
export type SearchSubCategoryProductsQueryHookResult = ReturnType<typeof useSearchSubCategoryProductsQuery>;
export type SearchSubCategoryProductsLazyQueryHookResult = ReturnType<typeof useSearchSubCategoryProductsLazyQuery>;
export type SearchSubCategoryProductsQueryResult = ApolloReactCommon.QueryResult<SearchSubCategoryProductsQuery, SearchSubCategoryProductsQueryVariables>;
export const SearchSubsubCategoryProductsDocument = gql`
    query SearchSubsubCategoryProducts($nameTemplate: String!, $languageCode: String!, $categoryId: Int!, $offset: Int!, $limit: Int!) {
  searchProducts(filter: {nameTemplate: $nameTemplate, languageCode: $languageCode, categoryId: $categoryId}, pagination: {offset: $offset, limit: $limit}) {
    productsInfo {
      id
      name
    }
  }
}
    `;

/**
 * __useSearchSubsubCategoryProductsQuery__
 *
 * To run a query within a React component, call `useSearchSubsubCategoryProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchSubsubCategoryProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchSubsubCategoryProductsQuery({
 *   variables: {
 *      nameTemplate: // value for 'nameTemplate'
 *      languageCode: // value for 'languageCode'
 *      categoryId: // value for 'categoryId'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useSearchSubsubCategoryProductsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchSubsubCategoryProductsQuery, SearchSubsubCategoryProductsQueryVariables>) {
        return ApolloReactHooks.useQuery<SearchSubsubCategoryProductsQuery, SearchSubsubCategoryProductsQueryVariables>(SearchSubsubCategoryProductsDocument, baseOptions);
      }
export function useSearchSubsubCategoryProductsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchSubsubCategoryProductsQuery, SearchSubsubCategoryProductsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SearchSubsubCategoryProductsQuery, SearchSubsubCategoryProductsQueryVariables>(SearchSubsubCategoryProductsDocument, baseOptions);
        }
export type SearchSubsubCategoryProductsQueryHookResult = ReturnType<typeof useSearchSubsubCategoryProductsQuery>;
export type SearchSubsubCategoryProductsLazyQueryHookResult = ReturnType<typeof useSearchSubsubCategoryProductsLazyQuery>;
export type SearchSubsubCategoryProductsQueryResult = ApolloReactCommon.QueryResult<SearchSubsubCategoryProductsQuery, SearchSubsubCategoryProductsQueryVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  currentUser {
    id
    email
    firstName
    lastName
    middleName
    phone
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        return ApolloReactHooks.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
      }
export function useCurrentUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = ApolloReactCommon.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const GetChildrenCategoryByIdDocument = gql`
    query GetChildrenCategoryById($id: Int!) {
  categories(filter: {id: $id}) {
    id
    children {
      id
      name
    }
  }
}
    `;

/**
 * __useGetChildrenCategoryByIdQuery__
 *
 * To run a query within a React component, call `useGetChildrenCategoryByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChildrenCategoryByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChildrenCategoryByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetChildrenCategoryByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetChildrenCategoryByIdQuery, GetChildrenCategoryByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetChildrenCategoryByIdQuery, GetChildrenCategoryByIdQueryVariables>(GetChildrenCategoryByIdDocument, baseOptions);
      }
export function useGetChildrenCategoryByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetChildrenCategoryByIdQuery, GetChildrenCategoryByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetChildrenCategoryByIdQuery, GetChildrenCategoryByIdQueryVariables>(GetChildrenCategoryByIdDocument, baseOptions);
        }
export type GetChildrenCategoryByIdQueryHookResult = ReturnType<typeof useGetChildrenCategoryByIdQuery>;
export type GetChildrenCategoryByIdLazyQueryHookResult = ReturnType<typeof useGetChildrenCategoryByIdLazyQuery>;
export type GetChildrenCategoryByIdQueryResult = ApolloReactCommon.QueryResult<GetChildrenCategoryByIdQuery, GetChildrenCategoryByIdQueryVariables>;
export const ChangeCategoryDocument = gql`
    mutation ChangeCategory($id: Int!, $name: String!) {
  changeCategory(id: $id, name: $name) {
    id
    name
  }
}
    `;
export type ChangeCategoryMutationFn = ApolloReactCommon.MutationFunction<ChangeCategoryMutation, ChangeCategoryMutationVariables>;

/**
 * __useChangeCategoryMutation__
 *
 * To run a mutation, you first call `useChangeCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeCategoryMutation, { data, loading, error }] = useChangeCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useChangeCategoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeCategoryMutation, ChangeCategoryMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangeCategoryMutation, ChangeCategoryMutationVariables>(ChangeCategoryDocument, baseOptions);
      }
export type ChangeCategoryMutationHookResult = ReturnType<typeof useChangeCategoryMutation>;
export type ChangeCategoryMutationResult = ApolloReactCommon.MutationResult<ChangeCategoryMutation>;
export type ChangeCategoryMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeCategoryMutation, ChangeCategoryMutationVariables>;
export const AddFieldToCategoryDocument = gql`
    mutation AddFieldToCategory($categoryId: Int!, $name: String!, $type: String!, $defaultValue: String!) {
  addFieldToCategory(categoryId: $categoryId, field: {name: $name, type: $type, defaultValue: $defaultValue}) {
    id
    fields {
      id
      name
      type
      defaultValue
    }
  }
}
    `;
export type AddFieldToCategoryMutationFn = ApolloReactCommon.MutationFunction<AddFieldToCategoryMutation, AddFieldToCategoryMutationVariables>;

/**
 * __useAddFieldToCategoryMutation__
 *
 * To run a mutation, you first call `useAddFieldToCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFieldToCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFieldToCategoryMutation, { data, loading, error }] = useAddFieldToCategoryMutation({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *      name: // value for 'name'
 *      type: // value for 'type'
 *      defaultValue: // value for 'defaultValue'
 *   },
 * });
 */
export function useAddFieldToCategoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddFieldToCategoryMutation, AddFieldToCategoryMutationVariables>) {
        return ApolloReactHooks.useMutation<AddFieldToCategoryMutation, AddFieldToCategoryMutationVariables>(AddFieldToCategoryDocument, baseOptions);
      }
export type AddFieldToCategoryMutationHookResult = ReturnType<typeof useAddFieldToCategoryMutation>;
export type AddFieldToCategoryMutationResult = ApolloReactCommon.MutationResult<AddFieldToCategoryMutation>;
export type AddFieldToCategoryMutationOptions = ApolloReactCommon.BaseMutationOptions<AddFieldToCategoryMutation, AddFieldToCategoryMutationVariables>;
export const RemoveFieldFromCategoryDocument = gql`
    mutation RemoveFieldFromCategory($fieldId: Int!) {
  removeFieldFromCategory(fieldId: $fieldId) {
    id
    fields {
      id
      name
    }
  }
}
    `;
export type RemoveFieldFromCategoryMutationFn = ApolloReactCommon.MutationFunction<RemoveFieldFromCategoryMutation, RemoveFieldFromCategoryMutationVariables>;

/**
 * __useRemoveFieldFromCategoryMutation__
 *
 * To run a mutation, you first call `useRemoveFieldFromCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFieldFromCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFieldFromCategoryMutation, { data, loading, error }] = useRemoveFieldFromCategoryMutation({
 *   variables: {
 *      fieldId: // value for 'fieldId'
 *   },
 * });
 */
export function useRemoveFieldFromCategoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveFieldFromCategoryMutation, RemoveFieldFromCategoryMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveFieldFromCategoryMutation, RemoveFieldFromCategoryMutationVariables>(RemoveFieldFromCategoryDocument, baseOptions);
      }
export type RemoveFieldFromCategoryMutationHookResult = ReturnType<typeof useRemoveFieldFromCategoryMutation>;
export type RemoveFieldFromCategoryMutationResult = ApolloReactCommon.MutationResult<RemoveFieldFromCategoryMutation>;
export type RemoveFieldFromCategoryMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveFieldFromCategoryMutation, RemoveFieldFromCategoryMutationVariables>;
export const GetFieldsCategoryByIdDocument = gql`
    query GetFieldsCategoryById($id: Int!) {
  categories(filter: {id: $id}) {
    id
    fields {
      id
      name
    }
  }
}
    `;

/**
 * __useGetFieldsCategoryByIdQuery__
 *
 * To run a query within a React component, call `useGetFieldsCategoryByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFieldsCategoryByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFieldsCategoryByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetFieldsCategoryByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetFieldsCategoryByIdQuery, GetFieldsCategoryByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetFieldsCategoryByIdQuery, GetFieldsCategoryByIdQueryVariables>(GetFieldsCategoryByIdDocument, baseOptions);
      }
export function useGetFieldsCategoryByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetFieldsCategoryByIdQuery, GetFieldsCategoryByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetFieldsCategoryByIdQuery, GetFieldsCategoryByIdQueryVariables>(GetFieldsCategoryByIdDocument, baseOptions);
        }
export type GetFieldsCategoryByIdQueryHookResult = ReturnType<typeof useGetFieldsCategoryByIdQuery>;
export type GetFieldsCategoryByIdLazyQueryHookResult = ReturnType<typeof useGetFieldsCategoryByIdLazyQuery>;
export type GetFieldsCategoryByIdQueryResult = ApolloReactCommon.QueryResult<GetFieldsCategoryByIdQuery, GetFieldsCategoryByIdQueryVariables>;
export const GetFieldByIdFromCategoryByIdDocument = gql`
    query GetFieldByIdFromCategoryById($id: Int!, $fieldId: Int!) {
  categories(filter: {id: $id}) {
    id
    fields(filter: {id: $fieldId}) {
      id
      name
      type
      defaultValue
    }
  }
}
    `;

/**
 * __useGetFieldByIdFromCategoryByIdQuery__
 *
 * To run a query within a React component, call `useGetFieldByIdFromCategoryByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFieldByIdFromCategoryByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFieldByIdFromCategoryByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *      fieldId: // value for 'fieldId'
 *   },
 * });
 */
export function useGetFieldByIdFromCategoryByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetFieldByIdFromCategoryByIdQuery, GetFieldByIdFromCategoryByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetFieldByIdFromCategoryByIdQuery, GetFieldByIdFromCategoryByIdQueryVariables>(GetFieldByIdFromCategoryByIdDocument, baseOptions);
      }
export function useGetFieldByIdFromCategoryByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetFieldByIdFromCategoryByIdQuery, GetFieldByIdFromCategoryByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetFieldByIdFromCategoryByIdQuery, GetFieldByIdFromCategoryByIdQueryVariables>(GetFieldByIdFromCategoryByIdDocument, baseOptions);
        }
export type GetFieldByIdFromCategoryByIdQueryHookResult = ReturnType<typeof useGetFieldByIdFromCategoryByIdQuery>;
export type GetFieldByIdFromCategoryByIdLazyQueryHookResult = ReturnType<typeof useGetFieldByIdFromCategoryByIdLazyQuery>;
export type GetFieldByIdFromCategoryByIdQueryResult = ApolloReactCommon.QueryResult<GetFieldByIdFromCategoryByIdQuery, GetFieldByIdFromCategoryByIdQueryVariables>;
export const ChangeFieldInCategoryDocument = gql`
    mutation ChangeFieldInCategory($fieldId: Int!, $name: String!, $type: String!, $defaultValue: String!) {
  changeFieldInCategory(fieldId: $fieldId, change: {name: $name, type: $type, defaultValue: $defaultValue}) {
    id
    name
    type
    defaultValue
  }
}
    `;
export type ChangeFieldInCategoryMutationFn = ApolloReactCommon.MutationFunction<ChangeFieldInCategoryMutation, ChangeFieldInCategoryMutationVariables>;

/**
 * __useChangeFieldInCategoryMutation__
 *
 * To run a mutation, you first call `useChangeFieldInCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeFieldInCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeFieldInCategoryMutation, { data, loading, error }] = useChangeFieldInCategoryMutation({
 *   variables: {
 *      fieldId: // value for 'fieldId'
 *      name: // value for 'name'
 *      type: // value for 'type'
 *      defaultValue: // value for 'defaultValue'
 *   },
 * });
 */
export function useChangeFieldInCategoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeFieldInCategoryMutation, ChangeFieldInCategoryMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangeFieldInCategoryMutation, ChangeFieldInCategoryMutationVariables>(ChangeFieldInCategoryDocument, baseOptions);
      }
export type ChangeFieldInCategoryMutationHookResult = ReturnType<typeof useChangeFieldInCategoryMutation>;
export type ChangeFieldInCategoryMutationResult = ApolloReactCommon.MutationResult<ChangeFieldInCategoryMutation>;
export type ChangeFieldInCategoryMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeFieldInCategoryMutation, ChangeFieldInCategoryMutationVariables>;
export const GetCategoryFilterDocument = gql`
    query GetCategoryFilter($categoryId: Int!) {
  categories(filter: {id: $categoryId}) {
    id
    filter {
      id
      groups {
        id
        name
        index
        fields {
          id
          name
          type
          index
        }
      }
    }
  }
}
    `;

/**
 * __useGetCategoryFilterQuery__
 *
 * To run a query within a React component, call `useGetCategoryFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryFilterQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useGetCategoryFilterQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCategoryFilterQuery, GetCategoryFilterQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCategoryFilterQuery, GetCategoryFilterQueryVariables>(GetCategoryFilterDocument, baseOptions);
      }
export function useGetCategoryFilterLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCategoryFilterQuery, GetCategoryFilterQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCategoryFilterQuery, GetCategoryFilterQueryVariables>(GetCategoryFilterDocument, baseOptions);
        }
export type GetCategoryFilterQueryHookResult = ReturnType<typeof useGetCategoryFilterQuery>;
export type GetCategoryFilterLazyQueryHookResult = ReturnType<typeof useGetCategoryFilterLazyQuery>;
export type GetCategoryFilterQueryResult = ApolloReactCommon.QueryResult<GetCategoryFilterQuery, GetCategoryFilterQueryVariables>;
export const AddCategoryFilterGroupDocument = gql`
    mutation AddCategoryFilterGroup($filterId: Int!, $name: String!) {
  addFilterGroup(filterId: $filterId, name: $name) {
    id
    groups {
      id
      name
      index
      fields {
        id
      }
    }
  }
}
    `;
export type AddCategoryFilterGroupMutationFn = ApolloReactCommon.MutationFunction<AddCategoryFilterGroupMutation, AddCategoryFilterGroupMutationVariables>;

/**
 * __useAddCategoryFilterGroupMutation__
 *
 * To run a mutation, you first call `useAddCategoryFilterGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCategoryFilterGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCategoryFilterGroupMutation, { data, loading, error }] = useAddCategoryFilterGroupMutation({
 *   variables: {
 *      filterId: // value for 'filterId'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useAddCategoryFilterGroupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddCategoryFilterGroupMutation, AddCategoryFilterGroupMutationVariables>) {
        return ApolloReactHooks.useMutation<AddCategoryFilterGroupMutation, AddCategoryFilterGroupMutationVariables>(AddCategoryFilterGroupDocument, baseOptions);
      }
export type AddCategoryFilterGroupMutationHookResult = ReturnType<typeof useAddCategoryFilterGroupMutation>;
export type AddCategoryFilterGroupMutationResult = ApolloReactCommon.MutationResult<AddCategoryFilterGroupMutation>;
export type AddCategoryFilterGroupMutationOptions = ApolloReactCommon.BaseMutationOptions<AddCategoryFilterGroupMutation, AddCategoryFilterGroupMutationVariables>;
export const CategoryFieldsDocument = gql`
    query CategoryFields($categoryId: Int!) {
  categories(filter: {id: $categoryId}) {
    id
    fields {
      id
      name
      type
      defaultValue
    }
  }
}
    `;

/**
 * __useCategoryFieldsQuery__
 *
 * To run a query within a React component, call `useCategoryFieldsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryFieldsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryFieldsQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useCategoryFieldsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CategoryFieldsQuery, CategoryFieldsQueryVariables>) {
        return ApolloReactHooks.useQuery<CategoryFieldsQuery, CategoryFieldsQueryVariables>(CategoryFieldsDocument, baseOptions);
      }
export function useCategoryFieldsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CategoryFieldsQuery, CategoryFieldsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CategoryFieldsQuery, CategoryFieldsQueryVariables>(CategoryFieldsDocument, baseOptions);
        }
export type CategoryFieldsQueryHookResult = ReturnType<typeof useCategoryFieldsQuery>;
export type CategoryFieldsLazyQueryHookResult = ReturnType<typeof useCategoryFieldsLazyQuery>;
export type CategoryFieldsQueryResult = ApolloReactCommon.QueryResult<CategoryFieldsQuery, CategoryFieldsQueryVariables>;
export const GetCategoryFilterGroupDocument = gql`
    query GetCategoryFilterGroup($categoryId: Int!, $groupId: String!) {
  categories(filter: {id: $categoryId}) {
    id
    filter {
      id
      groups(filter: {id: $groupId}) {
        id
        name
        index
        fields {
          id
          name
          index
        }
      }
    }
  }
}
    `;

/**
 * __useGetCategoryFilterGroupQuery__
 *
 * To run a query within a React component, call `useGetCategoryFilterGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryFilterGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryFilterGroupQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *      groupId: // value for 'groupId'
 *   },
 * });
 */
export function useGetCategoryFilterGroupQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCategoryFilterGroupQuery, GetCategoryFilterGroupQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCategoryFilterGroupQuery, GetCategoryFilterGroupQueryVariables>(GetCategoryFilterGroupDocument, baseOptions);
      }
export function useGetCategoryFilterGroupLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCategoryFilterGroupQuery, GetCategoryFilterGroupQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCategoryFilterGroupQuery, GetCategoryFilterGroupQueryVariables>(GetCategoryFilterGroupDocument, baseOptions);
        }
export type GetCategoryFilterGroupQueryHookResult = ReturnType<typeof useGetCategoryFilterGroupQuery>;
export type GetCategoryFilterGroupLazyQueryHookResult = ReturnType<typeof useGetCategoryFilterGroupLazyQuery>;
export type GetCategoryFilterGroupQueryResult = ApolloReactCommon.QueryResult<GetCategoryFilterGroupQuery, GetCategoryFilterGroupQueryVariables>;
export const ChangeFilterGroupDocument = gql`
    mutation ChangeFilterGroup($groupId: String!, $name: String!) {
  changeFilterGroup(filterGroupId: $groupId, change: {name: $name}) {
    id
    name
  }
}
    `;
export type ChangeFilterGroupMutationFn = ApolloReactCommon.MutationFunction<ChangeFilterGroupMutation, ChangeFilterGroupMutationVariables>;

/**
 * __useChangeFilterGroupMutation__
 *
 * To run a mutation, you first call `useChangeFilterGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeFilterGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeFilterGroupMutation, { data, loading, error }] = useChangeFilterGroupMutation({
 *   variables: {
 *      groupId: // value for 'groupId'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useChangeFilterGroupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeFilterGroupMutation, ChangeFilterGroupMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangeFilterGroupMutation, ChangeFilterGroupMutationVariables>(ChangeFilterGroupDocument, baseOptions);
      }
export type ChangeFilterGroupMutationHookResult = ReturnType<typeof useChangeFilterGroupMutation>;
export type ChangeFilterGroupMutationResult = ApolloReactCommon.MutationResult<ChangeFilterGroupMutation>;
export type ChangeFilterGroupMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeFilterGroupMutation, ChangeFilterGroupMutationVariables>;
export const GetCategoryFilterGroupFieldDocument = gql`
    query GetCategoryFilterGroupField($categoryId: Int!, $groupId: String!, $fieldId: String!) {
  categories(filter: {id: $categoryId}) {
    id
    filter {
      id
      groups(filter: {id: $groupId}) {
        id
        fields(filter: {id: $fieldId}) {
          id
          name
          type
          index
          categoryField {
            id
            name
            type
            defaultValue
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetCategoryFilterGroupFieldQuery__
 *
 * To run a query within a React component, call `useGetCategoryFilterGroupFieldQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryFilterGroupFieldQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryFilterGroupFieldQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *      groupId: // value for 'groupId'
 *      fieldId: // value for 'fieldId'
 *   },
 * });
 */
export function useGetCategoryFilterGroupFieldQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCategoryFilterGroupFieldQuery, GetCategoryFilterGroupFieldQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCategoryFilterGroupFieldQuery, GetCategoryFilterGroupFieldQueryVariables>(GetCategoryFilterGroupFieldDocument, baseOptions);
      }
export function useGetCategoryFilterGroupFieldLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCategoryFilterGroupFieldQuery, GetCategoryFilterGroupFieldQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCategoryFilterGroupFieldQuery, GetCategoryFilterGroupFieldQueryVariables>(GetCategoryFilterGroupFieldDocument, baseOptions);
        }
export type GetCategoryFilterGroupFieldQueryHookResult = ReturnType<typeof useGetCategoryFilterGroupFieldQuery>;
export type GetCategoryFilterGroupFieldLazyQueryHookResult = ReturnType<typeof useGetCategoryFilterGroupFieldLazyQuery>;
export type GetCategoryFilterGroupFieldQueryResult = ApolloReactCommon.QueryResult<GetCategoryFilterGroupFieldQuery, GetCategoryFilterGroupFieldQueryVariables>;
export const ChangeFilterGroupFieldDocument = gql`
    mutation ChangeFilterGroupField($fieldId: String!, $name: String!, $type: String!, $categoryFieldId: Int!) {
  changeFilterGroupField(fieldId: $fieldId, change: {name: $name, type: $type, categoryFieldId: $categoryFieldId}) {
    id
    name
    type
    categoryField {
      id
      name
      type
      defaultValue
    }
  }
}
    `;
export type ChangeFilterGroupFieldMutationFn = ApolloReactCommon.MutationFunction<ChangeFilterGroupFieldMutation, ChangeFilterGroupFieldMutationVariables>;

/**
 * __useChangeFilterGroupFieldMutation__
 *
 * To run a mutation, you first call `useChangeFilterGroupFieldMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeFilterGroupFieldMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeFilterGroupFieldMutation, { data, loading, error }] = useChangeFilterGroupFieldMutation({
 *   variables: {
 *      fieldId: // value for 'fieldId'
 *      name: // value for 'name'
 *      type: // value for 'type'
 *      categoryFieldId: // value for 'categoryFieldId'
 *   },
 * });
 */
export function useChangeFilterGroupFieldMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeFilterGroupFieldMutation, ChangeFilterGroupFieldMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangeFilterGroupFieldMutation, ChangeFilterGroupFieldMutationVariables>(ChangeFilterGroupFieldDocument, baseOptions);
      }
export type ChangeFilterGroupFieldMutationHookResult = ReturnType<typeof useChangeFilterGroupFieldMutation>;
export type ChangeFilterGroupFieldMutationResult = ApolloReactCommon.MutationResult<ChangeFilterGroupFieldMutation>;
export type ChangeFilterGroupFieldMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeFilterGroupFieldMutation, ChangeFilterGroupFieldMutationVariables>;
export const AddFieldToFilterGroupDocument = gql`
    mutation AddFieldToFilterGroup($filterGroupId: String!, $name: String!) {
  addFieldToFilterGroup(filterGroupId: $filterGroupId, name: $name) {
    id
    name
  }
}
    `;
export type AddFieldToFilterGroupMutationFn = ApolloReactCommon.MutationFunction<AddFieldToFilterGroupMutation, AddFieldToFilterGroupMutationVariables>;

/**
 * __useAddFieldToFilterGroupMutation__
 *
 * To run a mutation, you first call `useAddFieldToFilterGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFieldToFilterGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFieldToFilterGroupMutation, { data, loading, error }] = useAddFieldToFilterGroupMutation({
 *   variables: {
 *      filterGroupId: // value for 'filterGroupId'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useAddFieldToFilterGroupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddFieldToFilterGroupMutation, AddFieldToFilterGroupMutationVariables>) {
        return ApolloReactHooks.useMutation<AddFieldToFilterGroupMutation, AddFieldToFilterGroupMutationVariables>(AddFieldToFilterGroupDocument, baseOptions);
      }
export type AddFieldToFilterGroupMutationHookResult = ReturnType<typeof useAddFieldToFilterGroupMutation>;
export type AddFieldToFilterGroupMutationResult = ApolloReactCommon.MutationResult<AddFieldToFilterGroupMutation>;
export type AddFieldToFilterGroupMutationOptions = ApolloReactCommon.BaseMutationOptions<AddFieldToFilterGroupMutation, AddFieldToFilterGroupMutationVariables>;
export const ChangeFilterGroupsOrderDocument = gql`
    mutation ChangeFilterGroupsOrder($orderedGroupsIds: [String!]!) {
  changeFilterGroupsOrder(orderedGroupsIds: $orderedGroupsIds) {
    id
    index
    fields {
      id
      index
    }
  }
}
    `;
export type ChangeFilterGroupsOrderMutationFn = ApolloReactCommon.MutationFunction<ChangeFilterGroupsOrderMutation, ChangeFilterGroupsOrderMutationVariables>;

/**
 * __useChangeFilterGroupsOrderMutation__
 *
 * To run a mutation, you first call `useChangeFilterGroupsOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeFilterGroupsOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeFilterGroupsOrderMutation, { data, loading, error }] = useChangeFilterGroupsOrderMutation({
 *   variables: {
 *      orderedGroupsIds: // value for 'orderedGroupsIds'
 *   },
 * });
 */
export function useChangeFilterGroupsOrderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeFilterGroupsOrderMutation, ChangeFilterGroupsOrderMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangeFilterGroupsOrderMutation, ChangeFilterGroupsOrderMutationVariables>(ChangeFilterGroupsOrderDocument, baseOptions);
      }
export type ChangeFilterGroupsOrderMutationHookResult = ReturnType<typeof useChangeFilterGroupsOrderMutation>;
export type ChangeFilterGroupsOrderMutationResult = ApolloReactCommon.MutationResult<ChangeFilterGroupsOrderMutation>;
export type ChangeFilterGroupsOrderMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeFilterGroupsOrderMutation, ChangeFilterGroupsOrderMutationVariables>;
export const ChangeFilterGroupItemsOrderDocument = gql`
    mutation ChangeFilterGroupItemsOrder($filterGroupId: String!, $orderedItemsIds: [String!]!) {
  changeFilterGroup(filterGroupId: $filterGroupId, change: {orderedItemsIds: $orderedItemsIds}) {
    id
    index
    fields {
      id
      index
    }
  }
}
    `;
export type ChangeFilterGroupItemsOrderMutationFn = ApolloReactCommon.MutationFunction<ChangeFilterGroupItemsOrderMutation, ChangeFilterGroupItemsOrderMutationVariables>;

/**
 * __useChangeFilterGroupItemsOrderMutation__
 *
 * To run a mutation, you first call `useChangeFilterGroupItemsOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeFilterGroupItemsOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeFilterGroupItemsOrderMutation, { data, loading, error }] = useChangeFilterGroupItemsOrderMutation({
 *   variables: {
 *      filterGroupId: // value for 'filterGroupId'
 *      orderedItemsIds: // value for 'orderedItemsIds'
 *   },
 * });
 */
export function useChangeFilterGroupItemsOrderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeFilterGroupItemsOrderMutation, ChangeFilterGroupItemsOrderMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangeFilterGroupItemsOrderMutation, ChangeFilterGroupItemsOrderMutationVariables>(ChangeFilterGroupItemsOrderDocument, baseOptions);
      }
export type ChangeFilterGroupItemsOrderMutationHookResult = ReturnType<typeof useChangeFilterGroupItemsOrderMutation>;
export type ChangeFilterGroupItemsOrderMutationResult = ApolloReactCommon.MutationResult<ChangeFilterGroupItemsOrderMutation>;
export type ChangeFilterGroupItemsOrderMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeFilterGroupItemsOrderMutation, ChangeFilterGroupItemsOrderMutationVariables>;
export const ChangeFilterGroupItemLocationDocument = gql`
    mutation ChangeFilterGroupItemLocation($filterGroupId: String!, $deleteIndex: Int!, $newGroupId: String!, $newGroupIndex: Int!) {
  changeFilterGroup(filterGroupId: $filterGroupId, change: {deleteIndex: $deleteIndex, newGroupId: $newGroupId, newGroupIndex: $newGroupIndex}) {
    id
    index
    fields {
      id
      index
    }
  }
}
    `;
export type ChangeFilterGroupItemLocationMutationFn = ApolloReactCommon.MutationFunction<ChangeFilterGroupItemLocationMutation, ChangeFilterGroupItemLocationMutationVariables>;

/**
 * __useChangeFilterGroupItemLocationMutation__
 *
 * To run a mutation, you first call `useChangeFilterGroupItemLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeFilterGroupItemLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeFilterGroupItemLocationMutation, { data, loading, error }] = useChangeFilterGroupItemLocationMutation({
 *   variables: {
 *      filterGroupId: // value for 'filterGroupId'
 *      deleteIndex: // value for 'deleteIndex'
 *      newGroupId: // value for 'newGroupId'
 *      newGroupIndex: // value for 'newGroupIndex'
 *   },
 * });
 */
export function useChangeFilterGroupItemLocationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeFilterGroupItemLocationMutation, ChangeFilterGroupItemLocationMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangeFilterGroupItemLocationMutation, ChangeFilterGroupItemLocationMutationVariables>(ChangeFilterGroupItemLocationDocument, baseOptions);
      }
export type ChangeFilterGroupItemLocationMutationHookResult = ReturnType<typeof useChangeFilterGroupItemLocationMutation>;
export type ChangeFilterGroupItemLocationMutationResult = ApolloReactCommon.MutationResult<ChangeFilterGroupItemLocationMutation>;
export type ChangeFilterGroupItemLocationMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeFilterGroupItemLocationMutation, ChangeFilterGroupItemLocationMutationVariables>;
export const InitializeCategoryFilterDocument = gql`
    mutation InitializeCategoryFilter($categoryId: Int!) {
  initializeCategoryFilter(categoryId: $categoryId) {
    id
    filter {
      category {
        id
      }
    }
  }
}
    `;
export type InitializeCategoryFilterMutationFn = ApolloReactCommon.MutationFunction<InitializeCategoryFilterMutation, InitializeCategoryFilterMutationVariables>;

/**
 * __useInitializeCategoryFilterMutation__
 *
 * To run a mutation, you first call `useInitializeCategoryFilterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInitializeCategoryFilterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [initializeCategoryFilterMutation, { data, loading, error }] = useInitializeCategoryFilterMutation({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useInitializeCategoryFilterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InitializeCategoryFilterMutation, InitializeCategoryFilterMutationVariables>) {
        return ApolloReactHooks.useMutation<InitializeCategoryFilterMutation, InitializeCategoryFilterMutationVariables>(InitializeCategoryFilterDocument, baseOptions);
      }
export type InitializeCategoryFilterMutationHookResult = ReturnType<typeof useInitializeCategoryFilterMutation>;
export type InitializeCategoryFilterMutationResult = ApolloReactCommon.MutationResult<InitializeCategoryFilterMutation>;
export type InitializeCategoryFilterMutationOptions = ApolloReactCommon.BaseMutationOptions<InitializeCategoryFilterMutation, InitializeCategoryFilterMutationVariables>;
export const AddCategoryInfoToCategoryDocument = gql`
    mutation AddCategoryInfoToCategory($id: Int!, $languageId: Int!) {
  addCategoryInfoToCategory(categoryId: $id, language: $languageId) {
    id
    info {
      id
      language {
        id
        code
      }
    }
  }
}
    `;
export type AddCategoryInfoToCategoryMutationFn = ApolloReactCommon.MutationFunction<AddCategoryInfoToCategoryMutation, AddCategoryInfoToCategoryMutationVariables>;

/**
 * __useAddCategoryInfoToCategoryMutation__
 *
 * To run a mutation, you first call `useAddCategoryInfoToCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCategoryInfoToCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCategoryInfoToCategoryMutation, { data, loading, error }] = useAddCategoryInfoToCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      languageId: // value for 'languageId'
 *   },
 * });
 */
export function useAddCategoryInfoToCategoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddCategoryInfoToCategoryMutation, AddCategoryInfoToCategoryMutationVariables>) {
        return ApolloReactHooks.useMutation<AddCategoryInfoToCategoryMutation, AddCategoryInfoToCategoryMutationVariables>(AddCategoryInfoToCategoryDocument, baseOptions);
      }
export type AddCategoryInfoToCategoryMutationHookResult = ReturnType<typeof useAddCategoryInfoToCategoryMutation>;
export type AddCategoryInfoToCategoryMutationResult = ApolloReactCommon.MutationResult<AddCategoryInfoToCategoryMutation>;
export type AddCategoryInfoToCategoryMutationOptions = ApolloReactCommon.BaseMutationOptions<AddCategoryInfoToCategoryMutation, AddCategoryInfoToCategoryMutationVariables>;
export const GetCategoryInfoLanguagesDocument = gql`
    query GetCategoryInfoLanguages($id: Int!) {
  categories(filter: {id: $id}) {
    id
    info {
      id
      language {
        id
        code
      }
    }
  }
}
    `;

/**
 * __useGetCategoryInfoLanguagesQuery__
 *
 * To run a query within a React component, call `useGetCategoryInfoLanguagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryInfoLanguagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryInfoLanguagesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCategoryInfoLanguagesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCategoryInfoLanguagesQuery, GetCategoryInfoLanguagesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCategoryInfoLanguagesQuery, GetCategoryInfoLanguagesQueryVariables>(GetCategoryInfoLanguagesDocument, baseOptions);
      }
export function useGetCategoryInfoLanguagesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCategoryInfoLanguagesQuery, GetCategoryInfoLanguagesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCategoryInfoLanguagesQuery, GetCategoryInfoLanguagesQueryVariables>(GetCategoryInfoLanguagesDocument, baseOptions);
        }
export type GetCategoryInfoLanguagesQueryHookResult = ReturnType<typeof useGetCategoryInfoLanguagesQuery>;
export type GetCategoryInfoLanguagesLazyQueryHookResult = ReturnType<typeof useGetCategoryInfoLanguagesLazyQuery>;
export type GetCategoryInfoLanguagesQueryResult = ApolloReactCommon.QueryResult<GetCategoryInfoLanguagesQuery, GetCategoryInfoLanguagesQueryVariables>;
export const GetCategoryInfoByCategoryIdAndInfoIdDocument = gql`
    query GetCategoryInfoByCategoryIdAndInfoId($id: Int!, $infoId: Int!) {
  categories(filter: {id: $id}) {
    id
    info(filter: {id: $infoId}) {
      id
      name
      language {
        id
      }
    }
  }
}
    `;

/**
 * __useGetCategoryInfoByCategoryIdAndInfoIdQuery__
 *
 * To run a query within a React component, call `useGetCategoryInfoByCategoryIdAndInfoIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryInfoByCategoryIdAndInfoIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryInfoByCategoryIdAndInfoIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *      infoId: // value for 'infoId'
 *   },
 * });
 */
export function useGetCategoryInfoByCategoryIdAndInfoIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCategoryInfoByCategoryIdAndInfoIdQuery, GetCategoryInfoByCategoryIdAndInfoIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCategoryInfoByCategoryIdAndInfoIdQuery, GetCategoryInfoByCategoryIdAndInfoIdQueryVariables>(GetCategoryInfoByCategoryIdAndInfoIdDocument, baseOptions);
      }
export function useGetCategoryInfoByCategoryIdAndInfoIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCategoryInfoByCategoryIdAndInfoIdQuery, GetCategoryInfoByCategoryIdAndInfoIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCategoryInfoByCategoryIdAndInfoIdQuery, GetCategoryInfoByCategoryIdAndInfoIdQueryVariables>(GetCategoryInfoByCategoryIdAndInfoIdDocument, baseOptions);
        }
export type GetCategoryInfoByCategoryIdAndInfoIdQueryHookResult = ReturnType<typeof useGetCategoryInfoByCategoryIdAndInfoIdQuery>;
export type GetCategoryInfoByCategoryIdAndInfoIdLazyQueryHookResult = ReturnType<typeof useGetCategoryInfoByCategoryIdAndInfoIdLazyQuery>;
export type GetCategoryInfoByCategoryIdAndInfoIdQueryResult = ApolloReactCommon.QueryResult<GetCategoryInfoByCategoryIdAndInfoIdQuery, GetCategoryInfoByCategoryIdAndInfoIdQueryVariables>;
export const ChangeCategoryInfoDocument = gql`
    mutation ChangeCategoryInfo($id: Int!, $infoId: Int!, $name: String!) {
  changeCategoryInfo(id: $id, infoId: $infoId, change: {name: $name}) {
    id
  }
}
    `;
export type ChangeCategoryInfoMutationFn = ApolloReactCommon.MutationFunction<ChangeCategoryInfoMutation, ChangeCategoryInfoMutationVariables>;

/**
 * __useChangeCategoryInfoMutation__
 *
 * To run a mutation, you first call `useChangeCategoryInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeCategoryInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeCategoryInfoMutation, { data, loading, error }] = useChangeCategoryInfoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      infoId: // value for 'infoId'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useChangeCategoryInfoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeCategoryInfoMutation, ChangeCategoryInfoMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangeCategoryInfoMutation, ChangeCategoryInfoMutationVariables>(ChangeCategoryInfoDocument, baseOptions);
      }
export type ChangeCategoryInfoMutationHookResult = ReturnType<typeof useChangeCategoryInfoMutation>;
export type ChangeCategoryInfoMutationResult = ApolloReactCommon.MutationResult<ChangeCategoryInfoMutation>;
export type ChangeCategoryInfoMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeCategoryInfoMutation, ChangeCategoryInfoMutationVariables>;
export const InitializeCategoryInfoFieldDocument = gql`
    mutation InitializeCategoryInfoField($categoryInfoId: Int!, $categoryFieldId: Int!) {
  initializeCategoryInfoField(categoryInfoId: $categoryInfoId, categoryFieldId: $categoryFieldId) {
    id
    name
    value
    categoryField {
      id
    }
  }
}
    `;
export type InitializeCategoryInfoFieldMutationFn = ApolloReactCommon.MutationFunction<InitializeCategoryInfoFieldMutation, InitializeCategoryInfoFieldMutationVariables>;

/**
 * __useInitializeCategoryInfoFieldMutation__
 *
 * To run a mutation, you first call `useInitializeCategoryInfoFieldMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInitializeCategoryInfoFieldMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [initializeCategoryInfoFieldMutation, { data, loading, error }] = useInitializeCategoryInfoFieldMutation({
 *   variables: {
 *      categoryInfoId: // value for 'categoryInfoId'
 *      categoryFieldId: // value for 'categoryFieldId'
 *   },
 * });
 */
export function useInitializeCategoryInfoFieldMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InitializeCategoryInfoFieldMutation, InitializeCategoryInfoFieldMutationVariables>) {
        return ApolloReactHooks.useMutation<InitializeCategoryInfoFieldMutation, InitializeCategoryInfoFieldMutationVariables>(InitializeCategoryInfoFieldDocument, baseOptions);
      }
export type InitializeCategoryInfoFieldMutationHookResult = ReturnType<typeof useInitializeCategoryInfoFieldMutation>;
export type InitializeCategoryInfoFieldMutationResult = ApolloReactCommon.MutationResult<InitializeCategoryInfoFieldMutation>;
export type InitializeCategoryInfoFieldMutationOptions = ApolloReactCommon.BaseMutationOptions<InitializeCategoryInfoFieldMutation, InitializeCategoryInfoFieldMutationVariables>;
export const GetCategoryInfoFieldDocument = gql`
    query GetCategoryInfoField($categoryId: Int!, $infoId: Int!, $fieldId: Int!) {
  categories(filter: {id: $categoryId}) {
    id
    info(filter: {id: $infoId}) {
      id
      fields(filter: {id: $fieldId}) {
        id
        name
        value
      }
    }
  }
}
    `;

/**
 * __useGetCategoryInfoFieldQuery__
 *
 * To run a query within a React component, call `useGetCategoryInfoFieldQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryInfoFieldQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryInfoFieldQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *      infoId: // value for 'infoId'
 *      fieldId: // value for 'fieldId'
 *   },
 * });
 */
export function useGetCategoryInfoFieldQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCategoryInfoFieldQuery, GetCategoryInfoFieldQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCategoryInfoFieldQuery, GetCategoryInfoFieldQueryVariables>(GetCategoryInfoFieldDocument, baseOptions);
      }
export function useGetCategoryInfoFieldLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCategoryInfoFieldQuery, GetCategoryInfoFieldQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCategoryInfoFieldQuery, GetCategoryInfoFieldQueryVariables>(GetCategoryInfoFieldDocument, baseOptions);
        }
export type GetCategoryInfoFieldQueryHookResult = ReturnType<typeof useGetCategoryInfoFieldQuery>;
export type GetCategoryInfoFieldLazyQueryHookResult = ReturnType<typeof useGetCategoryInfoFieldLazyQuery>;
export type GetCategoryInfoFieldQueryResult = ApolloReactCommon.QueryResult<GetCategoryInfoFieldQuery, GetCategoryInfoFieldQueryVariables>;
export const ChangeFieldInCategoryInfoDocument = gql`
    mutation ChangeFieldInCategoryInfo($fieldId: Int!, $name: String!, $value: String!) {
  changeFieldInCategoryInfo(fieldId: $fieldId, change: {name: $name, value: $value}) {
    id
    name
    value
  }
}
    `;
export type ChangeFieldInCategoryInfoMutationFn = ApolloReactCommon.MutationFunction<ChangeFieldInCategoryInfoMutation, ChangeFieldInCategoryInfoMutationVariables>;

/**
 * __useChangeFieldInCategoryInfoMutation__
 *
 * To run a mutation, you first call `useChangeFieldInCategoryInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeFieldInCategoryInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeFieldInCategoryInfoMutation, { data, loading, error }] = useChangeFieldInCategoryInfoMutation({
 *   variables: {
 *      fieldId: // value for 'fieldId'
 *      name: // value for 'name'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useChangeFieldInCategoryInfoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeFieldInCategoryInfoMutation, ChangeFieldInCategoryInfoMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangeFieldInCategoryInfoMutation, ChangeFieldInCategoryInfoMutationVariables>(ChangeFieldInCategoryInfoDocument, baseOptions);
      }
export type ChangeFieldInCategoryInfoMutationHookResult = ReturnType<typeof useChangeFieldInCategoryInfoMutation>;
export type ChangeFieldInCategoryInfoMutationResult = ApolloReactCommon.MutationResult<ChangeFieldInCategoryInfoMutation>;
export type ChangeFieldInCategoryInfoMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeFieldInCategoryInfoMutation, ChangeFieldInCategoryInfoMutationVariables>;
export const GetFieldsCategoryInfoByIdDocument = gql`
    query GetFieldsCategoryInfoById($id: Int!) {
  categories(filter: {id: $id}) {
    id
    fields {
      id
      name
    }
    info {
      id
      fields {
        id
        value
        name
        categoryField {
          id
        }
      }
    }
  }
}
    `;

/**
 * __useGetFieldsCategoryInfoByIdQuery__
 *
 * To run a query within a React component, call `useGetFieldsCategoryInfoByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFieldsCategoryInfoByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFieldsCategoryInfoByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetFieldsCategoryInfoByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetFieldsCategoryInfoByIdQuery, GetFieldsCategoryInfoByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetFieldsCategoryInfoByIdQuery, GetFieldsCategoryInfoByIdQueryVariables>(GetFieldsCategoryInfoByIdDocument, baseOptions);
      }
export function useGetFieldsCategoryInfoByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetFieldsCategoryInfoByIdQuery, GetFieldsCategoryInfoByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetFieldsCategoryInfoByIdQuery, GetFieldsCategoryInfoByIdQueryVariables>(GetFieldsCategoryInfoByIdDocument, baseOptions);
        }
export type GetFieldsCategoryInfoByIdQueryHookResult = ReturnType<typeof useGetFieldsCategoryInfoByIdQuery>;
export type GetFieldsCategoryInfoByIdLazyQueryHookResult = ReturnType<typeof useGetFieldsCategoryInfoByIdLazyQuery>;
export type GetFieldsCategoryInfoByIdQueryResult = ApolloReactCommon.QueryResult<GetFieldsCategoryInfoByIdQuery, GetFieldsCategoryInfoByIdQueryVariables>;
export const GetCategoryInfoByCategoryIdDocument = gql`
    query GetCategoryInfoByCategoryId($id: Int!) {
  categories(filter: {id: $id}) {
    id
    info {
      id
      language {
        id
        code
      }
      fields {
        id
        value
      }
    }
  }
}
    `;

/**
 * __useGetCategoryInfoByCategoryIdQuery__
 *
 * To run a query within a React component, call `useGetCategoryInfoByCategoryIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryInfoByCategoryIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryInfoByCategoryIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCategoryInfoByCategoryIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCategoryInfoByCategoryIdQuery, GetCategoryInfoByCategoryIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCategoryInfoByCategoryIdQuery, GetCategoryInfoByCategoryIdQueryVariables>(GetCategoryInfoByCategoryIdDocument, baseOptions);
      }
export function useGetCategoryInfoByCategoryIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCategoryInfoByCategoryIdQuery, GetCategoryInfoByCategoryIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCategoryInfoByCategoryIdQuery, GetCategoryInfoByCategoryIdQueryVariables>(GetCategoryInfoByCategoryIdDocument, baseOptions);
        }
export type GetCategoryInfoByCategoryIdQueryHookResult = ReturnType<typeof useGetCategoryInfoByCategoryIdQuery>;
export type GetCategoryInfoByCategoryIdLazyQueryHookResult = ReturnType<typeof useGetCategoryInfoByCategoryIdLazyQuery>;
export type GetCategoryInfoByCategoryIdQueryResult = ApolloReactCommon.QueryResult<GetCategoryInfoByCategoryIdQuery, GetCategoryInfoByCategoryIdQueryVariables>;
export const RemoveCategoryInfoFromCategoryDocument = gql`
    mutation RemoveCategoryInfoFromCategory($categoryId: Int!, $infoId: Int!) {
  removeInfoFromCategory(categoryId: $categoryId, infoId: $infoId) {
    id
    info {
      id
    }
  }
}
    `;
export type RemoveCategoryInfoFromCategoryMutationFn = ApolloReactCommon.MutationFunction<RemoveCategoryInfoFromCategoryMutation, RemoveCategoryInfoFromCategoryMutationVariables>;

/**
 * __useRemoveCategoryInfoFromCategoryMutation__
 *
 * To run a mutation, you first call `useRemoveCategoryInfoFromCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCategoryInfoFromCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCategoryInfoFromCategoryMutation, { data, loading, error }] = useRemoveCategoryInfoFromCategoryMutation({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *      infoId: // value for 'infoId'
 *   },
 * });
 */
export function useRemoveCategoryInfoFromCategoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveCategoryInfoFromCategoryMutation, RemoveCategoryInfoFromCategoryMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveCategoryInfoFromCategoryMutation, RemoveCategoryInfoFromCategoryMutationVariables>(RemoveCategoryInfoFromCategoryDocument, baseOptions);
      }
export type RemoveCategoryInfoFromCategoryMutationHookResult = ReturnType<typeof useRemoveCategoryInfoFromCategoryMutation>;
export type RemoveCategoryInfoFromCategoryMutationResult = ApolloReactCommon.MutationResult<RemoveCategoryInfoFromCategoryMutation>;
export type RemoveCategoryInfoFromCategoryMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveCategoryInfoFromCategoryMutation, RemoveCategoryInfoFromCategoryMutationVariables>;
export const GetParentCategoryByIdDocument = gql`
    query GetParentCategoryById($id: Int!) {
  categories(filter: {id: $id}) {
    id
    parent {
      id
      name
    }
  }
}
    `;

/**
 * __useGetParentCategoryByIdQuery__
 *
 * To run a query within a React component, call `useGetParentCategoryByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetParentCategoryByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetParentCategoryByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetParentCategoryByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetParentCategoryByIdQuery, GetParentCategoryByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetParentCategoryByIdQuery, GetParentCategoryByIdQueryVariables>(GetParentCategoryByIdDocument, baseOptions);
      }
export function useGetParentCategoryByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetParentCategoryByIdQuery, GetParentCategoryByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetParentCategoryByIdQuery, GetParentCategoryByIdQueryVariables>(GetParentCategoryByIdDocument, baseOptions);
        }
export type GetParentCategoryByIdQueryHookResult = ReturnType<typeof useGetParentCategoryByIdQuery>;
export type GetParentCategoryByIdLazyQueryHookResult = ReturnType<typeof useGetParentCategoryByIdLazyQuery>;
export type GetParentCategoryByIdQueryResult = ApolloReactCommon.QueryResult<GetParentCategoryByIdQuery, GetParentCategoryByIdQueryVariables>;
export const GetCategoryByIdDocument = gql`
    query GetCategoryById($id: Int!) {
  categories(filter: {id: $id}) {
    id
    name
    level
    info {
      id
    }
    parent {
      id
      name
    }
  }
}
    `;

/**
 * __useGetCategoryByIdQuery__
 *
 * To run a query within a React component, call `useGetCategoryByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCategoryByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>(GetCategoryByIdDocument, baseOptions);
      }
export function useGetCategoryByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>(GetCategoryByIdDocument, baseOptions);
        }
export type GetCategoryByIdQueryHookResult = ReturnType<typeof useGetCategoryByIdQuery>;
export type GetCategoryByIdLazyQueryHookResult = ReturnType<typeof useGetCategoryByIdLazyQuery>;
export type GetCategoryByIdQueryResult = ApolloReactCommon.QueryResult<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>;
export const CreateCategoryDocument = gql`
    mutation CreateCategory($name: String!, $level: Int!, $parentId: Int) {
  createCategory(name: $name, level: $level, parentId: $parentId) {
    id
    name
    parent {
      id
    }
  }
}
    `;
export type CreateCategoryMutationFn = ApolloReactCommon.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>;

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *      name: // value for 'name'
 *      level: // value for 'level'
 *      parentId: // value for 'parentId'
 *   },
 * });
 */
export function useCreateCategoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument, baseOptions);
      }
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>;
export type CreateCategoryMutationResult = ApolloReactCommon.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateCategoryMutation, CreateCategoryMutationVariables>;
export const GetCategoriesDocument = gql`
    query GetCategories {
  categories(filter: {level: 0}) {
    id
    name
    children {
      id
      name
      children {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, baseOptions);
      }
export function useGetCategoriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, baseOptions);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesQueryResult = ApolloReactCommon.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const FindCategoryByNameTemplateDocument = gql`
    query FindCategoryByNameTemplate($template: String) {
  findCategoryByNameTemplate(template: $template) {
    id
    name
    level
  }
}
    `;

/**
 * __useFindCategoryByNameTemplateQuery__
 *
 * To run a query within a React component, call `useFindCategoryByNameTemplateQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCategoryByNameTemplateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCategoryByNameTemplateQuery({
 *   variables: {
 *      template: // value for 'template'
 *   },
 * });
 */
export function useFindCategoryByNameTemplateQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindCategoryByNameTemplateQuery, FindCategoryByNameTemplateQueryVariables>) {
        return ApolloReactHooks.useQuery<FindCategoryByNameTemplateQuery, FindCategoryByNameTemplateQueryVariables>(FindCategoryByNameTemplateDocument, baseOptions);
      }
export function useFindCategoryByNameTemplateLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindCategoryByNameTemplateQuery, FindCategoryByNameTemplateQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindCategoryByNameTemplateQuery, FindCategoryByNameTemplateQueryVariables>(FindCategoryByNameTemplateDocument, baseOptions);
        }
export type FindCategoryByNameTemplateQueryHookResult = ReturnType<typeof useFindCategoryByNameTemplateQuery>;
export type FindCategoryByNameTemplateLazyQueryHookResult = ReturnType<typeof useFindCategoryByNameTemplateLazyQuery>;
export type FindCategoryByNameTemplateQueryResult = ApolloReactCommon.QueryResult<FindCategoryByNameTemplateQuery, FindCategoryByNameTemplateQueryVariables>;
export const GetLanguagesDocument = gql`
    query GetLanguages {
  languages {
    id
    code
  }
}
    `;

/**
 * __useGetLanguagesQuery__
 *
 * To run a query within a React component, call `useGetLanguagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLanguagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLanguagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLanguagesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetLanguagesQuery, GetLanguagesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetLanguagesQuery, GetLanguagesQueryVariables>(GetLanguagesDocument, baseOptions);
      }
export function useGetLanguagesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetLanguagesQuery, GetLanguagesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetLanguagesQuery, GetLanguagesQueryVariables>(GetLanguagesDocument, baseOptions);
        }
export type GetLanguagesQueryHookResult = ReturnType<typeof useGetLanguagesQuery>;
export type GetLanguagesLazyQueryHookResult = ReturnType<typeof useGetLanguagesLazyQuery>;
export type GetLanguagesQueryResult = ApolloReactCommon.QueryResult<GetLanguagesQuery, GetLanguagesQueryVariables>;
export const SetLanguageJsonDocument = gql`
    mutation SetLanguageJson($id: Int!, $jsonName: String!) {
  setLanguageJson(id: $id, jsonName: $jsonName)
}
    `;
export type SetLanguageJsonMutationFn = ApolloReactCommon.MutationFunction<SetLanguageJsonMutation, SetLanguageJsonMutationVariables>;

/**
 * __useSetLanguageJsonMutation__
 *
 * To run a mutation, you first call `useSetLanguageJsonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetLanguageJsonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setLanguageJsonMutation, { data, loading, error }] = useSetLanguageJsonMutation({
 *   variables: {
 *      id: // value for 'id'
 *      jsonName: // value for 'jsonName'
 *   },
 * });
 */
export function useSetLanguageJsonMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetLanguageJsonMutation, SetLanguageJsonMutationVariables>) {
        return ApolloReactHooks.useMutation<SetLanguageJsonMutation, SetLanguageJsonMutationVariables>(SetLanguageJsonDocument, baseOptions);
      }
export type SetLanguageJsonMutationHookResult = ReturnType<typeof useSetLanguageJsonMutation>;
export type SetLanguageJsonMutationResult = ApolloReactCommon.MutationResult<SetLanguageJsonMutation>;
export type SetLanguageJsonMutationOptions = ApolloReactCommon.BaseMutationOptions<SetLanguageJsonMutation, SetLanguageJsonMutationVariables>;
export const AddLanguageDocument = gql`
    mutation AddLanguage($code: String!) {
  addLanguage(code: $code) {
    id
    code
  }
}
    `;
export type AddLanguageMutationFn = ApolloReactCommon.MutationFunction<AddLanguageMutation, AddLanguageMutationVariables>;

/**
 * __useAddLanguageMutation__
 *
 * To run a mutation, you first call `useAddLanguageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddLanguageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addLanguageMutation, { data, loading, error }] = useAddLanguageMutation({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useAddLanguageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddLanguageMutation, AddLanguageMutationVariables>) {
        return ApolloReactHooks.useMutation<AddLanguageMutation, AddLanguageMutationVariables>(AddLanguageDocument, baseOptions);
      }
export type AddLanguageMutationHookResult = ReturnType<typeof useAddLanguageMutation>;
export type AddLanguageMutationResult = ApolloReactCommon.MutationResult<AddLanguageMutation>;
export type AddLanguageMutationOptions = ApolloReactCommon.BaseMutationOptions<AddLanguageMutation, AddLanguageMutationVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct($categoryId: Int!) {
  createProduct(categoryId: $categoryId) {
    id
    category {
      id
    }
  }
}
    `;
export type CreateProductMutationFn = ApolloReactCommon.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, baseOptions);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = ApolloReactCommon.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const FindProductInfoByNameTemplateDocument = gql`
    query FindProductInfoByNameTemplate($template: String, $offset: Int!, $limit: Int!) {
  searchProducts(filter: {nameTemplate: $template}, pagination: {offset: $offset, limit: $limit}) {
    productsInfo {
      id
      name
      language {
        id
        code
      }
      product {
        id
      }
    }
  }
}
    `;

/**
 * __useFindProductInfoByNameTemplateQuery__
 *
 * To run a query within a React component, call `useFindProductInfoByNameTemplateQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindProductInfoByNameTemplateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindProductInfoByNameTemplateQuery({
 *   variables: {
 *      template: // value for 'template'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useFindProductInfoByNameTemplateQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindProductInfoByNameTemplateQuery, FindProductInfoByNameTemplateQueryVariables>) {
        return ApolloReactHooks.useQuery<FindProductInfoByNameTemplateQuery, FindProductInfoByNameTemplateQueryVariables>(FindProductInfoByNameTemplateDocument, baseOptions);
      }
export function useFindProductInfoByNameTemplateLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindProductInfoByNameTemplateQuery, FindProductInfoByNameTemplateQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindProductInfoByNameTemplateQuery, FindProductInfoByNameTemplateQueryVariables>(FindProductInfoByNameTemplateDocument, baseOptions);
        }
export type FindProductInfoByNameTemplateQueryHookResult = ReturnType<typeof useFindProductInfoByNameTemplateQuery>;
export type FindProductInfoByNameTemplateLazyQueryHookResult = ReturnType<typeof useFindProductInfoByNameTemplateLazyQuery>;
export type FindProductInfoByNameTemplateQueryResult = ApolloReactCommon.QueryResult<FindProductInfoByNameTemplateQuery, FindProductInfoByNameTemplateQueryVariables>;
export const FindCategoryByIdDocument = gql`
    query FindCategoryById($id: Int!) {
  categories(filter: {id: $id}) {
    id
    name
    level
  }
}
    `;

/**
 * __useFindCategoryByIdQuery__
 *
 * To run a query within a React component, call `useFindCategoryByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCategoryByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCategoryByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindCategoryByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindCategoryByIdQuery, FindCategoryByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<FindCategoryByIdQuery, FindCategoryByIdQueryVariables>(FindCategoryByIdDocument, baseOptions);
      }
export function useFindCategoryByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindCategoryByIdQuery, FindCategoryByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindCategoryByIdQuery, FindCategoryByIdQueryVariables>(FindCategoryByIdDocument, baseOptions);
        }
export type FindCategoryByIdQueryHookResult = ReturnType<typeof useFindCategoryByIdQuery>;
export type FindCategoryByIdLazyQueryHookResult = ReturnType<typeof useFindCategoryByIdLazyQuery>;
export type FindCategoryByIdQueryResult = ApolloReactCommon.QueryResult<FindCategoryByIdQuery, FindCategoryByIdQueryVariables>;
export const GetProductCategoryByProductIdDocument = gql`
    query GetProductCategoryByProductId($id: Int!) {
  products(filter: {id: $id}) {
    id
    category {
      id
    }
  }
}
    `;

/**
 * __useGetProductCategoryByProductIdQuery__
 *
 * To run a query within a React component, call `useGetProductCategoryByProductIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductCategoryByProductIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductCategoryByProductIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductCategoryByProductIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProductCategoryByProductIdQuery, GetProductCategoryByProductIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetProductCategoryByProductIdQuery, GetProductCategoryByProductIdQueryVariables>(GetProductCategoryByProductIdDocument, baseOptions);
      }
export function useGetProductCategoryByProductIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProductCategoryByProductIdQuery, GetProductCategoryByProductIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetProductCategoryByProductIdQuery, GetProductCategoryByProductIdQueryVariables>(GetProductCategoryByProductIdDocument, baseOptions);
        }
export type GetProductCategoryByProductIdQueryHookResult = ReturnType<typeof useGetProductCategoryByProductIdQuery>;
export type GetProductCategoryByProductIdLazyQueryHookResult = ReturnType<typeof useGetProductCategoryByProductIdLazyQuery>;
export type GetProductCategoryByProductIdQueryResult = ApolloReactCommon.QueryResult<GetProductCategoryByProductIdQuery, GetProductCategoryByProductIdQueryVariables>;
export const ChangeCategoryInProductDocument = gql`
    mutation ChangeCategoryInProduct($productId: Int!, $categoryId: Int!) {
  changeCategoryInProduct(id: $productId, categoryId: $categoryId) {
    id
    category {
      id
    }
  }
}
    `;
export type ChangeCategoryInProductMutationFn = ApolloReactCommon.MutationFunction<ChangeCategoryInProductMutation, ChangeCategoryInProductMutationVariables>;

/**
 * __useChangeCategoryInProductMutation__
 *
 * To run a mutation, you first call `useChangeCategoryInProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeCategoryInProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeCategoryInProductMutation, { data, loading, error }] = useChangeCategoryInProductMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useChangeCategoryInProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeCategoryInProductMutation, ChangeCategoryInProductMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangeCategoryInProductMutation, ChangeCategoryInProductMutationVariables>(ChangeCategoryInProductDocument, baseOptions);
      }
export type ChangeCategoryInProductMutationHookResult = ReturnType<typeof useChangeCategoryInProductMutation>;
export type ChangeCategoryInProductMutationResult = ApolloReactCommon.MutationResult<ChangeCategoryInProductMutation>;
export type ChangeCategoryInProductMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeCategoryInProductMutation, ChangeCategoryInProductMutationVariables>;
export const GetProductInfoByProductIdDocument = gql`
    query GetProductInfoByProductId($id: Int!) {
  products(filter: {id: $id}) {
    id
    info {
      id
      language {
        id
        code
      }
      fields {
        id
        value
      }
    }
  }
}
    `;

/**
 * __useGetProductInfoByProductIdQuery__
 *
 * To run a query within a React component, call `useGetProductInfoByProductIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductInfoByProductIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductInfoByProductIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductInfoByProductIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProductInfoByProductIdQuery, GetProductInfoByProductIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetProductInfoByProductIdQuery, GetProductInfoByProductIdQueryVariables>(GetProductInfoByProductIdDocument, baseOptions);
      }
export function useGetProductInfoByProductIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProductInfoByProductIdQuery, GetProductInfoByProductIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetProductInfoByProductIdQuery, GetProductInfoByProductIdQueryVariables>(GetProductInfoByProductIdDocument, baseOptions);
        }
export type GetProductInfoByProductIdQueryHookResult = ReturnType<typeof useGetProductInfoByProductIdQuery>;
export type GetProductInfoByProductIdLazyQueryHookResult = ReturnType<typeof useGetProductInfoByProductIdLazyQuery>;
export type GetProductInfoByProductIdQueryResult = ApolloReactCommon.QueryResult<GetProductInfoByProductIdQuery, GetProductInfoByProductIdQueryVariables>;
export const AddProductInfoToProductDocument = gql`
    mutation AddProductInfoToProduct($id: Int!, $languageId: Int!) {
  addProductInfoToProduct(productId: $id, language: $languageId) {
    id
    info {
      id
      language {
        id
        code
      }
    }
  }
}
    `;
export type AddProductInfoToProductMutationFn = ApolloReactCommon.MutationFunction<AddProductInfoToProductMutation, AddProductInfoToProductMutationVariables>;

/**
 * __useAddProductInfoToProductMutation__
 *
 * To run a mutation, you first call `useAddProductInfoToProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProductInfoToProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProductInfoToProductMutation, { data, loading, error }] = useAddProductInfoToProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *      languageId: // value for 'languageId'
 *   },
 * });
 */
export function useAddProductInfoToProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddProductInfoToProductMutation, AddProductInfoToProductMutationVariables>) {
        return ApolloReactHooks.useMutation<AddProductInfoToProductMutation, AddProductInfoToProductMutationVariables>(AddProductInfoToProductDocument, baseOptions);
      }
export type AddProductInfoToProductMutationHookResult = ReturnType<typeof useAddProductInfoToProductMutation>;
export type AddProductInfoToProductMutationResult = ApolloReactCommon.MutationResult<AddProductInfoToProductMutation>;
export type AddProductInfoToProductMutationOptions = ApolloReactCommon.BaseMutationOptions<AddProductInfoToProductMutation, AddProductInfoToProductMutationVariables>;
export const GetProductInfoLanguagesDocument = gql`
    query GetProductInfoLanguages($id: Int!) {
  products(filter: {id: $id}) {
    id
    info {
      id
      language {
        id
        code
      }
    }
  }
}
    `;

/**
 * __useGetProductInfoLanguagesQuery__
 *
 * To run a query within a React component, call `useGetProductInfoLanguagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductInfoLanguagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductInfoLanguagesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductInfoLanguagesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProductInfoLanguagesQuery, GetProductInfoLanguagesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetProductInfoLanguagesQuery, GetProductInfoLanguagesQueryVariables>(GetProductInfoLanguagesDocument, baseOptions);
      }
export function useGetProductInfoLanguagesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProductInfoLanguagesQuery, GetProductInfoLanguagesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetProductInfoLanguagesQuery, GetProductInfoLanguagesQueryVariables>(GetProductInfoLanguagesDocument, baseOptions);
        }
export type GetProductInfoLanguagesQueryHookResult = ReturnType<typeof useGetProductInfoLanguagesQuery>;
export type GetProductInfoLanguagesLazyQueryHookResult = ReturnType<typeof useGetProductInfoLanguagesLazyQuery>;
export type GetProductInfoLanguagesQueryResult = ApolloReactCommon.QueryResult<GetProductInfoLanguagesQuery, GetProductInfoLanguagesQueryVariables>;
export const GetProductInfoByProductIdAndInfoIdDocument = gql`
    query GetProductInfoByProductIdAndInfoId($id: Int!, $infoId: Int!) {
  products(filter: {id: $id}) {
    id
    info(filter: {id: $infoId}) {
      id
      name
      language {
        id
      }
    }
  }
}
    `;

/**
 * __useGetProductInfoByProductIdAndInfoIdQuery__
 *
 * To run a query within a React component, call `useGetProductInfoByProductIdAndInfoIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductInfoByProductIdAndInfoIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductInfoByProductIdAndInfoIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *      infoId: // value for 'infoId'
 *   },
 * });
 */
export function useGetProductInfoByProductIdAndInfoIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProductInfoByProductIdAndInfoIdQuery, GetProductInfoByProductIdAndInfoIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetProductInfoByProductIdAndInfoIdQuery, GetProductInfoByProductIdAndInfoIdQueryVariables>(GetProductInfoByProductIdAndInfoIdDocument, baseOptions);
      }
export function useGetProductInfoByProductIdAndInfoIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProductInfoByProductIdAndInfoIdQuery, GetProductInfoByProductIdAndInfoIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetProductInfoByProductIdAndInfoIdQuery, GetProductInfoByProductIdAndInfoIdQueryVariables>(GetProductInfoByProductIdAndInfoIdDocument, baseOptions);
        }
export type GetProductInfoByProductIdAndInfoIdQueryHookResult = ReturnType<typeof useGetProductInfoByProductIdAndInfoIdQuery>;
export type GetProductInfoByProductIdAndInfoIdLazyQueryHookResult = ReturnType<typeof useGetProductInfoByProductIdAndInfoIdLazyQuery>;
export type GetProductInfoByProductIdAndInfoIdQueryResult = ApolloReactCommon.QueryResult<GetProductInfoByProductIdAndInfoIdQuery, GetProductInfoByProductIdAndInfoIdQueryVariables>;
export const ChangeProductInfoDocument = gql`
    mutation ChangeProductInfo($id: Int!, $name: String!) {
  changeProductInfo(id: $id, change: {name: $name}) {
    id
  }
}
    `;
export type ChangeProductInfoMutationFn = ApolloReactCommon.MutationFunction<ChangeProductInfoMutation, ChangeProductInfoMutationVariables>;

/**
 * __useChangeProductInfoMutation__
 *
 * To run a mutation, you first call `useChangeProductInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeProductInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeProductInfoMutation, { data, loading, error }] = useChangeProductInfoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useChangeProductInfoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeProductInfoMutation, ChangeProductInfoMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangeProductInfoMutation, ChangeProductInfoMutationVariables>(ChangeProductInfoDocument, baseOptions);
      }
export type ChangeProductInfoMutationHookResult = ReturnType<typeof useChangeProductInfoMutation>;
export type ChangeProductInfoMutationResult = ApolloReactCommon.MutationResult<ChangeProductInfoMutation>;
export type ChangeProductInfoMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeProductInfoMutation, ChangeProductInfoMutationVariables>;
export const ChangeCategoryFieldInProductInfoDocument = gql`
    mutation ChangeCategoryFieldInProductInfo($fieldId: Int!, $value: String!) {
  changeFieldInProductInfo(id: $fieldId, change: {name: null, value: $value}) {
    id
    name
    value
  }
}
    `;
export type ChangeCategoryFieldInProductInfoMutationFn = ApolloReactCommon.MutationFunction<ChangeCategoryFieldInProductInfoMutation, ChangeCategoryFieldInProductInfoMutationVariables>;

/**
 * __useChangeCategoryFieldInProductInfoMutation__
 *
 * To run a mutation, you first call `useChangeCategoryFieldInProductInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeCategoryFieldInProductInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeCategoryFieldInProductInfoMutation, { data, loading, error }] = useChangeCategoryFieldInProductInfoMutation({
 *   variables: {
 *      fieldId: // value for 'fieldId'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useChangeCategoryFieldInProductInfoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeCategoryFieldInProductInfoMutation, ChangeCategoryFieldInProductInfoMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangeCategoryFieldInProductInfoMutation, ChangeCategoryFieldInProductInfoMutationVariables>(ChangeCategoryFieldInProductInfoDocument, baseOptions);
      }
export type ChangeCategoryFieldInProductInfoMutationHookResult = ReturnType<typeof useChangeCategoryFieldInProductInfoMutation>;
export type ChangeCategoryFieldInProductInfoMutationResult = ApolloReactCommon.MutationResult<ChangeCategoryFieldInProductInfoMutation>;
export type ChangeCategoryFieldInProductInfoMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeCategoryFieldInProductInfoMutation, ChangeCategoryFieldInProductInfoMutationVariables>;
export const InitializeProductInfoFieldDocument = gql`
    mutation InitializeProductInfoField($label: String, $value: String!, $productInfoId: Int!, $categoryInfoFieldId: Int!) {
  addFieldToProductInfo(label: $label, value: $value, productInfoId: $productInfoId, categoryInfoFieldId: $categoryInfoFieldId) {
    id
    name
    value
    categoryInfoField {
      id
    }
  }
}
    `;
export type InitializeProductInfoFieldMutationFn = ApolloReactCommon.MutationFunction<InitializeProductInfoFieldMutation, InitializeProductInfoFieldMutationVariables>;

/**
 * __useInitializeProductInfoFieldMutation__
 *
 * To run a mutation, you first call `useInitializeProductInfoFieldMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInitializeProductInfoFieldMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [initializeProductInfoFieldMutation, { data, loading, error }] = useInitializeProductInfoFieldMutation({
 *   variables: {
 *      label: // value for 'label'
 *      value: // value for 'value'
 *      productInfoId: // value for 'productInfoId'
 *      categoryInfoFieldId: // value for 'categoryInfoFieldId'
 *   },
 * });
 */
export function useInitializeProductInfoFieldMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InitializeProductInfoFieldMutation, InitializeProductInfoFieldMutationVariables>) {
        return ApolloReactHooks.useMutation<InitializeProductInfoFieldMutation, InitializeProductInfoFieldMutationVariables>(InitializeProductInfoFieldDocument, baseOptions);
      }
export type InitializeProductInfoFieldMutationHookResult = ReturnType<typeof useInitializeProductInfoFieldMutation>;
export type InitializeProductInfoFieldMutationResult = ApolloReactCommon.MutationResult<InitializeProductInfoFieldMutation>;
export type InitializeProductInfoFieldMutationOptions = ApolloReactCommon.BaseMutationOptions<InitializeProductInfoFieldMutation, InitializeProductInfoFieldMutationVariables>;
export const GetFieldsProductByIdDocument = gql`
    query GetFieldsProductById($id: Int!) {
  products(filter: {id: $id}) {
    id
    info {
      id
      language {
        id
      }
      fields {
        id
        name
        value
        categoryInfoField {
          id
        }
      }
    }
    category {
      id
      info {
        id
        language {
          id
        }
        fields {
          id
          name
          value
          categoryField {
            id
            name
          }
        }
      }
      fields {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useGetFieldsProductByIdQuery__
 *
 * To run a query within a React component, call `useGetFieldsProductByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFieldsProductByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFieldsProductByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetFieldsProductByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetFieldsProductByIdQuery, GetFieldsProductByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetFieldsProductByIdQuery, GetFieldsProductByIdQueryVariables>(GetFieldsProductByIdDocument, baseOptions);
      }
export function useGetFieldsProductByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetFieldsProductByIdQuery, GetFieldsProductByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetFieldsProductByIdQuery, GetFieldsProductByIdQueryVariables>(GetFieldsProductByIdDocument, baseOptions);
        }
export type GetFieldsProductByIdQueryHookResult = ReturnType<typeof useGetFieldsProductByIdQuery>;
export type GetFieldsProductByIdLazyQueryHookResult = ReturnType<typeof useGetFieldsProductByIdLazyQuery>;
export type GetFieldsProductByIdQueryResult = ApolloReactCommon.QueryResult<GetFieldsProductByIdQuery, GetFieldsProductByIdQueryVariables>;
export const AddFieldToProductInfoDocument = gql`
    mutation AddFieldToProductInfo($productInfoId: Int!, $label: String!, $value: String!) {
  addFieldToProductInfo(productInfoId: $productInfoId, label: $label, value: $value) {
    id
    value
  }
}
    `;
export type AddFieldToProductInfoMutationFn = ApolloReactCommon.MutationFunction<AddFieldToProductInfoMutation, AddFieldToProductInfoMutationVariables>;

/**
 * __useAddFieldToProductInfoMutation__
 *
 * To run a mutation, you first call `useAddFieldToProductInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFieldToProductInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFieldToProductInfoMutation, { data, loading, error }] = useAddFieldToProductInfoMutation({
 *   variables: {
 *      productInfoId: // value for 'productInfoId'
 *      label: // value for 'label'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useAddFieldToProductInfoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddFieldToProductInfoMutation, AddFieldToProductInfoMutationVariables>) {
        return ApolloReactHooks.useMutation<AddFieldToProductInfoMutation, AddFieldToProductInfoMutationVariables>(AddFieldToProductInfoDocument, baseOptions);
      }
export type AddFieldToProductInfoMutationHookResult = ReturnType<typeof useAddFieldToProductInfoMutation>;
export type AddFieldToProductInfoMutationResult = ApolloReactCommon.MutationResult<AddFieldToProductInfoMutation>;
export type AddFieldToProductInfoMutationOptions = ApolloReactCommon.BaseMutationOptions<AddFieldToProductInfoMutation, AddFieldToProductInfoMutationVariables>;
export const GetProductInfoFieldDocument = gql`
    query GetProductInfoField($infoId: Int!, $fieldId: Int!) {
  products {
    id
    info(filter: {id: $infoId}) {
      id
      fields(filter: {id: $fieldId}) {
        id
        name
        value
      }
    }
  }
}
    `;

/**
 * __useGetProductInfoFieldQuery__
 *
 * To run a query within a React component, call `useGetProductInfoFieldQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductInfoFieldQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductInfoFieldQuery({
 *   variables: {
 *      infoId: // value for 'infoId'
 *      fieldId: // value for 'fieldId'
 *   },
 * });
 */
export function useGetProductInfoFieldQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProductInfoFieldQuery, GetProductInfoFieldQueryVariables>) {
        return ApolloReactHooks.useQuery<GetProductInfoFieldQuery, GetProductInfoFieldQueryVariables>(GetProductInfoFieldDocument, baseOptions);
      }
export function useGetProductInfoFieldLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProductInfoFieldQuery, GetProductInfoFieldQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetProductInfoFieldQuery, GetProductInfoFieldQueryVariables>(GetProductInfoFieldDocument, baseOptions);
        }
export type GetProductInfoFieldQueryHookResult = ReturnType<typeof useGetProductInfoFieldQuery>;
export type GetProductInfoFieldLazyQueryHookResult = ReturnType<typeof useGetProductInfoFieldLazyQuery>;
export type GetProductInfoFieldQueryResult = ApolloReactCommon.QueryResult<GetProductInfoFieldQuery, GetProductInfoFieldQueryVariables>;
export const ChangeFieldInProductInfoDocument = gql`
    mutation ChangeFieldInProductInfo($id: Int!, $name: String!, $value: String!) {
  changeFieldInProductInfo(id: $id, change: {name: $name, value: $value}) {
    id
    name
    value
  }
}
    `;
export type ChangeFieldInProductInfoMutationFn = ApolloReactCommon.MutationFunction<ChangeFieldInProductInfoMutation, ChangeFieldInProductInfoMutationVariables>;

/**
 * __useChangeFieldInProductInfoMutation__
 *
 * To run a mutation, you first call `useChangeFieldInProductInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeFieldInProductInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeFieldInProductInfoMutation, { data, loading, error }] = useChangeFieldInProductInfoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useChangeFieldInProductInfoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeFieldInProductInfoMutation, ChangeFieldInProductInfoMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangeFieldInProductInfoMutation, ChangeFieldInProductInfoMutationVariables>(ChangeFieldInProductInfoDocument, baseOptions);
      }
export type ChangeFieldInProductInfoMutationHookResult = ReturnType<typeof useChangeFieldInProductInfoMutation>;
export type ChangeFieldInProductInfoMutationResult = ApolloReactCommon.MutationResult<ChangeFieldInProductInfoMutation>;
export type ChangeFieldInProductInfoMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeFieldInProductInfoMutation, ChangeFieldInProductInfoMutationVariables>;
export const RemoveProductInfoFromProductDocument = gql`
    mutation RemoveProductInfoFromProduct($productId: Int!, $infoId: Int!) {
  removeInfoFromProduct(productId: $productId, infoId: $infoId) {
    id
    info {
      id
    }
  }
}
    `;
export type RemoveProductInfoFromProductMutationFn = ApolloReactCommon.MutationFunction<RemoveProductInfoFromProductMutation, RemoveProductInfoFromProductMutationVariables>;

/**
 * __useRemoveProductInfoFromProductMutation__
 *
 * To run a mutation, you first call `useRemoveProductInfoFromProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProductInfoFromProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeProductInfoFromProductMutation, { data, loading, error }] = useRemoveProductInfoFromProductMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *      infoId: // value for 'infoId'
 *   },
 * });
 */
export function useRemoveProductInfoFromProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveProductInfoFromProductMutation, RemoveProductInfoFromProductMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveProductInfoFromProductMutation, RemoveProductInfoFromProductMutationVariables>(RemoveProductInfoFromProductDocument, baseOptions);
      }
export type RemoveProductInfoFromProductMutationHookResult = ReturnType<typeof useRemoveProductInfoFromProductMutation>;
export type RemoveProductInfoFromProductMutationResult = ApolloReactCommon.MutationResult<RemoveProductInfoFromProductMutation>;
export type RemoveProductInfoFromProductMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveProductInfoFromProductMutation, RemoveProductInfoFromProductMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!, $remember: Boolean!) {
  joinUser(email: $email, password: $password, remember: $remember) {
    id
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      remember: // value for 'remember'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const UnloginDocument = gql`
    mutation Unlogin {
  leaveUser
}
    `;
export type UnloginMutationFn = ApolloReactCommon.MutationFunction<UnloginMutation, UnloginMutationVariables>;

/**
 * __useUnloginMutation__
 *
 * To run a mutation, you first call `useUnloginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnloginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unloginMutation, { data, loading, error }] = useUnloginMutation({
 *   variables: {
 *   },
 * });
 */
export function useUnloginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UnloginMutation, UnloginMutationVariables>) {
        return ApolloReactHooks.useMutation<UnloginMutation, UnloginMutationVariables>(UnloginDocument, baseOptions);
      }
export type UnloginMutationHookResult = ReturnType<typeof useUnloginMutation>;
export type UnloginMutationResult = ApolloReactCommon.MutationResult<UnloginMutation>;
export type UnloginMutationOptions = ApolloReactCommon.BaseMutationOptions<UnloginMutation, UnloginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($firstName: String!, $lastName: String!, $middleName: String, $phone: String, $email: String!, $password: String!) {
  createUser(firstName: $firstName, lastName: $lastName, middleName: $middleName, phone: $phone, email: $email, password: $password) {
    id
    email
    firstName
    lastName
    middleName
    phone
  }
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      middleName: // value for 'middleName'
 *      phone: // value for 'phone'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;