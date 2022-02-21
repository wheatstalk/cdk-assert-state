const { awscdk, javascript } = require('projen');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Josh Kellendonk',
  authorAddress: 'joshkellendonk@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: '@wheatstalk/cdk-assert-state',
  repositoryUrl: 'https://github.com/wheatstalk/cdk-assert-state.git',

  devDeps: [
    'expect',
    '@types/aws-lambda',
    '@wheatstalk/aws-cdk-exec',
  ],

  integrationTestAutoDiscover: false,
  lambdaAutoDiscover: false,

  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,

  depsUpgradeOptions: {
    ignoreProjen: false,
  },
  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ['misterjoshua'],
  },
});

new awscdk.AutoDiscover(project, {
  srcdir: project.srcdir,
  testdir: project.testdir,
  tsconfigPath: project.tsconfigDev.fileName,
  cdkDeps: project.cdkDeps,
  integrationTestOptions: {
    pathMetadata: true,
  },
});

project.addGitIgnore('/.idea');

project.synth();