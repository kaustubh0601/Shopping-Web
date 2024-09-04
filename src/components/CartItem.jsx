import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from '../redux/slice/CartSlice';
import toast from "react-hot-toast";

const CartItem = ({items, itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCard = () => {
    dispatch(remove(items.id));
    toast.error("Item Removed");
  }

  return (
    <div className="flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-500  mt-2 mb-2 md:mx-5 max-w-3xl">

      <div className="flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-500 mt-2 mb-2 md:mx-5 max-w-3xl bg-white shadow-md rounded-lg">
        <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center w-full">
          <div className="w-full md:w-1/3">
            <img src={items.image} alt={items.title} className="w-full h-auto object-cover rounded-lg" />
          </div>

          <div className="flex flex-col justify-between w-full md:w-2/3">
            <div className="mb-2">
              <h1 className="text-xl font-semibold text-gray-800">{items.title}</h1>              
            </div>

            <div className="mb-2">
              <p className="text-gray-600">{items.description.split(" ").slice(0, 20).join(" ") + "...."}</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-lg font-bold text-gray-800">${items.price}</p>
              <button onClick={removeFromCard} className="text-red-500 hover:text-red-700">
                <MdDelete size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      
        
    </div> 
  );
};

export default CartItem;








//  <div class="w-[100%] md:w-[60%] flex flex-col p-2">
//   <div class=" ">
//     <div class="">
//           <div class="">
//             <img src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" class="object-cover " alt="">
//           </div>

//           <div class="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
//             <h1 class="text-xl text-slate-700 font-semibold">White Gold Plated Princess</h1>
//             <h1 class="text-base text-slate-700 font-medium">Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love...</h1>
            
//             <div class="flex items-center justify-between">
//               <p class="font-bold text-lg text-green-600">$9.99</p>

//               <div class=" bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3">
//                 <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-red-800 group-hover:text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//                   <path fill="none" d="M0 0h24v24H0z"></path>
//                   <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//     </div>



    {/* <div class="flex items-center p-2 md:p-5 justify-between   mt-2 mb-2 md:mx-5 ">
      <div class="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div class="w-[30%]">
          <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" class="object-cover " alt="">
        </div>
        <div class="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 class="text-xl text-slate-700 font-semibold">Mens Casual Premium Slim Fit T-Shirts </h1>
          <h1 class="text-base text-slate-700 font-medium">Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight &amp; soft fabric for...</h1><div class="flex items-center justify-between"><p class="font-bold text-lg text-green-600">$22.3</p><div class=" bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-red-800 group-hover:text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg></div></div></div></div></div></div> } */}