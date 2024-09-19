/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */
/* eslint-disable space-before-function-paren */
/* eslint-disable eol-last */
/* eslint-disable keyword-spacing */
/* eslint-disable space-before-blocks */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable semi */

const $toggleBtn = document.getElementById('toggle-button');
const $mainNavlist = document.getElementById('main-nav__list');

// Muestra/oculta el menú hamburguesa
export function showHideHamburgerMenu() {
  $toggleBtn.addEventListener('click', () => {
    if ($mainNavlist.classList.contains('display-list')) {
      $mainNavlist.classList.remove('display-list');
    } else {
      $mainNavlist.classList.add('display-list');
    }
  });
}
