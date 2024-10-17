function checkSelector(selector) {
  const flag = selector.includes('.cos-baiduapp');

  return flag;
}

function checkDarkMode() {
  return {
    postcssPlugin: 'postcss-restrict-dark-mode',
    AtRule(atRule, { result }) {
      if (atRule.name === 'media' && atRule.params.includes('prefers-color-scheme: dark')) {
        let hasCosbaiduapp = false;
        atRule.walkRules((rule) => {
          if (rule.selectors.some((selector) => checkSelector(selector))) {
            hasCosbaiduapp = true;
          }
        });

        if (!hasCosbaiduapp) {
          throw atRule.error(
            'All @media (prefers-color-scheme: dark) rules must be within .cosbaiduapp',
            { plugin: 'postcss-restrict-dark-mode' }
          );
        }
      }
    },
  };
}

module.exports = {
  checkDarkMode,
};
