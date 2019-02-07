import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
    model() {
        $.ajax({
            method : 'GET',
            url : 'https://api.zonky.cz/loans/marketplace',
            headers: {
                //"Authorization" : "Basic abcdef==",
                "User-Agent":"ember-quickstart/0.3 (https://github.com/weppyk/ember-quickstart)"
            }
        })
        .then((response) => {
            return response;
        });
    }
//console.log 1(JSON.stringify(response));

});
        /*this.get('https://api.zonky.cz/loans/marketplace',()=>{
            return [];
        });
     }
});*/
/*import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({

    model(){
    
        this.get('https://api.zonky.cz/loans/marketplace',()=>{
            return [];
        });
    }
});*/
