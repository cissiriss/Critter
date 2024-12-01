export default function DeletePost({ id }: { id: number }) {
  function deletePost() {
    fetch(`http://localhost:3000/post/${id}`, {
      method: "DELETE",
    }).then(() => {
      window.location.reload();
    });
  }

  return (
    <div>
      <button className="btn btn-secondary" onClick={deletePost} type="button">
        Delete
      </button>
    </div>
  );
}
