import React, { useEffect, useState } from 'react';

const ingredientes = [
  '500 ml de leite integral',
  '395 g de leite condensado',
  '200 g de creme de leite',
  '200 g de morangos frescos'
];

const passos = [
  'Higienize os morangos e retire as folhas.',
  'Bata os morangos, o leite, o leite condensado e o creme de leite até obter uma mistura homogênea.',
  'Distribua nos saquinhos próprios para geladinho, deixando espaço para fechar.',
  'Amarre bem e leve ao congelador até ficarem firmes.'
];

function Cover() {
  return (
    <article className="book-page cover" aria-label="Página 1, capa">
      <div className="topline"><span className="edition">EDIÇÃO ESPECIAL</span><span className="page-number">01 / 02</span></div>
      <div className="cover-copy">
        <span className="eyebrow">MINI GUIA • RECEITA & RENDA EXTRA</span>
        <h2>Geladinhos<br /><em>Gourmet</em></h2>
        <p>Um começo delicioso: aprenda uma receita cremosa e descubra como dar os primeiros passos nas vendas.</p>
      </div>
      <div className="pops-art" role="img" aria-label="Ilustração de três geladinhos gourmet de frutas">
        <div className="pop pop-strawberry"><i /><b /></div>
        <div className="pop pop-mango"><i /><b /></div>
        <div className="pop pop-kiwi"><i /><b /></div>
      </div>
      <div className="cover-bottom"><span>RECEITAS QUE ENCANTAM</span><span className="cover-star">✳</span><span>FEITO PARA COMEÇAR</span></div>
      <div className="cover-circle circle-a" /><div className="cover-circle circle-b" />
    </article>
  );
}

function Recipe() {
  return (
    <article className="book-page recipe" aria-label="Página 2, receita">
      <div className="topline"><span className="edition">RECEITAS ESSENCIAIS</span><span className="page-number">02 / 02</span></div>
      <div className="recipe-heading">
        <span className="eyebrow coral">UMA RECEITA PARA COMEÇAR</span>
        <h2>Morango<br /><em>cremoso</em></h2>
        <p>Uma opção fresca, equilibrada e fácil de preparar em casa.</p>
      </div>
      <div className="recipe-card">
        <div className="card-title"><span>01</span><h3>Ingredientes</h3></div>
        <ul>{ingredientes.map(item => <li key={item}>{item}</li>)}</ul>
      </div>
      <div className="preparation">
        <div className="card-title"><span>02</span><h3>Modo de preparo</h3></div>
        <ol>{passos.map((passo, index) => <li key={passo}><span>{String(index + 1).padStart(2, '0')}</span><p>{passo}</p></li>)}</ol>
      </div>
      <aside className="sale-tip"><strong>✳ DICA PARA VENDER</strong><p>Calcule o custo por unidade considerando ingredientes, embalagem e energia. Mantenha o produto congelado e informe os ingredientes aos clientes.</p></aside>
      <div className="recipe-bottom"><span>L.T. GELADINHOS GOURMET</span><span>PREPARE • ENCANTE • VENDA</span></div>
    </article>
  );
}

export default function App() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const onKeyDown = event => {
      if (event.key === 'ArrowRight') setPage(current => Math.min(current + 1, 1));
      if (event.key === 'ArrowLeft') setPage(current => Math.max(current - 1, 0));
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <main className="app-shell">
      <header className="app-header">
        <a className="brand" href="#" onClick={event => { event.preventDefault(); setPage(0); }}><span className="brand-mark">g<span>.</span></span><span>ATELIÊ<br /><strong>GOURMET</strong></span></a>
        <span className="header-label">SUA BIBLIOTECA DE RECEITAS</span>
        <button className="print-btn" type="button" onClick={() => window.print()} aria-label="Imprimir ou salvar as duas páginas em PDF">
          <span className="print-icon">↧</span> Salvar em PDF
        </button>
      </header>

      <section className="reader" aria-label="Leitor do mini e-book">
        <div className="reader-intro"><span className="intro-line" /> <span>COLEÇÃO GOURMET / VOLUME 01</span> <span className="intro-line" /></div>
        <div className="book-frame">
          <div className="page-container"><div className={page === 0 ? 'screen-page active' : 'screen-page inactive'}><Cover /></div><div className={page === 1 ? 'screen-page active' : 'screen-page inactive'}><Recipe /></div></div>
        </div>
        <nav className="pager" aria-label="Navegação das páginas">
          <button type="button" onClick={() => setPage(0)} disabled={page === 0} aria-label="Página anterior">← <span>Anterior</span></button>
          <div className="page-indicator"><span className={page === 0 ? 'dot active' : 'dot'} /><span className={page === 1 ? 'dot active' : 'dot'} /><span className="page-count">{String(page + 1).padStart(2, '0')} <small>/ 02</small></span></div>
          <button type="button" onClick={() => setPage(1)} disabled={page === 1} aria-label="Próxima página"><span>Próxima</span> →</button>
        </nav>
        <p className="reader-help">Use as setas do teclado ou os botões para navegar.</p>
      </section>
      <footer className="site-footer">Feito com carinho para quem acredita no sabor de um novo começo.</footer>
    </main>
  );
}
