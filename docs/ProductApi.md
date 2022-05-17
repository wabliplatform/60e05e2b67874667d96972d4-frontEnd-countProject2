# TempApi.ProductApi

All URIs are relative to *http://83.212.100.226:3002/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createproduct**](ProductApi.md#createproduct) | **POST** /product | Creates the data
[**deleteproduct**](ProductApi.md#deleteproduct) | **DELETE** /product/{productId} | Delete the element
[**getAllproduct**](ProductApi.md#getAllproduct) | **GET** /product/getAll | Get all the data
[**getproduct**](ProductApi.md#getproduct) | **GET** /product/{productId} | Get the element
[**updateproduct**](ProductApi.md#updateproduct) | **PUT** /product/{productId} | Updates the element



## createproduct

> Product createproduct(product)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ProductApi();
let product = new TempApi.Product(); // Product | data to be created
apiInstance.createproduct(product, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product** | [**Product**](Product.md)| data to be created | 

### Return type

[**Product**](Product.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteproduct

> deleteproduct(productId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ProductApi();
let productId = "productId_example"; // String | the Id parameter
apiInstance.deleteproduct(productId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllproduct

> [Product] getAllproduct()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ProductApi();
apiInstance.getAllproduct((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Product]**](Product.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getproduct

> Product getproduct(productId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ProductApi();
let productId = "productId_example"; // String | the Id parameter
apiInstance.getproduct(productId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| the Id parameter | 

### Return type

[**Product**](Product.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateproduct

> Product updateproduct(productId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ProductApi();
let productId = "productId_example"; // String | the Id parameter
let opts = {
  'product': new TempApi.Product() // Product | data to be updated
};
apiInstance.updateproduct(productId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| the Id parameter | 
 **product** | [**Product**](Product.md)| data to be updated | [optional] 

### Return type

[**Product**](Product.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

