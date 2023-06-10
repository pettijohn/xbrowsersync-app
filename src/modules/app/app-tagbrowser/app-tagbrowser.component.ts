import { Component } from 'angular-ts-decorators';
import { boundMethod } from 'autobind-decorator';
import { BookmarkHelperService } from '../../shared/bookmark/bookmark-helper/bookmark-helper.service';
import { PlatformService } from '../../shared/global-shared.interface';
import { UtilityService } from '../../shared/utility/utility.service';
import { AppHelperService } from '../shared/app-helper/app-helper.service';

@Component({
  controllerAs: 'vm',
  selector: 'tagBrowser',
  styles: [require('./app-tagbrowser.component.scss')],
  template: require('./app-tagbrowser.component.html')
})
export class AppTagBrowserComponent {
  //Strings = require('../../../../res/strings/en.json');

  $routeParams: ng.route.IRouteParamsService;
  appHelperSvc: AppHelperService;
  bookmarkHelperSvc: BookmarkHelperService;
  platformSvc: PlatformService;
  utilitySvc: UtilityService;

  static $inject = ['AppHelperService', 'BookmarkHelperService', 'PlatformService', 'UtilityService', '$routeParams'];
  constructor(
    AppHelperSvc: AppHelperService,
    BookmarkHelperSvc: BookmarkHelperService,
    PlatformSvc: PlatformService,
    UtilitySvc: UtilityService,
    $routeParams: ng.route.IRouteParamsService
  ) {
    this.appHelperSvc = AppHelperSvc;
    this.bookmarkHelperSvc = BookmarkHelperSvc;
    this.platformSvc = PlatformSvc;
    this.utilitySvc = UtilitySvc;
    this.$routeParams = $routeParams;
  }

  @boundMethod
  close(): void {
    this.appHelperSvc.switchView();
  }
}

