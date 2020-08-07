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

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  name: Scalars['String'];
  parent?: Maybe<Category>;
  children?: Maybe<Array<Category>>;
  fields?: Maybe<Array<CategoryField>>;
};


export type CategoryFieldsArgs = {
  filter?: Maybe<CategoryFieldInput>;
};

export type CategoryFieldInput = {
  id?: Maybe<Scalars['String']>;
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
  language: Scalars['String'];
  fields?: Maybe<Array<ProductField>>;
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

export type Query = {
  __typename?: 'Query';
  currentUser?: Maybe<User>;
  categories: Array<Category>;
  findCategoryByNameTemplate: Array<Category>;
  findCategoryById?: Maybe<Category>;
  products: Array<Product>;
  findProductByNameTemplate: Array<Product>;
};


export type QueryFindCategoryByNameTemplateArgs = {
  template?: Maybe<Scalars['String']>;
};


export type QueryFindCategoryByIdArgs = {
  id: Scalars['Int'];
};


export type QueryProductsArgs = {
  filter?: Maybe<ProductInput>;
};


export type QueryFindProductByNameTemplateArgs = {
  template?: Maybe<Scalars['String']>;
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
  createProduct: Product;
  changeProduct: Product;
  addProductInfoToProduct: Product;
  changeProductInfo: ProductInfo;
  changeFieldInProductInfo: ProductInfo;
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


export type MutationCreateProductArgs = {
  categoryId: Scalars['Int'];
};


export type MutationChangeProductArgs = {
  id: Scalars['Int'];
};


export type MutationAddProductInfoToProductArgs = {
  language: Scalars['String'];
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

export type ChangeProductInfoInput = {
  name?: Maybe<Scalars['String']>;
};

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'middleName' | 'phone'>
  )> }
);

export type CreateCategoryMutationVariables = Exact<{
  name: Scalars['String'];
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

export type GetChildrenCategoryByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetChildrenCategoryByIdQuery = (
  { __typename?: 'Query' }
  & { findCategoryById?: Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'id'>
    & { children?: Maybe<Array<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
    )>> }
  )> }
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
  & { findCategoryById?: Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'id'>
    & { fields?: Maybe<Array<(
      { __typename?: 'CategoryField' }
      & Pick<CategoryField, 'id' | 'name'>
    )>> }
  )> }
);

export type GetFieldByIdFromCategoryByIdQueryVariables = Exact<{
  categoryId: Scalars['Int'];
  fieldId: Scalars['String'];
}>;


export type GetFieldByIdFromCategoryByIdQuery = (
  { __typename?: 'Query' }
  & { findCategoryById?: Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'id'>
    & { fields?: Maybe<Array<(
      { __typename?: 'CategoryField' }
      & Pick<CategoryField, 'id' | 'name'>
    )>> }
  )> }
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

export type GetParentCategoryByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetParentCategoryByIdQuery = (
  { __typename?: 'Query' }
  & { findCategoryById?: Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'id'>
    & { parent?: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
    )> }
  )> }
);

export type FindCategoryByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindCategoryByIdQuery = (
  { __typename?: 'Query' }
  & { findCategoryById?: Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name'>
  )> }
);

export type FindCategoryByNameTemplateQueryVariables = Exact<{
  template?: Maybe<Scalars['String']>;
}>;


export type FindCategoryByNameTemplateQuery = (
  { __typename?: 'Query' }
  & { findCategoryByNameTemplate: Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name'>
  )> }
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

export type FindProductByNameTemplateQueryVariables = Exact<{
  template?: Maybe<Scalars['String']>;
}>;


export type FindProductByNameTemplateQuery = (
  { __typename?: 'Query' }
  & { findProductByNameTemplate: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id'>
  )> }
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
      & Pick<ProductInfo, 'id' | 'language'>
      & { fields?: Maybe<Array<(
        { __typename?: 'ProductField' }
        & Pick<ProductField, 'id' | 'value'>
      )>> }
    )> }
  )> }
);

export type AddProductInfoToProductMutationVariables = Exact<{
  id: Scalars['Int'];
  language: Scalars['String'];
}>;


export type AddProductInfoToProductMutation = (
  { __typename?: 'Mutation' }
  & { addProductInfoToProduct: (
    { __typename?: 'Product' }
    & Pick<Product, 'id'>
    & { info: Array<(
      { __typename?: 'ProductInfo' }
      & Pick<ProductInfo, 'id' | 'language'>
    )> }
  ) }
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
      & Pick<ProductInfo, 'id' | 'name' | 'language'>
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
export const CreateCategoryDocument = gql`
    mutation CreateCategory($name: String!, $parentId: Int) {
  createCategory(name: $name, parentId: $parentId) {
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
export const GetChildrenCategoryByIdDocument = gql`
    query GetChildrenCategoryById($id: Int!) {
  findCategoryById(id: $id) {
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
  findCategoryById(id: $id) {
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
    query GetFieldByIdFromCategoryById($categoryId: Int!, $fieldId: String!) {
  findCategoryById(id: $categoryId) {
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
 *      categoryId: // value for 'categoryId'
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
export const GetParentCategoryByIdDocument = gql`
    query GetParentCategoryById($id: Int!) {
  findCategoryById(id: $id) {
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
export const FindCategoryByIdDocument = gql`
    query FindCategoryById($id: Int!) {
  findCategoryById(id: $id) {
    id
    name
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
export const FindCategoryByNameTemplateDocument = gql`
    query FindCategoryByNameTemplate($template: String) {
  findCategoryByNameTemplate(template: $template) {
    id
    name
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
export const FindProductByNameTemplateDocument = gql`
    query FindProductByNameTemplate($template: String) {
  findProductByNameTemplate(template: $template) {
    id
  }
}
    `;

/**
 * __useFindProductByNameTemplateQuery__
 *
 * To run a query within a React component, call `useFindProductByNameTemplateQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindProductByNameTemplateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindProductByNameTemplateQuery({
 *   variables: {
 *      template: // value for 'template'
 *   },
 * });
 */
export function useFindProductByNameTemplateQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindProductByNameTemplateQuery, FindProductByNameTemplateQueryVariables>) {
        return ApolloReactHooks.useQuery<FindProductByNameTemplateQuery, FindProductByNameTemplateQueryVariables>(FindProductByNameTemplateDocument, baseOptions);
      }
export function useFindProductByNameTemplateLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindProductByNameTemplateQuery, FindProductByNameTemplateQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindProductByNameTemplateQuery, FindProductByNameTemplateQueryVariables>(FindProductByNameTemplateDocument, baseOptions);
        }
export type FindProductByNameTemplateQueryHookResult = ReturnType<typeof useFindProductByNameTemplateQuery>;
export type FindProductByNameTemplateLazyQueryHookResult = ReturnType<typeof useFindProductByNameTemplateLazyQuery>;
export type FindProductByNameTemplateQueryResult = ApolloReactCommon.QueryResult<FindProductByNameTemplateQuery, FindProductByNameTemplateQueryVariables>;
export const GetProductInfoByProductIdDocument = gql`
    query GetProductInfoByProductId($id: Int!) {
  products(filter: {id: $id}) {
    id
    info {
      id
      language
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
    mutation AddProductInfoToProduct($id: Int!, $language: String!) {
  addProductInfoToProduct(productId: $id, language: $language) {
    id
    info {
      id
      language
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
 *      language: // value for 'language'
 *   },
 * });
 */
export function useAddProductInfoToProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddProductInfoToProductMutation, AddProductInfoToProductMutationVariables>) {
        return ApolloReactHooks.useMutation<AddProductInfoToProductMutation, AddProductInfoToProductMutationVariables>(AddProductInfoToProductDocument, baseOptions);
      }
export type AddProductInfoToProductMutationHookResult = ReturnType<typeof useAddProductInfoToProductMutation>;
export type AddProductInfoToProductMutationResult = ApolloReactCommon.MutationResult<AddProductInfoToProductMutation>;
export type AddProductInfoToProductMutationOptions = ApolloReactCommon.BaseMutationOptions<AddProductInfoToProductMutation, AddProductInfoToProductMutationVariables>;
export const GetProductInfoByProductIdAndInfoIdDocument = gql`
    query GetProductInfoByProductIdAndInfoId($id: Int!, $infoId: Int!) {
  products(filter: {id: $id}) {
    id
    info(filter: {id: $infoId}) {
      id
      name
      language
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