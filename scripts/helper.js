hexo.extend.helper.register("get_rev_name", function(name) {
  const manifest_PATH = "../source/dist/rev-manifest.json";
  const manifest = require(manifest_PATH);
  // delete manifest cache
  delete require.cache[require.resolve(manifest_PATH)];

  return manifest[name] ? manifest[name] : name;
});
