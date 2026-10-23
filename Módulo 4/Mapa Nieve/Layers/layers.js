var wms_layers = [];

var lyr_imagenvieja_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'imagen vieja<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/imagenvieja_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8494972.117293, -4653330.741680, -7166802.313809, -3760546.251309]
        })
    });
var format_vieja_poligono_1 = new ol.format.GeoJSON();
var features_vieja_poligono_1 = format_vieja_poligono_1.readFeatures(json_vieja_poligono_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vieja_poligono_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vieja_poligono_1.addFeatures(features_vieja_poligono_1);
var lyr_vieja_poligono_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vieja_poligono_1, 
                style: style_vieja_poligono_1,
                popuplayertitle: 'vieja_poligono',
                interactive: true,
                title: '<img src="styles/legend/vieja_poligono_1.png" /> vieja_poligono'
            });
var lyr_imagenactual_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'imagen actual<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/imagenactual_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8494972.117293, -4653330.741680, -7166802.313809, -3760546.251309]
        })
    });
var format_actual_poligono_3 = new ol.format.GeoJSON();
var features_actual_poligono_3 = format_actual_poligono_3.readFeatures(json_actual_poligono_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_actual_poligono_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_actual_poligono_3.addFeatures(features_actual_poligono_3);
var lyr_actual_poligono_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_actual_poligono_3, 
                style: style_actual_poligono_3,
                popuplayertitle: 'actual_poligono',
                interactive: true,
                title: '<img src="styles/legend/actual_poligono_3.png" /> actual_poligono'
            });

lyr_imagenvieja_0.setVisible(true);lyr_vieja_poligono_1.setVisible(true);lyr_imagenactual_2.setVisible(true);lyr_actual_poligono_3.setVisible(true);
var layersList = [lyr_imagenvieja_0,lyr_vieja_poligono_1,lyr_imagenactual_2,lyr_actual_poligono_3];
lyr_vieja_poligono_1.set('fieldAliases', {'id': 'id', 'Año': 'Año', 'Area_ha': 'Area_ha', });
lyr_actual_poligono_3.set('fieldAliases', {'id': 'id', 'Año': 'Año', 'Area_ha': 'Area_ha', });
lyr_vieja_poligono_1.set('fieldImages', {'id': '', 'Año': '', 'Area_ha': '', });
lyr_actual_poligono_3.set('fieldImages', {'id': '', 'Año': '', 'Area_ha': '', });
lyr_vieja_poligono_1.set('fieldLabels', {'id': 'no label', 'Año': 'header label - visible with data', 'Area_ha': 'header label - visible with data', });
lyr_actual_poligono_3.set('fieldLabels', {'id': 'no label', 'Año': 'header label - visible with data', 'Area_ha': 'header label - visible with data', });
lyr_actual_poligono_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});