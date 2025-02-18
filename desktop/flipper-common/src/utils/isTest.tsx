/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

declare const process: any;

export function isTest(): boolean {
  return typeof process !== 'undefined' && !!process.env.JEST_WORKER_ID;
}
