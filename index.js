const PathFinder = require('./pathfinder');

const pairs = [
    {
        token0: "A",
        token1: "B",
    },
    {
        token0: "B",
        token1: "C",
    },
    {
        token0: "C",
        token1: "D",
    },
    {
        token0: "D",
        token1: "E",
    }
];

const pathFinder = new PathFinder();

pathFinder.addCell("A", ["B", "D"]);
pathFinder.addCell("B", ["C", "D"]);
pathFinder.addCell("C", ["D"]);
pathFinder.addCell("E", ["D"]);

pathFinder.path("A", "E");


console.log(pathFinder.paths)