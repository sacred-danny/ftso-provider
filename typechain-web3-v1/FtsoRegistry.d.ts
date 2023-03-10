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

export interface FtsoRegistry extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): FtsoRegistry;
  clone(): FtsoRegistry;
  methods: {
    addFtso(_ftsoContract: string): NonPayableTransactionObject<string>;

    claimGovernance(): NonPayableTransactionObject<void>;

    ftsoManager(): NonPayableTransactionObject<string>;

    getAddressUpdater(): NonPayableTransactionObject<string>;

    getAllFtsos(): NonPayableTransactionObject<string[]>;

    "getCurrentPrice(string)"(_symbol: string): NonPayableTransactionObject<{
      _price: string;
      _timestamp: string;
      0: string;
      1: string;
    }>;

    "getCurrentPrice(uint256)"(
      _assetIndex: number | string | BN
    ): NonPayableTransactionObject<{
      _price: string;
      _timestamp: string;
      0: string;
      1: string;
    }>;

    getFtso(
      _assetIndex: number | string | BN
    ): NonPayableTransactionObject<string>;

    getFtsoBySymbol(_symbol: string): NonPayableTransactionObject<string>;

    getFtsoHistory(
      _assetIndex: number | string | BN
    ): NonPayableTransactionObject<string[]>;

    getFtsoIndex(_symbol: string): NonPayableTransactionObject<string>;

    getFtsoSymbol(
      _assetIndex: number | string | BN
    ): NonPayableTransactionObject<string>;

    getFtsos(
      _assetIndices: (number | string | BN)[]
    ): NonPayableTransactionObject<string[]>;

    getSupportedFtsos(): NonPayableTransactionObject<string[]>;

    getSupportedIndices(): NonPayableTransactionObject<string[]>;

    getSupportedIndicesAndFtsos(): NonPayableTransactionObject<{
      _supportedIndices: string[];
      _ftsos: string[];
      0: string[];
      1: string[];
    }>;

    getSupportedIndicesAndSymbols(): NonPayableTransactionObject<{
      _supportedIndices: string[];
      _supportedSymbols: string[];
      0: string[];
      1: string[];
    }>;

    getSupportedIndicesSymbolsAndFtsos(): NonPayableTransactionObject<{
      _supportedIndices: string[];
      _supportedSymbols: string[];
      _ftsos: string[];
      0: string[];
      1: string[];
      2: string[];
    }>;

    getSupportedSymbols(): NonPayableTransactionObject<string[]>;

    getSupportedSymbolsAndFtsos(): NonPayableTransactionObject<{
      _supportedSymbols: string[];
      _ftsos: string[];
      0: string[];
      1: string[];
    }>;

    governance(): NonPayableTransactionObject<string>;

    initialise(_governance: string): NonPayableTransactionObject<void>;

    proposeGovernance(_governance: string): NonPayableTransactionObject<void>;

    proposedGovernance(): NonPayableTransactionObject<string>;

    removeFtso(_ftso: string): NonPayableTransactionObject<void>;

    transferGovernance(_governance: string): NonPayableTransactionObject<void>;

    updateContractAddresses(
      _contractNameHashes: (string | number[])[],
      _contractAddresses: string[]
    ): NonPayableTransactionObject<void>;
  };
  events: {
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
