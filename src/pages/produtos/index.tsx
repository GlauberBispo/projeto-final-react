import React, { useState } from 'react';
import './style.css';
import { data } from '../../data';
import Card from '../../components/card';

interface Produto {
  imageUrl: string;
  title: string;
  subtitle: string;
  price: number;
}

interface Categoria {
  categoria: string;
  produto: Produto[];
}

export default function Produtos() {
  const categorias: Categoria[] = data;
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>('');
  const [filtro, setFiltro] = useState<string>('');

  const handleCategoriaClick = (categoria: string) => {
    setCategoriaSelecionada(categoria);
  };

  const handleTodosProdutosClick = () => {
    setCategoriaSelecionada('');
  };

  const handleFiltroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiltro(event.target.value);
  };

  const produtosFiltrados = categoriaSelecionada
    ? categorias.find((categoria) => categoria.categoria === categoriaSelecionada)?.produto
    : categorias.flatMap((categoria) => categoria.produto);

  const produtosExibidos = filtro
    ? produtosFiltrados?.filter((produto) =>
        produto.title.toLowerCase().includes(filtro.toLowerCase())
      )
    : produtosFiltrados;

  return (
    <>
      <div>
        <aside className="categorias">
          <h2 onClick={handleTodosProdutosClick}>Categorias</h2>
          <ul className="lista">
            {categorias.map((categoria, index) => (
              <li key={index}>
                <a
                  href="#"
                  onClick={() => handleCategoriaClick(categoria.categoria)}
                >
                  <span>{categoria.categoria}</span>
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <section className="catalogo">
          <div className='pesquisa'>
            <input
              type="text"
              placeholder="Digite para buscar produtos"
              value={filtro}
              onChange={handleFiltroChange}
            />
            <button className='btn-pesquisa'>ir</button>
          </div>
          <div className="cards">
            <div className="produtos">
              {produtosExibidos?.map((produto, produtoIndex) => (
                <Card
                  key={produtoIndex}
                  imageUrl={produto.imageUrl}
                  title={produto.title}
                  subtitle={produto.subtitle}
                  price={produto.price}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
