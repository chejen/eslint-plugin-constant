/**
 * @fileoverview Find out a constant value in setTimeout's `delay` argument
 * @author chejen
 */

'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-constant-settimeout-delay');
const { RuleTester } = require('eslint');

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run('no-constant-settimeout-delay', rule, {
  valid: [
    'setTimeout(function() {}, 0);',
    'window.setTimeout(function() {}, 1);',
    {
      code: 'setTimeout(() => {}, FROM_CONFIG)',
      parserOptions: { ecmaVersion: 6 },
    },
  ],
  invalid: [
    {
      code: 'setTimeout(() => {}, 1000);',
      parserOptions: { ecmaVersion: 6 },
      errors: [{
        message: '1000 should be configurable',
      }],
    },
    {
      code: 'window.setTimeout(() => {}, 750);',
      parserOptions: { ecmaVersion: 6 },
      errors: [{
        message: '750 should be configurable',
      }],
    },
  ],
});
