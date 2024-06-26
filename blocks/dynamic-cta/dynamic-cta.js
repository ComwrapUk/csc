/* eslint-disable import/prefer-default-export */
/* eslint-disable no-shadow */
// eslint-disable-next-line import/no-absolute-path, import/no-unresolved
import { updateDynamicImage } from '/scripts/controller.js';

export async function decorate(block) {
  const cols = [...block.children];
  cols.forEach((col, index) => {
    if (index === 0) {
      col.classList.add('dynamic-img');
    } else {
      col.classList.add('dynamic-content');
    }

    const par = col.querySelectorAll('p');
    par.forEach((p, index) => {
      if (index === 0) {
        p.classList.add('content-img');
      } else {
        p.classList.add('content-content');
      }
    });
  });
  await updateDynamicImage('.dynamic-img', 2);
}
