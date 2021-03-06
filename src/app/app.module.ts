import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './layouts/main-layout/footer/footer.component';
import { HeaderComponent } from './layouts/main-layout/header/header.component';
import { NavbarComponent } from './layouts/main-layout/navbar/navbar.component';
import {StickyNavModule} from 'ng2-sticky-nav';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MainComponent} from './main/main.component'
import { HomeComponent } from './home/home.component';
import { CommonModule} from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminHeaderComponent } from './layouts/admin-layout/admin-header/admin-header.component';
import { NewsTableComponent } from './data-management/news-management/news-table/news-table.component';
import { LoginComponent } from './shared/login/login.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NewsCategoryComponent } from './data-management/news-management/news-category/news-category.component';
import {  NewsInputComponent } from './data-management/news-management/news-input/news-input.component';
import { NewsDetailComponent } from './data-management/news-management/news-detail/news-detail.component';
import { MainPageComponent } from './data-management/news-management/main-page/main-page.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule} from '@angular/material/select';
import { NgxPaginationModule} from 'ngx-pagination';
import { ChoiceDialogComponent } from './shared/choice-dialog/choice-dialog.component';
import { NotificationDialogComponent } from './shared/notification-dialog/notification-dialog.component';
import { ErrorComponent } from './shared/error/error.component';
import { DialogAddComponent } from './data-management/news-management/news-category/dialog-add/dialog-add.component';
import { DialogUpdateComponent } from './data-management/news-management/news-category/dialog-update/dialog-update.component';
import { NewsUpdateComponent } from './data-management/news-management/news-update/news-update.component';
import { DialogDeleteComponent } from './data-management/news-management/news-category/dialog-delete/dialog-delete.component';
import { DialogChangeStatusComponent } from './data-management/news-management/news-table/dialog-change-status/dialog-change-status.component';
import { MainListNewsComponent } from './data-management/news-management/main-page/main-list-news/main-list-news.component';
import { MainNewsDetailComponent } from './data-management/news-management/main-page/main-news-detail/main-news-detail.component';
import { SizeDectectorComponent } from './size-dectector/size-dectector.component';
import {ResponsiveModule} from 'ngx-responsive';
import { ListNewByMenuComponent } from './layouts/main-layout/navbar/list-new-by-menu/list-new-by-menu.component';
import { sanitizeHtmlPipe } from './shared/pipes/safe-html.pipe';
import {MenuComponent} from './data-management/admin/menu/menu.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AuthInterceptor } from './blocks/auth.interceptor';
import { AuthExpiredInterceptor } from './blocks/auth-expired.interceptor';
import { MenuDialogComponent } from './data-management/admin/menu/menu-dialog/menu-dialog.component';
import {CreateCalendarComponent} from './data-management/calendar/create-calendar/create-calendar.component';
import { ListCalendarComponent } from './data-management/calendar/list-calendar/list-calendar.component';
import { DialogDeleteCalendarComponent } from './data-management/calendar/dialog-delete-calendar/dialog-delete-calendar.component';
import { HomeCalendarDetailComponent } from './home/home-calendar-detail/home-calendar-detail.component';
import { CuscMaterialModule } from './shared/material/material.module';
const config={
  breakPoints: {
    xs: {max: 575},
    sm: {min: 576, max: 767},
    md: {min: 768, max: 991},
    lg: {min: 992, max: 1199},
    xl: {min: 1200}
  },
  debounceTime: 100
};
@NgModule({
  declarations: [
    MainComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    AdminHomeComponent,
    AdminHeaderComponent,
    NewsTableComponent,
    NewsCategoryComponent,
    NewsInputComponent,
    NewsDetailComponent,
    MainPageComponent,
    ChoiceDialogComponent,
    NotificationDialogComponent,
    ErrorComponent,
    DialogAddComponent,
    DialogUpdateComponent,
    NewsUpdateComponent,
    DialogDeleteComponent,
    DialogChangeStatusComponent,
    MainListNewsComponent,
    MainNewsDetailComponent,
    SizeDectectorComponent,
    ListNewByMenuComponent,
    sanitizeHtmlPipe,
    MenuComponent,
    MenuDialogComponent,
    CreateCalendarComponent,
    ListCalendarComponent,
    DialogDeleteCalendarComponent,
    HomeCalendarDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    StickyNavModule,
    HttpClientModule,
    SnotifyModule,
    CKEditorModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSelectModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    CuscMaterialModule,
    ResponsiveModule.forRoot(config),
    NgxWebstorageModule.forRoot({ prefix: 'jhi', separator: '-' }),

  ],
  providers: [{provide:'SnotifyToastConfig', useValue: ToastDefaults },SnotifyService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthExpiredInterceptor,
    multi: true
  },
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
