
class Link {

    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

}

class PathFinder {

    constructor() {

        this.cells = {};

        this.paths = [];

        this.history = [];

    }

    addCell(id, neighbours) {
        this.cells[id] = { neighbours };
    }

    path(fromCell, toCell) {

        var cellsIds = Object.keys(this.cells);

        for (var cellId of cellsIds) {
            var cell = this.cells[cellId];
            for (var neighbour of cell.neighbours) {
                if (this.cells[neighbour]?.neighbours) {
                    if (!this.cells[neighbour].neighbours.includes(cellId)) {
                        this.cells[neighbour].neighbours.push(cellId);
                    }
                } else {
                    this.cells[neighbour] = { neighbours: [cellId] };
                }
            }
        }

        console.log(this.cells);

        this.miniPath(fromCell, toCell, 0);

        this.paths.forEach((path, index) => {

            if (index == this.paths.length) return;

            var lastPath = this.paths[this.paths.length - 1];

            for (var miniPath of path) {



            }

        })

    }

    miniPath(fromCell, toCell, iteration) {

        this.paths[iteration] = this.paths[iteration] || [];

        if (this.cells[fromCell].neighbours.includes(toCell)) {

            this.addMiniPath([fromCell, toCell], iteration);

        } else {

            var nextIteration = iteration + 1;

            for (var neighbour of this.cells[fromCell].neighbours) {

                if (this.isCrossed(fromCell, neighbour)) break;

                this.addMiniPath([fromCell, neighbour], iteration);

                this.miniPath(neighbour, toCell, nextIteration);

            }

        }

    }

    isCrossed(fromCell, toCell) {

        var isCrossed = false;

        for (var path of this.paths) {
            for (var miniPath of path) {
                if (miniPath[0] == toCell && miniPath[1] == fromCell) {
                    isCrossed = true;
                }
            }
        }

        return isCrossed;

    }

    addMiniPath(path, iteration) {
        if (!this.paths[iteration].find(miniPath => miniPath[0] == path[0] && miniPath[1] == path[1])) {
            this.paths[iteration].push(path);
        }
    }

}

module.exports = PathFinder;


/* getIntersections(arrayA, arrayB) {
    return arrayA.filter(item => arrayB.includes(item));
}

getTokenTwins(token, pairs) {
    var pairsWithToken = pairs.filter(pairs => [pairs.token0, pairs.token1].includes(token));
    return pairsWithToken.map(pair => pair.token0 == token ? pair.token1 : pair.token0);
} */