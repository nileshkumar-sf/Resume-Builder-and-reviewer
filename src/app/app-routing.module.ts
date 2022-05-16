import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './main-components/sign-in/sign-in.component';
import { SignUpComponent } from './main-components/sign-up/sign-up.component';
import { DashboardComponent } from './main-components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './main-components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './main-components/verify-email/verify-email.component';
// route guard
import { AuthGuard } from './shared/guard/auth.guard';
import { HomePageComponent } from './main-components/home-page/home-page.component';
import { ResumeReviewerComponent } from './main-components/resume-reviewer/resume-reviewer.component';
import { ResumeBuilderComponent } from './main-components/resume-builder/resume-builder.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'resume-reviewer', component: ResumeReviewerComponent, canActivate: [AuthGuard] },
  { path: 'resume-builder', component: ResumeBuilderComponent, canActivate: [AuthGuard] },  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}