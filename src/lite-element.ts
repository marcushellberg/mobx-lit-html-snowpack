import { html, render } from 'lit-html';
import { autorun } from 'mobx';
import { observable } from 'mobx';

export class LiteElement extends HTMLElement {
  private disposer: any;
  @observable
  state = {};

  render(state = {}) {
    return html``;
  }

  connectedCallback() {
    this.disposer = autorun(() =>
      render(this.render(this.state), this, { eventContext: this }),
    );
  }

  disconnectedCallback() {
    this.disposer?.dispose();
  }
}
