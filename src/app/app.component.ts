import { Component } from '@angular/core';
import { PostService } from './services/postService';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [PostService]

})
export class AppComponent {
  name = 'Dicussion Form';

}

