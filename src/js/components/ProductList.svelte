<script>
import { getData } from "../productData.mjs";
import ProductSummary from './ProductSummary.svelte';

export let category;

let promise = getData(category);

</script>

<h2>Top Products: {category}</h2>
{#await promise}
  Loading
{:then products}
<ProductSummary {products}/>
{/await} 