export interface CreateCommentDTO {
    content: string;
    auth_id: string
    post_id: string
    created_at: Date,
    updated_at: Date,
}

export interface UpdateCommentDTO extends Partial<CreateCommentDTO> { }