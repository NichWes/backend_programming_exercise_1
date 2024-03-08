function bilPrima(a,b) {
    for (i = 1; i <= 1000; i++) {
        let j = 0;
        for (k = 1; k <= i; i++) {
            if (i % k == 0) {
                j++;
            }
        }
        if (j == 2) {
            console.log(i);
        }
    }
}