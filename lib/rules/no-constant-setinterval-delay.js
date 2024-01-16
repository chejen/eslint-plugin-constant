/**
 * @fileoverview Find out a constant value in setInterval's `delay` argument
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
        const isSetInterval =
          node.callee?.name === 'setInterval' || // setInterval();
          node.callee?.property?.name === 'setInterval'; // window.setInterval();
        if (isSetInterval && node.arguments?.[1]?.type === 'Literal') {
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
