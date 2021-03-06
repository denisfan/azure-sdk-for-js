/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/extensionsMappers";
import * as Parameters from "../models/parameters";
import { VisualStudioResourceProviderClientContext } from "../visualStudioResourceProviderClientContext";

/** Class representing a Extensions. */
export class Extensions {
  private readonly client: VisualStudioResourceProviderClientContext;

  /**
   * Create a Extensions.
   * @param {VisualStudioResourceProviderClientContext} client Reference to the service client.
   */
  constructor(client: VisualStudioResourceProviderClientContext) {
    this.client = client;
  }

  /**
   * Gets the details of the extension resources created within the resource group.
   * @summary Extensions_ListByAccount
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param accountResourceName The name of the Visual Studio Team Services account resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExtensionsListByAccountResponse>
   */
  listByAccount(resourceGroupName: string, accountResourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ExtensionsListByAccountResponse>;
  /**
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param accountResourceName The name of the Visual Studio Team Services account resource.
   * @param callback The callback
   */
  listByAccount(resourceGroupName: string, accountResourceName: string, callback: msRest.ServiceCallback<Models.ExtensionResourceListResult>): void;
  /**
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param accountResourceName The name of the Visual Studio Team Services account resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAccount(resourceGroupName: string, accountResourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExtensionResourceListResult>): void;
  listByAccount(resourceGroupName: string, accountResourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExtensionResourceListResult>, callback?: msRest.ServiceCallback<Models.ExtensionResourceListResult>): Promise<Models.ExtensionsListByAccountResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountResourceName,
        options
      },
      listByAccountOperationSpec,
      callback) as Promise<Models.ExtensionsListByAccountResponse>;
  }

  /**
   * Registers the extension with a Visual Studio Team Services account.
   * @summary Extensions_Create
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param body An object containing additional information related to the extension request.
   * @param accountResourceName The name of the Visual Studio Team Services account resource.
   * @param extensionResourceName The name of the extension.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExtensionsCreateResponse>
   */
  create(resourceGroupName: string, body: Models.ExtensionResourceRequest, accountResourceName: string, extensionResourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ExtensionsCreateResponse>;
  /**
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param body An object containing additional information related to the extension request.
   * @param accountResourceName The name of the Visual Studio Team Services account resource.
   * @param extensionResourceName The name of the extension.
   * @param callback The callback
   */
  create(resourceGroupName: string, body: Models.ExtensionResourceRequest, accountResourceName: string, extensionResourceName: string, callback: msRest.ServiceCallback<Models.ExtensionResource>): void;
  /**
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param body An object containing additional information related to the extension request.
   * @param accountResourceName The name of the Visual Studio Team Services account resource.
   * @param extensionResourceName The name of the extension.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, body: Models.ExtensionResourceRequest, accountResourceName: string, extensionResourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExtensionResource>): void;
  create(resourceGroupName: string, body: Models.ExtensionResourceRequest, accountResourceName: string, extensionResourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExtensionResource>, callback?: msRest.ServiceCallback<Models.ExtensionResource>): Promise<Models.ExtensionsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        body,
        accountResourceName,
        extensionResourceName,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.ExtensionsCreateResponse>;
  }

  /**
   * Removes an extension resource registration for a Visual Studio Team Services account.
   * @summary Extensions_Delete
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param accountResourceName The name of the Visual Studio Team Services account resource.
   * @param extensionResourceName The name of the extension.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, accountResourceName: string, extensionResourceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param accountResourceName The name of the Visual Studio Team Services account resource.
   * @param extensionResourceName The name of the extension.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountResourceName: string, extensionResourceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param accountResourceName The name of the Visual Studio Team Services account resource.
   * @param extensionResourceName The name of the extension.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountResourceName: string, extensionResourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, accountResourceName: string, extensionResourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountResourceName,
        extensionResourceName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets the details of an extension associated with a Visual Studio Team Services account resource.
   * @summary Extensions_Get
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param accountResourceName The name of the Visual Studio Team Services account resource.
   * @param extensionResourceName The name of the extension.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExtensionsGetResponse>
   */
  get(resourceGroupName: string, accountResourceName: string, extensionResourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ExtensionsGetResponse>;
  /**
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param accountResourceName The name of the Visual Studio Team Services account resource.
   * @param extensionResourceName The name of the extension.
   * @param callback The callback
   */
  get(resourceGroupName: string, accountResourceName: string, extensionResourceName: string, callback: msRest.ServiceCallback<Models.ExtensionResource>): void;
  /**
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param accountResourceName The name of the Visual Studio Team Services account resource.
   * @param extensionResourceName The name of the extension.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountResourceName: string, extensionResourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExtensionResource>): void;
  get(resourceGroupName: string, accountResourceName: string, extensionResourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExtensionResource>, callback?: msRest.ServiceCallback<Models.ExtensionResource>): Promise<Models.ExtensionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountResourceName,
        extensionResourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ExtensionsGetResponse>;
  }

  /**
   * Updates an existing extension registration for the Visual Studio Team Services account.
   * @summary Extensions_Update
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param body An object containing additional information related to the extension request.
   * @param accountResourceName The name of the Visual Studio Team Services account resource.
   * @param extensionResourceName The name of the extension.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExtensionsUpdateResponse>
   */
  update(resourceGroupName: string, body: Models.ExtensionResourceRequest, accountResourceName: string, extensionResourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ExtensionsUpdateResponse>;
  /**
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param body An object containing additional information related to the extension request.
   * @param accountResourceName The name of the Visual Studio Team Services account resource.
   * @param extensionResourceName The name of the extension.
   * @param callback The callback
   */
  update(resourceGroupName: string, body: Models.ExtensionResourceRequest, accountResourceName: string, extensionResourceName: string, callback: msRest.ServiceCallback<Models.ExtensionResource>): void;
  /**
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param body An object containing additional information related to the extension request.
   * @param accountResourceName The name of the Visual Studio Team Services account resource.
   * @param extensionResourceName The name of the extension.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, body: Models.ExtensionResourceRequest, accountResourceName: string, extensionResourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExtensionResource>): void;
  update(resourceGroupName: string, body: Models.ExtensionResourceRequest, accountResourceName: string, extensionResourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExtensionResource>, callback?: msRest.ServiceCallback<Models.ExtensionResource>): Promise<Models.ExtensionsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        body,
        accountResourceName,
        extensionResourceName,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.ExtensionsUpdateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{accountResourceName}/extension",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountResourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ExtensionResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{accountResourceName}/extension/{extensionResourceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountResourceName,
    Parameters.extensionResourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.ExtensionResourceRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ExtensionResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{accountResourceName}/extension/{extensionResourceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountResourceName,
    Parameters.extensionResourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{accountResourceName}/extension/{extensionResourceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountResourceName,
    Parameters.extensionResourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ExtensionResource
    },
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{accountResourceName}/extension/{extensionResourceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountResourceName,
    Parameters.extensionResourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.ExtensionResourceRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ExtensionResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
