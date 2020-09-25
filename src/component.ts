export type Constructor<T> = {
  // tslint:disable-next-line:no-any
  new (...args: any[]): T;
};

export const component = (tagname: string) => (
  element: Constructor<HTMLElement>,
) => window.customElements.define(tagname, element);
