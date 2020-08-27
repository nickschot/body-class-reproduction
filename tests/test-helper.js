import Application from 'body-class-reproduction/app';
import config from 'body-class-reproduction/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
