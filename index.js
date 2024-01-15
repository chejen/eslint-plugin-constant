'use strict';

module.exports = {
  rules: {
    'no-constant-settimeout-delay': require('./lib/rules/no-constant-settimeout-delay'),
  },
  rulesConfig: {
    'no-constant-settimeout-delay': 1,
  },
  configs: {
    recommended: {
      plugins: [
        'constant',
      ],
      rules: {
        'constant/no-constant-settimeout-delay': 1,
      },
    },
  },
};
