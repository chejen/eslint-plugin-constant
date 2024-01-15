/**
 * @fileoverview Find out a constant value on the top level of a module
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
      VariableDeclaration(node) {
        const declaration = node.declarations ? node.declarations[0] : {};
        if (
          node.kind === 'const' &&
          node.parent.type === 'Program' &&
          declaration.type === 'VariableDeclarator' &&
          declaration.init.type === 'Literal'
        ) {
          context.report({
            node,
            message: '{{ value }} should be configurable',
            data: {
              value: declaration.init.value,
            },
          });
        }
      },
    };
  },
};
