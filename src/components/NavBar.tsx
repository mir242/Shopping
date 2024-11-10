import Link from 'next/link';
import React from 'react'

const NavBar = () => {
    return (
        <div className='hidden lg:block'>

            <div className="container">
                <div className="felx w-fit gap-10 mx-auto font-medium py-8 text-blackish">



                    <Link className='navbar__link relative rounded-sm gap-8 px-4 py-4 ' href='#'> HOME
                    </Link>
                    <Link className='navbar__link relative rounded-sm gap-8 px-4 py-4 ' href='#'> CATEGORIES
                    </Link>
                    <Link className='navbar__link relative rounded-sm gap-8 px-4 py-4 ' href='#'> MEN'S 
                    </Link>
                    <Link className='navbar__link relative rounded-sm gap-8 px-4 py-4 ' href='#'> WOMEN'S
                    </Link>
                    <Link className='navbar__link relative rounded-sm gap-8 px-4 py-4 ' href='#'> FASHIONS
                    </Link>
                    <Link className='navbar__link relative rounded-sm gap-8 px-4 py-4 ' href='#'> BEST SELLERS
                    </Link>
                    <Link className='navbar__link relative rounded-sm gap-8 px-4 py-4 ' href='#'> CHILDISH
                    </Link>
                    <Link className='navbar__link relative rounded-sm gap-8 px-4 py-4 ' href='#'> HOT OFFERS
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default NavBar
