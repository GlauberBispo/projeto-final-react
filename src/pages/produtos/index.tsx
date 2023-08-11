import React, { useEffect, useState } from "react";
import "./style.css";
import { data } from "../../data";
import Card from "../../components/card";
import Avaliacao from "../../components/avaliacao";
import Frete from "../../components/frete";
import Header from "../../components/header";
import MenuAreaLogada from "../../components/menuAreaLogada";

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
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>("");
  const [filtro, setFiltro] = useState<string>("");
  const [carrinho, setCarrinho] = useState<
    { produto: Produto; quantidade: number }[]
  >([]);
  const [showCart, setShowCart] = useState(false);

  const handleCategoriaClick = (categoria: string) => {
    setCategoriaSelecionada(categoria);
  };

  const handleTodosProdutosClick = () => {
    setCategoriaSelecionada("");
  };

  const handleFiltroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiltro(event.target.value);
  };

  const adicionarAoCarrinho = (produto: Produto) => {
    const produtoNoCarrinho = carrinho.find(
      (item) => item.produto.title === produto.title
    );
    if (produtoNoCarrinho) {
      const novoCarrinho = carrinho.map((item) =>
        item.produto.title === produto.title
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      );
      setCarrinho(novoCarrinho);
    } else {
      setCarrinho([...carrinho, { produto, quantidade: 1 }]);
    }
  };

  const removerDoCarrinho = (produto: Produto) => {
    const novoCarrinho = carrinho.filter(
      (item) => item.produto.title !== produto.title
    );
    setCarrinho(novoCarrinho);
  };

  const diminuirQuantidade = (produto: Produto) => {
    const produtoNoCarrinho = carrinho.find(
      (item) => item.produto.title === produto.title
      );
      if (produtoNoCarrinho) {
        const novaQuantidade = produtoNoCarrinho.quantidade - 1;
        if (novaQuantidade > 0) {
          const novoCarrinho = carrinho.map((item) =>
            item.produto.title === produto.title
              ? { ...item, quantidade: novaQuantidade }
              : item
          );
          setCarrinho(novoCarrinho);
        } else {
          removerDoCarrinho(produto);
        }
      }
    };

    

  const totalItens = carrinho.reduce(
    (total, item) => total + item.quantidade,
    0
  );

  useEffect(() => {
    if (totalItens > 0) {
      setShowCart(true);
    }
  }, [totalItens]);

  useEffect(() => {
    if (totalItens < 1) {
      setShowCart(false);
    }
  }, [totalItens]);

  const precoTotal = carrinho.reduce(
    (total, item) => total + item.produto.price * item.quantidade,
    0
  );

  const produtosFiltrados = categoriaSelecionada
    ? categorias.find(
        (categoria) => categoria.categoria === categoriaSelecionada
      )?.produto
    : categorias.flatMap((categoria) => categoria.produto);

  const produtosExibidos = filtro
    ? produtosFiltrados?.filter((produto) =>
        produto.title.toLowerCase().includes(filtro.toLowerCase())
      )
    : produtosFiltrados;

  return (
    <>
     <Header>
      <MenuAreaLogada/>
    </Header>
      <div className="container-home">
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
          <div className="pesquisa">
            <input
              type="text"
              placeholder="Digite para buscar produtos"
              value={filtro}
              onChange={handleFiltroChange}
            />
            <button className="btn-pesquisa">ir</button>
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
                  onAddToCart={() => adicionarAoCarrinho(produto)}
                />
              ))}
            </div>
          </div>
        </section>
        <aside className="form-avaliacao">
          <div className="form-avaliacao1">
            <Avaliacao />
            <Frete />
          </div>
        </aside>
        <button className="btn-carrinho" onClick={() => setShowCart(true)}>
          Carrinho ({totalItens})
        </button>

        <div
          className={`offcanvas offcanvas-end ${showCart ? "show" : ""}`}
          tabIndex={-1}
          id="carrinhoOffcanvas"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Carrinho de Compras</h5>
            <button
              type="button"
              className="btn-close text-reset"
              onClick={() => setShowCart(false)}
            ></button>
          </div>
          <div className="offcanvas-body">
            {carrinho.map((item, index) => (
              <div key={index} className="item-carrinho">
                <div className="container-div">
                  <div className="div-center">
                    <img
                      src={item.produto.imageUrl}
                      alt={item.produto.title}
                      className="cart-item-img"
                    />
                    <h3>{item.produto.title}</h3>
                    <p>Preço: R$ {item.produto.price.toFixed(2)}</p>
                    <div className="container-button-carrinho">
                      <button
                        className="btn btn-primary"
                        onClick={() => diminuirQuantidade(item.produto)}
                      >
                        -
                      </button>
                      <span>{item.quantidade}</span>
                      <button
                        className="btn btn-primary"
                        onClick={() => adicionarAoCarrinho(item.produto)}
                      >
                        +
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => removerDoCarrinho(item.produto)}
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <p>Total: R$ {precoTotal.toFixed(2)}</p>
            <button
              className="btn btn-primary btn-fechar-carrinho"
              onClick={() => setShowCart(false)}
            >
              Fechar Carrinho
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
