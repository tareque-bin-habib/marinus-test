import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// import { post } from "../../api/axios";
import Table from "./Table";


const AddNewProduct = () => {
    let modalRef = useRef();
    const [name, setName] = useState("");
    const [sku, setSku] = useState("");
    const [opening_Stock, setopening_Stock] = useState("");
    const [category_id, setCategory_id] = useState("");
    const [loading, setLoading] = useState(false);
    const [productCategory, setProductCategory] = useState([]);

    const [paginations, setPaginations] = useState({});
    const [currentPage, setCurrentPage] = useState(1);

    const [product, setProduct] = useState({});

    useEffect(() => {
        fetchProductCategory();
    }, []);
    useEffect(() => {
        fetchProduct();
    }, [currentPage]);

    const payload = {
        models: [
            {
                model: "product_category",
                label: "name"
            }
        ]
    };

    const payloadData = {
        modelName: "product",
        columns: ["name", "sku", "opening_stock", "product_category_id"]
    };

    const fetchProduct = async () => {
        try {
            const response = await post(
                `api/table/get?page=${currentPage}&per_page=10`,
                payloadData
            );
            console.log(response?.data);
            setProduct(response?.data);
            setPaginations(response?.paginations);
        } catch (error) {
            console.error("Error creating app:", error);
        }
    };

    const fetchProductCategory = async () => {
        try {
            const response = await post(`api/dropdown/get`, payload);
            // console.log(response, "====>");
            setProductCategory(response?.product_category);
        } catch (error) {
            console.error("Error creating app:", error);
        }
    };

    const handleCreateProject = async (e) => {
        e.preventDefault();
        const formData = {
            params: {
                name: name,
                sku: sku,
                opening_stock: parseInt(opening_Stock),
                product_category_id: parseInt(category_id)
            },
            modelName: "product"
        };
        console.log(formData);
        setLoading(true);
        try {
            const res = await post("api/add-data", formData);
            console.log(res);
            if (res?.success) {
                fetchProduct();
                setCategory_id("");
                setopening_Stock("");
                setSku("");
                setName("");
                setLoading(false);
                modalRef.current.close();
                toast.success(res.message);
            }
        } catch (error) {
            setLoading(false);
            toast.error("faild to Post");
            console.log("Failed to post/", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-5 my-5">
            <button
                type="button"
                onClick={() => modalRef.current.showModal()}
                className=" px-4 bg-emerald-700 text-white h-12 rounded-md"
            >
                Add new Product
            </button>

            <dialog id="my_modal_3" className="modal modal-middle" ref={modalRef}>
                <div className="modal-box">
                    <button
                        onClick={() => modalRef.current.close()}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >
                        ✕
                    </button>
                    <div className="flex items-center">
                        <h3 className="font-bold text-lg">Add new Product</h3>
                    </div>

                    <form>
                        <label
                            htmlFor="price"
                            className="block mt-3 text-sm font-medium leading-6 text-gray-900"
                        >
                            Name
                        </label>
                        <div className="relative mt-1 rounded-md shadow-sm">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Name"
                            />
                        </div>
                        <label
                            htmlFor="price"
                            className="block mt-3 text-sm font-medium leading-6 text-gray-900"
                        >
                            Sku
                        </label>
                        <div className="relative mt-1 rounded-md shadow-sm">
                            <input
                                type="text"
                                value={sku}
                                onChange={(e) => setSku(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Sku"
                            />
                        </div>
                        <label
                            htmlFor="price"
                            className="block mt-3 text-sm font-medium leading-6 text-gray-900"
                        >
                            Opening Stock
                        </label>
                        <div className="relative mt-1 rounded-md shadow-sm">
                            <input
                                type="number"
                                value={opening_Stock}
                                onChange={(e) => setopening_Stock(e.target.value)}
                                className="w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Opening Stock"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="bankName"
                                className="block mt-3 text-sm font-medium leading-6 text-gray-900"
                            >
                                Product Category
                            </label>
                            <div className="relative mt-1 rounded-md shadow-sm">
                                <select
                                    value={category_id}
                                    onChange={(e) => setCategory_id(e.target.value)}
                                    className="w-full h-9 pl-2 border border-gray-300 rounded  rounded-r-md text-black"
                                >
                                    {productCategory &&
                                        productCategory.map((data) => (
                                            <option
                                                className="text-black"
                                                key={data.value}
                                                value={data.value}
                                            >
                                                {data.label}
                                            </option>
                                        ))}
                                </select>
                            </div>
                        </div>

                        <div className="modal-action">
                            <button
                                type="button"
                                onClick={() => modalRef.current.close()}
                                className="w-[100px] p-2 mt-6 bg-white text-red-600 border border-red-600 h-12"
                            >
                                Close
                            </button>
                            <button
                                onClick={handleCreateProject}
                                className={`w-[150px] p-2 mt-6 bg-emerald-700 text-white h-12 ${loading ? "opacity-80" : ""
                                    }`}
                                disabled={loading}
                            >
                                {loading ? <Loading /> : "Create"}
                            </button>
                        </div>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

            <Table
                data={product}
                paginations={paginations}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};

export default AddNewProduct;
