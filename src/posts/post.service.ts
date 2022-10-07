import { Injectable } from '@nestjs/common';
import { randomIntFromInterval } from "src/utils/randomizer";
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './post.interface';

@Injectable()
export class PostService {
    private posts: Post[] = [];

    findAll(page: number, size: number) {
        const startOffset = page * size;
        const endOffset = startOffset + size;
        return this.posts.slice(startOffset, endOffset);
    }

    findById(id: number) {
        const index = this.posts.findIndex(p => p.id === id);

        if (index < 0) throw new Error("Not found");

        return this.posts[index];
    }

    create(createDto: CreatePostDto) {
        const _post: Post = {
            id: randomIntFromInterval(1, 1000),
            createdAt: new Date().toISOString(),
            ...createDto,
        };
        this.posts.push(_post);
        return _post;
    }

    update(id: number, updateDto: UpdatePostDto) {
        const index = this.posts.findIndex(p => p.id === id);

        if (index < 0) throw new Error("Not found");

        const _post: Post = {
            ...this.posts[index],
            updatedAt: new Date().toISOString(),
            ...updateDto
        };

        this.posts[index] = _post;
        return _post;
    }

    delete(id: number) {
        this.posts = this.posts.filter(p => p.id !== id);
    }

}