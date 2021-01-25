import { Component, h, State, Event } from '@stencil/core';
import { EventEmitter } from '@stencil/router/dist/types/stencil.core';

@Component({
  tag: 'app-form',
  styleUrl: 'app-form.css',
  shadow: true,
})
export class AppForm {
  @State() task: string = '';
  @Event() addTask: EventEmitter;

  handleAddClick = (event: Event) => {
    event.preventDefault();
    if (this.task.trim()) {
      this.addTask.emit(this.task);
      this.task = '';
    }
  };

  handleInput = (event: Event) => {
    const field = event.currentTarget as HTMLInputElement;
    this.task = field.value;
  };

  render() {
    return (
      <form onSubmit={this.handleAddClick}>
        <label>Tarefa</label>
        <input onInput={this.handleInput} value={this.task} />
        <button>Adicionar</button>
      </form>
    );
  }
}
