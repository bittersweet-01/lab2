import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsController } from './comments/comment.controller';
import { CommentsModule } from './comments/comment.module';
import { CommentsService } from './comments/comment.service';
import { PostModule } from './posts/post.module';
import { PostService } from './posts/post.service';

@Module({
  imports: [PostModule, CommentsModule],
  controllers: [AppController, CommentsController],
  providers: [AppService, PostService, CommentsService],
})
export class AppModule {}
