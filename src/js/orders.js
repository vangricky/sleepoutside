import { checkLogin } from "../js/auth.mjs";
      import OrderList from "../js/components/OrderList.svelte";
      import { renderHeaderFooter } from "../js/utils.mjs";

      renderHeaderFooter();
      const token = checkLogin();
      new OrderList({
        target: document.querySelector("#orders"),
        props: { token },
      });