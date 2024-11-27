
document.getElementById("headerSite").innerHTML = '\
<style> \
        .background-image { \
            background-image: url(\'Images/headerBackground.jpg\');  \
            background-size: cover; \
            height: 20vh; /* Hauteur pleine fenêtre */ \
            align-items: center; \
            justify-content: center; \
            color: white; \
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); \
            min-height: 200px;\
        } \
 .background-image::before { \
            content: \'\';\
            position: absolute;\
            top: 0;\
            left: 0;\
            right: 0;\
            bottom: 0;\
            background-color: rgba(255, 255, 255, 0.7); /* Opacité de 0.5 (50%) */\
        }\
\
h1 {\
            position: relative; /* Pour que le texte apparaisse au-dessus de la superposition */\
            margin-bottom: 1px; /* Réduit l\'espace en bas du h4 */ \
        }\
 h2 {\
            margin-bottom: 5px; /* Réduit l\'espace en bas du h4 */ \
        }\
        .subtitle {\
            font-size: 1.5em; /* Taille de police plus petite pour le sous-titre */\
            margin-top: -10px; /* Élimine l\'espace en haut du sous-titre */\
        }\
 </style> \
 <section class="background-image">\
        <div class="row">\
        <div class="col-md-4 col-sm-3 " > \
       <img class=" d-none d-sm-none d-md-block" width="250" src="Logos/icpr26Logo.svg"> \
       <img class=" d-none d-sm-block d-md-none" width="150" src="Logos/icpr26Logo.svg"> </div>\
        <div class="col-md-8 col-sm-8 col-xs-12 " > \
        <h1 class="col-xs-8 "> 28<sup>th</sup> - International Conference on Pattern Recognition  </h1> \
     <h2 class=" d-none d-sm-none d-md-block ">Lyon, France August, 17-21, 2026 </h4> \
 <h3 class="d-none d-sm-none d-md-none d-lg-block  subtitle">International Convention Center</h3>\
</div>   \
</div>\
     </section>\
 ';

