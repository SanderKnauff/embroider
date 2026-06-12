import Controller from '@ember/controller';
import { getConfig, getOwnConfig, isTesting, isDevelopingApp, macroCondition, dependencySatisfies } from '@embroider/macros';

export default class Application extends Controller {
  constructor() {
    super(...arguments);
    this.mode = getOwnConfig()['mode'];
    this.isTesting = isTesting();
    this.isDeveloping = isDevelopingApp();
    this.showGreenForAddon = getConfig('v2-sample-addon-macro').showGreen;

    if (macroCondition(dependencySatisfies('version-changer', '^4'))) {
      this.versionChangerVersion = 'four';
    } else {
      this.versionChangerVersion = 'three';
    }
  }
}
