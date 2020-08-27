import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @tracked isOpen = false;

  @action
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
