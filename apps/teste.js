class game{
    gameInfo(snake,apple){
        this.canvas = document.getElementById('game');
        this.context = canvas.getContext('2d');
        this.grid = 16;
        this.count = 0;
        this.points = 0;
        this.snake = snake;
        this.apple = apple;
    }
}