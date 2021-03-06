import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})


export class HeroesComponent implements  OnInit{
  
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero:Hero): void {
    this.selectedHero = hero;
  }

  constructor(
    private router:Router,
    private heroService: HeroService
  ){}

   getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }

  ngOnInit(): void{
    this.getHeroes();
  }
   
  gotoDetail(): void{
    this.router.navigate(['/detail', this.selectedHero.id])
  }
}
