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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateProductCollection = /* GraphQL */ `
  subscription OnCreateProductCollection {
    onCreateProductCollection {
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
export const onUpdateProductCollection = /* GraphQL */ `
  subscription OnUpdateProductCollection {
    onUpdateProductCollection {
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
export const onDeleteProductCollection = /* GraphQL */ `
  subscription OnDeleteProductCollection {
    onDeleteProductCollection {
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
export const onCreateCollection = /* GraphQL */ `
  subscription OnCreateCollection {
    onCreateCollection {
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
export const onUpdateCollection = /* GraphQL */ `
  subscription OnUpdateCollection {
    onUpdateCollection {
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
export const onDeleteCollection = /* GraphQL */ `
  subscription OnDeleteCollection {
    onDeleteCollection {
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
