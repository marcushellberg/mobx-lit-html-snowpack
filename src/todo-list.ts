import { html, render } from 'lit-html';
import { LiteElement } from './lite-element';
import styles from './todo-list.module.css';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-text-field';
import { component } from './component';

@component('todo-list')
export class TodoList extends LiteElement {
  state = {
    name: 'Marcus',
    todos: ['Things'],
    input: '',
  };

  render() {
    const { name, todos, input } = this.state;

    return html`
      <div class=${styles.wrapper}>
        <h1 class=${styles.header}>Hello ${name}</h1>
        <vaadin-text-field
          .value=${input}
          @change=${this.updateInput}
        ></vaadin-text-field>
        <vaadin-button theme="primary" @click=${this.addTodo}>Add</vaadin-button
        ><vaadin-button theme="tertiary error" @click=${this.changeName}
          >Change your name</vaadin-button
        >
        <ul class=${styles.list}>
          ${todos.map((todo) => html`<li>${todo}</li>`)}
        </ul>
      </div>
    `;
  }

  updateInput(e: { target: HTMLInputElement }) {
    this.state.input = e.target.value;
  }

  addTodo() {
    this.state.todos.push(this.state.input);
    this.state.input = '';
  }

  changeName() {
    this.state.name = this.state.input;
  }
}
