import { JsonDBService, LocalDataBaseService, WebAPIService } from './05-dependency-c';
import { PostService } from './05-dependency-b';


// Main
(async () => {
     //const provider = new JsonDBService;
    //const provider = new LocalDataBaseService
    const provider = new WebAPIService
    
    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();