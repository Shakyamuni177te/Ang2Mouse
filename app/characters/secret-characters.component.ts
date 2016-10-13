// import components, initialisation function (makes code run when the
// application starts, router (which URL routes to where and suchlike)
// and observables (create readable data-streams)
import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';

// import definition(s) for character data
import { Character } from './character';

// import character service (tells the component what to do with the
// character data)
import { CharacterService } from './character.service';

// load in the character page. The moduleId is a unique identifier
// which allows the module to be referenced from elsewhere in the
// application. The selector is the string used to reference the
// component in the referencing HTML page. The templateUrl is the
// location in the template HTML page for the characters component,
// and styleUrls tells the component where to find the stylings for
// the page. 
@Component({
    moduleId: module.id,
    selector: 'secret-characters',
    templateUrl: 'secret-characters.component.html',
    styleUrls: [ 'secret-characters.component.css' ] 
})

// tells the client computer how the component page
// should be composed, what data services need to 
// be called and when, and how to process the returned
// data in order to correctly display it on the page
export class SecretCharactersComponent implements OnInit {

  sectiontitle = 'Character Selection';
  characters: Character[];
  selectedCharacter: Character;
  mode = 'Observable';
  errorMessage: string;  

  constructor(
    private router: Router,
    private characterService: CharacterService) { }

  getSecretCharacters() {
    this.characterService.getSecretCharacters()
                         .subscribe(
                                     characters => this.characters = characters
                                   );
  }

  ngOnInit(): void {
    this.getSecretCharacters();
  }

  onSelect(character: Character): void {
    this.selectedCharacter = character;
  }
  
  addSecretCharacter(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.characterService.create(name)
        .subscribe(
                     character => {
                     this.characters.push(character);
                     this.selectedCharacter = null;
                     }
                   );
  }
  
  deleteSecretCharacter(character: Character): void {
    this.characterService
      .delete(character.id)
      .then(() => {
        this.characters = this.characters.filter(c => c !== character);
        if (this.selectedCharacter === character) { this.selectedCharacter = null; }
      });
  }
 
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCharacter.id]);
  }
}
