'use strict';
var util   = require('util');
var path   = require('path');
var yeoman = require('yeoman-generator');
var yosay  = require('yosay');
var chalk  = require('chalk');

var dhBoilerplateGenerator = yeoman.generators.Base.extend({

  init: function () {
    this.pkg = require('../package.json');
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the impressive ' + chalk.red('dhBoilerplate') + ' generator!'
    ));

    var welcome =
      '\n '+
      '\n      _  _      ___              _                        _           _   '+
      '\n     ( )( )    (  _`\         _ (_ )                     (_ )        ( )_'+
      '\n    _| || |__  | (_) )   _   (_) | |    __   _ __  _ _    | |    _ _ | ,_)  '+
      '\n  /'_` ||  _ `\|  _ <' /'_`\ | | | |  /'__`\( '__)( '_`\  | |  /'_` )| |   /'__`\'+
      '\n ( (_| || | | || (_) )( (_) )| | | | (  ___/| |   | (_) ) | | ( (_| || |_ (  ___/'+
      '\n `\__,_)(_) (_)(____/'`\___/'(_)(___)`\____)(_)   | ,__/'(___)`\__,_)`\__)`\____)'+
      '\n                                                  | | '+
      '\n                                                  (_) '+
      '\n ';

    console.log(welcome);

    var prompts = [
      {
        type:    'input',
        name:    'projectName',
        message: 'Name the project (name of the theme folder in Wordpress)',
        default: 'dhBoilerplate'
      }, {
        type:    'input',
        name:    'projectDescription',
        message: 'Short description of the Project`',
        default: 'undefined'
      }, {
        type:    'input',
        name:    'projectProxy',
        message: 'Enter the vhost for your Project'
      }, {
        type:    'list',
        name:    'projectUsage',
        message: 'Which purpose does this Project have? Choose the appropriate option',
        choices: [
          "Just Prototyping",
          "Use with WordPress",
          "Use with Craft CMS"
        ]
      }, {
        type:    'input',
        name:    'projectVersion',
        message: 'Project Version Number',
        default: '0.0.1'
      }, {
        type:    'input',
        name:    'projectAuthor',
        message: 'Project Author or company',
        default: 'undefined'
      }, {
        type:    'input',
        name:    'projectMail',
        message: 'Mailadress of the author',
        default: 'undefined'
      }, {
        type:    'input',
        name:    'projectUrl',
        message: 'Author URl',
        default: 'http://...'
      }, {
        type:    'input',
        name:    'projectRepo',
        message: 'Git Repo URL',
        default: 'http://...'
      }
    ];

    this.prompt(prompts, function (props) {
      this.projectName        = props.projectName;
      this.projectDescription = props.projectDescription;
      this.projectProxy       = props.projectProxy;
      this.projectUsage       = props.projectUsage;
      this.projectVersion     = props.projectVersion;
      this.projectAuthor      = props.projectAuthor;
      this.projectMail        = props.projectMail;
      this.projectUrl         = props.projectUrl;
      this.projectRepo        = props.projectRepo;
      done();
    }.bind(this));

  },

  app: function () {
    // move src folder
    this.directory('*/**', 'templates/');
  },

});

module.exports = dhBoilerplateGenerator;