class PathFinder {

    constructor() {}

    getIntersections(arrayA, arrayB) {
        return arrayA.filter(item => arrayB.includes(item));
    }

    getPath(tokenIn, tokenOut, pairs) {
        var tokenInTwins = this.getTokenTwins(tokenIn, pairs);
        var tokenOutTwins = this.getTokenTwins(tokenOut, pairs);
        var tokensTwinsIntersections = this.getIntersections(tokenInTwins, tokenOutTwins);
        console.log({ tokenInTwins, tokenOutTwins, tokensTwinsIntersections });
    }

    getTokenTwins(token, pairs) {
        var pairsWithToken = pairs.filter(pairs => [pairs.token0, pairs.token1].includes(token));
        return pairsWithToken.map(pair => pair.token0 == token ? pair.token1 : pair.token0);
    }

}

module.exports = PathFinder;