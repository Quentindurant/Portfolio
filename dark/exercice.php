<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Exercices - Portfolio de Quentin Durant</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Template Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Poppins:400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,600i,700" rel="stylesheet">

    <!-- Template CSS Files -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/preloader.min.css" rel="stylesheet">
    <link href="css/circle.css" rel="stylesheet">
    <link href="css/font-awesome.min.css" rel="stylesheet">
    <link href="css/fm.revealator.jquery.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">

    <!-- CSS Skin File -->
    <link href="css/skins/yellow.css" rel="stylesheet">
    
    <!-- Style pour les images de projets et les panneaux -->
    <style>
        .grid figure img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            object-position: center;
        }
        
        .slideshow figure img {
            max-width: 100%;
            height: auto;
        }
        
        /* Styles pour les panneaux de projets */
        .portfolio .slideshow {
            overflow-y: auto;
        }
        
        .portfolio .slideshow > ul > li {
            position: absolute;
            top: 35%;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
        }
        
        .portfolio .slideshow figure {
            padding: 20px;
            max-width: 85%;
            margin: 0 auto;
            background-color: #252525;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            max-height: 80vh;
            overflow-y: auto;
        }
        
        .portfolio .slideshow h5 {
            font-weight: 600;
            color: #fff;
            border-bottom: 1px solid #444;
            padding-bottom: 10px;
            margin-bottom: 15px;
            text-align: left;
        }
        
        .portfolio .slideshow h5 i {
            color: #ff5722;
            margin-right: 8px;
        }
        
        .schema-container {
            border-radius: 8px;
            border: 1px solid #444;
            background-color: #1e1e1e;
            padding: 15px;
            margin-bottom: 20px;
        }
        
        .schema-container ul {
            padding-left: 20px;
            margin-bottom: 0;
        }
        
        .schema-container li {
            margin-bottom: 8px;
        }
        
        .portfolio .slideshow p.text-left {
            line-height: 1.7;
            margin-bottom: 20px;
        }
        
        /* Correction pour la navigation */
        .portfolio .slideshow nav span.nav-close {
            position: fixed;
            top: 30px;
            right: 30px;
            z-index: 1000;
        }
    </style>
</head>

<body class="portfolio">
<!-- Header Starts -->

<?php include('partials/header.php'); ?>

<!-- Header Ends -->
    <!-- SECTION EXERCICES -->
    <section class="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
        <h1>Exercices <span>ÉCOLE</span></h1>
        <span class="title-bg">Exercises</span>
    </section>

<section class="main-content text-center revealator-slideup revealator-once revealator-delay1">
    <div id="grid-gallery" class="container grid-gallery">
        <div id="exercice-ecole-anim">
            <section class="grid-wrap">
                <ul class="row grid">
                    <!-- Portfolio Item Starts -->
                    <li>
                        <figure>
                            <img src="image/ScreenShot_calculette_immo.png" alt="calculette immo"/>
                            <div><span>Calculatrice Immobilier</span></div>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="image/newsletter.png" alt="Newsletter"/>
                            <div><span>Newsletter</span></div>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="image/apple.png" alt="Apple"/>
                            <div><span>Site d'Apple</span></div>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="image/meteo.png" alt="Météo React"/>
                            <div><span>Météo React</span></div>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="image/matrice.png" alt="Matrice JS"/>
                            <div><span>Matrice JS</span></div>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="image/admin_template.png" alt="Template Admin"/>
                            <div><span>Template Admin</span></div>
                        </figure>
                    </li>
                </ul>
            </section>
            <section class="slideshow">
                <ul>
                    <!-- Portfolio Item Detail Starts -->
                    <li>
                        <figure>
                            <!-- Project Details Starts -->
                            <figcaption>
                                <h3>Calculatrice Immobilier</h3>
                                <div class="row open-sans-font">
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-file-text-o pr-2"></i><span class="project-label">Exercice </span>: <span class="ft-wt-600 uppercase">Calculatrice Immobilier</span>
                                    </div>
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-user-o pr-2"></i><span class="project-label"> Lieux </span>: <span class="ft-wt-600 uppercase">Ecole MDS ESPL</span>
                                    </div>
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-code pr-2"></i><span class="project-label">Langages </span>: <span class="ft-wt-600 uppercase">HTML, CSS, Javascript</span>
                                    </div>
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-external-link pr-2"></i><span class="project-label">Preview </span>: <span class="ft-wt-600 uppercase"><a href="https://calculimmo.quentindurant.com" target="_blank">Calculette Immobilier</a></span>
                                    </div>
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-th pr-2"></i><span class="project-label">Position Grille </span>: <span class="ft-wt-600 uppercase">Colonne 1, Ligne 1</span>
                                    </div>
                                </div>
                                
                                <!-- Description du projet -->
                                <div class="row open-sans-font mt-4">
                                    <div class="col-12">
                                        <h5 class="text-left mb-3"><i class="fa fa-info-circle pr-2"></i>Description du projet</h5>
                                        <p class="text-left">
                                            Cette calculatrice immobilière permet aux utilisateurs d'estimer rapidement les mensualités d'un prêt immobilier en fonction du montant emprunté, du taux d'intérêt et de la durée du prêt. L'outil offre également une visualisation du coût total du crédit et de la répartition entre le capital et les intérêts.
                                        </p>
                                    </div>
                                </div>
                            </figcaption>
                            <!-- Project Details Ends -->
                            
                            <!-- Main Project Content Starts -->
                            <div class="row open-sans-font">
                                <!-- Capture d'écran principale -->
                                <div class="col-12 mb-4">
                                    <h5 class="text-left mb-3"><i class="fa fa-desktop pr-2"></i>Capture d'écran</h5>
                                    <img src="image/ScreenShot_calculette_immo.png" alt="calculette immo" class="img-fluid" />
                                </div>
                                
                                <!-- Schéma explicatif -->
                                <div class="col-12 mb-4">
                                    <h5 class="text-left mb-3"><i class="fa fa-sitemap pr-2"></i>Schéma explicatif</h5>
                                    <div class="schema-container p-3 bg-dark">
                                        <p>Schéma de fonctionnement de la calculatrice :</p>
                                        <ul>
                                            <li>Saisie des données (montant, taux, durée)</li>
                                            <li>Calcul en temps réel des mensualités</li>
                                            <li>Affichage des résultats avec graphique</li>
                                            <li>Option d'impression ou de sauvegarde PDF</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!-- Main Project Content Ends -->
                        </figure>
                    </li>
                    <!-- Portfolio Item Detail Ends -->
                    <!-- Portfolio Item Detail Starts -->
                    <li>
                        <figure>
                            <!-- Project Details Starts -->
                            <figcaption>
                                <h3>Newsletter</h3>
                                <div class="row open-sans-font">
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-file-text-o pr-2"></i><span class="project-label">Exercice </span>: <span class="ft-wt-600 uppercase">Newsletter</span>
                                    </div>
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-user-o pr-2"></i><span class="project-label">Lieux </span>: <span class="ft-wt-600 uppercase">Ecole MDS ESPL</span>
                                    </div>
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-code pr-2"></i><span class="project-label">Langages </span>: <span class="ft-wt-600 uppercase">SQL, HTML, CSS, PHP </span>
                                    </div>
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-external-link pr-2"></i><span class="project-label">Preview </span>: <span class="ft-wt-600 uppercase"><a href="https://newsletter.quentindurant.com" target="_blank">Newsletter</a></span>
                                    </div>
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-th pr-2"></i><span class="project-label">Position Grille </span>: <span class="ft-wt-600 uppercase">Colonne 2, Ligne 1</span>
                                    </div>
                                </div>
                                
                                <!-- Description du projet -->
                                <div class="row open-sans-font mt-4">
                                    <div class="col-12">
                                        <h5 class="text-left mb-3"><i class="fa fa-info-circle pr-2"></i>Description du projet</h5>
                                        <p class="text-left">
                                            Système de gestion de newsletter permettant aux utilisateurs de s'inscrire pour recevoir des mises à jour périodiques. L'application comprend un panneau d'administration pour gérer les abonnés, créer et envoyer des newsletters, et suivre les statistiques d'ouverture et de clics.
                                        </p>
                                    </div>
                                </div>
                            </figcaption>
                            <!-- Project Details Ends -->
                            
                            <!-- Main Project Content Starts -->
                            <div class="row open-sans-font">
                                <!-- Capture d'écran principale -->
                                <div class="col-12 mb-4">
                                    <h5 class="text-left mb-3"><i class="fa fa-desktop pr-2"></i>Capture d'écran</h5>
                                    <img src="image/newsletter.png" alt="Newsletter" class="img-fluid" />
                                </div>
                                
                                <!-- Schéma explicatif -->
                                <div class="col-12 mb-4">
                                    <h5 class="text-left mb-3"><i class="fa fa-sitemap pr-2"></i>Schéma explicatif</h5>
                                    <div class="schema-container p-3 bg-dark">
                                        <p>Architecture du système de newsletter :</p>
                                        <ul>
                                            <li>Base de données MySQL pour stocker les abonnés</li>
                                            <li>Interface d'administration PHP</li>
                                            <li>Système de templates HTML pour les emails</li>
                                            <li>API d'envoi d'emails avec suivi des statistiques</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!-- Main Project Content Ends -->
                        </figure>
                    </li>
                    <!-- Portfolio Item Detail Ends -->
                    <!-- Portfolio Item Detail Starts -->
                    <li>
                        <figure>
                            <!-- Project Details Starts -->
                            <figcaption>
                                <h3>Site Apple</h3>
                                <div class="row open-sans-font">
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-file-text-o pr-2"></i><span class="project-label">Exercice </span>: <span class="ft-wt-600 uppercase">Site Apple</span>
                                    </div>
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-user-o pr-2"></i><span class="project-label">Lieux </span>: <span class="ft-wt-600 uppercase">Ecole MDS ESPL</span>
                                    </div>
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-code pr-2"></i><span class="project-label">Langages </span>: <span class="ft-wt-600 uppercase">HTML, CSS</span>
                                    </div>
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-external-link pr-2"></i><span class="project-label">Preview </span>: <span class="ft-wt-600 uppercase"><a href="https://quentindurant.github.io/site-Apple/" target="_blank">Apple</a></span>
                                    </div>
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-th pr-2"></i><span class="project-label">Position Grille </span>: <span class="ft-wt-600 uppercase">Colonne 3, Ligne 1</span>
                                    </div>
                                </div>
                                
                                <!-- Description du projet -->
                                <div class="row open-sans-font mt-4">
                                    <div class="col-12">
                                        <h5 class="text-left mb-3"><i class="fa fa-info-circle pr-2"></i>Description du projet</h5>
                                        <p class="text-left">
                                            Reproduction du site web d'Apple pour démontrer les compétences en intégration web. Ce projet met l'accent sur la fidélité au design original, l'utilisation des dernières techniques CSS pour créer des animations fluides et une mise en page responsive qui s'adapte à tous les appareils.
                                        </p>
                                    </div>
                                </div>
                            </figcaption>
                            <!-- Project Details Ends -->
                            
                            <!-- Main Project Content Starts -->
                            <div class="row open-sans-font">
                                <!-- Capture d'écran principale -->
                                <div class="col-12 mb-4">
                                    <h5 class="text-left mb-3"><i class="fa fa-desktop pr-2"></i>Capture d'écran</h5>
                                    <img src="image/apple.png" alt="Apple" class="img-fluid" />
                                </div>
                                
                                <!-- Schéma explicatif -->
                                <div class="col-12 mb-4">
                                    <h5 class="text-left mb-3"><i class="fa fa-sitemap pr-2"></i>Schéma explicatif</h5>
                                    <div class="schema-container p-3 bg-dark">
                                        <p>Techniques d'intégration utilisées :</p>
                                        <ul>
                                            <li>HTML5 sémantique pour une structure optimale</li>
                                            <li>CSS Flexbox et Grid pour la mise en page</li>
                                            <li>Animations CSS pour les transitions</li>
                                            <li>Media queries pour le responsive design</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!-- Main Project Content Ends -->
                        </figure>
                    </li>
                    <!-- Portfolio Item Detail Ends -->
                    <!-- Portfolio Item Detail Starts -->
                    <li>
                        <figure>
                            <!-- Project Details Starts -->
                            <figcaption>
                                <h3>Météo React</h3>
                                <div class="row open-sans-font">
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-file-text-o pr-2"></i><span class="project-label">Exercice </span>: <span class="ft-wt-600 uppercase">Météo React</span>
                                    </div>
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-user-o pr-2"></i><span class="project-label">Lieux </span>: <span class="ft-wt-600 uppercase">Ecole MDS ESPL</span>
                                    </div>
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-code pr-2"></i><span class="project-label">Langages </span>: <span class="ft-wt-600 uppercase">React, JavaScript, HTML, CSS</span>
                                    </div>
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-external-link pr-2"></i><span class="project-label">Preview </span>: <span class="ft-wt-600 uppercase"><a href="https://github.com/quentindurant/meteo-react" target="_blank">GitHub</a></span>
                                    </div>
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-th pr-2"></i><span class="project-label">Position Grille </span>: <span class="ft-wt-600 uppercase">Colonne 1, Ligne 2</span>
                                    </div>
                                </div>
                                
                                <!-- Description du projet -->
                                <div class="row open-sans-font mt-4">
                                    <div class="col-12">
                                        <h5 class="text-left mb-3"><i class="fa fa-info-circle pr-2"></i>Description du projet</h5>
                                        <p class="text-left">
                                            Application météo développée avec React Native qui permet aux utilisateurs de consulter les prévisions météorologiques pour n'importe quelle ville dans le monde. L'application utilise l'API OpenWeatherMap pour récupérer les données météorologiques en temps réel et affiche les prévisions sur 5 jours.
                                        </p>
                                    </div>
                                </div>
                            </figcaption>
                            <!-- Project Details Ends -->
                            
                            <!-- Main Project Content Starts -->
                            <div class="row open-sans-font">
                                <!-- Capture d'écran principale -->
                                <div class="col-12 mb-4">
                                    <h5 class="text-left mb-3"><i class="fa fa-desktop pr-2"></i>Capture d'écran</h5>
                                    <img src="image/meteo.png" alt="Météo React" class="img-fluid" />
                                </div>
                                
                                <!-- Schéma explicatif -->
                                <div class="col-12 mb-4">
                                    <h5 class="text-left mb-3"><i class="fa fa-sitemap pr-2"></i>Schéma explicatif</h5>
                                    <div class="schema-container p-3 bg-dark">
                                        <p>Architecture de l'application :</p>
                                        <ul>
                                            <li>Composants React pour l'interface utilisateur</li>
                                            <li>Hooks React pour la gestion d'état</li>
                                            <li>Appels API asynchrones avec Axios</li>
                                            <li>Affichage des données météo avec icônes dynamiques</li>
                                            <li>Géolocalisation pour la détection automatique de la position</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!-- Main Project Content Ends -->
                        </figure>
                    </li>
                    <!-- Portfolio Item Detail Ends -->
                    <!-- Portfolio Item Detail Starts -->
                    <li>
                        <figure>
                            <!-- Project Details Starts -->
                            <figcaption>
                                <h3>Matrice JS</h3>
                                <div class="row open-sans-font">
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-file-text-o pr-2"></i><span class="project-label">Exercice </span>: <span class="ft-wt-600 uppercase">Matrice JS</span>
                                    </div>
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-user-o pr-2"></i><span class="project-label">Lieux </span>: <span class="ft-wt-600 uppercase">Ecole MDS ESPL</span>
                                    </div>
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-code pr-2"></i><span class="project-label">Langages </span>: <span class="ft-wt-600 uppercase">JavaScript, Node.js</span>
                                    </div>
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-external-link pr-2"></i><span class="project-label">Preview </span>: <span class="ft-wt-600 uppercase"><a href="https://github.com/quentindurant/matrice-js" target="_blank">GitHub</a></span>
                                    </div>
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-th pr-2"></i><span class="project-label">Position Grille </span>: <span class="ft-wt-600 uppercase">Colonne 2, Ligne 2</span>
                                    </div>
                                </div>
                                
                                <!-- Description du projet -->
                                <div class="row open-sans-font mt-4">
                                    <div class="col-12">
                                        <h5 class="text-left mb-3"><i class="fa fa-info-circle pr-2"></i>Description du projet</h5>
                                        <p class="text-left">
                                            Bibliothèque JavaScript pour la manipulation de matrices mathématiques. Ce projet implémente diverses opérations matricielles comme l'addition, la multiplication, le calcul du déterminant, l'inversion et la résolution de systèmes d'équations linéaires. L'accent est mis sur l'optimisation des performances pour les grandes matrices.
                                        </p>
                                    </div>
                                </div>
                            </figcaption>
                            <!-- Project Details Ends -->
                            
                            <!-- Main Project Content Starts -->
                            <div class="row open-sans-font">
                                <!-- Capture d'écran principale -->
                                <div class="col-12 mb-4">
                                    <h5 class="text-left mb-3"><i class="fa fa-desktop pr-2"></i>Capture d'écran</h5>
                                    <img src="image/matrice.png" alt="Matrice JS" class="img-fluid" />
                                </div>
                                
                                <!-- Schéma explicatif -->
                                <div class="col-12 mb-4">
                                    <h5 class="text-left mb-3"><i class="fa fa-sitemap pr-2"></i>Schéma explicatif</h5>
                                    <div class="schema-container p-3 bg-dark">
                                        <p>Structure de la bibliothèque :</p>
                                        <ul>
                                            <li>Classe Matrix pour la représentation des matrices</li>
                                            <li>Méthodes statiques pour les opérations courantes</li>
                                            <li>Algorithmes optimisés pour les grandes matrices</li>
                                            <li>Tests unitaires avec Jest</li>
                                            <li>Documentation complète avec JSDoc</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!-- Main Project Content Ends -->
                        </figure>
                    </li>
                    <!-- Portfolio Item Detail Ends -->
                    <!-- Portfolio Item Detail Starts -->
                    <li>
                        <figure>
                            <!-- Project Details Starts -->
                            <figcaption>
                                <h3>Template Admin</h3>
                                <div class="row open-sans-font">
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-file-text-o pr-2"></i><span class="project-label">Exercice </span>: <span class="ft-wt-600 uppercase">Template Admin</span>
                                    </div>
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-user-o pr-2"></i><span class="project-label">Lieux </span>: <span class="ft-wt-600 uppercase">Ecole MDS ESPL</span>
                                    </div>
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-code pr-2"></i><span class="project-label">Langages </span>: <span class="ft-wt-600 uppercase">HTML, CSS, JavaScript, Bootstrap</span>
                                    </div>
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-external-link pr-2"></i><span class="project-label">Preview </span>: <span class="ft-wt-600 uppercase"><a href="https://github.com/quentindurant/admin-template" target="_blank">GitHub</a></span>
                                    </div>
                                    <div class="col-12 col-sm-6 mb-2">
                                        <i class="fa fa-th pr-2"></i><span class="project-label">Position Grille </span>: <span class="ft-wt-600 uppercase">Colonne 3, Ligne 2</span>
                                    </div>
                                </div>
                                
                                <!-- Description du projet -->
                                <div class="row open-sans-font mt-4">
                                    <div class="col-12">
                                        <h5 class="text-left mb-3"><i class="fa fa-info-circle pr-2"></i>Description du projet</h5>
                                        <p class="text-left">
                                            Template d'administration responsive et moderne pour les applications web. Ce modèle comprend un tableau de bord avec des graphiques interactifs, des tableaux de données, des formulaires, et une interface utilisateur intuitive. Il est conçu pour être facilement personnalisable et s'intégrer à différents types de projets.
                                        </p>
                                    </div>
                                </div>
                            </figcaption>
                            <!-- Project Details Ends -->
                            
                            <!-- Main Project Content Starts -->
                            <div class="row open-sans-font">
                                <!-- Capture d'écran principale -->
                                <div class="col-12 mb-4">
                                    <h5 class="text-left mb-3"><i class="fa fa-desktop pr-2"></i>Capture d'écran</h5>
                                    <img src="image/admin_template.png" alt="Template Admin" class="img-fluid" />
                                </div>
                                
                                <!-- Schéma explicatif -->
                                <div class="col-12 mb-4">
                                    <h5 class="text-left mb-3"><i class="fa fa-sitemap pr-2"></i>Schéma explicatif</h5>
                                    <div class="schema-container p-3 bg-dark">
                                        <p>Fonctionnalités du template :</p>
                                        <ul>
                                            <li>Tableau de bord avec widgets personnalisables</li>
                                            <li>Graphiques interactifs avec Chart.js</li>
                                            <li>Tableaux de données avec tri et filtrage</li>
                                            <li>Formulaires avec validation</li>
                                            <li>Thème sombre/clair et options de personnalisation</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!-- Main Project Content Ends -->
                        </figure>
                    </li>
                </ul>
                <nav>
                    <span class="icon nav-prev"><img src="image/projects/navigation/left-arrow.png" alt="previous"></span>
                    <span class="icon nav-next"><img src="image/projects/navigation/right-arrow.png" alt="next"></span>
                    <span class="nav-close"><img src="image/projects/navigation/close-button.png" alt="close"></span>
                </nav>
            </section>
        </div>
    </div>
</section>
    <!-- JS Files -->
    <?php include('partials/footer.php'); ?>
</body>

</html>
