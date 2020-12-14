import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: "Neat Tree",
      imageUrl: "assets/images/lion.jpg",
      username: "nature",
      content: "Saw this awesome tree during my hike today."
    },
    {
      title: "Reindeer",
      imageUrl: "assets/images/reindeer.jpg",
      username: "nature",
      content: "I wish I can this animal once in my life."
    },
    {
      title: "Cat",
      imageUrl: "assets/images/cat.jpg",
      username: "nature",
      content: "I love this so kute cat."
    }
  ]
}
