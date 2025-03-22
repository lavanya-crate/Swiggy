
import { useCart } from "../../context/CartContext";
import { CartCard } from "./components/CartCard";
import { RiDoubleQuotesL } from "react-icons/ri";
import { CartHeader } from "./components/CartHeader";

export const Cart = () => {

    const { total, cartList } = useCart();
    return (
        <main>
            <CartHeader />
            <div className="bg-gray-200">
                <div className="flex w-[90%]">
                    <div className="mx-auto mt-7  ml-40">
                        <div>
                            <div className="flex relative text-start block max-w-4xl p-6 bg-white border border-gray-200 shadow-sm  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <div>
                                    <div className="mb-7">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Account</h5>
                                        <p className="font-normal text-gray-700 dark:text-gray-400">To place your order now, log in to your existing account or sign up.</p>
                                    </div>
                                    <div >
                                        <button type="button" className="text-green-600 bg-white border focus:outline-none hover:bg-gray-100 focus:ring-gray-100 border-green-500 font-medium text-sm px-8 py-1 me-2 mb-2 dark:bg-gray-800 dark:text-white">Have an account?<br /> <span className="font-bold">LOG IN</span></button>
                                        <button type="button" className="text-green-600 bg-green-600 text-white border focus:outline-none border-green-500 font-medium text-sm px-8 py-1 me-2 mb-2 dark:bg-gray-800 dark:text-white">New to Swiggy?<br /> <span className="font-bold">SIGN UP</span></button>
                                    </div>
                                </div>
                                <div>
                                    <img className="h-32 pl-20" src="../../../assets/images/img.avif" alt="" />
                                </div>
                                <div className="absolute -left-6 border bg-gray-700 text-white text-xl px-2 py-1">
                                    <i className="bi bi-person"></i>
                                </div>
                            </div>

                        </div>

                        <div className="relative flex mt-6 text-start block max-w-3xl p-6 bg-white border border-gray-200 shadow-sm  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <p>Delivery address</p>
                            <i className="fi fi-rs-marker bg-white absolute -left-6  shadow-xl text-xl px-2 py-1"></i>
                        </div>

                        <div className="relative flex mt-6 text-start block max-w-3xl p-6 bg-white border border-gray-200 shadow-sm  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <p>Payment</p>
                            <i className="bi bi-wallet2 bg-white absolute -left-6  shadow-xl text-xl px-2 py-1"></i>
                        </div>
                    </div>
                    <div className="mt-7 mr-20 ml-8 w-[28%]">
                        <div className=" mx-auto p-6 bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">


                            {cartList.map((item) => (
                                <CartCard key={item.id} item={item} />
                            ))}
                            <div className="flex text-sm mt-5 pl-5 bg-gray-100 pt-3 pb-3">
                                <RiDoubleQuotesL className="" />
                                <p className="pl-3">Any suggestions? We will pass it on...</p>
                            </div>
                            <div className="flex border mt-5 pl-5 pt-3">
                                <div>
                                    <i class="fi fi-tr-square"></i>
                                </div>
                                <div className="text-start pl-3 pb-2">
                                    <p className="font-semibold">Opt in for No-contact Delivery</p>
                                    <p className="text-sm">
                                        Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)
                                    </p>
                                </div>
                            </div>
                            <div className="text-start mt-5">
                                <p className="text-sm font-semibold">Bill Details</p>
                                <div className="flex text-sm">
                                    <p>
                                        Item Total
                                    </p>
                                    <span className="pl-40"><i className="fi fi-sr-indian-rupee-sign text-xs pl-10"></i>{total}</span>
                                </div>
                                <div className="flex text-sm mt-2 mb-3">
                                    <p>
                                        Delivery Fee | 10.0 kms
                                    </p>
                                    <span className="pl-20"><i className="fi fi-sr-indian-rupee-sign text-xs pl-10"></i>50</span>
                                </div>
                                <hr />
                                <div className="flex text-sm mt-2 mb-3">
                                    <p>
                                        Delivery Tip
                                    </p>
                                    <p className="text-red-500 pl-48">Add tip</p>
                                </div>
                                <div className="flex text-sm mt-2 mb-3">
                                    <p>
                                        Platform fee
                                    </p>
                                    <span className="pl-40"><i className="fi fi-sr-indian-rupee-sign text-xs pl-10"></i>5</span>
                                </div>
                                <div className="flex text-sm mt-2 mb-3">
                                    <p>
                                        GST and Restaurant Charges
                                    </p>
                                    <span className="pl-10"><i className="fi fi-sr-indian-rupee-sign text-xs pl-10"></i>13.95</span>
                                </div>
                                <hr className="bg-gray-800 h-0.5" />
                                <div className="flex text-sm font-bold mt-2">
                                    <p>
                                        TO PAY
                                    </p>
                                    <span className="pl-48"><i className="fi fi-sr-indian-rupee-sign text-xs pl-10"></i>{total}</span>
                                </div>
                            </div>
                        </div>
                        <div className="border bg-white mt-5 mb-40">
                            <div className="border m-5">
                                <p className="font-bold text-start pl-4 pr-10 pt-3">
                                    Review your order and address details to avoid cancellations
                                </p>
                                <p className="text-sm text-start pl-4 pr-5 pb-3"><span className="font-bold ">Note:</span>
                                    Please ensure your address and order details are correct. This order, if cancelled, is non-refundable.
                                </p>
                                <p className="text-red-500 text-start underline underline-offset-8 pb-4 pl-4">
                                    Read policy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

