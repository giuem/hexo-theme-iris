module.exports = api => {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage"
      }
    ]
  ];

  return {
    presets
  };
};
