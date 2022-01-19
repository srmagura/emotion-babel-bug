// Varicent Confidential
// © Copyright Varicent Parent Holdings Corporation 2021
// The source code for this program is not published or otherwise divested of its trade secrets, irrespective of what has been deposited with the U.S. Copyright Office.

module.exports = function config(api, options) {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets: [],
    plugins: [
      [
        require("@emotion/babel-plugin"),
        {
          cssPropOptimization: false,
          sourceMap: false,
          autoLabel: 'always',
          labelFormat: '[filename]--[local]'
        },
      ]
    ],
  };
};
