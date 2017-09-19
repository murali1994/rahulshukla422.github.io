"use strict";
var router_1 = require('@angular/router');
var about_component_1 = require('./about/about.component');
var home_component_1 = require('./home/home.component');
var contact_component_1 = require('./contact/contact.component');
var post_list_component_1 = require('./post/post-list.component');
var post_details_component_1 = require('./post/post-details.component');
exports.routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'post-list',
        component: post_list_component_1.PostComponent
    },
    {
        path: 'post-details/:postId',
        component: post_details_component_1.PostDetailsComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=routing.js.map