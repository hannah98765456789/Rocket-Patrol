let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  scene: [Menu, Play]
}
let game = new Phaser.Game(config);
// reserve keyboard vars
let keyUP, keyR, keyLEFT, keyRIGHT;
// wasd
let keyA, keyD, keyW, keyDOWN;
// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
let multi = false
//Hannah Wigh, 4.18.22, 3.5 hours
//30	Implement a simultaneous two-player mode	Add toggle multiplayer in menu with text, control other rocket with numpad, have constructor param to in rocket to remap controls to P2.
//10	Implement parallax scrolling	Two more backgrouns that are all alpha. with exception to a few white stars.  These move at a slower rate than the background.
//10	Display the time remaining (in seconds) on the screen	Add UI element in Play at the top right that just shows the time. (Will need to rework how the game ends)
//20	Implement a new timing/scoring mechanism that adds time to the clock for successful hits	Add 1 second to the timer every time you kill an enemy.
//10	Replace the UI borders with new artwork	Make an image that's the size of the game so we can replace those white borders in play mode.
//20	Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points	Copy & change the enemy spaceship image to load a new one.  Pass an argument to the constructor to say it's a "super" enemy and double all stats on it.									