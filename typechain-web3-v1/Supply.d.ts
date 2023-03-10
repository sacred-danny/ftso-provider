/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type AuthorizedInflationUpdateError = ContractEventLog<{
  actual: string;
  expected: string;
  0: string;
  1: string;
}>;
export type GovernanceProposed = ContractEventLog<{
  proposedGovernance: string;
  0: string;
}>;
export type GovernanceUpdated = ContractEventLog<{
  oldGovernance: string;
  newGoveranance: string;
  0: string;
  1: string;
}>;

export interface Supply extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): Supply;
  clone(): Supply;
  methods: {
    addTokenPool(
      _tokenPool: string,
      _increaseDistributedSupplyByAmountWei: number | string | BN
    ): NonPayableTransactionObject<void>;

    burnAddress(): NonPayableTransactionObject<string>;

    claimGovernance(): NonPayableTransactionObject<void>;

    decreaseDistributedSupply(
      _amountWei: number | string | BN
    ): NonPayableTransactionObject<void>;

    distributedExcludedSupplyWei(): NonPayableTransactionObject<string>;

    getAddressUpdater(): NonPayableTransactionObject<string>;

    getCirculatingSupplyAt(
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<string>;

    getCirculatingSupplyAtCached(
      _blockNumber: number | string | BN
    ): NonPayableTransactionObject<string>;

    getInflatableBalance(): NonPayableTransactionObject<string>;

    governance(): NonPayableTransactionObject<string>;

    increaseDistributedSupply(
      _amountWei: number | string | BN
    ): NonPayableTransactionObject<void>;

    inflation(): NonPayableTransactionObject<string>;

    initialGenesisAmountWei(): NonPayableTransactionObject<string>;

    initialise(_governance: string): NonPayableTransactionObject<void>;

    proposeGovernance(_governance: string): NonPayableTransactionObject<void>;

    proposedGovernance(): NonPayableTransactionObject<string>;

    tokenPools(arg0: number | string | BN): NonPayableTransactionObject<{
      tokenPool: string;
      totalLockedWei: string;
      totalInflationAuthorizedWei: string;
      totalClaimedWei: string;
      0: string;
      1: string;
      2: string;
      3: string;
    }>;

    totalClaimedWei(): NonPayableTransactionObject<string>;

    totalExcludedSupplyWei(): NonPayableTransactionObject<string>;

    totalInflationAuthorizedWei(): NonPayableTransactionObject<string>;

    totalLockedWei(): NonPayableTransactionObject<string>;

    transferGovernance(_governance: string): NonPayableTransactionObject<void>;

    updateAuthorizedInflationAndCirculatingSupply(
      _inflationAuthorizedWei: number | string | BN
    ): NonPayableTransactionObject<void>;

    updateCirculatingSupply(): NonPayableTransactionObject<void>;

    updateContractAddresses(
      _contractNameHashes: (string | number[])[],
      _contractAddresses: string[]
    ): NonPayableTransactionObject<void>;
  };
  events: {
    AuthorizedInflationUpdateError(
      cb?: Callback<AuthorizedInflationUpdateError>
    ): EventEmitter;
    AuthorizedInflationUpdateError(
      options?: EventOptions,
      cb?: Callback<AuthorizedInflationUpdateError>
    ): EventEmitter;

    GovernanceProposed(cb?: Callback<GovernanceProposed>): EventEmitter;
    GovernanceProposed(
      options?: EventOptions,
      cb?: Callback<GovernanceProposed>
    ): EventEmitter;

    GovernanceUpdated(cb?: Callback<GovernanceUpdated>): EventEmitter;
    GovernanceUpdated(
      options?: EventOptions,
      cb?: Callback<GovernanceUpdated>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(
    event: "AuthorizedInflationUpdateError",
    cb: Callback<AuthorizedInflationUpdateError>
  ): void;
  once(
    event: "AuthorizedInflationUpdateError",
    options: EventOptions,
    cb: Callback<AuthorizedInflationUpdateError>
  ): void;

  once(event: "GovernanceProposed", cb: Callback<GovernanceProposed>): void;
  once(
    event: "GovernanceProposed",
    options: EventOptions,
    cb: Callback<GovernanceProposed>
  ): void;

  once(event: "GovernanceUpdated", cb: Callback<GovernanceUpdated>): void;
  once(
    event: "GovernanceUpdated",
    options: EventOptions,
    cb: Callback<GovernanceUpdated>
  ): void;
}
