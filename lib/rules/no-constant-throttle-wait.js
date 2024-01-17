/**
 * @fileoverview Find out a constant value in throttle's `wait` argument
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
        const isThrottle = node.callee?.name === 'throttle';
        if (isThrottle && node.arguments?.[1]?.type === 'Literal') {
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
