// MoonStore AR
// Configuración principal del sitio


const moonConfig = {


    // General

    nombre: "MoonStore AR",

    logoEmoji: "🌙",

    moneda: "ARS",


    hero: {

        titulo: "Compra tus Tokens",

        subtitulo:
        "Elige el plan que mejor se adapte a ti…"

    },


    // Contraseña Owner

    ownerPassword:
    "502A201325MOONSTORE",



    // Conversor USD a ARS

    dolarARS: 1500,



    // Bienvenida

    bienvenida: {

        activa:true,

        emoji:"🌙",

        titulo:"Bienvenido a MoonStore AR",

        mensaje:
        "Compra tus tokens de forma rápida y segura.",

        boton:
        "Continuar"

    },



    // WhatsApp

    whatsapp:[

        {

            nombre:"Starlyn",

            numero:"529992042946"

        },


        {

            nombre:"Miwa",

            numero:"5491136214717"

        }

    ],




    // Planes

    planes:[


        {

            nombre:"Básico",

            tokens:"𝗫𝟭 Token",

            descripcion:
            "Sin cambios de token",

            badge:"",


            opciones:[

                {
                    dias:7,
                    usd:0.30
                },


                {
                    dias:15,
                    usd:0.80
                },


                {
                    dias:17,
                    usd:1
                },


                {
                    dias:25,
                    usd:1.30
                },


                {
                    dias:31,
                    usd:1.57
                },


                {
                    dias:60,
                    usd:2.10
                },


                {
                    dias:70,
                    usd:2.70
                }

            ]

        },





        {

            nombre:"Miembro",

            tokens:"𝗫2 Token",

            descripcion:
            "Cambios de token",

            badge:"",


            opciones:[


                {
                    dias:17,
                    usd:1
                },


                {
                    dias:25,
                    usd:1.30
                },


                {
                    dias:31,
                    usd:1.60
                },


                {
                    dias:60,
                    usd:2.57
                }


            ]

        },





        {

            nombre:"Promo",

            tokens:"Token",

            descripcion:
            "31 días + 7 días",

            badge:"PROMO",


            opciones:[

                {

                    dias:38,

                    usd:3.30

                }


            ]

        }


    ],




    // Descuentos

    descuentos:[

        {

            codigo:"MOON10",

            tipo:"porcentaje",

            valor:10,

            activo:true

        },


        {

            codigo:"FLASH1500",

            tipo:"fijo",

            valor:1500,

            activo:true

        }

    ],




    // Footer

    footer:

    "© MoonStore AR - Todos los derechos reservados"



};



// Guardar configuración

localStorage.setItem(
"moonConfig",
JSON.stringify(moonConfig)
);
