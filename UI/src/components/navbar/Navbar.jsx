const Navbar = () => {
    return (
        <>
            <nav className="flex item-center py-6 px-16 justify-between gap-40">
                <div className="flex item-center gap-6">
                    <h2 className="text-3xl text-black font-bold">DevTown</h2>

                </div>
                <div className="flex flex-wrap items-center gap-10 flex-1">
                    <ul className="flex gap-14 ">
                        <li className="text-gray-600 hover:text-black"><a href="#">Home</a></li>
                        <li className="text-gray-600 hover:text-black"><a href="#">shop</a></li>
                        <li className="text-gray-600 hover:text-black"><a href="#">about</a></li>
                    </ul>
                </div>
                {/* search */}
                <div className="flex justify-center">
                    <div className="border rounded flex overflow-hidden">
                        <div className="flex items-center justify-center px-4">
                            <svg xmlns="http://www.w3.org/2000/svg" text-grey-dark width="20" height="20" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                            <input type="text" className="px-4 py-2 outline-none" placeholder="search" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap-item-center gap-4">
                    <ul className="flex items-center gap-8">
                        <li>icon1</li>
                        <li>icon2</li>
                        <li>icon3</li>

                    </ul>
                </div>
            </nav>
        </>
    );
}
export default Navbar;