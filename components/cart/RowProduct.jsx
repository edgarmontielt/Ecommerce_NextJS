import { addItem, removeItem, removeToCart } from '../../features/cart/index'
import { AiOutlineLine } from 'react-icons/ai'
import { IoIosAdd } from 'react-icons/io';
import { useDispatch } from 'react-redux';

export default function RowProduct({ item }) {

    const dispatch = useDispatch()

    const removeProduct = (id) => {
        dispatch(removeToCart(id))
    }

    const addAmountProduct = (product) => {
        dispatch(addItem(product))
    }

    const removeItemToCart = (product) => {
        dispatch(removeItem(product))
    }

    return (
        <tr key={item.product.id}>
            <td className=' text-lg text-center '>{item.product.name}</td>
            <td className=' flex justify-center'><img src={item.product.images} className=' w-16' /></td>
            <td >
                <div className=' mx-auto border-2 rounded-md w-40 text-center flex gap-4 justify-center py-1'>
                    <span
                        className=' flex items-center mt-1'
                        onClick={() => removeItemToCart(item)}
                    >
                        <AiOutlineLine className=' w-6 h-6' />
                    </span>
                    <p className=' text-lg'>{item.amount}</p>
                    <span
                        className=' flex items-center'
                        onClick={() => addAmountProduct(item)}
                    >
                        <IoIosAdd className=' w-6 h-6' />
                    </span>
                </div>
            </td>
            <td className=' text-center'>
                <button
                    onClick={() => removeProduct(item.product.id)}
                    className=' bg-black text-white p-2 rounded-lg'>
                    Remove
                </button>
            </td>
            <td className=' text-center'>${item.product.default_price_data.unit_amount}</td>
        </tr>
    )
}
