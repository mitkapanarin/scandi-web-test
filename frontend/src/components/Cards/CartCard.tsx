import { Component } from "react";
import { IProductCardProps } from "../../types/interface";
import { textLimiter } from "../Text/textFn";

interface ICartCardProps {
  quantity: number;
  incrementFn: () => void;
  decrementFn: () => void;
}

export class CartCard extends Component<IProductCardProps & ICartCardProps> {
  constructor(props: IProductCardProps & ICartCardProps) {
    super(props);
  }

  render() {
    const { image, name, price, quantity, incrementFn, decrementFn } =
      this.props;
    return (
      <div className="flex justify-between items-center">
        <div className="">
          <h3 className="details text-sm text-slate-600">
            {textLimiter(name, 18)}
          </h3>
          <p className="font-semibold">$ {price}</p>
          <div className="flex flex-col gap-1">
            <span>☑️☑️☑️☑️</span>
            <span>☑️☑️☑️☑️</span>
          </div>
          <div className="flex gap-6">
            <button onClick={incrementFn}>+</button>
            <span>{quantity}</span>
            <button onClick={decrementFn}>-</button>
          </div>
        </div>
        <img
          src={image}
          alt={`Image of ${name}`}
          className="object-cover h-[110px] w-[110px]"
        />
      </div>
    );
  }
}

export default CartCard;
