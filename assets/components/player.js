import Player from './playerController.js';

// PLAYER
const player = new Player('player');
const playerBtn = $('.control-button.player');
const switchPlayer = () => player.switchService();
playerBtn.on('click', switchPlayer);

export { switchPlayer, playerBtn };
