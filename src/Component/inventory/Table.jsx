import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Table = ({ data, payload }) => {
    // const navigate = useNavigate();
    const location = useLocation();
    console.log(location.pathname);
    return (
        <div>
            <div className="max-w-full overflow-x-auto">
                {data && (
                    <table className="w-full table-auto table_spacing my-2 px-1">
                        <thead className="bg-white  table_shadow">
                            <tr className="text-left">
                                {data?.headers?.map((header, i) => (
                                    <th
                                        className={`py-5 px-4 text-black font-bold ${i === 0 && "rounded-s-md pl-10"
                                            } ${i === data?.headers?.length - 1 && "rounded-e-md"}`}
                                        key={i}
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data?.rows?.map((row, i) => (
                                <tr
                                    className="bg-white table_shadow rounded-md overflow-hidden"
                                    key={i}
                                >
                                    {row.map((cell, i) => (
                                        <td
                                            className={`py-5 px-4 font-[600] ${i === 0 && "rounded-s-md pl-10"
                                                } ${i === row?.length - 1 && "rounded-e-md"}`}
                                            key={i}
                                        >
                                            {cell.buttons
                                                ? cell.buttons.map((data) => (
                                                    <button
                                                        onClick={() =>
                                                            navigate(
                                                                `${location.pathname}/${data.label}/${data.id}`
                                                            )
                                                        }
                                                        style={{ background: data.class || "#064899" }}
                                                        className="text-white px-3 py-1 rounded-md"
                                                        key={data.id}
                                                    >
                                                        {data.label}
                                                    </button>
                                                ))
                                                : cell.value}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

        </div>
    );
};

export default Table;
