import { Card, Stack, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { sliceItem } from "../../utils/generalUtils";
import { DeleteModalForm } from "../modal-form/DeleteModalForm";

import styles from "./PostCard.module.css";

export const PostCard = ({ data }) => {

  return (
    <>
      <Card className={styles.cardContainer}>
        <Card.Img className={styles.img} variant="top" src={data?.image} />
        <Card.Body>
          <div className={styles.content}>
            <div className={styles.title}>{data?.title}</div>
            <div className="mt-3">{sliceItem(data?.content, 0, 80)}...</div>
          </div>
          <Stack
            direction="horizontal"
            style={{
              fontSize: "15px",
              borderTop: "2px solid  rgb(218, 213, 213)",
            }}
          >
            <div>{data?.creator}</div>
            <div className="ms-auto">{data?.creationDate}</div>
          </Stack>
          <Stack direction="horizontal" style={{ fontSize: "15px" }}>
            <Button variant="outline-secondary py-0">
              <Link
                style={{ textDecoration: "none", color: "grey" }}
                to={`/post/${data?.id}`}
              >
                Details
              </Link>
            </Button>
            {/* <Button
              className="ms-auto py-0"
              variant="outline-secondary py-0"
              // onClick={editModalSeen}
            >
              Edit
            </Button> */}
            <DeleteModalForm deleteId={data.id}/>
          </Stack>
        </Card.Body>
      </Card>
    </>
  );
};
