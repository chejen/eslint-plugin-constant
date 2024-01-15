'use strict';

module.exports = {
  rules: {
    'no-constant-setinterval-delay': require('./lib/rules/no-constant-setinterval-delay'),
    'no-constant-settimeout-delay': require('./lib/rules/no-constant-settimeout-delay'),
  },
  rulesConfig: {
    'no-constant-setinterval-delay': 1,
    'no-constant-settimeout-delay': 1,
  },
  configs: {
    recommended: {
      plugins: [
        'constant',
      ],
      rules: {
        'constant/no-constant-setinterval-delay': 1,
        'constant/no-constant-settimeout-delay': 1,
      },
    },
  },
};
