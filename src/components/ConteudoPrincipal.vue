<script setup lang="ts">
import { ref } from 'vue';
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import SuaLista from './SuaLista.vue';
import MostrarReceitas from './MostrarReceitas.vue';

type Pagina = 'SelecionarIngredientes' | 'MostrarReceitas'

const ingredientes = ref<string[]>([]);
const conteudo = ref<string>('SelecionarIngredientes' as Pagina)

function adicionarIngrediente(ingrediente: string) {
  ingredientes.value.push(ingrediente)
}

function removerIngrediente(ingrediente: string) {
  ingredientes.value = ingredientes.value.filter(iLista => ingrediente !== iLista);
}

function navegar(pagina: Pagina) {
  conteudo.value = pagina
}
</script>

<template>
  <main class="conteudo-principal">
    <SuaLista :ingredientes="ingredientes" />

    <KeepAlive include="SelecionarIngredientes">
      <SelecionarIngredientes v-if="conteudo === 'SelecionarIngredientes'"
      @adicionar-ingrediente="adicionarIngrediente"
      @remover-ingrediente="removerIngrediente"
      @buscar-receitas="navegar('MostrarReceitas')"
      />
      
      <MostrarReceitas
        v-else-if="conteudo === 'MostrarReceitas'"
        :ingredientes="ingredientes"
        @editar-receitas="navegar('SelecionarIngredientes')"
      />
    </KeepAlive>
  </main>
</template>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

.sua-lista-texto {
  color: var(--coral, #F0633C);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #F0633C);
  text-align: center;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>