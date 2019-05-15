# hexo-theme-iris

> A minimalist Hexo theme for Chinese blog.

## Installation

1. Download the theme to your Hexo theme folder;

``` bash
git clone https://github.com/giuem/hexo-theme-iris.git themes/iris
```

2. Configure theme;

```bash
cd themes/iris
cp _config.example.yml _config.yml
vi _config.yml
```

3. Specify `theme` property to `iris`.

```yaml
# <hexo root>/_config.yml
theme: iris
```

## Hexo Plugins

The following Hexo plugins is necessary:

* [hexo-renderer-ejs](https://www.npmjs.com/package/hexo-renderer-ejs)
* [hexo-generator-feed](https://www.npmjs.com/package/hexo-generator-feed)

Some plugins is not necessary, but I strongly recommand:

* [hexo-generator-index](https://www.npmjs.com/package/hexo-generator-index)
* [hexo-generator-archive](https://www.npmjs.com/package/hexo-generator-archive)
* [hexo-generator-category](https://www.npmjs.com/package/hexo-generator-category)
* [hexo-generator-tag](https://www.npmjs.com/package/hexo-generator-tag)
* [hexo-filter-crossorigin](https://www.npmjs.com/package/hexo-filter-crossorigin): Append [crossorigin](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) attribute to HTML elements.
* [hexo-critical-css](https://github.com/john-whitley/hexo-critical-css): Inline Critical CSS.
* [hexo-html-minifier](https://github.com/hexojs/hexo-html-minifier): Minify HTML files.

