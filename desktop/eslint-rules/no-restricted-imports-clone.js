/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

// https://github.com/eslint/eslint/issues/14061#issuecomment-772490154
const eslint = require('eslint');
module.exports = new eslint.Linter().getRules().get('no-restricted-imports');
