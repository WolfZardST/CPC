import { Fetcher } from "swr";

export const getGroups: Fetcher<any, any> = () => getEntity("groups");
export const getPosts: Fetcher<any, string> = (page: string) => getEntity(`posts?page=${page}`);

const getEntity: Fetcher<any, string> = (subUrl) => fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${subUrl}`).then(res => res.json());
