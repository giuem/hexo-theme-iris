hexo.extend.helper.register("get_rev_name", function(name) {
  let manifest = {};
  try {
    const manifest_PATH = "../source/dist/rev-manifest.json";
    manifest = require(manifest_PATH);
    // delete manifest cache
    delete require.cache[require.resolve(manifest_PATH)];
  } catch (error) {}

  return manifest[name] ? manifest[name] : name;
});
