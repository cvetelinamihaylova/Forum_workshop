import { ThemeService } from './../theme.service';
import { ITheme } from './../../shared/interfaces/theme';
import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  theme: ITheme<IPost> = null;
  constructor(private themeService: ThemeService, activatedRoute: ActivatedRoute) {
    const id = activatedRoute.snapshot.params.id;
    this.themeService.loadTheme(id).subscribe(theme=>{
      this.theme = theme;
      
    });
   }

  ngOnInit(): void {
  }

}
