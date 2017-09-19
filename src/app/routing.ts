import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './post/post-list.component';
import { PostDetailsComponent } from './post/post-details.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'post-list',
        component: PostComponent
    },
    {
        path: 'post-details/:postId',
        component: PostDetailsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

