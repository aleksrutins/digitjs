var Digit = {
    extract(n, ...placeValues) {
        var res = 0;
        for(let place of placeValues) {
            res += (Math.floor(n / place) - (Math.floor(n / (place * 10))*10))*place
        }
        return res;
    }
}