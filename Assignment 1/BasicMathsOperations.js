function basicOp(operation, value1, value2)
{
  switch(operation) {
  case '+' : return value1 + value2;
  break;
  case '-' : return value1 - value2;
  break;
  case '*' : return value1 * value2;
  break;
  case '/' : return value1 / value2;
  break;
  default : 
  return "Entered Combination is Wrong, Please enter an operator, operand1, operand2";
  }
}