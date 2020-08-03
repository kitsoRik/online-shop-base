import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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
  id: Scalars['Float'];
  email: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  user: User;
};


export type QueryUserArgs = {
  id: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
};

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  ) }
);


export const GetUserDocument = gql`
    query GetUser {
  user(id: 123) {
    id
    email
  }
}
    `;
export type GetUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetUserQuery, GetUserQueryVariables>, 'query'>;

    export const GetUserComponent = (props: GetUserComponentProps) => (
      <ApolloReactComponents.Query<GetUserQuery, GetUserQueryVariables> query={GetUserDocument} {...props} />
    );
    
export type GetUserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetUserQuery, GetUserQueryVariables>
    } & TChildProps;
export function withGetUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetUserQuery,
  GetUserQueryVariables,
  GetUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetUserQuery, GetUserQueryVariables, GetUserProps<TChildProps, TDataName>>(GetUserDocument, {
      alias: 'getUser',
      ...operationOptions
    });
};
export type GetUserQueryResult = ApolloReactCommon.QueryResult<GetUserQuery, GetUserQueryVariables>;