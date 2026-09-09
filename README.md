# Manipulação de Dados e Persistência de Arquivos com Node.js e TypeScript

Este projeto é uma demonstração prática do uso do **TypeScript** e do módulo nativo do Node.js (`fs`) para manipulação de coleções de dados na memória e persistência em arquivos físicos no formato JSON.

---

## 💡 Conceitos Aplicados

### 1. Tipagem Estática (`types`)
Utilização de tipos customizados em TypeScript (`livro`, `Amigo`, `Hobby`, etc.) para definir a estrutura dos objetos e garantir a integridade dos dados durante o desenvolvimento.

### 2. Métodos de Array
Manipulação de listas na memória utilizando métodos funcionais do JavaScript/TypeScript:
* **`push()`**: Adiciona novos objetos à coleção.
* **`forEach()`**: Iteração sobre os elementos para exibição e formatação de dados.
* **`filter()`**: Filtragem de dados com base em condições específicas (ex: livros marcados como lidos).
* **`find()`**: Busca por elementos específicos que atendem a um critério único.

### 3. Persistência de Dados em Disco (`fs`)
Integração com o sistema de arquivos utilizando funções do módulo `fs` (*File System*):
* **`existsSync` / `mkdirSync`**: Verificação da existência de diretórios e criação dinâmica de pastas (`./data`).
* **`writeFileSync`**: Gravação de dados em disco. Os dados são convertidos de objetos em memória para texto via `JSON.stringify()`.
* **`readFileSync`**: Leitura dos arquivos em disco e reconstrução dos objetos em memória com `JSON.parse()`.

---

## 🛠️ Tecnologias Utilizadas

* **Node.js**: Ambiente de execução JavaScript.
* **TypeScript**: Superset de JavaScript com tipagem estática.
* **FS (File System)**: Módulo nativo para gerencimamento de arquivos.

---

## 👤 Autor

**Heloísa Gonçalves Silva**
