'use client';

import { PostPreviewPagination } from '@/types/postPreview';
import PostCard from './postCard';
import { useEffect, useRef, useState } from 'react';
import { getMoreProducts } from '@/app/blog/actions';

export default function PostList({
  initialPosts,
}: {
  initialPosts: PostPreviewPagination;
}) {
  const [posts, setPosts] = useState(initialPosts.posts);
  const [next, setNext] = useState(initialPosts.next);
  const [isLoading, setIsLoading] = useState(false);
  const trigger = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver,
      ) => {
        const element = entries[0];
        if (element.isIntersecting && trigger.current && next) {
          observer.unobserve(trigger.current);
          setIsLoading(true);
          const res = await getMoreProducts(next);
          setPosts((prev) => [...prev, ...res.posts]);
          setNext(res.next);
          setIsLoading(false);
        }
      },
      {
        threshold: 1.0,
      },
    );
    if (trigger.current) {
      observer.observe(trigger.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [next]);

  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
      <span
        ref={trigger}
        className={`mx-auto my-auto ${next === null && 'hidden'}`}>
        {isLoading ? 'Now Loading' : 'Load more'}
      </span>
    </div>
  );
}
