'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT_MAX = 150;
var GAP = 50;
var FONT_GAP = 20;

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.textBaseline = 'hanging';
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP + (GAP + COLUMN_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP * 3 - times[i] * COLUMN_HEIGHT_MAX / maxTime);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  	} else {
  	  ctx.fillStyle = 'hsl(240, ' + getRandomInt(1, 100) + '%, 50%)';
    }
    ctx.fillRect(CLOUD_X + GAP + (GAP + COLUMN_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP * 2 - times[i] * COLUMN_HEIGHT_MAX / maxTime, COLUMN_WIDTH, times[i] * COLUMN_HEIGHT_MAX / maxTime);
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(players[i], CLOUD_X + GAP + (GAP + COLUMN_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP);
  }
};
