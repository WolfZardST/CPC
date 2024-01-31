
'use client';

import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "flowbite-react";
import hljs from "highlight.js";
import { useEffect, useState } from "react";
import useSWRInfinite from "swr/infinite";
import './pre.css';
import { TfiComments } from "react-icons/tfi";
import { createComment, downVote, upVote } from "@/utils/setters";
import QuillEditor from "../quill-editor/quill-editor";

interface PostsCollectionProps {
    postsFetcher: ((args: any) => any)
}

export default function PostsCollection({postsFetcher}: PostsCollectionProps) {

    const getPostsKey = (pageIndex: any, previousPageData: any) => {
        if (pageIndex && !previousPageData.length) {
            return null;
        }
        return [`posts-${pageIndex}`, pageIndex.toString()];
    };

    const { data: postsData, size: postsSize, setSize: postsSetSize, mutate: postsMutate } = useSWRInfinite(getPostsKey, postsFetcher);
    const [commentContent, setCommentContent] = useState('')

    useEffect(() => {
        const postDivs = document.querySelectorAll('.post-content');
        postDivs.forEach(div => {
            const preBlocks = div.querySelectorAll('pre');
            preBlocks.forEach(block => {
                hljs.highlightElement(block);
            });
        });
    });

    const [editorIndex, setEditorIndex] = useState<number | null>(null);
    const [sendingComment, setSendingComment] = useState(false);

    function newComment(postId: number) {
        setSendingComment(true);
        createComment(commentContent, postId).then(() => {
            setEditorIndex(null);
            setCommentContent('');
            postsMutate(postsData, false);
            postsMutate();
            setSendingComment(false);
        });
    }

    function performUpVote(postId: number) {
        upVote(postId).then(() => {
            postsMutate(postsData, false);
            postsMutate();
        });
    }

    function performDownVote(postId: number) {
        downVote(postId).then(() => {
            postsMutate(postsData, false);
            postsMutate();
        });
    }

    return (
        <>
            <div className="flex flex-col gap-y-4 mt-6">
                {postsData && postsData.map((posts, index) => {
                    return posts.map((post: any) => (
                        <div
                            className="flex gap-4 mb-4"
                            key={post.id}>
                            <div className="flex flex-col items-center gap-2">
                                <FontAwesomeIcon icon={faUserCircle} className="w-12 h-12" />
                                <p className="text-sm font-bold">Anónimo</p>
                            </div>
                            <div className="flex flex-col gap-5 w-full">
                                <div className="rounded-lg p-6 bg-gray-200 flex flex-col gap-3 w-full">
                                    <h1 className="font-bold text-lg">{post.titulo}</h1>
                                    <div className="post-content" dangerouslySetInnerHTML={{ __html: post.contenido }} />
                                    <div className="flex flex-row gap-4 mt-2">
                                        <Button.Group pill>
                                            <Button size="sm" color="gray"
                                                onClick={() => performUpVote(post.id)}>
                                                Útil: {post.votos_up}
                                            </Button>
                                            <Button size="sm" color="gray"
                                                 onClick={() => performDownVote(post.id)}>
                                                Poco útil: {post.votos_down}
                                            </Button>
                                        </Button.Group>
                                        <Button pill color="light"
                                            onClick={() => setEditorIndex(post.id)}>
                                            <TfiComments />
                                        </Button>
                                    </div>
                                </div>
                                {editorIndex === post.id &&
                                    <>
                                        <div className="flex gap-5">
                                            <div className="flex flex-col items-center gap-2">
                                                <FontAwesomeIcon icon={faUserCircle} className="w-12 h-12" />
                                                <p className="text-sm font-bold">Anónimo</p>
                                            </div>
                                            <QuillEditor allowCodeBlock content={commentContent} setContent={setCommentContent} />
                                        </div>
                                        <Button pill className="w-auto self-end"
                                            isProcessing={sendingComment}
                                            disabled={sendingComment}
                                            onClick={() => newComment(post.id)}
                                            color="blue">
                                            {sendingComment ? "Enviando" : "Comentar"}
                                        </Button>
                                    </>
                                }
                                {post.comments && post.comments.length > 0 && post.comments.map((comment: any) => (
                                    <div key={comment.id} className="flex gap-4">
                                        <div className="flex flex-col items-center gap-2">
                                            <FontAwesomeIcon icon={faUserCircle} className="w-12 h-12" />
                                            <p className="text-sm font-bold">Anónimo</p>
                                        </div>
                                        <div className="rounded-lg p-6 bg-gray-200 flex flex-col gap-3 w-full">
                                            <div className="post-content" dangerouslySetInnerHTML={{ __html: comment.contenido }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                })}
            </div>
            {!(postsData && postsData[postsSize - 1] && postsData[postsSize - 1].length === 0) &&
                <div className="flex flex-row justify-center w-full mt-4">
                    <Button pill
                        color="blue"
                        onClick={() => postsSetSize(postsSize + 1)}>
                        Cargar más publicaciones
                    </Button>
                </div>
            }
        </>
    );
}