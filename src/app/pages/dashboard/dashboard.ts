import { Component } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { DahsboardUserTab } from '../../components/dahsboard-user-tab/dahsboard-user-tab';
import { DahsboardPostTab } from '../../components/dahsboard-post-tab/dahsboard-post-tab';

@Component({
  selector: 'app-dashboard',
  imports: [MatTabsModule, DahsboardUserTab, DahsboardPostTab],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
