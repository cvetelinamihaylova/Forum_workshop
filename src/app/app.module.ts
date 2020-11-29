import { UserModule } from './user/user.module';
import { ThemeModule } from './theme/theme.module';
// import { AsideComponent } from './core/aside/aside.component';     
import { CoreModule } from './core/core.module';
import { AppRouterModule } from './app-routing-module';
import { PostService } from './post.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    CoreModule,
    ThemeModule,
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRouterModule,
    UserModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent
    ]
})
export class AppModule { }
