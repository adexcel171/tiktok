"use client"

import { AiFillHeart } from "react-icons/ai"
import { ImMusic } from "react-icons/im"
import Link from "next/link"
import { useEffect } from "react"
import PostMainLikes from "./PostMainLikes"
import useCreateBucketUrl from "../hooks/useCreateBucketUrl"
import { PostMainCompTypes } from "../types"

export default function PostMain({ post }: PostMainCompTypes) {

   
    useEffect(() => {
        const video = document.getElementById(`video-${post?.id}`) as HTMLVideoElement
        const postMainElement = document.getElementById(`PostMain-${post.id}`);

        if (postMainElement) {
            let observer = new IntersectionObserver((entries) => {
                entries[0].isIntersecting ? video.play() : video.pause()
            }, { threshold: [0.6] });
        
            observer.observe(postMainElement);
        }
    }, [])

    return (
        <>
            <div id={`PostMain-${post.id}`} className="flex border-b py-5">

                <div className="cursor-pointer">
                    <img className="rounded-full max-h-[60px]" width="60" src={useCreateBucketUrl(post?.profile?.image)} />
                </div>

                <div className="w-full px-2">
                    <div className="flex items-center justify-between px-2 pb-0.5">
                        <Link href={`/profile/${post.profile.user_id}`}>
                            <span className="font-bold hover:underline cursor-pointer">
                                {post.profile.name}
                            </span>
                        </Link>

                        <button className="border text-[15px] px-[21px] py-0.5 border-[#F02C56] text-[#F02C56] hover:bg-[#ffeef2] font-semibold rounded-md">
                            Following
                        </button>
                    </div>
                    <p className="text-[15px] pb-0.5 break-words md:max-w-[400px] max-w-[300px]">{post.text}</p>
                    <p className="text-[14px] text-gray-500 pb-0.5">#fun #tech #SuperAwesome</p>
                    <p className="text-[14px] pb-0.5 flex items-center font-semibold">
                        {/* <ImMusic size="17"/> */}
                        <span className="px-1"> excel tech</span>
                        <AiFillHeart size="20"/>
                    </p>

                    <div className="mt-2.5 w-[100%] flex">
                        <div
                            className="relative min-h-[500px] max-h-[500px] max-w-[700px] sm:max-w-[700px] flex items-center bg-black rounded-xl cursor-pointer"
                        >
                            <video 
                                id={`video-${post.id}`}
                                loop
                                controls
                                muted
                                className="rounded-xl w-[100%] object-cover h-full" 
                                src={useCreateBucketUrl(post?.video_url)}
                            />
                            <img 
                                className="absolute right-2 bottom-10" 
                                width="25" 
                                src="/images/logo.svg"
                            />
                        </div>
                        
                        <PostMainLikes post={post} />
                    </div>
                </div>
            </div>
        </>
    )
}
