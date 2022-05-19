import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { DashboardComponent } from './main-components/dashboard/dashboard.component';
import { SignInComponent } from './main-components/sign-in/sign-in.component';
import { SignUpComponent } from './main-components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './main-components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './main-components/verify-email/verify-email.component';
import { AuthService } from './shared/services/auth.service';
import { HomePageComponent } from './main-components/home-page/home-page.component';
import { HeaderComponent } from './general-components/header/header.component';
import { FooterComponent } from './general-components/footer/footer.component';
import { ResumeReviewerComponent } from './main-components/resume-reviewer/resume-reviewer.component';
import { FormsModule } from '@angular/forms';
import { ResumeBuilderComponent } from './main-components/resume-builder/resume-builder.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BasicDetailsComponent } from './main-components/resume-builder/basic-details/basic-details.component';
import { WorkDetailsComponent } from './main-components/resume-builder/work-details/work-details.component';
import { EducationDetailsComponent } from './main-components/resume-builder/education-details/education-details.component';
import { SkillsDetailsComponent } from './main-components/resume-builder/skills-details/skills-details.component';
import { CertificationDetailsComponent } from './main-components/resume-builder/certification-details/certification-details.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    ResumeReviewerComponent,
    ResumeBuilderComponent,
    BasicDetailsComponent,
    WorkDetailsComponent,
    EducationDetailsComponent,
    SkillsDetailsComponent,
    CertificationDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
