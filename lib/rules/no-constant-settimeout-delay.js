/**
 * @fileoverview Disallow a constant value in setTimeout's `delay` argument
 * @author chejen
 */

'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------
 
module.exports = {
  // https://eslint.org/docs/latest/extend/custom-rules
  meta: {
    type: 'suggestion',
    schema: [], // no options
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee?.name === 'setTimeout' &&
          node.arguments?.[1]?.type === 'Literal' &&
          node.arguments?.[1]?.value !== 0
        ) {
          context.report({
            node,
            message: '{{ value }} should be configurable',
            data: {
              value: node.arguments?.[1]?.value
            },
          });
        }
      },
    };
  },
};
