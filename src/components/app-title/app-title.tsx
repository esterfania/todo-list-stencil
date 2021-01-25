import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-title',
  styleUrl: 'app-title.css',
  shadow: true,
})
export class AppTitle {
  @Prop() title = '';

  render() {
    return <h1>{this.title}</h1>;
  }
}
