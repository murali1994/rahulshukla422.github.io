import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './post/post-list.component';
import { PostFilter } from './post/post-filter';
import { PostDetailsComponent } from './post/post-details.component';

@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, routing],
  declarations: [AppComponent, AboutComponent, ContactComponent, HomeComponent, PostComponent, PostFilter, PostDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
