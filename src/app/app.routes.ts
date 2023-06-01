import { RouterModule } from "@angular/router";
import { CompMainComponent } from "./comp-main/comp-main.component";
import { CompTwoComponent } from "./comp-two/comp-two.component";
import { CountryComponent } from "./country/country.component";
import { StoreComponent } from "./store/store.component";

// Routing for use case 1
const routes = [
    { 
        "path": "usecase1", 
        component: CompMainComponent,
        children: [
            { "path": "comptwo/:inputText", component: CompTwoComponent }
        ]
    },
    { "path": "usecase2", component: CountryComponent },
    { "path": "usecase3", component: StoreComponent },
];

let routeConfig = RouterModule.forRoot(routes);
export { routeConfig }