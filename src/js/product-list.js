import ProductList from "./components/ProductList.svelte";
import {getParam, renderHeaderFooter} from "./utils.mjs";
import {getProductsByCategory} from "./externalServices.mjs"


renderHeaderFooter();

const category = getParam("category")

new ProductList({
    target: document.querySelector(".products"),
    props: { category: category },
});