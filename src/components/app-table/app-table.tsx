import { h } from '@stencil/core';

export const TableComponent = (_, children) => {
  return <div class="my-tasks">{children}</div>;
};
