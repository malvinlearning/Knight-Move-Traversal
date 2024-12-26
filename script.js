function knightMoves(start, end) {
    const moves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    function isValid(x, y) {
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    }

    const queue = [[start, [start]]]; // Start position and path
    const visited = new Set();
    visited.add(start.toString()); // Use toString for unique keys like "x,y"

    console.log("Starting BFS...");
    console.log(`Initial queue: ${JSON.stringify(queue)}`);

    while (queue.length > 0) {
        const [currentPosition, pathToHere] = queue.shift();
        const [x, y] = currentPosition;
        console.log(`Exploring position: [${x}, ${y}]`);
        console.log(`Dequeued position: ${currentPosition}, Path so far: ${JSON.stringify(pathToHere)}`);

        // Check if we've reached the target
        if (x === end[0] && y === end[1]) {
            console.log("Target reached!");
            console.log(`Final path: ${JSON.stringify(pathToHere)}`);
            console.log(`Final queue: ${JSON.stringify(queue)}`);
            return pathToHere; // Return the path
        }

        // Explore possible moves
        for (const [dx, dy] of moves) {
            const newX = x + dx;
            const newY = y + dy;

            if (isValid(newX, newY) && !visited.has([newX, newY].toString())) {
                visited.add([newX, newY].toString());
                queue.push([[newX, newY], [...pathToHere, [newX, newY]]]);

                console.log(`Valid move found: [${newX}, ${newY}], New path: ${JSON.stringify([...pathToHere, [newX, newY]])}`);
                console.log(`Updated queue: ${JSON.stringify(queue)}`);
            }
        }
    }

    // If no path is found (shouldn't happen in a valid problem setup)
    console.log("No path found.");
    return null;
}

console.log(knightMoves([0, 0], [1,2]));
