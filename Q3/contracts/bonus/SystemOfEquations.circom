pragma circom 2.0.0;

include "../../node_modules/circomlib/circuits/comparators.circom";
include "../../node_modules/circomlib-matrix/circuits/matMul.circom";

template SystemOfEquations(n) { // n is the number of variables in the system of equations
    signal input x[n]; // this is the solution to the system of equations
    signal input A[n][n]; // this is the coefficient matrix
    signal input b[n]; // this are the constants in the system of equations
    signal output out; // 1 for correct solution, 0 for incorrect solution
    
    component mul = matMul(n,n+1,1);

    for (var i=0; i<n; i++) {
        for (var j=0; j<n; j++) {
            mul.a[i][j] <== A[i][j];
        }
        mul.b[i][0] <== x[i];
        mul.a[i][n] <== b[i];
    }

    mul.b[n][0] <== -1;

    component zeros[n];

    signal sums[n];

    for(var i=0; i < n; i++) {
        zeros[i] = IsZero();
        zeros[i].in <== mul.out[i][0];
        if(i >= 1) {
            sums[i] <== sums[i - 1] + zeros[i].out;
        } else {
            sums[i] <== zeros[i].out;
        }
    }

    component eq = IsEqual();
    eq.in[0] <== sums[n - 1];
    eq.in[1] <== n;
    out <== eq.out;
}

component main {public [A, b]} = SystemOfEquations(3);