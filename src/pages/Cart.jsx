import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useEffect, useState } from 'react';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  const removeFromCart = (index) => {
    // Implement the logic to remove item from cart
  };

  return (
    <div className="container mx-auto p-4">
      {cart.length > 0 ? (
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col w-full md:w-2/3">
            {cart.map((item, index) => {
              return <CartItem key={item.id} items={item} itemIndex={index} removeFromCart={removeFromCart} />;
            })}
          </div>

          <div className="flex flex-col w-full md:w-1/3 bg-white p-4 shadow-md rounded-lg">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-800">YOUR CART</h2>
              <h3 className="text-xl font-semibold text-gray-600">SUMMARY</h3>
              <p className="mt-2 text-gray-700">
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div className="mt-4">
              <p className="text-lg font-bold text-gray-800">Total Amount: ${totalAmount.toFixed(2)}</p>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-10">
          <h1 className="text-2xl font-bold text-gray-800">Your Cart is Empty</h1>
          <Link to="/">
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Shop now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
