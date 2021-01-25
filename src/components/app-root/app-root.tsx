import { Component, h, Prop } from '@stencil/core';

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
          <app-title title="Lista de tarefas"></app-title>
        </header>

        <main>
          <app-todo></app-todo>
        </main>
      </div>
    );
  }
}
