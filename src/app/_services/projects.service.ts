import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

projects: Project[] = [
    {id: 0, name: "CreepCorner Gallery", pictures: ["assets/slide2.png", "assets/slide6.png", "assets/slide7.png"], projectLink: "https://creep-corner.vercel.app/", summary: "Angular webpage with my digital arts", description: "The project is deeply inspired by classic Japanese horror — from the unsettling world of Junji Ito’s manga, to iconic films like “The Ring” and “Ju-On: The Grudge”. My goal was to capture that chilling atmosphere through hand-drawn visuals and interactive design. Every aspect — from the UI layout to the artwork — was designed and developed by me. While modern web technologies power the site, it s the emotional tone and visual storytelling that were at the heart of the process. If you're a recruiter, horror enthusiast, or someone who appreciates dark, unique aesthetics — this is the project that best represents the fusion of my artistic and technical skills. Stack Angular.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
    {id: 1, name: "Recipe Book", pictures: ["assets/slide1.png"], projectLink: "https://ng-recipe-book-5442f.web.app/auth", summary: "Angular app to create recipes", description: "an interactive web application built with Angular, designed for cooking enthusiasts and anyone looking to easily collect and organize their culinary creations. It allows users to create, edit, and save recipes complete with images, ingredient lists, and step-by-step instructions.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.FIREBASE]},
    {id: 2, name: "To Do App", pictures: ["assets/slide3.png"], projectLink: "https://main.d37ydcn4d3jte7.amplifyapp.com/", summary: "TypeScript To Do App", description: "To-Do App is a lightweight and intuitive task management application. It allows you to add, edit, delete, and mark tasks as completed, helping you stay organized and plan your day effectively. With a minimalist interface and responsive design, the app delivers a fast and convenient experience across all devices.", tags: [Tag.TYPESCRIPT]},
    {id: 3, name: "Find a Coach", pictures: ["assets/slide5.png"], projectLink: "https://vue-coach-app-cd995.web.app/coaches", summary: "Vue app you can register as a coach.", description: "Find a Coach is a modern online platform designed for individuals seeking personal growth and professional mentorship. The application allows users to register as a coach, showcase their services, and connect with potential clients. At the same time, it enables anyone to search for and contact coaches based on specialization, experience, or location. Stack VUE", tags: [Tag.VUE, Tag.FIREBASE]},
    {id: 4, name: "Portfolio", pictures: ["assets/slide4.png"], projectLink: "https://drive.google.com/file/d/11tXi3OWWMw1CJfYuIixGnBw4uWHjOM9Z/view?usp=sharing", summary: "Portfolio with my design projects.", description: "PDF document showcasing a broad range of skills and experience in graphic design and marketing. It features marketing materials, website designs, artbooks, leaflets, and other visual projects that highlight the author’s versatility and strong sense of aesthetics.", tags: [Tag.DESIGN]},
    {id: 5, name: "To Do App 2", pictures: ["assets/slide8.png"], projectLink: "https://main.dpam1403axwxy.amplifyapp.com/", summary: "Another To Do App in React", description: "To-Do App is a lightweight and intuitive task management application. It allows you to add, edit, delete, and mark tasks as completed, helping you stay organized and plan your day effectively. With a minimalist interface and responsive design, the app delivers a fast and convenient experience across all devices.", tags: [Tag.REACT]}
  ];

  constructor() {}

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id);
   
    if(project === undefined) {
      throw new TypeError('There is no project that matches the id' + id);
    }
    return project;
  }
}
