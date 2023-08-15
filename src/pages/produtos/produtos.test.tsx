import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Produtos from "./index";

describe("Produtos", () => {
  const mockData = [
    {
      categoria: "Categoria 1",
      produto: [
        {
          imageUrl: "imagem1.jpg",
          title: "Produto 1",
          subtitle: "Descrição do Produto 1",
          price: 10.99,
        },
        
      ],
    },
   
  ];

  
});
