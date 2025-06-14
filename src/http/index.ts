import type ICategoria from "@/interfaces/ICategoria"
import type IReceita from "@/interfaces/IReceita";

async function obterDadosURL<T>(url: string) {
  const resposta = await fetch(url);
  return resposta.json() as T;
}

export async function obterCategorias() {
  return obterDadosURL<ICategoria[]>("https://gist.githubusercontent.com/carvalhocaio/80214d502fef919e41ec4d54dbe48f18/raw/f6b8cd2a5b6c89f948447fb5f6210a3b8f31ec5b/cookinup-categorias.json")
}

export async function obterReceitas() {
  return obterDadosURL<IReceita[]>("https://gist.githubusercontent.com/carvalhocaio/36f3371025ae5a4fbee2110d8ab4798e/raw/7f6adb5b8842b08c428f2228ba022e0cd3797867/cookinup-receitas.json")
}
