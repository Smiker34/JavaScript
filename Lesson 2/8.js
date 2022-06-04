function power(val, pow) {
    if (pow == 2) {
        return val *= val;
    } else {
        return val * power(val, pow - 1)
    }
}