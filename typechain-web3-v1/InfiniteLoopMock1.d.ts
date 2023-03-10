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

export interface InfiniteLoopMock1 extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): InfiniteLoopMock1;
  clone(): InfiniteLoopMock1;
  methods: {
    arr(arg0: number | string | BN): NonPayableTransactionObject<string>;

    count(): NonPayableTransactionObject<string>;

    daemonize(): NonPayableTransactionObject<boolean>;

    getContractName(): NonPayableTransactionObject<string>;

    goInLoop(): NonPayableTransactionObject<boolean>;

    savedBlock(): NonPayableTransactionObject<string>;

    setGoInLoopParameter(loop: boolean): NonPayableTransactionObject<void>;

    switchToFallbackMode(): NonPayableTransactionObject<boolean>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}
