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

export type AccruingUnearnedRewardsFailed = ContractEventLog<{
  epochId: string;
  0: string;
}>;
export type DistributingRewardsFailed = ContractEventLog<{
  ftso: string;
  epochId: string;
  0: string;
  1: string;
}>;
export type FallbackMode = ContractEventLog<{
  fallbackMode: boolean;
  0: boolean;
}>;
export type FinalizingPriceEpochFailed = ContractEventLog<{
  ftso: string;
  epochId: string;
  failingType: string;
  0: string;
  1: string;
  2: string;
}>;
export type FtsoAdded = ContractEventLog<{
  ftso: string;
  add: boolean;
  0: string;
  1: boolean;
}>;
export type FtsoFallbackMode = ContractEventLog<{
  ftso: string;
  fallbackMode: boolean;
  0: string;
  1: boolean;
}>;
export type InitializingCurrentEpochStateForRevealFailed = ContractEventLog<{
  ftso: string;
  epochId: string;
  0: string;
  1: string;
}>;
export type PriceEpochFinalized = ContractEventLog<{
  chosenFtso: string;
  rewardEpochId: string;
  0: string;
  1: string;
}>;
export type RewardEpochFinalized = ContractEventLog<{
  votepowerBlock: string;
  startBlock: string;
  0: string;
  1: string;
}>;

export interface IFtsoManager extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): IFtsoManager;
  clone(): IFtsoManager;
  methods: {
    active(): NonPayableTransactionObject<boolean>;

    getCurrentPriceEpochData(): NonPayableTransactionObject<{
      _priceEpochId: string;
      _priceEpochStartTimestamp: string;
      _priceEpochEndTimestamp: string;
      _priceEpochRevealEndTimestamp: string;
      _currentTimestamp: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
    }>;

    getCurrentPriceEpochId(): NonPayableTransactionObject<string>;

    getCurrentRewardEpoch(): NonPayableTransactionObject<string>;

    getFallbackMode(): NonPayableTransactionObject<{
      _fallbackMode: boolean;
      _ftsos: string[];
      _ftsoInFallbackMode: boolean[];
      0: boolean;
      1: string[];
      2: boolean[];
    }>;

    getFtsos(): NonPayableTransactionObject<string[]>;

    getPriceEpochConfiguration(): NonPayableTransactionObject<{
      _firstPriceEpochStartTs: string;
      _priceEpochDurationSeconds: string;
      _revealEpochDurationSeconds: string;
      0: string;
      1: string;
      2: string;
    }>;

    getRewardEpochConfiguration(): NonPayableTransactionObject<{
      _firstRewardEpochStartTs: string;
      _rewardEpochDurationSeconds: string;
      0: string;
      1: string;
    }>;

    getRewardEpochToExpireNext(): NonPayableTransactionObject<string>;

    getRewardEpochVotePowerBlock(
      _rewardEpoch: number | string | BN
    ): NonPayableTransactionObject<string>;
  };
  events: {
    AccruingUnearnedRewardsFailed(
      cb?: Callback<AccruingUnearnedRewardsFailed>
    ): EventEmitter;
    AccruingUnearnedRewardsFailed(
      options?: EventOptions,
      cb?: Callback<AccruingUnearnedRewardsFailed>
    ): EventEmitter;

    DistributingRewardsFailed(
      cb?: Callback<DistributingRewardsFailed>
    ): EventEmitter;
    DistributingRewardsFailed(
      options?: EventOptions,
      cb?: Callback<DistributingRewardsFailed>
    ): EventEmitter;

    FallbackMode(cb?: Callback<FallbackMode>): EventEmitter;
    FallbackMode(
      options?: EventOptions,
      cb?: Callback<FallbackMode>
    ): EventEmitter;

    FinalizingPriceEpochFailed(
      cb?: Callback<FinalizingPriceEpochFailed>
    ): EventEmitter;
    FinalizingPriceEpochFailed(
      options?: EventOptions,
      cb?: Callback<FinalizingPriceEpochFailed>
    ): EventEmitter;

    FtsoAdded(cb?: Callback<FtsoAdded>): EventEmitter;
    FtsoAdded(options?: EventOptions, cb?: Callback<FtsoAdded>): EventEmitter;

    FtsoFallbackMode(cb?: Callback<FtsoFallbackMode>): EventEmitter;
    FtsoFallbackMode(
      options?: EventOptions,
      cb?: Callback<FtsoFallbackMode>
    ): EventEmitter;

    InitializingCurrentEpochStateForRevealFailed(
      cb?: Callback<InitializingCurrentEpochStateForRevealFailed>
    ): EventEmitter;
    InitializingCurrentEpochStateForRevealFailed(
      options?: EventOptions,
      cb?: Callback<InitializingCurrentEpochStateForRevealFailed>
    ): EventEmitter;

    PriceEpochFinalized(cb?: Callback<PriceEpochFinalized>): EventEmitter;
    PriceEpochFinalized(
      options?: EventOptions,
      cb?: Callback<PriceEpochFinalized>
    ): EventEmitter;

    RewardEpochFinalized(cb?: Callback<RewardEpochFinalized>): EventEmitter;
    RewardEpochFinalized(
      options?: EventOptions,
      cb?: Callback<RewardEpochFinalized>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(
    event: "AccruingUnearnedRewardsFailed",
    cb: Callback<AccruingUnearnedRewardsFailed>
  ): void;
  once(
    event: "AccruingUnearnedRewardsFailed",
    options: EventOptions,
    cb: Callback<AccruingUnearnedRewardsFailed>
  ): void;

  once(
    event: "DistributingRewardsFailed",
    cb: Callback<DistributingRewardsFailed>
  ): void;
  once(
    event: "DistributingRewardsFailed",
    options: EventOptions,
    cb: Callback<DistributingRewardsFailed>
  ): void;

  once(event: "FallbackMode", cb: Callback<FallbackMode>): void;
  once(
    event: "FallbackMode",
    options: EventOptions,
    cb: Callback<FallbackMode>
  ): void;

  once(
    event: "FinalizingPriceEpochFailed",
    cb: Callback<FinalizingPriceEpochFailed>
  ): void;
  once(
    event: "FinalizingPriceEpochFailed",
    options: EventOptions,
    cb: Callback<FinalizingPriceEpochFailed>
  ): void;

  once(event: "FtsoAdded", cb: Callback<FtsoAdded>): void;
  once(
    event: "FtsoAdded",
    options: EventOptions,
    cb: Callback<FtsoAdded>
  ): void;

  once(event: "FtsoFallbackMode", cb: Callback<FtsoFallbackMode>): void;
  once(
    event: "FtsoFallbackMode",
    options: EventOptions,
    cb: Callback<FtsoFallbackMode>
  ): void;

  once(
    event: "InitializingCurrentEpochStateForRevealFailed",
    cb: Callback<InitializingCurrentEpochStateForRevealFailed>
  ): void;
  once(
    event: "InitializingCurrentEpochStateForRevealFailed",
    options: EventOptions,
    cb: Callback<InitializingCurrentEpochStateForRevealFailed>
  ): void;

  once(event: "PriceEpochFinalized", cb: Callback<PriceEpochFinalized>): void;
  once(
    event: "PriceEpochFinalized",
    options: EventOptions,
    cb: Callback<PriceEpochFinalized>
  ): void;

  once(event: "RewardEpochFinalized", cb: Callback<RewardEpochFinalized>): void;
  once(
    event: "RewardEpochFinalized",
    options: EventOptions,
    cb: Callback<RewardEpochFinalized>
  ): void;
}
