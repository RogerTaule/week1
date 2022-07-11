pragma circom 2.0.0;

template Multiplier3 () {  

   // Declaration of signals.  
   signal input a;  
   signal input b;
   signal input c;
   signal output d;  

   signal mult1;
   
   // Constraints.  
   mult1 <== a * b;
   d <== mult1 * c;
}

component main = Multiplier3();