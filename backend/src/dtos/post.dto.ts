export interface CreatePostDTO {
    topic: string
    content: string;
    media: string
    createdAt: Date,
    updatedAt: Date,
    authId: string
}

export interface UpdatePostDTO extends Partial<CreatePostDTO> { }