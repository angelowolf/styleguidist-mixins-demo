const path = require('path')
module.exports = {
  // set your styleguidist configuration here
  title: 'Default Style Guide',
  components: 'src/components/**/[A-Z]*.vue',
  defaultExample: true,
  require: [
    path.join(__dirname, './styleguide/scripts.js'),
    path.join(__dirname, './node_modules/font-awesome/css/font-awesome.min.css'),
    path.join(__dirname, './node_modules/bootstrap/dist/css/bootstrap.min.css')
  ]
  // sections: [
  //   {
  //     name: 'First Section',
  //     components: 'src/components/**/[A-Z]*.vue'
  //   }
  // ],
  // webpackConfig: {
  //   // custom config goes here
  // }
}
