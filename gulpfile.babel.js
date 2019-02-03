import gulp from "gulp";
import { rollup } from "rollup";
import postcss from "rollup-plugin-postcss";
import progress from "rollup-plugin-progress";
import clear from "rollup-plugin-clear";
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import { uglify } from "rollup-plugin-uglify";
import filesize from "rollup-plugin-filesize";
import rev from "gulp-rev";
import revDel from "gulp-rev-delete-original";

const isDev = process.env.NODE_ENV !== "production";

export function build() {
  return rollup({
    input: "src/index.js",
    plugins: [
      progress({
        clearLine: false
      }),
      clear({
        targets: ["source/dist"]
      }),
      postcss({
        extract: true,
        sourceMap: isDev,
        plugins: [
          require("autoprefixer")(),
          require("cssnano")({
            preset: ["default"]
          })
        ]
      }),
      resolve(),
      babel({
        exclude: "node_modules/**",
        babelrc: false,
        presets: ["@babel/preset-env"],
        plugins: ["@babel/external-helpers"],
        externalHelpers: true
      }),
      !isDev && uglify(),
      !isDev && filesize()
    ]
  }).then(bundle => {
    return bundle.write({
      file: "source/dist/iris.js",
      format: "iife",
      sourcemap: isDev
    });
  });
}

function revAll() {
  return gulp
    .src("source/dist/**/*.{js,css}", { base: "source" })
    .pipe(rev())
    .pipe(revDel())
    .pipe(gulp.dest("source/"))
    .pipe(rev.manifest())
    .pipe(gulp.dest("source/dist"));
}

const workflow = gulp.series(build, revAll);

export const dev = gulp.series(workflow, function watch() {
  gulp.watch("src/**", workflow);
});

export default workflow;
