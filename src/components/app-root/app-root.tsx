import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <app-title title="Lista de Tarefas"></app-title>
        </header>

        <main>
          <app-todo></app-todo>
        </main>
      </div>
    );
  }
}
