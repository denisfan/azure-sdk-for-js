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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/clustersMappers";
import * as Parameters from "../models/parameters";
import { AvsClientContext } from "../avsClientContext";

/** Class representing a Clusters. */
export class Clusters {
  private readonly client: AvsClientContext;

  /**
   * Create a Clusters.
   * @param {AvsClientContext} client Reference to the service client.
   */
  constructor(client: AvsClientContext) {
    this.client = client;
  }

  /**
   * @summary List clusters in a private cloud
   * @param resourceGroupName Name of the resource group within the Azure subscription
   * @param privateCloudName Name of the private cloud
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersListResponse>
   */
  list(resourceGroupName: string, privateCloudName: string, options?: msRest.RequestOptionsBase): Promise<Models.ClustersListResponse>;
  /**
   * @param resourceGroupName Name of the resource group within the Azure subscription
   * @param privateCloudName Name of the private cloud
   * @param callback The callback
   */
  list(resourceGroupName: string, privateCloudName: string, callback: msRest.ServiceCallback<Models.ClusterList>): void;
  /**
   * @param resourceGroupName Name of the resource group within the Azure subscription
   * @param privateCloudName Name of the private cloud
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, privateCloudName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ClusterList>): void;
  list(resourceGroupName: string, privateCloudName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ClusterList>, callback?: msRest.ServiceCallback<Models.ClusterList>): Promise<Models.ClustersListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateCloudName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ClustersListResponse>;
  }

  /**
   * @summary Get a cluster by name in a private cloud
   * @param resourceGroupName Name of the resource group within the Azure subscription
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster in the private cloud
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersGetResponse>
   */
  get(resourceGroupName: string, privateCloudName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<Models.ClustersGetResponse>;
  /**
   * @param resourceGroupName Name of the resource group within the Azure subscription
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster in the private cloud
   * @param callback The callback
   */
  get(resourceGroupName: string, privateCloudName: string, clusterName: string, callback: msRest.ServiceCallback<Models.Cluster>): void;
  /**
   * @param resourceGroupName Name of the resource group within the Azure subscription
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster in the private cloud
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, privateCloudName: string, clusterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Cluster>): void;
  get(resourceGroupName: string, privateCloudName: string, clusterName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Cluster>, callback?: msRest.ServiceCallback<Models.Cluster>): Promise<Models.ClustersGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateCloudName,
        clusterName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ClustersGetResponse>;
  }

  /**
   * @summary Create or update a cluster in a private cloud
   * @param resourceGroupName Name of the resource group within the Azure subscription
   * @param privateCloudName The name of the private cloud.
   * @param clusterName Name of the cluster in the private cloud
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, privateCloudName: string, clusterName: string, options?: Models.ClustersCreateOrUpdateOptionalParams): Promise<Models.ClustersCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,privateCloudName,clusterName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ClustersCreateOrUpdateResponse>;
  }

  /**
   * @summary Update a cluster in a private cloud
   * @param resourceGroupName Name of the resource group within the Azure subscription
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster in the private cloud
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersUpdateResponse>
   */
  update(resourceGroupName: string, privateCloudName: string, clusterName: string, options?: Models.ClustersUpdateOptionalParams): Promise<Models.ClustersUpdateResponse> {
    return this.beginUpdate(resourceGroupName,privateCloudName,clusterName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ClustersUpdateResponse>;
  }

  /**
   * @summary Delete a cluster in a private cloud
   * @param resourceGroupName Name of the resource group within the Azure subscription
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster in the private cloud
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, privateCloudName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,privateCloudName,clusterName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * @summary Create or update a cluster in a private cloud
   * @param resourceGroupName Name of the resource group within the Azure subscription
   * @param privateCloudName The name of the private cloud.
   * @param clusterName Name of the cluster in the private cloud
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, privateCloudName: string, clusterName: string, options?: Models.ClustersBeginCreateOrUpdateOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        privateCloudName,
        clusterName,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * @summary Update a cluster in a private cloud
   * @param resourceGroupName Name of the resource group within the Azure subscription
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster in the private cloud
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, privateCloudName: string, clusterName: string, options?: Models.ClustersBeginUpdateOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        privateCloudName,
        clusterName,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * @summary Delete a cluster in a private cloud
   * @param resourceGroupName Name of the resource group within the Azure subscription
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster in the private cloud
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, privateCloudName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        privateCloudName,
        clusterName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * @summary List clusters in a private cloud
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ClustersListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ClusterList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ClusterList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ClusterList>, callback?: msRest.ServiceCallback<Models.ClusterList>): Promise<Models.ClustersListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ClustersListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ClusterList
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Cluster
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      properties: [
        "options",
        "properties"
      ]
    },
    mapper: {
      ...Mappers.Cluster,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Cluster
    },
    201: {
      bodyMapper: Mappers.Cluster
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      properties: [
        "options",
        "properties"
      ]
    },
    mapper: {
      ...Mappers.Cluster,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Cluster
    },
    201: {
      bodyMapper: Mappers.Cluster
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ClusterList
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};