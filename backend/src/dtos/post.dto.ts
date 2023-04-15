export interface CreatePostDTO {
    topic: string
    content: string;
    media: string
    created_at: Date,
    updated_at: Date,
    authId: string
}

export interface UpdatePostDTO extends Partial<CreatePostDTO> { }