
'use client';

import { getPostsByUpvotes } from "@/utils/getters";
import SearchBar from "./SearchBar/SearchBar";
import PostsCollection from "./posts/posts-collection";

export default function Home() {
	return (
		<div className="text-black m-5 border-solid border-2 border-gray-300 p-8 bg-white">
			<div className="border-b-2 border-gray-300 border-solid pb-4 flex flex-row justify-between">
				<h1 className="bold text-3xl">Publicaciones Destacadas</h1>
			</div>
			<PostsCollection fetcher={getPostsByUpvotes} />
		</div>
	);

}
