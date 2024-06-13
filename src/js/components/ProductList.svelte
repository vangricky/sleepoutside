<script>
  import { getProductsByCategory } from "../externalServices.mjs";
  import ProductSummary from "./ProductSummary.svelte";

  export let category;

  let promise = getProductsByCategory(category);
</script>

<h2>Top Products: {category}</h2>
{#await promise}
  Loading
{:then products}
  <ProductSummary {products} />
{/await}
