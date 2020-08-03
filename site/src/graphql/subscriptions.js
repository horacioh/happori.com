/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateProductCollection = /* GraphQL */ `
  subscription OnCreateProductCollection {
    onCreateProductCollection {
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
export const onUpdateProductCollection = /* GraphQL */ `
  subscription OnUpdateProductCollection {
    onUpdateProductCollection {
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
export const onDeleteProductCollection = /* GraphQL */ `
  subscription OnDeleteProductCollection {
    onDeleteProductCollection {
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
export const onCreateCollection = /* GraphQL */ `
  subscription OnCreateCollection {
    onCreateCollection {
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
export const onUpdateCollection = /* GraphQL */ `
  subscription OnUpdateCollection {
    onUpdateCollection {
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
export const onDeleteCollection = /* GraphQL */ `
  subscription OnDeleteCollection {
    onDeleteCollection {
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
