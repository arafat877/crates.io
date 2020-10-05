import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CatchAllController extends Controller {
  @service header;

  @action search(query) {
    return this.transitionToRoute('search', { queryParams: { q: query } });
  }
}
