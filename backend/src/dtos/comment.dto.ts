export interface CreateCommentDTO {
    content: string;
    authId: string
    postId: string
    created_at: Date,
    updated_at: Date,
}

export interface UpdateCommentDTO extends Partial<CreateCommentDTO> { }