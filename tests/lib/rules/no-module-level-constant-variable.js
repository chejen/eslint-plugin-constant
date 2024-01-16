/**
 * @fileoverview Find out a constant value on the top level of a module
 * @author chejen
 */

'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-module-level-constant-variable');
const { RuleTester } = require('eslint');

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run('no-module-level-constant-variable', rule, {
  valid: [
    {
      code: `
        class MyCmp extends React.PureComponent {
          constructor(){
            const foo = 'bar';
            const num = 99;
            const flag = true;
          }
        }
      `,
      parserOptions: { ecmaVersion: 6 },
    },
    {
      code: `
      export const SortMenu = () => {
        const foo = 'bar';
        const num = 99;
        const flag = true;
      };
      `,
      parserOptions: { ecmaVersion: 6, sourceType: 'module' },
    },
    {
      code: `
        const emptyString = '';
      `,
      parserOptions: { ecmaVersion: 6 },
    },
  ],
  invalid: [
    {
      code: `
        const foo = 'bar';
        const num = 99;
        const flag = true;
        class MyCmp extends React.PureComponent {}
      `,
      parserOptions: { ecmaVersion: 6 },
      errors: [{
        message: '"foo = bar" should be configurable',
      }, {
        message: '"num = 99" should be configurable',
      }, {
        message: '"flag = true" should be configurable',
      }],
    },
  ],
});
