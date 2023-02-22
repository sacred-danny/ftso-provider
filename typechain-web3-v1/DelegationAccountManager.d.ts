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

export type CreateDelegationAccount = ContractEventLog<{
  delegationAccount: string;
  owner: string;
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
export type SetLibraryAddress = ContractEventLog<{
  libraryAddress: string;
  0: string;
}>;

export interface DelegationAccountManager extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): DelegationAccountManager;
  clone(): DelegationAccountManager;
  methods: {
    accountToDelegationAccount(
      arg0: string
    ): NonPayableTransactionObject<string>;

    claimGovernance(): NonPayableTransactionObject<void>;

    createDelegationAccount(): NonPayableTransactionObject<string>;

    distributions(
      arg0: number | string | BN
    ): NonPayableTransactionObject<string>;

    ftsoRewardManagers(
      arg0: number | string | BN
    ): NonPayableTransactionObject<string>;

    getAddressUpdater(): NonPayableTransactionObject<string>;

    getDistributions(): NonPayableTransactionObject<string[]>;

    getFtsoRewardManagers(): NonPayableTransactionObject<string[]>;

    governance(): NonPayableTransactionObject<string>;

    governanceVP(): NonPayableTransactionObject<string>;

    initialise(_governance: string): NonPayableTransactionObject<void>;

    libraryAddress(): NonPayableTransactionObject<string>;

    proposeGovernance(_governance: string): NonPayableTransactionObject<void>;

    proposedGovernance(): NonPayableTransactionObject<string>;

    setLibraryAddress(
      _libraryAddress: string
    ): NonPayableTransactionObject<void>;

    transferGovernance(_governance: string): NonPayableTransactionObject<void>;

    updateContractAddresses(
      _contractNameHashes: (string | number[])[],
      _contractAddresses: string[]
    ): NonPayableTransactionObject<void>;

    wNat(): NonPayableTransactionObject<string>;
  };
  events: {
    CreateDelegationAccount(
      cb?: Callback<CreateDelegationAccount>
    ): EventEmitter;
    CreateDelegationAccount(
      options?: EventOptions,
      cb?: Callback<CreateDelegationAccount>
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

    SetLibraryAddress(cb?: Callback<SetLibraryAddress>): EventEmitter;
    SetLibraryAddress(
      options?: EventOptions,
      cb?: Callback<SetLibraryAddress>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(
    event: "CreateDelegationAccount",
    cb: Callback<CreateDelegationAccount>
  ): void;
  once(
    event: "CreateDelegationAccount",
    options: EventOptions,
    cb: Callback<CreateDelegationAccount>
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

  once(event: "SetLibraryAddress", cb: Callback<SetLibraryAddress>): void;
  once(
    event: "SetLibraryAddress",
    options: EventOptions,
    cb: Callback<SetLibraryAddress>
  ): void;
}
