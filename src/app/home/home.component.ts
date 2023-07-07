import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  prompt = '';
  content = '';

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.content = 'esperando respuesta...';
    this.homeService.getContent(this.prompt).subscribe(
      data => {
        this.content = data.content;
      },
      err => {
        this.content = err.error;
      }
    );
  }

  resetPrompt(): void  {
    this.prompt = '';
  }

  resetContent(): void {
    this.content = '';
  }

}
