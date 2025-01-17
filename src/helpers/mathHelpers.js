export function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

export function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

export function nthPrime(n) {
    let count = 0, num = 1;
    while (count < n) {
        num++;
        if (isPrime(num)) count++;
    }
    return num;
}

export function triangular(n) {
    return (n * (n + 1)) / 2;
}

export function calculateSeries(n) {
    if (n < 2) return "El numero debe de ser mayor a 2";
    const fib = fibonacci(n + 2);
    console.log("Numero Fibonacci:")
    console.log(fib)
    const prime = nthPrime(n - 2);
    console.log("Numero Primo:")
    console.log(prime)
    const tri = triangular(n);
    console.log("Numero Triangular:")
    console.log(tri)
    return (5 * fib * 2 * prime) / (7 * tri);
}  