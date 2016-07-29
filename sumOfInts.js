/**
 * Created by nidafarooqui on 23/05/2016.
 */
/* summation (n - 1) is (n-1 + n-2 + n-3 + n-4 + n-5 +...)
 *  summation(n) is  (n + n-1 + n-2 + n-3 + n-4 +....)
 *
 * If n = m, the sequence is in the form of summation(n-1)
 * e.g. if n = 20, m = 20 => it will be summation (19)
 *
 * if n < m, the sequence is in the form of summation(n)
 * e.g. if n = 5, m = 10 => it will be summation(5)
 *
 * if n > m, the sequence is in the form of ==>
 * summation [multiple * summation (m-1) + summation (r-1)
 * where r is the remainder of n/m.
 *
 * e.g. where n = 24, m = 10, =>
 * multiple = 24/10 = 2 --- remainder =  4  --- m-1 = 9
 * so it will be 2 * summation (9) + summation(4)
 * */
function f(n, m) {
    var sum = 0;

    // do summation of m - 1 or n - 1 --- since this will be where the summation begins
    if (n === m) {
        sum = summation(n - 1);
    }

    //do summation of n since this will be where the summation begins
    else if (n < m) {
        sum = summation(n);
    }

    //if n > m, the summation of m-1 will be repeated 'multiple' times and added to the summation of the remainder
    else if (n > m) {
        var remainder = n % m;
        var multiple = (n / m) | 0;

        //if the remainder is 0, the summation is only repeated 'multiple' times in the sequence
        if (remainder === 0) {
            sum = (multiple * summation(m - 1));
        }
        //otherwise the summation of the remainder is also being added to the overall summation
        // in the sequence
        else {
            sum = (multiple * summation(m - 1)) + summation(remainder);
        }
    }
    return sum;
}


function summation(number) {
    var sum = 0;
    for (var n = 1; n < number + 1; n++) {
        sum = sum + n;
    }
    return sum;
}
/*function summation(x) {
 if (x === 0) {
 return 0;
 }
 // This is it! Recursion!!
 return x + summation(x - 1);
 }
 */
f(10, 5);