export interface Comment {
    id?: number;
    postId: number;
    createdAt: string;
    updatedAt?: string;
    text: string;
}