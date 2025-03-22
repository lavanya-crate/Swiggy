import { Header } from "../../components/Layouts/Header"
export const PageSearch = () => {

    return (
        <div>
            <Header />
            <div className="w-[50%] mx-auto relative mt-10">
                <input
                    type="text"
                    placeholder="Search for restaurants and food"
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm"
                />
                <button className="absolute right-0 top-0 h-full px-6 ">
                    <i class="fi fi-rs-search"></i>
                </button>
            </div>
        </div>
    )
}
