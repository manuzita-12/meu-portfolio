import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive ],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {}
