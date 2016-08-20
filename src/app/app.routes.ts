import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home.component';
import { BlogComponent } from './pages/blog.component';
import { BlogHomeComponent } from './pages/blog-home.component';
import { BlogPostComponent } from './pages/blog-post.component';
import { BioComponent } from './pages/bio.component';
import { AdminModule } from './admin/admin.module';
import { ProjectsComponent } from './pages/projects.component';
import { SpeakingComponent } from './pages/speaking.component';

export const routeConfig: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'blog', component: BlogComponent, children: [
            { path: '', component: BlogPostComponent },
            { path: ':id', component: BlogPostComponent },
        ]
    },
    { path: 'bio', component: BioComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'speaking', component: SpeakingComponent },


    // This works great in JIT mode, but the CLI doesn't connect the bundle for AOT yet
    //{ path: 'admin', loadChildren: "./admin/admin.module#AdminModule" },

]