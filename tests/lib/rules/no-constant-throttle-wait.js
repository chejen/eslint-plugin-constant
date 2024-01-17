/**
 * @fileoverview Find out a constant value in throttle's `wait` argument
 * @author chejen
 */

'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-constant-throttle-wait');
const { RuleTester } = require('eslint');

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run('no-constant-throttle-wait', rule, {
  valid: [
    'throttle(function() {}, FROM_CONFIG);',
    {
      code: 'throttle(() => {}, FROM_CONFIG)',
      parserOptions: { ecmaVersion: 6 },
    },
  ],
  invalid: [
    {
      code: 'throttle(function() {}, 300);',
      errors: [{
        message: '300 should be configurable',
      }],
    },
    {
      code: 'throttle(() => {}, 600);',
      parserOptions: { ecmaVersion: 6 },
      errors: [{
        message: '600 should be configurable',
      }],
    },
  ],
});
