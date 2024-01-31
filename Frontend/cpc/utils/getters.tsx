import { Fetcher } from "swr";

export const getGroups: Fetcher<any, string> = (placeholder: string) => getEntity("groups");
export const getPostsById: Fetcher<any, string[]> = (page: string[]) => getEntity(`posts?page=${page[1]}&sort=id`);
export const getPostsByUpvotes: Fetcher<any, string> = (page: string) => getEntity(`posts?page=${page}&sort=votos_up`);
export const getEvents: Fetcher<any, string[]> = (page: string[]) => getEntity(`events?page=${page[1]}`);

const getEntity: Fetcher<any, string> = (subUrl: string) => fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${subUrl}`).then(res => res.json());
