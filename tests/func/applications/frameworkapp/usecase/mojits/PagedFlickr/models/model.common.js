/*
* Copyright (c) 2011 Yahoo! Inc. All rights reserved.
*/
YUI.add('PagedFlickrModel', function(Y) {


    
    Y.mojito.models.flickr = {

        getFlickrImages: function(queryString, start, count, callback) {
            var APP_KEY = '9cc79c8bf1942c683b0d4e30b838ee9c';
            var q;
            start = parseInt(start) || 0;
            count = parseInt(count) || 10;
            // The YQL docs say that the second number is the end, but in practice
            // it appears to be the count.
            // http://developer.yahoo.com/yql/guide/paging.html#remote_limits
            q = 'select * from flickr.photos.search(' + start + ',' + count + ') where text="' + queryString + '" and api_key="' + APP_KEY + '"';
            Y.YQL(q, function(rawYqlData) {
                Y.log(rawYqlData);
                if (!rawYqlData.query.results) {
                    callback([]);
                    return;
                }
                var rawPhotos = rawYqlData.query.results.photo,
                    rawPhoto = null
                    photos = [],
                    photo = null,
                    i = 0;

                // Sometimes YQL returns more than the requested amount.
                rawPhotos.splice(count);

                for (; i<rawPhotos.length; i++) {
                    rawPhoto = rawPhotos[i];
                    photo = {
                        title: rawPhoto.title,
                        url: buildFlickrUrlFromRecord(rawPhoto)
                    };
                    // some flickr photos don't have titles, so force them
                    if (!photo.title) {
                        photo.title = "[" + queryString + "]";
                    }
                    photos.push(photo);
                }
                Y.log('calling callback with photos');
                Y.log(photos);
                callback(photos);
            });
        }

    };

    function buildFlickrUrlFromRecord(record) {
        return 'http://farm' + record.farm 
            + '.static.flickr.com/' + record.server 
            + '/' + record.id + '_' + record.secret + '.jpg';
    }

}, '0.0.1', {requires: ['yql']});
