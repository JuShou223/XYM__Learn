import { createElement, render, renderDOM } from './element';
// ul.list>li.item*3
import diff from './diff';
import patch from './patch';

let virtualDOM = createElement('ul',  {
  class: 'list-group'
}, [
  createElement('li', { class: 'item' }, ['a']),
  createElement('li', { class: 'item' }, ['b']),
  createElement('li', { class: 'item' }, ['c']),
])
let virtualDOM2 = createElement('ul',  {
  class: 'list-group'
}, [
  createElement('li', { class: 'item' }, ['1']),
  createElement('li', { class: 'item' }, ['b']),
  createElement('li', { class: 'item' }, ['c']),
  createElement('li', { class: 'item' }, ['d']),
])
let patches = diff(virtualDOM,virtualDOM2)
console.log(patches)

let el = render(virtualDOM);
renderDOM(el, document.getElementById('root'));
patch(el,patches)