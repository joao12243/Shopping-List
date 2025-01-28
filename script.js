// Adiciona um evento de clique ao botão "Adicionar item"
document.getElementById('addItemBtn').addEventListener('click', function() {
  
  // Obtém o campo de entrada, a lista de itens e a mensagem
  const itemInput = document.getElementById('itemInput');
  const itemList = document.getElementById('itemList');
  const message = document.getElementById('message');

  // Obtém o valor do campo de entrada e remove espaços em branco do início e do fim
  const itemValue = itemInput.value.trim();

  // Verifica se o campo de entrada está vazio
  if (itemValue === '') {
      // Se estiver vazio, define a mensagem de erro
      message.textContent = 'Por favor, adicione um item.';
      message.className = 'error'; // Define a classe de erro para estilização
      message.classList.remove('hidden'); // Remove a classe 'hidden' para mostrar a mensagem
      return; // Sai da função, não adiciona o item
  }

  // Se o campo não estiver vazio, esconde a mensagem
  message.classList.add('hidden');

  // Cria um novo elemento de lista (li) para o item
  const li = document.createElement('li');
  li.textContent = itemValue; // Define o texto do item como o valor do campo de entrada

  // Cria um botão para remover o item da lista
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remover'; // Define o texto do botão como "Remover"

  // Adiciona um evento de clique ao botão de remover
  removeBtn.addEventListener('click', function() {
      // Remove o item da lista quando o botão é clicado
      itemList.removeChild(li);
      // Define a mensagem informando que o item foi removido
      message.textContent = `O item "${itemValue}" foi removido da lista.`;
      message.className = 'error'; // Define a classe de erro para estilização
      message.classList.remove('hidden'); // Mostra a mensagem
  });

  // Adiciona o botão de remover ao item da lista
  li.appendChild(removeBtn);
  // Adiciona o novo item à lista de itens
  itemList.appendChild(li);
  // Limpa o campo de entrada após adicionar o item
  itemInput.value = '';
});