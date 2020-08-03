/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        sku
        price
        image
        currency
        createdAt
        updatedAt
        collections {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      description
      sku
      price
      image
      currency
      createdAt
      updatedAt
      collections {
        items {
          id
          productID
          collectionID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const productByText = /* GraphQL */ `
  query ProductByText(
    $name: String
    $description: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productByText(
      name: $name
      description: $description
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        sku
        price
        image
        currency
        createdAt
        updatedAt
        collections {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const listCollections = /* GraphQL */ `
  query ListCollections(
    $filter: ModelCollectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        products {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getCollection = /* GraphQL */ `
  query GetCollection($id: ID!) {
    getCollection(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      products {
        items {
          id
          productID
          collectionID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const collectionByName = /* GraphQL */ `
  query CollectionByName(
    $name: String
    $sortDirection: ModelSortDirection
    $filter: ModelCollectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    collectionByName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        products {
          nextToken
        }
      }
      nextToken
    }
  }
`;
