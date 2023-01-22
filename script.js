class Node {
    constructor(pos, path) {
        if (pos[0] < 0 || pos[1] < 0 || pos[0] > 7 || pos[1] > 7) {
            this.valid = false;
            return;
        }
        this.valid = true;
        this.pos = pos;
        this.path = path;
    }
}

function knightMoves(start, end) {
    let queue = [new Node(start, [start])];
    let currentNode = queue.shift();
    
    while (currentNode.pos.toString() !== end.toString()) {
        let moves = [
            [currentNode.pos[0] + 2, currentNode.pos[1] - 1],
            [currentNode.pos[0] + 2, currentNode.pos[1] + 1],
            [currentNode.pos[0] + 1, currentNode.pos[1] - 2],
            [currentNode.pos[0] + 1, currentNode.pos[1] + 2],
            [currentNode.pos[0] - 1, currentNode.pos[1] - 2],
            [currentNode.pos[0] - 1, currentNode.pos[1] + 2],
            [currentNode.pos[0] - 2, currentNode.pos[1] - 1],
            [currentNode.pos[0] - 2, currentNode.pos[1] + 1]
        ];
        moves.forEach((move) => {
            let node = new Node(move, currentNode.path.concat([move]));
            if (node.valid) {
                queue.push(node);
            }
        });
        currentNode = queue.shift();
    }   
    console.log(`You made it in ${currentNode.path.length - 1} moves! Here's your path:`);
    currentNode.path.forEach((pos) => {
        console.log(pos);
    });
}
knightMoves([3, 2], [3,3]);