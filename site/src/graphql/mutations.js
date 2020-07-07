/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const submitContact = /* GraphQL */ `
  mutation SubmitContact($input: SubmitContactInput) {
    submitContact(input: $input)
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
      image {
        bucket
        region
        key
      }
      currency
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
      createdAt
      updatedAt
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
      image {
        bucket
        region
        key
      }
      currency
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
      createdAt
      updatedAt
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
      image {
        bucket
        region
        key
      }
      currency
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
      createdAt
      updatedAt
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
      product {
        id
        name
        description
        sku
        price
        image {
          bucket
          region
          key
        }
        currency
        collections {
          nextToken
        }
        createdAt
        updatedAt
      }
      collection {
        id
        name
        description
        products {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      product {
        id
        name
        description
        sku
        price
        image {
          bucket
          region
          key
        }
        currency
        collections {
          nextToken
        }
        createdAt
        updatedAt
      }
      collection {
        id
        name
        description
        products {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      product {
        id
        name
        description
        sku
        price
        image {
          bucket
          region
          key
        }
        currency
        collections {
          nextToken
        }
        createdAt
        updatedAt
      }
      collection {
        id
        name
        description
        products {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
    }
  }
`;
