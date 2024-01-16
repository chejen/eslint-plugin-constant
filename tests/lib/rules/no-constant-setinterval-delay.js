/**
 * @fileoverview Find out a constant value in setInterval's `delay` argument
 * @author chejen
 */

'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-constant-setinterval-delay');
const { RuleTester } = require('eslint');

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run('no-constant-setinterval-delay', rule, {
  valid: [
    'setInterval(function() {}, FROM_CONFIG);',
    {
      code: 'window.setInterval(() => {}, FROM_CONFIG)',
      parserOptions: { ecmaVersion: 6 },
    },
  ],
  invalid: [
    {
      code: 'setInterval(() => {}, 500);',
      parserOptions: { ecmaVersion: 6 },
      errors: [{
        message: '500 should be configurable',
      }],
    },
    {
      code: 'window.setInterval(() => {}, 250);',
      parserOptions: { ecmaVersion: 6 },
      errors: [{
        message: '250 should be configurable',
      }],
    },
  ],
});
