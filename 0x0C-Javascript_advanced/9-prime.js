function countPrimeNumbers(){
    for (var counter=2; counter<=100; counter++) {
        var prime = true;
        for (var div=2; div<=(counter-1); div++) {
            if (counter % div === 0) {
                prime = false;
            }
        }
        if (prime === true) {
            return(counter);
        }
    }
}
var t0 = performance.now();
countPrimeNumbers();
var t1 = performance.now();
console.log("Execution time of printing countPrimeNumbers was "+ (t1 - t0) + " milliseconds.");