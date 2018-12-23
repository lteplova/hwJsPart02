'use strict';

const buttonMenuItems = document.getElementsByClassName('wrapper-dropdown');

for (const buttonMenu of buttonMenuItems ) {
    buttonMenu.onclick = function() {
        this.classList.toggle('active');
    }
}
