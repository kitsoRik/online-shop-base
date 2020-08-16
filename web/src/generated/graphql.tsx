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
  id: Scalars['String'];
  name: Scalars['String'];
};

export type CategoryInfoField = {
  __typename?: 'CategoryInfoField';
  id: Scalars['String'];
  value: Scalars['String'];
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
  id?: Maybe<Scalars['String']>;
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
};


export type CategoryFieldsArgs = {
  filter?: Maybe<CategoryInfoFielddInput>;
};


export type CategoryInfoArgs = {
  filter?: Maybe<CategoryInfoInput>;
};

export type CategoryInfoInput = {
  id?: Maybe<Scalars['Int']>;
};

export type ProductField = {
  __typename?: 'ProductField';
  id: Scalars['String'];
  value: Scalars['String'];
};

export type ProductInfo = {
  __typename?: 'ProductInfo';
  id: Scalars['Int'];
  name: Scalars['String'];
  language: Language;
  fields?: Maybe<Array<ProductField>>;
  product: ProductInfo;
};


export type ProductInfoFieldsArgs = {
  filter?: Maybe<ProductFieldInput>;
};

export type ProductFieldInput = {
  id?: Maybe<Scalars['String']>;
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
  findProductInfoByNameTemplate: Array<ProductInfo>;
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


export type QueryFindProductInfoByNameTemplateArgs = {
  template?: Maybe<Scalars['String']>;
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

export type Mutation = {
  __typename?: 'Mutation';
  joinUser: User;
  leaveUser: Scalars['Boolean'];
  createUser: User;
  createCategory: Category;
  changeCategory: Category;
  addFieldToCategory: Category;
  changeFieldInCategory: Category;
  removeFieldFromCategory: Category;
  addCategoryInfoToCategory: Category;
  removeInfoFromCategory: Category;
  changeCategoryInfo: CategoryInfo;
  changeFieldInCategoryInfo: CategoryInfo;
  createProduct: Product;
  changeProduct: Product;
  changeCategoryInProduct: Product;
  addProductInfoToProduct: Product;
  removeInfoFromProduct: Product;
  changeProductInfo: ProductInfo;
  changeFieldInProductInfo: ProductInfo;
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


export type MutationAddFieldToCategoryArgs = {
  name: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationChangeFieldInCategoryArgs = {
  name: Scalars['String'];
  fieldId: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationRemoveFieldFromCategoryArgs = {
  fieldId: Scalars['String'];
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
  value: Scalars['String'];
  fieldId: Scalars['String'];
  id: Scalars['Int'];
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
  infoId: Scalars['Int'];
  id: Scalars['Int'];
};


export type MutationChangeFieldInProductInfoArgs = {
  value: Scalars['String'];
  fieldId: Scalars['String'];
  id: Scalars['Int'];
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

export type ChangeProductInfoInput = {
  name?: Maybe<Scalars['String']>;
};

export type GetApplicationLanguagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetApplicationLanguagesQuery = (
  { __typename?: 'Query' }
  & { languages: Array<(
    { __typename?: 'Language' }
    & Pick<Language, 'id' | 'code'>
  )> }
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
  id: Scalars['Int'];
  name: Scalars['String'];
}>;


export type AddFieldToCategoryMutation = (
  { __typename?: 'Mutation' }
  & { addFieldToCategory: (
    { __typename?: 'Category' }
    & Pick<Category, 'id'>
    & { fields?: Maybe<Array<(
      { __typename?: 'CategoryField' }
      & Pick<CategoryField, 'id' | 'name'>
    )>> }
  ) }
);

export type RemoveFieldFromCategoryMutationVariables = Exact<{
  id: Scalars['Int'];
  fieldId: Scalars['String'];
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
  fieldId: Scalars['String'];
}>;


export type GetFieldByIdFromCategoryByIdQuery = (
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

export type ChangeFieldInCategoryMutationVariables = Exact<{
  categoryId: Scalars['Int'];
  fieldId: Scalars['String'];
  name: Scalars['String'];
}>;


export type ChangeFieldInCategoryMutation = (
  { __typename?: 'Mutation' }
  & { changeFieldInCategory: (
    { __typename?: 'Category' }
    & Pick<Category, 'id'>
    & { fields?: Maybe<Array<(
      { __typename?: 'CategoryField' }
      & Pick<CategoryField, 'id' | 'name'>
    )>> }
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
      & { fields?: Maybe<Array<(
        { __typename?: 'CategoryInfoField' }
        & Pick<CategoryInfoField, 'id' | 'value'>
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
}>;


export type FindProductInfoByNameTemplateQuery = (
  { __typename?: 'Query' }
  & { findProductInfoByNameTemplate: Array<(
    { __typename?: 'ProductInfo' }
    & Pick<ProductInfo, 'id' | 'name'>
    & { product: (
      { __typename?: 'ProductInfo' }
      & Pick<ProductInfo, 'id'>
    ) }
  )> }
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
        { __typename?: 'ProductField' }
        & Pick<ProductField, 'id' | 'value'>
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
  infoId: Scalars['Int'];
  name: Scalars['String'];
}>;


export type ChangeProductInfoMutation = (
  { __typename?: 'Mutation' }
  & { changeProductInfo: (
    { __typename?: 'ProductInfo' }
    & Pick<ProductInfo, 'id'>
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
      & { fields?: Maybe<Array<(
        { __typename?: 'ProductField' }
        & Pick<ProductField, 'id' | 'value'>
      )>> }
    )>, category: (
      { __typename?: 'Category' }
      & Pick<Category, 'id'>
      & { fields?: Maybe<Array<(
        { __typename?: 'CategoryField' }
        & Pick<CategoryField, 'id' | 'name'>
      )>> }
    ) }
  )> }
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
    mutation AddFieldToCategory($id: Int!, $name: String!) {
  addFieldToCategory(id: $id, name: $name) {
    id
    fields {
      id
      name
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
 *      id: // value for 'id'
 *      name: // value for 'name'
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
    mutation RemoveFieldFromCategory($id: Int!, $fieldId: String!) {
  removeFieldFromCategory(id: $id, fieldId: $fieldId) {
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
 *      id: // value for 'id'
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
    query GetFieldByIdFromCategoryById($id: Int!, $fieldId: String!) {
  categories(filter: {id: $id}) {
    id
    fields(filter: {id: $fieldId}) {
      id
      name
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
    mutation ChangeFieldInCategory($categoryId: Int!, $fieldId: String!, $name: String!) {
  changeFieldInCategory(id: $categoryId, fieldId: $fieldId, name: $name) {
    id
    fields {
      id
      name
    }
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
 *      categoryId: // value for 'categoryId'
 *      fieldId: // value for 'fieldId'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useChangeFieldInCategoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeFieldInCategoryMutation, ChangeFieldInCategoryMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangeFieldInCategoryMutation, ChangeFieldInCategoryMutationVariables>(ChangeFieldInCategoryDocument, baseOptions);
      }
export type ChangeFieldInCategoryMutationHookResult = ReturnType<typeof useChangeFieldInCategoryMutation>;
export type ChangeFieldInCategoryMutationResult = ApolloReactCommon.MutationResult<ChangeFieldInCategoryMutation>;
export type ChangeFieldInCategoryMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeFieldInCategoryMutation, ChangeFieldInCategoryMutationVariables>;
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
export const GetFieldsCategoryInfoByIdDocument = gql`
    query GetFieldsCategoryInfoById($id: Int!) {
  categories(filter: {id: $id}) {
    id
    fields {
      id
      name
    }
    info {
      fields {
        id
        value
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
    query FindProductInfoByNameTemplate($template: String) {
  findProductInfoByNameTemplate(template: $template) {
    id
    name
    product {
      id
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
    mutation ChangeProductInfo($id: Int!, $infoId: Int!, $name: String!) {
  changeProductInfo(id: $id, infoId: $infoId, change: {name: $name}) {
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
 *      infoId: // value for 'infoId'
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
export const GetFieldsProductByIdDocument = gql`
    query GetFieldsProductById($id: Int!) {
  products(filter: {id: $id}) {
    id
    info {
      fields {
        id
        value
      }
    }
    category {
      id
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