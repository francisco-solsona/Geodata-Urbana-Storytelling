var config = {
    style: 'mapbox://styles/mapbox/dark-v11',
    accessToken: 'pk.eyJ1IjoicGFjby1zb2xzb25hIiwiYSI6ImNseWczNG1tbTA1eGIyanBudTZocnlncmwifQ.S2cqYETyR3u-5PBEy0-AsQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'globe',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    // inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'GEODATA URBANA',
    // subtitle: 'Estas son las mejores zonas para buscar tu nuevo hogar',
    // byline: 'By Francisco Solsona',
    footer: 'Fuentes: Propiedades.com, Inmuebles24, Metroscubicos. Creado por <a href="https://www.linkedin.com/in/francisco-solsona-igual-8425361b9/" target="_blank">Paco Solsona Igual</a> usando <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> para <a href="https://geo-data-urbana.com/" target="_blank">Geodata Urbana</a>.',
    chapters: [
        {
            id: 'first-window',
            alignment: 'left',
            hidden: false,
            title: 'Alcaldía Benito Juárez',
            // image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Sobrevuelos_CDMX_HJ2A5968_%2825514225827%29.jpg/1024px-Sobrevuelos_CDMX_HJ2A5968_%2825514225827%29.jpg',
            description: 'En el corazón de la CDMX se encuentra la Benito Juárez. Aquí se desarrolla la mayor actividad comercial de inmuebles en la capital.',
            location: {
                center: [-99.15931, 19.37907],
                zoom: 14.3,
                pitch: 51,
                bearing: -12.80,
                speed: 0.3,
                curve: 1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'C09014_BJ_VIVIENDAS_VENTA-7mpoq7',
                //     opacity: 1,
                //     // duration: 300
                // },{
                //     layer: 'C09014_BJ_MZANAS_GDU_2024-7kiavc',
                //     opacity: 1,
                //     // duration: 300
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'C09014_BJ_VIVIENDAS_VENTA-7mpoq7',
                //     opacity: 0,
                //     // duration: 300
                // },{
                //     layer: 'C09014_BJ_MZANAS_GDU_2024-7kiavc',
                //     opacity: 0,
                //     // duration: 300
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Colonia Insurgentes San Borja',
            // image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-99.17581, 19.38401],
                zoom: 14.65,
                pitch: 51,
                bearing: 31.20,
                speed: 0.3,
                curve: 1
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'C09014_BJ_VIVIENDAS_VENTA-7mpoq7',
                //     opacity: 1,
                //     // duration: 300
                // },{
                //     layer: 'C09014_BJ_MZANAS_GDU_2024-7kiavc',
                //     opacity: 1,
                //     // duration: 300
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'C09014_BJ_VIVIENDAS_VENTA-7mpoq7',
                //     opacity: 0,
                //     // duration: 300
                // },{
                //     layer: 'C09014_BJ_MZANAS_GDU_2024-7kiavc',
                //     opacity: 0,
                //     // duration: 300
                // }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Narvarte Oriente - Glorieta SCOP',
            // image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-99.15130, 19.39227],
                zoom: 14.23,
                pitch: 61,
                bearing: -148.80,
                speed: 0.3,
                curve: 1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'C09014_BJ_VIVIENDAS_VENTA-7mpoq7',
                //     opacity: 1,
                //     // duration: 300
                // },{
                //     layer: 'C09014_BJ_MZANAS_GDU_2024-7kiavc',
                //     opacity: 1,
                //     // duration: 300
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'C09014_BJ_VIVIENDAS_VENTA-7mpoq7',
                //     opacity: 0,
                //     // duration: 300
                // },{
                //     layer: 'C09014_BJ_MZANAS_GDU_2024-7kiavc',
                //     opacity: 0,
                //     // duration: 300
                // }
            ]
        },
        {
            id: 'fourth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'La Portales',
            // image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-99.14802, 19.36534],
                zoom: 15,
                pitch: 60,
                bearing: -33.60,
                speed: 0.3,
                curve: 1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'C09014_BJ_VIVIENDAS_VENTA-7mpoq7',
                //     opacity: 1,
                //     // duration: 300
                // },{
                //     layer: 'C09014_BJ_MZANAS_GDU_2024-7kiavc',
                //     opacity: 1,
                //     // duration: 300
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'C09014_BJ_VIVIENDAS_VENTA-7mpoq7',
                //     opacity: 0,
                //     // duration: 300
                // },{
                //     layer: 'C09014_BJ_MZANAS_GDU_2024-7kiavc',
                //     opacity: 0,
                //     // duration: 300
                // }
            ]
        },
        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Insurgentes - Mixcoac',
            // image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-99.18315, 19.37327],
                zoom: 15,
                pitch: 63.72,
                bearing: 44,
                speed: 0.3,
                curve: 1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'C09014_BJ_VIVIENDAS_VENTA-7mpoq7',
                //     opacity: 1,
                //     // duration: 300
                // },{
                //     layer: 'C09014_BJ_MZANAS_GDU_2024-7kiavc',
                //     opacity: 1,
                //     // duration: 300
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'C09014_BJ_VIVIENDAS_VENTA-7mpoq7',
                //     opacity: 0,
                //     // duration: 300
                // },{
                //     layer: 'C09014_BJ_MZANAS_GDU_2024-7kiavc',
                //     opacity: 0,
                //     // duration: 300
                // }
            ]
        },
        {
            id: 'sixth-identifier',
            alignment: 'fully',
            hidden: false,
            title: 'Último Title',
            // image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-99.15941, 19.37900],
                zoom: 13.5,
                pitch: 9.50,
                bearing: 14.40,
                speed: 0.3,
                curve: 1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'C09014_BJ_VIVIENDAS_VENTA-7mpoq7',
                //     opacity: 1,
                //     // duration: 300
                // },{
                //     layer: 'C09014_BJ_MZANAS_GDU_2024-7kiavc',
                //     opacity: 1,
                //     // duration: 300
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'C09014_BJ_VIVIENDAS_VENTA-7mpoq7',
                //     opacity: 0,
                //     // duration: 300
                // },{
                //     layer: 'C09014_BJ_MZANAS_GDU_2024-7kiavc',
                //     opacity: 0,
                //     // duration: 300
                // }
            ]
        }
    ]
};