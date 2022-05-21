import { AiOutlineSearch } from 'react-icons/ai'
import Cart from '../Cart';

export default function Item({ openMenu, openSearch, setOpenSearch, searchProducts }) {

    return (
        <>
            <li className={`absolute flex gap-2 items-center top-8 right-32 md:static ${openMenu ? 'invisible' : 'visible'}`} >
                <AiOutlineSearch
                    className='w-6 h-6 cursor-pointer'
                    onClick={!openSearch ? () => setOpenSearch(!openSearch) : searchProducts}
                />
            </li>
            <li className={`absolute top-8 right-20 md:static ${openMenu ? 'invisible' : 'visible'}`}>
                <Cart />
            </li>
        </>
    )
}