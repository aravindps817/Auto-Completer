# Auto-Completer

It's an angular component for generic usage.

## Installation

Download the component and add it into your module.

## Usage

```TypeScript
import { AppAutocompleterComponent } from './app-endpoint-search/app-endpoint-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ....,
    AppAutocompleterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FileDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//** in your html file"
  <app-autocompleter [completerOptions]="completerOptions" [clearField]="clearField" [placeHolder]="'Search'"
  (selectedCompleterResult)="selectedResult($event)"></app-autocompleter>

##sample Object

    completerOptions.arrayList = []
    completerOptions.contextField = 'firstValue';
    completerOptions.filterFields = 'firstFilter,secondFilter';
    completerOptions.formatString = 'firstValue | secondValue';
    completerOptions.size = 20;
    completerOptions.theme = 'red';
    completerOptions.width = '100%';
    completerOptions.fontSize = '20px';
    completerOptions.defaultValue = 'My search Text';
```

## Parameters
Name  | Description | Example | 
------------- | ------------- | -------------
(selectedResult)  | On mouse click function and close button event | (selectedResult)="yourFunction($event)"
Placeholder  | placeholder for search box| [placeHolder]=" place holder values" 
completerOptions  | pass as input for configuration | [completerOptions] ="yourOptions"
httpOpticompleterOptionsons.size  | maximum size of search return (optional) | completerOptions.size = '20'
completerOptions.contextField | field to be shown on search field on mousedown event
completerOptions.filterFields | filter for the output  | completerOptions.filterFields = 'firstindex | secondIndex'
completerOptions.formatString | format for the output  | completerOptions.formatString = 'firstindex | secondIndex'
completerOptions.theme | Custom color for the search output (optional) | completerOptions.theme = 'your color'
completerOptions.fontSize  | Font size of search result (optional)  | completerOptions.fontSize = '20px'
completerOptions.width  | Width  of search (optional) | completerOptions.width = '100%'
completerOptions.defaultvalue  | A default value to be shown on search field (optional)  | completerOptions.defaultValue = 'Your Default value'

## Other functionalities

To clear search field any time, use "clearField". The variable is passed in elasticsearch component intialization. Syntax is, this.clearField = new String('true');

If you need to update the 'defualtValue' after intailization use new refernce for your options

```TypeScript

this.completerOptions = Object.assign({}, this.completerOptions) 
this.clearField = new String('false');

```


The "(selectedResult)" will emit "null" on close button usage, mouse click on error and no result cases. Handle your functions accordingly.

On elastic error or no results the drop down will be showing "no results".

## Contributing
Pull requests are welcomed. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## Style changes
 For custom styling change the style inside app-autocompleter.component.css.

## License

