# Geladinhos Gourmet — Mini e-book

Aplicativo web com visual editorial premium, criado para servir de base à importação no **Lovable**.

## Funcionalidades

- E-book de exatamente **2 páginas** (capa + receita de morango cremoso).
- Navegação entre páginas com botões ou setas do teclado.
- Layout adaptado para computador e celular.
- Botão **Salvar em PDF** usando a impressão do navegador, com duas páginas no formato A5.
- Código React + Vite, sem necessidade de banco de dados ou credenciais.

## Executar localmente

```bash
npm install
npm run dev
```

## Importar para o Lovable

1. No GitHub, baixe o código do repositório como ZIP (Code → Download ZIP).
2. Acesse [Lovable](https://lovable.dev/).
3. No painel, clique em **+ → Import project to Lovable → Upload code**.
4. Selecione o arquivo ZIP e clique em **Start import**.
5. O Lovable reconstrói este aplicativo na plataforma e permite continuar editando-o.

**Observação:** a importação de projetos está sendo liberada gradualmente pelo Lovable. A sincronização Git com o GitHub **não importa um repositório existente**; depois da importação, o Lovable cria um **novo repositório** caso você ative Git Sync.

Documentação: https://docs.lovable.dev/features/projects/import-project

## Arquivos principais

- `src/App.jsx` — conteúdo do e-book e navegação
- `src/styles.css` — identidade visual e paginação A5
- `ebook/index.html` — versão HTML estática anterior
