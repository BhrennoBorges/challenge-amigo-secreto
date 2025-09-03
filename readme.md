# 🎉 Amigo Secreto

**Challenge Amigo Secreto da Alura com a Oracle ONE**

Um aplicativo web simples e intuitivo para sortear amigos em brincadeiras de amigo secreto. Desenvolvido com HTML, CSS e JavaScript puro.

## 📋 Sobre o Projeto

O **Amigo Secreto** é uma aplicação desenvolvida como parte do **Challenge da Alura em parceria com a Oracle ONE**, que permite aos usuários adicionar nomes de amigos em uma lista e realizar sorteios aleatórios de forma rápida e divertida. Ideal para festas, confraternizações e eventos entre amigos ou colegas de trabalho.

![Animação](https://github.com/user-attachments/assets/ca3da8f8-7171-4cc4-957f-eddafdd704ab)

## ✨ Funcionalidades

- ✅ **Adicionar Amigos**: Digite o nome dos participantes e adicione à lista
- ✅ **Validação de Entrada**: Impede adicionar nomes vazios
- ✅ **Lista Dinâmica**: Visualize todos os amigos adicionados em tempo real
- ✅ **Sorteio Aleatório**: Sorteia um amigo da lista de forma totalmente aleatória
- ✅ **Interface Responsiva**: Design adaptável para diferentes tamanhos de tela
- ✅ **Suporte a Teclado**: Pressione Enter para adicionar nomes rapidamente

## 🚀 Como Utilizar

### 1. **Adicionando Amigos**
- Digite o nome do amigo no campo de texto
- Clique no botão "Adicionar" ou pressione Enter
- O nome aparecerá automaticamente na lista abaixo
- Repita o processo para todos os participantes

### 2. **Realizando o Sorteio**
- Certifique-se de ter pelo menos um amigo na lista
- Clique no botão "Sortear amigo"
- O resultado aparecerá destacado em verde

### 3. **Dicas de Uso**
- Se tentar adicionar um nome vazio, aparecerá um alerta
- Se tentar sortear sem nenhum amigo na lista, aparecerá um aviso
- O campo de entrada é limpo automaticamente após adicionar um nome

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da aplicação
- **CSS3**: Estilização e design responsivo
- **JavaScript**: Lógica de funcionamento e interatividade
- **Google Fonts**: Fontes Inter e Merriweather

## 📁 Estrutura do Projeto

```
amigo-secreto/
│
├── index.html          # Página principal
├── style.css           # Estilos da aplicação
├── app.js              # Lógica JavaScript
├── assets/             # Recursos visuais
│   ├── amigo-secreto.png
│   ├── play_circle_outline.png
│   ├── screenshot.png  # Screenshot da interface
│   └── demo.gif        # GIF demonstrativo
└── README.md           # Documentação
```

## 🔧 Como Executar o Projeto

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Nenhuma instalação adicional necessária

### Passos para Execução
1. **Clone ou baixe o projeto**
   ```bash
   git clone [url-do-repositorio]
   ```

2. **Navegue até o diretório**
   ```bash
   cd amigo-secreto
   ```

3. **Abra o arquivo index.html**
   - Duplo clique no arquivo `index.html`
   - Ou abra diretamente no navegador
   - Ou use um servidor local (Live Server, etc.)

## 💡 Exemplo de Uso

1. **Cenário**: Organizar amigo secreto no trabalho
2. **Ação**: Adicione os nomes: "João", "Maria", "Pedro", "Ana"
3. **Resultado**: Clique em "Sortear amigo" → "🎉 O amigo sorteado é: Maria 🎉"

## 🎨 Interface do Usuário

A aplicação possui um design moderno e intuitivo com:
- **Cabeçalho azul**: Título e imagem representativa
- **Seção principal**: Fundo claro com bordas arredondadas
- **Campo de entrada**: Input com botão integrado
- **Lista de amigos**: Exibição clara dos nomes adicionados
- **Botão de sorteio**: Destacado em laranja com ícone
- **Resultado**: Exibido em verde com destaque visual

## 🔍 Detalhes Técnicos

### Validações Implementadas
- Verificação de campo vazio antes de adicionar
- Verificação de lista vazia antes de sortear
- Remoção de espaços em branco nos nomes

### Funcionalidades JavaScript
```javascript
// Array para armazenar os amigos
let amigos = [];

// Principais funções:
- adicionarAmigo()    // Adiciona nome à lista
- atualizarLista()    // Atualiza interface
- sortearAmigo()      // Realiza o sorteio
```

## 🐛 Possíveis Problemas e Soluções

| Problema | Causa | Solução |
|----------|-------|---------|
| Botão não funciona | JavaScript não carregado | Verifique se o arquivo `app.js` está no diretório |
| Imagens não aparecem | Arquivos de imagem ausentes | Certifique-se de que a pasta `assets` existe |
| Layout quebrado | CSS não carregado | Verifique se o arquivo `style.css` está no diretório |
| Nomes não aparecem | Erro no JavaScript | Abra o console do navegador (F12) para ver erros |

## 📱 Responsividade

O projeto é totalmente responsivo e funciona bem em:
- 💻 **Desktop**: Layout completo
- 📱 **Mobile**: Interface adaptada para telas pequenas
- 📱 **Tablet**: Visualização otimizada

## 🎯 Melhorias Futuras

- [ ] Opção para remover amigos da lista
- [ ] Histórico de sorteios anteriores
- [ ] Tema escuro/claro
- [ ] Compartilhamento do resultado
- [ ] Salvar listas de amigos
- [ ] Múltiplos sorteios sem repetição

## 🤝 Contribuições

Este é um projeto educacional, mas sugestões e melhorias são sempre bem-vindas!

## 📄 Licença

Este projeto é de uso livre para fins educacionais e pessoais.

---

**Desenvolvido com ❤️ para aprender JavaScript**

*Última atualização: Setembro 2025*
