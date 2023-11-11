/* eslint-disable import/no-extraneous-dependencies, no-new */
import { defineConfig } from 'checkly';
import { EmailAlertChannel, Frequency } from 'checkly/constructs';

const emailChannel = new EmailAlertChannel('email-channel-1', {
  // FIXME: add your own email address
  address: 'contact@creativedesignsguru.com',
  sendDegraded: true,
});

export const config = defineConfig({
  projectName: 'Next.js Boilerplate',
  logicalId: 'nextjs-boilerplate',
  repoUrl: 'https://github.com/ixartz/Next-js-Boilerplate',
  checks: {
    locations: ['us-east-1', 'eu-west-1'],
    tags: ['website'],
    runtimeId: '2023.09',
    browserChecks: {
      frequency: Frequency.EVERY_24H,
      testMatch: '**/__checks__/**/*.spec.ts',
      alertChannels: [emailChannel],
    },
  },
  cli: {
    runLocation: 'eu-west-1',
    reporters: ['list'],
  },
});

export default config;
