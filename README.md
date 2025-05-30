# 🪄 Discrete-Mathemagic

**Discrete-Mathemagic** é um site de estudo voltado para a disciplina de Matemática Discreta, utilizando provas de referência da UnB (Engenharia de Software) como base para organização de conceitos, exemplos e exercícios.

---

## 📖 Visão Geral

- **Título:** Discrete Mathemagic  
- **Objetivo:** Fornecer um guia modular, interativo e completo para alunos de Matemática Discreta, com teoria, exemplos resolvidos, questões para prática e vídeos recomendados.  
- **Principais Tecnologias:**  
  - **Tailwind CSS** para layout e responsividade.  
  - **MathJax** para renderização de fórmulas em LaTeX.  
  - **Chart.js** para geração de gráficos de distribuição de tópicos.  
  - **JavaScript** puro para navegação dinâmica (sidebar, collapsibles, soluções ocultas).

---

## ✨ Funcionalidades

1. **Navegação Lateral Dinâmica**  
   - Sidebar fixa com links para cada seção (Introdução, Lógica, Demonstração, etc.).  
   - Destaque automático da seção ativa.

2. **Renderização de Matemática**  
   - Configuração global do MathJax para inline e display math.

3. **Gráficos Interativos**  
   - Exemplos de distribuição de pontos por tópico usando Chart.js.

4. **Conteúdo Colapsável**  
   - Botões “Mostrar / Ocultar” para detalhes, definições e soluções.

5. **Templates de Exemplo e Exercícios**  
   - Sessões de teoria seguidas por exemplos de estilo prova e questões propostas.

---

## 🛠️ Tecnologias e Dependências

- **HTML5 & CSS3**  
- **Tailwind CSS**  
- **MathJax v3**  
- **Chart.js**  
- **JavaScript (ES6+)**  

---

## 🚀 Como Rodar Localmente

1. **Clone este repositório**  
   ```bash
   git clone https://github.com/seu-usuario/Discrete-Mathemagic.git
   cd Discrete-Mathemagic
   ```

2. **Abra `index.html` no navegador**  
   Basta dar duplo-clique no arquivo ou usar um servidor local (opcional):
   ```bash
   # Exemplo com Python 3
   python3 -m http.server 8000
   # Acesse http://localhost:8000 no navegador
   ```

---

## 🗂️ Estrutura de Pastas

```
Discrete-Mathemagıc/
├── index.html
├── css/
│   └── estilos.css        # (opcional, caso extra)
├── js/
│   ├── main.js            # lógica de sidebar e collapsibles
│   └── charts.js          # configuração dos gráficos Chart.js
├── assets/
│   └── imagens/           # ícones e imagens estáticas
└── README.md              # este arquivo
```

---

## 🤝 Contribuições

1. Faça um _fork_ deste repositório.  
2. Crie sua _branch_ de feature:  
   ```bash
   git checkout -b feature/nome-da-sua-feature
   ```
3. Realize suas alterações e _commit_:  
   ```bash
   git commit -m "Adiciona [descrição da feature]"
   ```
4. Envie para o repositório remoto:  
   ```bash
   git push origin feature/nome-da-sua-feature
   ```
5. Abra um _Pull Request_ explicando sua contribuição.

---

> Desenvolvido com ❤️ por Pedro Henrique Pereira Santos  
> Para dúvidas, sugestões ou feedback, abra uma issue ou envie um e-mail para phps2014.phps@gmail.com.
