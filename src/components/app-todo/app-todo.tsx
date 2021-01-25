import { Component, Host, h, State } from '@stencil/core';
import { TableComponent } from '../app-table/app-table';

@Component({
  tag: 'app-todo',
  styleUrl: 'app-todo.css',
  shadow: true,
})
export class AppTodo {
  @State() tasks: string[] = [];

  handleAdd = (event: CustomEvent) => {
    this.tasks = [...this.tasks, event.detail];
  };

  render() {
    return (
      <Host>
        <app-form onAddTask={this.handleAdd}></app-form>
        <TableComponent>
          <ul>
            {this.tasks.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </TableComponent>
      </Host>
    );
  }
}
