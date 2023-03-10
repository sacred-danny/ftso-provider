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

export interface VotingFlashLoanMock extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): VotingFlashLoanMock;
  clone(): VotingFlashLoanMock;
  methods: {
    cashWnat(_amount: number | string | BN): NonPayableTransactionObject<void>;

    mintWnat(_amount: number | string | BN): NonPayableTransactionObject<void>;

    receiveNativeLoan(_lender: string): PayableTransactionObject<void>;

    revealPrice(
      _epochId: number | string | BN,
      _price: number | string | BN,
      _random: number | string | BN
    ): NonPayableTransactionObject<void>;

    setVote(
      _epochId: number | string | BN,
      _price: number | string | BN,
      _random: number | string | BN
    ): NonPayableTransactionObject<void>;

    submitPriceHash(
      _epochId: number | string | BN,
      _price: number | string | BN,
      _random: number | string | BN
    ): NonPayableTransactionObject<void>;

    testRequestLoan(
      _value: number | string | BN
    ): NonPayableTransactionObject<void>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}
