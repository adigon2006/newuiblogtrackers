/* ------------------------------------------------------------------------------
*
*  # Vector maps
*
*  Specific JS code additions for maps_vector.html page
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

$(function() {



    // Choropleth map
    $('.map-choropleth').vectorMap({
        map: 'world_mill_en',
        backgroundColor: 'transparent',
        series: {
            regions: [{
                values: gdpData,
                scale: ['#C8EEFF', '#0071A4'],
                normalizeFunction: 'polynomial'
            }]
        },
        markerStyle: {
                initial: {
                    r: 4,
                    'fill': '#e77644',
                    'fill-opacity': 0.8,
                    'stroke': '#fff',
                    'stroke-width' : 1.5,
                    'stroke-opacity': 0.9
                },
                hover: {
                    'stroke': '#fff',
                    'fill-opacity': 1,
                    'stroke-width': 1.5
                }
            },
            focusOn: {
                x: 0.5,
                y: 0.5,
                scale: 2
            },
            markers: mymarker,
        onRegionLabelShow: function(e, el, code){
            el.html(el.html()+'<br>'+gdpData[code]);
        }
    });


    //
    // Regions selection
    //

    // Set data
    // markers = [
    //     {latLng: [52.50, 13.39], name: 'Berlin'},
    //     {latLng: [53.56, 10.00], name: 'Hamburg'},
    //     {latLng: [48.13, 11.56], name: 'Munich'},
    //     {latLng: [50.95, 6.96], name: 'Cologne'},
    //     {latLng: [50.11, 8.68], name: 'Frankfurt am Main'},
    //     {latLng: [48.77, 9.17], name: 'Stuttgart'},
    //     {latLng: [51.23, 6.78], name: 'Düsseldorf'},
    //     {latLng: [51.51, 7.46], name: 'Dortmund'},
    //     {latLng: [51.45, 7.01], name: 'Essen'},
    //     {latLng: [53.07, 8.80], name: 'Bremen'}
    // ],
    // cityAreaData = [
    //     887.70,
    //     755.16,
    //     310.69,
    //     405.17,
    //     248.31,
    //     207.35,
    //     217.22,
    //     280.71,
    //     210.32,
    //     325.42
    // ]

    // Configuration
    // var map = new jvm.WorldMap({
    //     container: $('.map-regions'),
    //     map: 'de_mill_en',
    //     backgroundColor: 'transparent',
    //     regionsSelectable: true,
    //     markersSelectable: true,
    //     markers: markers,
    //     markerStyle: {
    //         initial: {
    //             'fill': '#E77644',
    //             'stroke': '#fff',
    //             'stroke-width' : 1.5,
    //             'stroke-opacity': 0.9
    //         },
    //         hover: {
    //             'stroke': '#fff',
    //             'fill-opacity': 1,
    //             'stroke-width': 1.5
    //         },
    //         selected: {
    //             'fill': '#CA0020'
    //         }
    //     },
    //     regionStyle: {
    //         initial: {
    //             "stroke-width": 1.5,
    //             'stroke': '#fff',
    //             'fill': '#93D389'
    //         },
    //         selected: {
    //             'fill': '#00a2ca'
    //         }
    //     },
    //     series: {
    //         markers: [{
    //             attribute: 'r',
    //             scale: [5, 15],
    //             values: cityAreaData
    //         }]
    //     },
    //     onRegionSelected: function(){
    //         if (window.localStorage) {
    //             window.localStorage.setItem(
    //                 'jvectormap-selected-regions',
    //                 JSON.stringify(map.getSelectedRegions())
    //             );
    //         }
    //     },
    //     onMarkerSelected: function(){
    //         if (window.localStorage) {
    //             window.localStorage.setItem(
    //                 'jvectormap-selected-markers',
    //                 JSON.stringify(map.getSelectedMarkers())
    //             );
    //         }
    //     }
    // });

    // Set regions
    // map.setSelectedRegions( JSON.parse( window.localStorage.getItem('jvectormap-selected-regions') || '[]' ) );
    // map.setSelectedMarkers( JSON.parse( window.localStorage.getItem('jvectormap-selected-markers') || '[]' ) );

});
