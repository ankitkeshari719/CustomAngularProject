import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'users', loadChildren:'./users/users.module#usersModule'}
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports:[RouterModule]
})
export class AppRoutingModule {

}