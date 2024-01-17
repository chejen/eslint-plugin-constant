/**
 * @fileoverview Find out a constant value in debounce's `wait` argument
 * @author chejen
 */

'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-constant-debounce-wait');
const { RuleTester } = require('eslint');

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run('no-constant-debounce-wait', rule, {
  valid: [
    'debounce(function() {}, FROM_CONFIG);',
    {
      code: 'debounce(() => {}, FROM_CONFIG)',
      parserOptions: { ecmaVersion: 6 },
    },
  ],
  invalid: [
    {
      code: 'debounce(function() {}, 400);',
      errors: [{
        message: '400 should be configurable',
      }],
    },
    {
      code: 'debounce(() => {}, 800);',
      parserOptions: { ecmaVersion: 6 },
      errors: [{
        message: '800 should be configurable',
      }],
    },
  ],
});
