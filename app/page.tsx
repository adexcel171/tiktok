"use client";

import { useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import { usePostStore } from "@/app/stores/post";
import ClientOnly from "./components/ClientOnly";
import PostMain from "./components/PostMain";

export default function Home() {
  let { allPosts, setAllPosts } = usePostStore();
  useEffect(() => {
    setAllPosts();
  }, []);
  return (
    <>
      <MainLayout>
        <div className="mt-[80px] w-[100%] flex justify-center">
          <ClientOnly>
            {allPosts.map((post, index) => (
              <PostMain post={post} key={index} />
            ))}
          </ClientOnly>
        </div>
      </MainLayout>
    </>
  );
}
