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

export type AccountClaimed = ContractEventLog<{
  theAccount: string;
  0: string;
}>;
export type AccountOptOut = ContractEventLog<{
  theAccount: string;
  0: string;
}>;
export type AccountsAdded = ContractEventLog<{
  accountsArray: string[];
  0: string[];
}>;
export type EntitlementStarted = ContractEventLog<{}>;
export type OptOutWeiWithdrawn = ContractEventLog<{}>;

export interface IDistribution extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): IDistribution;
  clone(): IDistribution;
  methods: {
    claim(_recipient: string): NonPayableTransactionObject<string>;

    getClaimableAmount(): NonPayableTransactionObject<string>;

    getClaimableAmountOf(account: string): NonPayableTransactionObject<string>;

    optOutOfAirdrop(): NonPayableTransactionObject<void>;

    secondsTillNextClaim(): NonPayableTransactionObject<string>;
  };
  events: {
    AccountClaimed(cb?: Callback<AccountClaimed>): EventEmitter;
    AccountClaimed(
      options?: EventOptions,
      cb?: Callback<AccountClaimed>
    ): EventEmitter;

    AccountOptOut(cb?: Callback<AccountOptOut>): EventEmitter;
    AccountOptOut(
      options?: EventOptions,
      cb?: Callback<AccountOptOut>
    ): EventEmitter;

    AccountsAdded(cb?: Callback<AccountsAdded>): EventEmitter;
    AccountsAdded(
      options?: EventOptions,
      cb?: Callback<AccountsAdded>
    ): EventEmitter;

    EntitlementStarted(cb?: Callback<EntitlementStarted>): EventEmitter;
    EntitlementStarted(
      options?: EventOptions,
      cb?: Callback<EntitlementStarted>
    ): EventEmitter;

    OptOutWeiWithdrawn(cb?: Callback<OptOutWeiWithdrawn>): EventEmitter;
    OptOutWeiWithdrawn(
      options?: EventOptions,
      cb?: Callback<OptOutWeiWithdrawn>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "AccountClaimed", cb: Callback<AccountClaimed>): void;
  once(
    event: "AccountClaimed",
    options: EventOptions,
    cb: Callback<AccountClaimed>
  ): void;

  once(event: "AccountOptOut", cb: Callback<AccountOptOut>): void;
  once(
    event: "AccountOptOut",
    options: EventOptions,
    cb: Callback<AccountOptOut>
  ): void;

  once(event: "AccountsAdded", cb: Callback<AccountsAdded>): void;
  once(
    event: "AccountsAdded",
    options: EventOptions,
    cb: Callback<AccountsAdded>
  ): void;

  once(event: "EntitlementStarted", cb: Callback<EntitlementStarted>): void;
  once(
    event: "EntitlementStarted",
    options: EventOptions,
    cb: Callback<EntitlementStarted>
  ): void;

  once(event: "OptOutWeiWithdrawn", cb: Callback<OptOutWeiWithdrawn>): void;
  once(
    event: "OptOutWeiWithdrawn",
    options: EventOptions,
    cb: Callback<OptOutWeiWithdrawn>
  ): void;
}
