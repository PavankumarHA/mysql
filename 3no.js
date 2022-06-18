import { Component } from "@angular/core";  
@Component({  
    selector: 'my-App',  
    template: `  
                <div>  
                  <strong>{{name}}</strong>  
                </div> `
})

export class AppComponent {  
    name: string = "Sachin";  
}