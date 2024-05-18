<script>
export let products = {};
let numberToDisplay = 4;
$: products = products.slice(0, numberToDisplay);
</script>

<ul class="product-list">
{#each products as product}

<li class="product-card">
    <a href={product.Id}>
        <img
        src={product.Image}
        alt={product.Name}/>
        <h3 class="card__brand">{product.Brand.Name}</h3>
        <h2 class="card__name">{product.NameWithoutBrand}</h2>
        <p class="product-card__price">{product.FinalPrice}</p></a>
    </li>
{/each}
</ul> 