# Calculator
Creating a convencional calculator, just using HTML5, CSS3 and JS!
I´m exerciting my skills, the project has been developing because I don´t finish, the next step is to do the responsive case.
If you suggest some upgrades just creat a fork of my project and send to me again, I gonna be so happy with your feedback!
See you later guys 🖖

#
**Tradução:**
Criação de uma calculadora convencional, apenas utilizando HTML5, CSS3 e JS!
Estou testando minhas habilidades, o projeto ainda está em desenvolvimento pois ainda preciso fazer a responsividade da página.
Se sugerir alguma melhoria crie um fork de meu projeto e me reenvie, ficarei muito feliz com o seu feedback.
Até mais galera 🖖

<h1>Classe Calculator</h1>

<p>A classe Calculator é responsável por gerenciar a lógica da calculadora.</p>

<h2>constructor()</h2>

<p>O construtor da classe Calculator inicializa a calculadora. Ele define as seguintes propriedades:</p>
<ul>
    <li><strong>display:</strong> Uma referência ao elemento de entrada de texto usado para exibir e inserir números e operações.</li>
    <li><strong>currentInput:</strong> Armazena a entrada atual do usuário.</li>
    <li><strong>result:</strong> Armazena o resultado do cálculo.</li>
</ul>

<h2>addToDisplay(value)</h2>

<p>Este método é usado para adicionar um valor (número, operação etc.) ao visor da calculadora. Ele atualiza o campo <em>currentInput</em> e, em seguida, atualiza o visor com o valor atual.</p>

<h2>calculateResult()</h2>

<p>Esse método é usado para calcular o resultado da expressão inserida no visor da calculadora usando a função <em>eval()</em>. Se a expressão for válida, o resultado é exibido no visor; caso contrário, é exibida uma mensagem de erro.</p>

<h2>clearDisplay()</h2>

<p>Este método é usado para limpar o visor e redefinir o estado da calculadora.</p>

<h2>backspace()</h2>

<p>Permite ao usuário apagar o último caractere digitado no visor.</p>

<h1>Funções relacionadas</h1>

<p>As funções relacionadas são responsáveis por chamar os métodos da classe Calculator de acordo com as ações do usuário.</p>

<h2>addToOpenParenthesis()</h2>

<p>Adiciona um parêntese de abertura "(" ao visor da calculadora.</p>

<h2>addToCloseParenthesis()</h2>

<p>Adiciona um parêntese de fechamento ")" ao visor da calculadora.</p>

<h2>calculateResult()</h2>

<p>Chama o método <em>calculateResult()</em> da calculadora para calcular o resultado da expressão no visor.</p>

<h2>clearDisplay()</h2>

<p>Chama o método <em>clearDisplay()</em> da calculadora para limpar o visor.</p>

<h2>backspace()</h2>

<p>Chama o método <em>backspace()</em> da calculadora para apagar o último caractere digitado.</p>

<p>Essas funções juntamente com a classe Calculator permitem que a calculadora seja utilizada para inserir, calcular e exibir resultados de expressões matemáticas no visor. Certifique-se de associar essas funções a elementos HTML, como botões, para que os usuários possam interagir com a calculadora.</p>