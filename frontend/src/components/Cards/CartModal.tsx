import { Component } from "react";
import CartCard from "./CartCard";
import { connect } from "react-redux";
import { RootState } from "../../store";

const xxxx = [
  {
    id: "1",
    name: "White T-Shirt",
    image: "./sample-image.jpg",
    price: 25,
    stock: 10,
  },
  {
    id: "2",
    name: "second White T-Shirt",
    image: "./sample-image.jpg",
    price: 25,
    stock: 0,
  },
  {
    id: "3",
    name: "third White T-Shirt",
    image: "./sample-image.jpg",
    price: 25,
    stock: 10,
  },
];

export class CartModal extends Component<{
  cartState: RootState["cart"];
}> {
  constructor(props: { cartState: RootState["cart"] }) {
    super(props);
  }
  render() {
    const { cartState } = this.props;
    const cartStateObject = Object.values(cartState);
    return (
      <div className="absolute right-0 t-0 p-3 min-h-[300px] w-[300px] z-10 bg-white">
        <div className="flex flex-col gap-3">
          {cartStateObject.length === 0 && (
            <h3 className="text-center">Cart is empty</h3>
          )}
          {cartStateObject?.map((item) => {
            const product = xxxx.find((p) => p.id === item.id);
            if (!product) {
              return;
            }
            return (
              <CartCard key={item.id} {...product} quantity={item.quantity} />
            );
          })}
        </div>
        <div className="flex flex-row justify-center mb-1 mt-3">
          <button className="">Reset Cart</button>
        </div>
      </div>
    );
  }
}

const reduxStateProps = (state: RootState) => ({
  cartState: state.cart,
});

export default connect(reduxStateProps, {})(CartModal);
