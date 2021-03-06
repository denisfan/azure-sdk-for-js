/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing Resource.
 * The resource definition.
 *
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
  /**
   * @member {string} [id] Resource ID.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Resource name.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] Resource type.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
}

/**
 * @interface
 * An interface representing TrackedResource.
 * Definition of resource.
 *
 * @extends Resource
 */
export interface TrackedResource extends Resource {
  /**
   * @member {string} location Resource location.
   */
  location: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags] Resource tags.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing ResourceNamespacePatch.
 * Definition of resource.
 *
 * @extends Resource
 */
export interface ResourceNamespacePatch extends Resource {
  /**
   * @member {{ [propertyName: string]: string }} [tags] Resource tags.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing HybridConnection.
 * Description of hybrid connection resource.
 *
 * @extends Resource
 */
export interface HybridConnection extends Resource {
  /**
   * @member {Date} [createdAt] The time the hybrid connection was created.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly createdAt?: Date;
  /**
   * @member {Date} [updatedAt] The time the namespace was updated.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly updatedAt?: Date;
  /**
   * @member {number} [listenerCount] The number of listeners for this hybrid
   * connection. Note that min : 1 and max:25 are supported.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly listenerCount?: number;
  /**
   * @member {boolean} [requiresClientAuthorization] Returns true if client
   * authorization is needed for this hybrid connection; otherwise, false.
   */
  requiresClientAuthorization?: boolean;
  /**
   * @member {string} [userMetadata] The usermetadata is a placeholder to store
   * user-defined string data for the hybrid connection endpoint. For example,
   * it can be used to store descriptive data, such as a list of teams and
   * their contact information. Also, user-defined configuration settings can
   * be stored.
   */
  userMetadata?: string;
}

/**
 * @interface
 * An interface representing WcfRelay.
 * Description of the WCF relay resource.
 *
 * @extends Resource
 */
export interface WcfRelay extends Resource {
  /**
   * @member {boolean} [isDynamic] Returns true if the relay is dynamic;
   * otherwise, false.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly isDynamic?: boolean;
  /**
   * @member {Date} [createdAt] The time the WCF relay was created.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly createdAt?: Date;
  /**
   * @member {Date} [updatedAt] The time the namespace was updated.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly updatedAt?: Date;
  /**
   * @member {number} [listenerCount] The number of listeners for this relay.
   * Note that min :1 and max:25 are supported.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly listenerCount?: number;
  /**
   * @member {Relaytype} [relayType] WCF relay type. Possible values include:
   * 'NetTcp', 'Http'
   */
  relayType?: Relaytype;
  /**
   * @member {boolean} [requiresClientAuthorization] Returns true if client
   * authorization is needed for this relay; otherwise, false.
   */
  requiresClientAuthorization?: boolean;
  /**
   * @member {boolean} [requiresTransportSecurity] Returns true if transport
   * security is needed for this relay; otherwise, false.
   */
  requiresTransportSecurity?: boolean;
  /**
   * @member {string} [userMetadata] The usermetadata is a placeholder to store
   * user-defined string data for the WCF Relay endpoint. For example, it can
   * be used to store descriptive data, such as list of teams and their contact
   * information. Also, user-defined configuration settings can be stored.
   */
  userMetadata?: string;
}

/**
 * @interface
 * An interface representing Sku.
 * SKU of the namespace.
 *
 */
export interface Sku {
  /**
   * @member {SkuTier} [tier] The tier of this SKU. Possible values include:
   * 'Standard'
   */
  tier?: SkuTier;
}

/**
 * @interface
 * An interface representing RelayNamespace.
 * Description of a namespace resource.
 *
 * @extends TrackedResource
 */
export interface RelayNamespace extends TrackedResource {
  /**
   * @member {Sku} [sku] SKU of the namespace.
   */
  sku?: Sku;
  /**
   * @member {ProvisioningStateEnum} [provisioningState] Possible values
   * include: 'Created', 'Succeeded', 'Deleted', 'Failed', 'Updating',
   * 'Unknown'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: ProvisioningStateEnum;
  /**
   * @member {Date} [createdAt] The time the namespace was created.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly createdAt?: Date;
  /**
   * @member {Date} [updatedAt] The time the namespace was updated.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly updatedAt?: Date;
  /**
   * @member {string} [serviceBusEndpoint] Endpoint you can use to perform
   * Service Bus operations.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly serviceBusEndpoint?: string;
  /**
   * @member {string} [metricId] Identifier for Azure Insights metrics.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly metricId?: string;
}

/**
 * @interface
 * An interface representing RelayUpdateParameters.
 * Description of a namespace resource.
 *
 * @extends ResourceNamespacePatch
 */
export interface RelayUpdateParameters extends ResourceNamespacePatch {
  /**
   * @member {Sku} [sku] SKU of the namespace.
   */
  sku?: Sku;
  /**
   * @member {ProvisioningStateEnum} [provisioningState] Possible values
   * include: 'Created', 'Succeeded', 'Deleted', 'Failed', 'Updating',
   * 'Unknown'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: ProvisioningStateEnum;
  /**
   * @member {Date} [createdAt] The time the namespace was created.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly createdAt?: Date;
  /**
   * @member {Date} [updatedAt] The time the namespace was updated.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly updatedAt?: Date;
  /**
   * @member {string} [serviceBusEndpoint] Endpoint you can use to perform
   * Service Bus operations.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly serviceBusEndpoint?: string;
  /**
   * @member {string} [metricId] Identifier for Azure Insights metrics.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly metricId?: string;
}

/**
 * @interface
 * An interface representing AuthorizationRule.
 * Description of a namespace authorization rule.
 *
 * @extends Resource
 */
export interface AuthorizationRule extends Resource {
  /**
   * @member {AccessRights[]} rights The rights associated with the rule.
   */
  rights: AccessRights[];
}

/**
 * @interface
 * An interface representing AccessKeys.
 * Namespace/Relay Connection String
 *
 */
export interface AccessKeys {
  /**
   * @member {string} [primaryConnectionString] Primary connection string of
   * the created namespace authorization rule.
   */
  primaryConnectionString?: string;
  /**
   * @member {string} [secondaryConnectionString] Secondary connection string
   * of the created namespace authorization rule.
   */
  secondaryConnectionString?: string;
  /**
   * @member {string} [primaryKey] A base64-encoded 256-bit primary key for
   * signing and validating the SAS token.
   */
  primaryKey?: string;
  /**
   * @member {string} [secondaryKey] A base64-encoded 256-bit secondary key for
   * signing and validating the SAS token.
   */
  secondaryKey?: string;
  /**
   * @member {string} [keyName] A string that describes the authorization rule.
   */
  keyName?: string;
}

/**
 * @interface
 * An interface representing RegenerateAccessKeyParameters.
 * Parameters supplied to the regenerate authorization rule operation,
 * specifies which key neeeds to be reset.
 *
 */
export interface RegenerateAccessKeyParameters {
  /**
   * @member {KeyType} keyType The access key to regenerate. Possible values
   * include: 'PrimaryKey', 'SecondaryKey'
   */
  keyType: KeyType;
  /**
   * @member {string} [key] Optional. If the key value is provided, this is set
   * to key type, or autogenerated key value set for key type.
   */
  key?: string;
}

/**
 * @interface
 * An interface representing CheckNameAvailability.
 * Description of the check name availability request properties.
 *
 */
export interface CheckNameAvailability {
  /**
   * @member {string} name The namespace name to check for availability. The
   * namespace name can contain only letters, numbers, and hyphens. The
   * namespace must start with a letter, and it must end with a letter or
   * number.
   */
  name: string;
}

/**
 * @interface
 * An interface representing CheckNameAvailabilityResult.
 * Description of the check name availability request properties.
 *
 */
export interface CheckNameAvailabilityResult {
  /**
   * @member {string} [message] The detailed info regarding the reason
   * associated with the namespace.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly message?: string;
  /**
   * @member {boolean} [nameAvailable] Value indicating namespace is available.
   * Returns true if the namespace is available; otherwise, false.
   */
  nameAvailable?: boolean;
  /**
   * @member {UnavailableReason} [reason] The reason for unavailability of a
   * namespace. Possible values include: 'None', 'InvalidName',
   * 'SubscriptionIsDisabled', 'NameInUse', 'NameInLockdown',
   * 'TooManyNamespaceInCurrentSubscription'
   */
  reason?: UnavailableReason;
}

/**
 * @interface
 * An interface representing OperationDisplay.
 * The object that represents the operation.
 *
 */
export interface OperationDisplay {
  /**
   * @member {string} [provider] Service provider: Relay.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provider?: string;
  /**
   * @member {string} [resource] Resource on which the operation is performed:
   * Invoice, etc.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly resource?: string;
  /**
   * @member {string} [operation] Operation type: Read, write, delete, etc.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly operation?: string;
}

/**
 * @interface
 * An interface representing Operation.
 * A Relay REST API operation.
 *
 */
export interface Operation {
  /**
   * @member {string} [name] Operation name: {provider}/{resource}/{operation}
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {OperationDisplay} [display] The object that represents the
   * operation.
   */
  display?: OperationDisplay;
}

/**
 * @interface
 * An interface representing ErrorResponse.
 * Error reponse indicates Relay service is not able to process the incoming
 * request. The reason is provided in the error message.
 *
 */
export interface ErrorResponse {
  /**
   * @member {string} [code] Error code.
   */
  code?: string;
  /**
   * @member {string} [message] Error message indicating why the operation
   * failed.
   */
  message?: string;
}

/**
 * @interface
 * An interface representing RelayManagementClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface RelayManagementClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * @interface
 * An interface representing the OperationListResult.
 * Result of the request to list Relay operations. It contains a list of
 * operations and a URL link to get the next set of results.
 *
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
  /**
   * @member {string} [nextLink] URL to get the next set of operation list
   * results if there are any.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * An interface representing the RelayNamespaceListResult.
 * The response from the list namespace operation.
 *
 * @extends Array<RelayNamespace>
 */
export interface RelayNamespaceListResult extends Array<RelayNamespace> {
  /**
   * @member {string} [nextLink] Link to the next set of results. Not empty if
   * value contains incomplete list of namespaces.
   */
  nextLink?: string;
}

/**
 * @interface
 * An interface representing the AuthorizationRuleListResult.
 * The response from the list namespace operation.
 *
 * @extends Array<AuthorizationRule>
 */
export interface AuthorizationRuleListResult extends Array<AuthorizationRule> {
  /**
   * @member {string} [nextLink] Link to the next set of results. Not empty if
   * value contains incomplete list of authorization rules.
   */
  nextLink?: string;
}

/**
 * @interface
 * An interface representing the HybridConnectionListResult.
 * The response of the list hybrid connection operation.
 *
 * @extends Array<HybridConnection>
 */
export interface HybridConnectionListResult extends Array<HybridConnection> {
  /**
   * @member {string} [nextLink] Link to the next set of results. Not empty if
   * value contains incomplete list hybrid connection operation.
   */
  nextLink?: string;
}

/**
 * @interface
 * An interface representing the WcfRelaysListResult.
 * The response of the list WCF relay operation.
 *
 * @extends Array<WcfRelay>
 */
export interface WcfRelaysListResult extends Array<WcfRelay> {
  /**
   * @member {string} [nextLink] Link to the next set of results. Not empty if
   * value contains incomplete list of WCF relays.
   */
  nextLink?: string;
}

/**
 * Defines values for Relaytype.
 * Possible values include: 'NetTcp', 'Http'
 * @readonly
 * @enum {string}
 */
export type Relaytype = 'NetTcp' | 'Http';

/**
 * Defines values for SkuTier.
 * Possible values include: 'Standard'
 * @readonly
 * @enum {string}
 */
export type SkuTier = 'Standard';

/**
 * Defines values for ProvisioningStateEnum.
 * Possible values include: 'Created', 'Succeeded', 'Deleted', 'Failed', 'Updating', 'Unknown'
 * @readonly
 * @enum {string}
 */
export type ProvisioningStateEnum = 'Created' | 'Succeeded' | 'Deleted' | 'Failed' | 'Updating' | 'Unknown';

/**
 * Defines values for AccessRights.
 * Possible values include: 'Manage', 'Send', 'Listen'
 * @readonly
 * @enum {string}
 */
export type AccessRights = 'Manage' | 'Send' | 'Listen';

/**
 * Defines values for KeyType.
 * Possible values include: 'PrimaryKey', 'SecondaryKey'
 * @readonly
 * @enum {string}
 */
export type KeyType = 'PrimaryKey' | 'SecondaryKey';

/**
 * Defines values for UnavailableReason.
 * Possible values include: 'None', 'InvalidName', 'SubscriptionIsDisabled', 'NameInUse',
 * 'NameInLockdown', 'TooManyNamespaceInCurrentSubscription'
 * @readonly
 * @enum {string}
 */
export type UnavailableReason = 'None' | 'InvalidName' | 'SubscriptionIsDisabled' | 'NameInUse' | 'NameInLockdown' | 'TooManyNamespaceInCurrentSubscription';

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the checkNameAvailabilityMethod operation.
 */
export type NamespacesCheckNameAvailabilityMethodResponse = CheckNameAvailabilityResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CheckNameAvailabilityResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type NamespacesListResponse = RelayNamespaceListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RelayNamespaceListResult;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type NamespacesListByResourceGroupResponse = RelayNamespaceListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RelayNamespaceListResult;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type NamespacesCreateOrUpdateResponse = RelayNamespace & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RelayNamespace;
    };
};

/**
 * Contains response data for the get operation.
 */
export type NamespacesGetResponse = RelayNamespace & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RelayNamespace;
    };
};

/**
 * Contains response data for the update operation.
 */
export type NamespacesUpdateResponse = RelayNamespace & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RelayNamespace;
    };
};

/**
 * Contains response data for the listAuthorizationRules operation.
 */
export type NamespacesListAuthorizationRulesResponse = AuthorizationRuleListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AuthorizationRuleListResult;
    };
};

/**
 * Contains response data for the createOrUpdateAuthorizationRule operation.
 */
export type NamespacesCreateOrUpdateAuthorizationRuleResponse = AuthorizationRule & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AuthorizationRule;
    };
};

/**
 * Contains response data for the getAuthorizationRule operation.
 */
export type NamespacesGetAuthorizationRuleResponse = AuthorizationRule & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AuthorizationRule;
    };
};

/**
 * Contains response data for the listKeys operation.
 */
export type NamespacesListKeysResponse = AccessKeys & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AccessKeys;
    };
};

/**
 * Contains response data for the regenerateKeys operation.
 */
export type NamespacesRegenerateKeysResponse = AccessKeys & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AccessKeys;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type NamespacesBeginCreateOrUpdateResponse = RelayNamespace & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RelayNamespace;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type NamespacesListNextResponse = RelayNamespaceListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RelayNamespaceListResult;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type NamespacesListByResourceGroupNextResponse = RelayNamespaceListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RelayNamespaceListResult;
    };
};

/**
 * Contains response data for the listAuthorizationRulesNext operation.
 */
export type NamespacesListAuthorizationRulesNextResponse = AuthorizationRuleListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AuthorizationRuleListResult;
    };
};

/**
 * Contains response data for the listByNamespace operation.
 */
export type HybridConnectionsListByNamespaceResponse = HybridConnectionListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: HybridConnectionListResult;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type HybridConnectionsCreateOrUpdateResponse = HybridConnection & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: HybridConnection;
    };
};

/**
 * Contains response data for the get operation.
 */
export type HybridConnectionsGetResponse = HybridConnection & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: HybridConnection;
    };
};

/**
 * Contains response data for the listAuthorizationRules operation.
 */
export type HybridConnectionsListAuthorizationRulesResponse = AuthorizationRuleListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AuthorizationRuleListResult;
    };
};

/**
 * Contains response data for the createOrUpdateAuthorizationRule operation.
 */
export type HybridConnectionsCreateOrUpdateAuthorizationRuleResponse = AuthorizationRule & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AuthorizationRule;
    };
};

/**
 * Contains response data for the getAuthorizationRule operation.
 */
export type HybridConnectionsGetAuthorizationRuleResponse = AuthorizationRule & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AuthorizationRule;
    };
};

/**
 * Contains response data for the listKeys operation.
 */
export type HybridConnectionsListKeysResponse = AccessKeys & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AccessKeys;
    };
};

/**
 * Contains response data for the regenerateKeys operation.
 */
export type HybridConnectionsRegenerateKeysResponse = AccessKeys & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AccessKeys;
    };
};

/**
 * Contains response data for the listByNamespaceNext operation.
 */
export type HybridConnectionsListByNamespaceNextResponse = HybridConnectionListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: HybridConnectionListResult;
    };
};

/**
 * Contains response data for the listAuthorizationRulesNext operation.
 */
export type HybridConnectionsListAuthorizationRulesNextResponse = AuthorizationRuleListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AuthorizationRuleListResult;
    };
};

/**
 * Contains response data for the listByNamespace operation.
 */
export type WCFRelaysListByNamespaceResponse = WcfRelaysListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: WcfRelaysListResult;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type WCFRelaysCreateOrUpdateResponse = WcfRelay & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: WcfRelay;
    };
};

/**
 * Contains response data for the get operation.
 */
export type WCFRelaysGetResponse = WcfRelay & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: WcfRelay;
    };
};

/**
 * Contains response data for the listAuthorizationRules operation.
 */
export type WCFRelaysListAuthorizationRulesResponse = AuthorizationRuleListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AuthorizationRuleListResult;
    };
};

/**
 * Contains response data for the createOrUpdateAuthorizationRule operation.
 */
export type WCFRelaysCreateOrUpdateAuthorizationRuleResponse = AuthorizationRule & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AuthorizationRule;
    };
};

/**
 * Contains response data for the getAuthorizationRule operation.
 */
export type WCFRelaysGetAuthorizationRuleResponse = AuthorizationRule & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AuthorizationRule;
    };
};

/**
 * Contains response data for the listKeys operation.
 */
export type WCFRelaysListKeysResponse = AccessKeys & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AccessKeys;
    };
};

/**
 * Contains response data for the regenerateKeys operation.
 */
export type WCFRelaysRegenerateKeysResponse = AccessKeys & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AccessKeys;
    };
};

/**
 * Contains response data for the listByNamespaceNext operation.
 */
export type WCFRelaysListByNamespaceNextResponse = WcfRelaysListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: WcfRelaysListResult;
    };
};

/**
 * Contains response data for the listAuthorizationRulesNext operation.
 */
export type WCFRelaysListAuthorizationRulesNextResponse = AuthorizationRuleListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AuthorizationRuleListResult;
    };
};
