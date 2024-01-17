'use strict';

module.exports = {
  rules: {
    'no-constant-debounce-wait': require('./lib/rules/no-constant-debounce-wait'),
    'no-constant-setinterval-delay': require('./lib/rules/no-constant-setinterval-delay'),
    'no-constant-settimeout-delay': require('./lib/rules/no-constant-settimeout-delay'),
    'no-constant-throttle-wait': require('./lib/rules/no-constant-throttle-wait'),
    'no-module-level-constant-variable': require('./lib/rules/no-module-level-constant-variable'),
  },
  rulesConfig: {
    'no-constant-debounce-wait': 1,
    'no-constant-setinterval-delay': 1,
    'no-constant-settimeout-delay': 1,
    'no-constant-throttle-wait': 1,
    'no-module-level-constant-variable': 1,
  },
  configs: {
    recommended: {
      plugins: [
        'constant',
      ],
      rules: {
        'constant/no-constant-debounce-wait': 1,
        'constant/no-constant-setinterval-delay': 1,
        'constant/no-constant-settimeout-delay': 1,
        'constant/no-constant-throttle-wait': 1,
        'constant/no-module-level-constant-variable': 1,
      },
    },
  },
};
