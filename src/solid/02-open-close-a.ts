import { HttpClient } from './02-open-close-c';
import { PhotosService, PostService, TodoService } from './02-open-close-b';

(async () => {

    const http=new HttpClient
    const todoService = new TodoService(http);
    const postService = new PostService(http);
    const photosService = new PhotosService(http);

    const todos = await todoService.getTodoItems();
    const posts = await postService.getPosts();
    const photos = await photosService.getPhotos();
    
    
    console.log({ todos, posts, photos });
    

})();