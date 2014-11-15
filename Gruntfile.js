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
