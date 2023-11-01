import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { deletePost } from "../../utils/postsApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const DeleteModalForm = ({deleteId}) => {
  const queryClient = useQueryClient();
  const [ show, setShow ] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const deletePostMutation = useMutation({
    mutationFn: deletePost, 
    onSuccess: () => {
      //invalidates cache and refetches data
      queryClient.invalidateQueries("posts")
    }
  })

  const handleDeleteConfirm = () => {
    deletePostMutation.mutate(deleteId);
    setShow(false);
  }

  return (
    <>
      <Button variant="outline-secondary py-0 m-2" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Delete Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete the post?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDeleteConfirm}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
