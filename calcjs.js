document.addEventListener("DOMContentLoaded", function() {
    let expressionElement = document.getElementById('expression');
    let resultElement = document.getElementById('result');
    let buttons = document.querySelectorAll('button');
    let expression = '';
    let lastResult = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            let value = this.textContent;

            if (value === 'ENTER') {
                try {
                    // Replace '√' with 'Math.sqrt(' and add a closing parenthesis
                    let evalExpression = expression.replace(/√/g, 'Math.sqrt(') + ')';
                    evalExpression = evalExpression.replace(/÷/g, '/').replace(/x/g, '*');
                    lastResult = eval(evalExpression);
                    resultElement.textContent = lastResult;
                    expression = '';  // Reset the expression after calculation
                } catch (e) {
                    resultElement.textContent = 'Error';
                }
            } else if (value === 'clear') {
                expression = '';
                resultElement.textContent = '';
            } else if (value === 'del') {
                expression = expression.slice(0, -1);
            } else if (value === 'ans') {
                expression += lastResult;
            } else {
                expression += value;
            }

            expressionElement.textContent = expression;
        });
    });
});
