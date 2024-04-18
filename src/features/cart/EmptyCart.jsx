import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton type="primary" to="/menu">
        &larr; Back to menu
      </LinkButton>

      <p className="font-semifold mt-7">
        {"Your cart is empty. Start adding some pizzas from the menu :)"}
      </p>
    </div>
  );
}

export default EmptyCart;
