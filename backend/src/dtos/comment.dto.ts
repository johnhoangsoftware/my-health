export interface CreateCommentDTO {
    content: string;
    authId: string
    postId: string
    createdAt: Date,
    updatedAt: Date,
}

export interface UpdateCommentDTO extends Partial<CreateCommentDTO> { }