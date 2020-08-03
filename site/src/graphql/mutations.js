/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const submitContact = /* GraphQL */ `
  mutation SubmitContact($input: SubmitContactInput) {
    submitContact(input: $input)
  }
`;
export const checkout = /* GraphQL */ `
  mutation Checkout($input: [CartItem]) {
    checkout(input: $input)
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createProductCollection = /* GraphQL */ `
  mutation CreateProductCollection(
    $input: CreateProductCollectionInput!
    $condition: ModelProductCollectionConditionInput
  ) {
    createProductCollection(input: $input, condition: $condition) {
      id
      productID
      collectionID
      createdAt
      updatedAt
      product {
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
      collection {
        id
        name
        description
        createdAt
        updatedAt
        products {
          nextToken
        }
      }
    }
  }
`;
export const updateProductCollection = /* GraphQL */ `
  mutation UpdateProductCollection(
    $input: UpdateProductCollectionInput!
    $condition: ModelProductCollectionConditionInput
  ) {
    updateProductCollection(input: $input, condition: $condition) {
      id
      productID
      collectionID
      createdAt
      updatedAt
      product {
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
      collection {
        id
        name
        description
        createdAt
        updatedAt
        products {
          nextToken
        }
      }
    }
  }
`;
export const deleteProductCollection = /* GraphQL */ `
  mutation DeleteProductCollection(
    $input: DeleteProductCollectionInput!
    $condition: ModelProductCollectionConditionInput
  ) {
    deleteProductCollection(input: $input, condition: $condition) {
      id
      productID
      collectionID
      createdAt
      updatedAt
      product {
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
      collection {
        id
        name
        description
        createdAt
        updatedAt
        products {
          nextToken
        }
      }
    }
  }
`;
export const createCollection = /* GraphQL */ `
  mutation CreateCollection(
    $input: CreateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    createCollection(input: $input, condition: $condition) {
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
export const updateCollection = /* GraphQL */ `
  mutation UpdateCollection(
    $input: UpdateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    updateCollection(input: $input, condition: $condition) {
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
export const deleteCollection = /* GraphQL */ `
  mutation DeleteCollection(
    $input: DeleteCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    deleteCollection(input: $input, condition: $condition) {
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
