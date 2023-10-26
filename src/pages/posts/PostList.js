import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { getAllPosts } from "../../utils/axiosUtils";
import { sliceItem } from "../../utils/generalUtils";
import { PostCard } from "../../components/post-card/PostCard";
import { GeneralPagination } from "../../components/pagination/GeneralPagination";

import styles from "./PostList.module.css";

export const PostList = () => {
  const [activePage, setActivePage] = useState(1);
  const { status, error, data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getAllPosts(),
  });

  if (status === "loading") return <h1>loading...</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <Container>
      <div className={styles.postsContainer}>
        {sliceItem(posts, (activePage - 1) * 6, ((activePage - 1) * 6) + 6 )?.map((post) => (
          <PostCard key={post.id} data={post} />
        ))}
      </div>
      <GeneralPagination
        activePage={activePage}
        itemsCount={posts?.length}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};
