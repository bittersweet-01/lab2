import { Injectable } from '@nestjs/common';
import { Comment } from './comment.interface';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { randomIntFromInterval } from 'src/utils/randomizer';

@Injectable()
export class CommentsService {
    private comments: Comment[] = [];
    
    getAll(postId: number) {
        return this.comments.filter(comment => comment.postId === postId);
    }

    getById(commId: number) {
        const index = this.comments.findIndex(comment => comment.id === commId);

        if (index < 0) 
            throw new Error("Not found");

        return this.comments[index];
    }

    create(createDto: CreateCommentDto) {
        const _comment: Comment = {
            id: randomIntFromInterval(1, 1000),
            createdAt: new Date().toISOString(),
            ...createDto
        };

        this.comments.push(_comment);
        return _comment;
    }

    update(id: number, updateDto: UpdateCommentDto) {
        const index = this.comments.findIndex(comment => comment.id === id);

        if (index < 0) throw new Error("Not found");

        const _comment: Comment = {
            ...this.comments[index],
            updatedAt: new Date().toISOString(), 
            ...updateDto
        };

        this.comments[index] = _comment;
        return _comment;
    }

    delete(id: number) {
        this.comments = this.comments.filter(comment => comment.id !== id);
    }
}