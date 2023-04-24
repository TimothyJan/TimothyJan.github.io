import { Component, OnInit } from '@angular/core';
import { SocialLink } from 'src/app/model/social-link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
  links = new Array<SocialLink>;

  ngOnInit(): void {
    let link1 = new SocialLink("https://github.com/timothyjan", "github");
    let link2 = new SocialLink("https://www.linkedin.com/in/timothy-jan-533212108/", "linkedin");
    this.links.push(link1, link2);
  }
}
