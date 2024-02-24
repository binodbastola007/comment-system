
const useFunction = () => {

    const addComment = (tree, commentId, newComment) => {
        if (tree?.commentId === commentId) {
            tree?.reply?.unshift(newComment);
            return tree;
        }
        const updatedReplies = tree?.reply?.map(element => addComment(element, commentId, newComment));
        return { ...tree, reply: updatedReplies }
    }

    const deleteComment = (tree, commentId) => {
        if (tree?.commentId === commentId) {
            return tree?.reply?.filter((element) => element?.commentId !== commentId)
        }
        const updatedReplies = tree?.reply?.map(element => deleteComment(element, commentId));
        return { ...tree, reply: updatedReplies }
    }

    return { addComment, deleteComment };
}

export default useFunction