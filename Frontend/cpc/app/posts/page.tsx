
'use client';

import { getPosts } from "@/utils/getters";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSWRInfinite from "swr/infinite";

export default function Posts() {

    const getKey = (pageIndex: any, previousPageData: any) => {
        if (pageIndex && !previousPageData.length) {
            return null;
        }
        return pageIndex.toString();
    };

    const { data, error, size, setSize } = useSWRInfinite(getKey, getPosts);

    return (
        <div className="text-black m-5 border-solid border-2 border-gray-300 p-8 bg-white">
            <div className="border-b-2 border-gray-300 border-solid pb-4">
                <h1 className="bold text-3xl">Publicaciones</h1>
            </div>
            <div className="flex flex-col gap-y-4 mt-6">
                {data && data.map((posts, index) => {
                    return posts.map((post: any) => (
                        <div 
                            className="flex gap-4"
                            key={post.id}>
                            <div className="flex flex-col items-center gap-2">
                                <FontAwesomeIcon icon={faUserCircle} className="w-12 h-12" />
                                <p className="text-sm font-bold">Anónimo</p>
                            </div>
                            <div className="rounded-lg p-6 bg-gray-200 flex flex-col gap-3">
                                <h1 className="font-bold text-lg">{post.titulo}</h1>
                                <p>{post.contenido}</p>
                            </div>
                        </div>
                    ))
                })}
            </div>
            {!(data && data[size - 1] && data[size - 1].length === 0) && 
                <div className="flex flex-row justify-center w-full">
                    <button
                        disabled={data && data[size] && data[size].length === 0}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => setSize(size + 1)}>
                        Cargar más
                    </button>
                </div>
            }
        </div>
    );
}