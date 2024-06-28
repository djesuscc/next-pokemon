import { Metadata } from "next";
import { CartCounter } from "@/shopping-cart";


export const metadata: Metadata = {
 title: 'Counter page',
 description: 'A simple counter',
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Items in the car</span>
      <CartCounter value={20} />
    </div>
  );
}