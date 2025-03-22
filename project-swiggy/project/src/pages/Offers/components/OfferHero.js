export const OfferHero = () => {
    return (
        <>
        <div className="mt-10 relative">
            <img className="h-auto w-[80%] mx-auto rounded-lg" src="../../../assets/images/offerhero.avif" alt=""></img>
            <span className="absolute font-serif font-bold text-start text-4xl leading-normal text-white bottom-20 left-48">Restaurants Near Me For Dining <br />out</span>
        </div>

        <div className="w-[80%] mx-auto text-start flex text-lg gap-4 font-semibold mt-7">
            <p>Order Online</p>
            <p>Dineout</p>
           
        </div>
        <hr className="w-[80%] mx-auto mt-3"/>

        <div className="w-[80%] mx-auto mt-7 text-start">
                <button type="button" className="py-2 px-4 mb-2 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200">Filter <span><i class="fi fi-rr-settings-sliders ml-2"></i></span></button>
                <button type="button" className="py-2 px-4 mb-2 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200">Sort By <span><i class="fi fi-rr-angle-small-down ml-2"></i></span></button>
                <button type="button" className="py-2 px-4 mb-2 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200">Book a table</button>
                <button type="button" className="py-2 px-4 mb-2 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200">Within 5km</button>
                <button type="button" className="py-2 px-4 mb-2 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200">Rating 4+</button>
                <button type="button" className="py-2 px-4 mb-2 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200">Pure Veg</button>
                <button type="button" className="py-2 px-4 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200">Serves Alcohol</button>
            </div>
        </>
    )
}
