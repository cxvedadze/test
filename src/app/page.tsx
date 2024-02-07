"use client";

import { Room } from "./Room";
import { CollaborativeEditor } from "./components/collaborativeEditor/CollaborativeEditor";

import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { createBlog } from "@/lib/features/blogsSlice";

export default function Home() {
  const blogs = useAppSelector((state) => state.blogs);
  const dispatch = useAppDispatch();

  return (
    <main>
      <Room>
        <CollaborativeEditor />
      </Room>
    </main>
  );
}
