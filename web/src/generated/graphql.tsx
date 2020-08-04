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

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  name: Scalars['String'];
  parent?: Maybe<Category>;
  children?: Maybe<Array<Category>>;
};

export type Query = {
  __typename?: 'Query';
  currentUser?: Maybe<User>;
  categories: Array<Category>;
  findCategoryByNameTemplate: Array<Category>;
};


export type QueryFindCategoryByNameTemplateArgs = {
  template?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  joinUser: User;
  leaveUser: Scalars['Boolean'];
  createUser: User;
  createCategory: Category;
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