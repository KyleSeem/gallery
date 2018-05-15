// partials appended with "FULL" and controllers appended with "ORIGINAL" allow full CRUD functionality to database;
// I chose to keep these separate from deployment files in order to facilitate easy back and forth when making changes to the database

myApp.config(function($routeProvider, $cookiesProvider){

    $routeProvider
    .when('/photography/home', {
        templateUrl: '../partials/dashboard.html',
        action: 'home',
    })
    .when('/photography/about_me', {
        templateUrl: '../partials/about_me.html',
        action: 'about',
    })
    .when('/photography/about_site', {
        templateUrl: '../partials/about_site.html',
        action: 'about',
    })
    .when('/photography/maintain/add_new', {
        templateUrl: '../partials/add_photos.html',
        controller: 'MaintenanceController',
        action: 'update',
    })
    .when('/photography/maintain/update_db', {
        templateUrl: '../partials/update_db.html',
        controller: 'MaintenanceController',
        action: 'update',
    })
    .when('/photography/maintain/:id', {
        templateUrl: '../partials/edit_photo.html',
        controller: 'MaintenanceController',
        action: 'update',
    })

// use these paths when actually updating database
    // .when('/photography/maintain/add_new', {
    //     templateUrl: '../partials/add_photos_FULL.html',
    //     controller: 'MaintenanceController_ORIGINAL',
    //     action: 'update',
    // })
    // .when('/photography/maintain/update_db', {
    //     templateUrl: '../partials/update_db_FULL.html',
    //     controller: 'MaintenanceController_ORIGINAL',
    //     action: 'update',
    // })
    // .when('/photography/maintain/:id', {
    //     templateUrl: '../partials/edit_photo_FULL.html',
    //     controller: 'MaintenanceController_ORIGINAL',
    //     action: 'update',
    // })
    // .otherwise({
    //     redirectTo: '/photography/home',
    // })

}); // close
