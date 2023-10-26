import { useQuery } from "@tanstack/react-query";
import { Container, Image, Row, Col, Stack } from "react-bootstrap";
import { getPost } from "../../utils/axiosUtils";
import { useParams } from "react-router-dom";

import styles from "./Post.module.css";

export const Post = () => {
  const { id } = useParams();
  const { status, error, data } = useQuery({
    queryKey: ["post", id],
    queryFn: () => getPost(id),
  });

  if (status === "loading") return <h1>loading...</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;

  return (
    <div className={styles.centerItems}>
      <div className={styles.postContainer}>
        <Image src={data?.image} className="mb-5" />
        <Stack style={{ fontWeight: "900", fontSize: "30px" }}>
          {data?.title}
        </Stack>
        <Stack
          style={{ fontSize: "30px", textAlign: "justify" }}
          className="my-5"
        >
          {data?.content}
        </Stack>
        <Stack direction="horizontal" style={{ fontSize: "20px", borderTop: '2px solid  rgb(218, 213, 213)'}}>
          <div>{data?.creator}</div>
          <div className="ms-auto">{data?.creationDate}</div>
        </Stack>
      </div>
    </div>
  );
};
