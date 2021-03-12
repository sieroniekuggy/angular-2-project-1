import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


echo "# angular-2-project-1" >> README.md
git init

git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/sieroniekuggy/angular-2-project-1.git
git push -u origin master
