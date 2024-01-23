import { getPosts } from "@/utils/getters";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default async function Posts() {

    const posts = await getPosts();

    return (
        <div className="text-black m-5 border-solid border-2 border-gray-300 p-8 bg-white">
            <div className="border-b-2 border-gray-300 border-solid pb-4">
                <h1 className="bold text-3xl">Publicaciones</h1>
            </div>
            <div className="flex flex-col gap-y-4 mt-6">
                {posts.map((post: any) => (
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
                ))}
            </div>
        </div>
    )
}