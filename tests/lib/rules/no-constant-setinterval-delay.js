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
  ],
  invalid: [
    {
      code: 'setInterval(() => {}, 500);',
      parserOptions: { ecmaVersion: 6 },
      errors: [{
        message: '500 should be configurable',
      }],
    },
  ],
});
