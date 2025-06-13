import type ICategoria from "@/interfaces/ICategoria"

export async function obterCategorias() {
  const resposta = await fetch("https://gist.githubusercontent.com/carvalhocaio/80214d502fef919e41ec4d54dbe48f18/raw/f6b8cd2a5b6c89f948447fb5f6210a3b8f31ec5b/cookinup-categorias.json")
  const categorias: ICategoria[] = await resposta.json();

  // simula atraso na resposta da API
  // await new Promise((resolver) => {
  //   setTimeout(resolver, 3000)
  // })

  return categorias
}