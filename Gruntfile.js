// To use this, first run these commands:
// npm install -g grunt-cli
// npm install grunt --save-dev
// npm install grunt-contrib-clean --save-dev
// npm install grunt-traceur-simple --save-dev
module.exports = function (grunt) {
  grunt.initConfig({
    clean: ['dist'],
    traceur: {
      options: {
        // This option includes runtime code in the generated file.
        //includeRuntime: true,
        traceurOptions: '--experimental --source-maps'
      },
      all: {
        files: {
          // Just need to transpile main file if it imports others.
          'dist/demo.js': ['src/demo.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-traceur-simple');
  grunt.registerTask('default', ['traceur']);
};
