function keyWordsearch(){
    gapi.client.setApiKey("AIzaSyASrZjv21hp6wMIFidunQZYP8N7dzcdiBo");
    gapi.client.load('youtube', 'v3', function() {
            makeRequest();
    });
}

function makeRequest() {
    var q = $('#query').val();
    var request = gapi.client.youtube.search.list({
            q: q,
            part: 'snippet', 
            maxResults: 10
    });
    request.execute(function(response)  {                                                                                    
        $('#results').empty()
        var searchItems = response.result.items;                      
        $.each(searchItems, function(index, item) {
            vidTitle = item.snippet.title;  

            $('#results').append('<pre>' + vidTitle + '</pre>');                      
        })  
    })  
}