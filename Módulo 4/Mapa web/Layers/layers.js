var wms_layers = [];

var lyr_parques_3_modificado_modificado_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'parques_3_modificado_modificado<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/parques_3_modificado_modificado_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7690419.635890, -3946706.470265, -7572681.204515, -3846966.882639]
        })
    });

        var lyr_MAPS_1 = new ol.layer.Tile({
            'title': 'MAPS',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_poligono_cerrado_2 = new ol.format.GeoJSON();
var features_poligono_cerrado_2 = format_poligono_cerrado_2.readFeatures(json_poligono_cerrado_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poligono_cerrado_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligono_cerrado_2.addFeatures(features_poligono_cerrado_2);
var lyr_poligono_cerrado_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poligono_cerrado_2, 
                style: style_poligono_cerrado_2,
                popuplayertitle: 'poligono_cerrado',
                interactive: true,
                title: '<img src="styles/legend/poligono_cerrado_2.png" /> poligono_cerrado'
            });
var format_Voronoipolygons_3 = new ol.format.GeoJSON();
var features_Voronoipolygons_3 = format_Voronoipolygons_3.readFeatures(json_Voronoipolygons_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Voronoipolygons_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voronoipolygons_3.addFeatures(features_Voronoipolygons_3);
var lyr_Voronoipolygons_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voronoipolygons_3, 
                style: style_Voronoipolygons_3,
                popuplayertitle: 'Voronoi polygons',
                interactive: true,
                title: '<img src="styles/legend/Voronoipolygons_3.png" /> Voronoi polygons'
            });
var format_TriangulacindeDelaunay_4 = new ol.format.GeoJSON();
var features_TriangulacindeDelaunay_4 = format_TriangulacindeDelaunay_4.readFeatures(json_TriangulacindeDelaunay_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TriangulacindeDelaunay_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TriangulacindeDelaunay_4.addFeatures(features_TriangulacindeDelaunay_4);
var lyr_TriangulacindeDelaunay_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TriangulacindeDelaunay_4, 
                style: style_TriangulacindeDelaunay_4,
                popuplayertitle: 'Triangulación de Delaunay',
                interactive: true,
                title: '<img src="styles/legend/TriangulacindeDelaunay_4.png" /> Triangulación de Delaunay'
            });
var format_Poligonos_Ind_5 = new ol.format.GeoJSON();
var features_Poligonos_Ind_5 = format_Poligonos_Ind_5.readFeatures(json_Poligonos_Ind_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poligonos_Ind_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poligonos_Ind_5.addFeatures(features_Poligonos_Ind_5);
var lyr_Poligonos_Ind_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poligonos_Ind_5, 
                style: style_Poligonos_Ind_5,
                popuplayertitle: 'Poligonos_Ind',
                interactive: true,
                title: '<img src="styles/legend/Poligonos_Ind_5.png" /> Poligonos_Ind'
            });

lyr_parques_3_modificado_modificado_0.setVisible(true);lyr_MAPS_1.setVisible(true);lyr_poligono_cerrado_2.setVisible(true);lyr_Voronoipolygons_3.setVisible(true);lyr_TriangulacindeDelaunay_4.setVisible(true);lyr_Poligonos_Ind_5.setVisible(true);
var layersList = [lyr_parques_3_modificado_modificado_0,lyr_MAPS_1,lyr_poligono_cerrado_2,lyr_Voronoipolygons_3,lyr_TriangulacindeDelaunay_4,lyr_Poligonos_Ind_5];
lyr_poligono_cerrado_2.set('fieldAliases', {'id': 'id', 'Hectareas': 'Hectareas', 'Contaminan': 'Contaminan', });
lyr_Voronoipolygons_3.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Puestos_Tr': 'Puestos_Tr', 'Superficie': 'Superficie', });
lyr_TriangulacindeDelaunay_4.set('fieldAliases', {'POINTA': 'POINTA', 'POINTB': 'POINTB', 'POINTC': 'POINTC', });
lyr_Poligonos_Ind_5.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Puestos_Tr': 'Puestos_Tr', 'Superficie': 'Superficie', });
lyr_poligono_cerrado_2.set('fieldImages', {'id': '', 'Hectareas': '', 'Contaminan': '', });
lyr_Voronoipolygons_3.set('fieldImages', {'id': '', 'Nombre': '', 'Puestos_Tr': '', 'Superficie': '', });
lyr_TriangulacindeDelaunay_4.set('fieldImages', {'POINTA': '', 'POINTB': '', 'POINTC': '', });
lyr_Poligonos_Ind_5.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Puestos_Tr': 'TextEdit', 'Superficie': 'TextEdit', });
lyr_poligono_cerrado_2.set('fieldLabels', {'id': 'no label', 'Hectareas': 'no label', 'Contaminan': 'no label', });
lyr_Voronoipolygons_3.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'Puestos_Tr': 'no label', 'Superficie': 'no label', });
lyr_TriangulacindeDelaunay_4.set('fieldLabels', {'POINTA': 'no label', 'POINTB': 'no label', 'POINTC': 'no label', });
lyr_Poligonos_Ind_5.set('fieldLabels', {'id': 'no label', 'Nombre': 'header label - always visible', 'Puestos_Tr': 'inline label - visible with data', 'Superficie': 'inline label - visible with data', });
lyr_Poligonos_Ind_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});