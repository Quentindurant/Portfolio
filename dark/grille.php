<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Grille de compétences - Portfolio</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Template CSS Files -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/preloader.min.css" rel="stylesheet">
    <link href="css/circle.css" rel="stylesheet">
    <link href="css/font-awesome.min.css" rel="stylesheet">
    <link href="css/fm.revealator.jquery.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <!-- CSS Skin File -->
    <link href="css/skins/red.css" rel="stylesheet">

    <!-- Modernizr JS File -->
    <script src="js/modernizr.custom.js"></script>
    
    <style>
        .competence-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
            color: #fff;
        }
        
        .competence-table th, .competence-table td {
            border: 1px solid #444;
            padding: 8px;
            text-align: center;
            vertical-align: middle;
        }
        
        .competence-table th {
            background-color: rgba(255, 0, 0, 0.2);
            font-weight: bold;
            position: relative;
        }
        
        .competence-table .header-cell {
            min-width: 120px;
            height: 100px;
            vertical-align: bottom;
            position: relative;
        }
        
        .competence-table .vertical-text {
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            white-space: nowrap;
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform-origin: left bottom;
            transform: translateX(-50%) rotate(180deg);
        }
        
        .competence-table .projet-row {
            background-color: rgba(0, 0, 0, 0.2);
        }
        
        .competence-table .projet-row:hover {
            background-color: rgba(255, 0, 0, 0.1);
        }
        
        .competence-table .section-title {
            background-color: rgba(255, 0, 0, 0.3);
            text-align: left;
            font-weight: bold;
            padding: 10px;
        }
        
        .competence-table .x-mark {
            color: #ff0000;
            font-weight: bold;
        }
        
        .competence-table .empty-cell {
            background-color: rgba(0, 0, 0, 0.1);
        }
    </style>
</head>

<body class="grille">
    
<?php include('partials/header.php'); ?>

<!-- Page Title Starts -->
<section class="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
    <h1>Grille de <span>Compétences</span></h1>
    <span class="title-bg">Skills</span>
</section>
<!-- Page Title Ends -->

<!-- Main Content Starts -->
<section class="main-content revealator-slideup revealator-once revealator-delay1">
    <div class="container">
        <div class="row">
            <!-- Grille de compétences Starts -->
            <div class="col-12">
                <h3 class="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">BTS SERVICES INFORMATIQUES AUX ORGANISATIONS - SESSION 2024</h3>
                <div class="table-responsive">
                    <table class="competence-table">
                        <thead>
                            <tr>
                                <th colspan="7">Tableau de synthèse des réalisations professionnelles</th>
                            </tr>
                            <tr>
                                <th rowspan="2" style="width: 25%;">Réalisations professionnelles</th>
                                <th class="header-cell">
                                    <div class="vertical-text">Gérer le patrimoine informatique</div>
                                </th>
                                <th class="header-cell">
                                    <div class="vertical-text">Répondre aux incidents et aux demandes d'assistance</div>
                                </th>
                                <th class="header-cell">
                                    <div class="vertical-text">Développer la présence en ligne de l'organisation</div>
                                </th>
                                <th class="header-cell">
                                    <div class="vertical-text">Travailler en mode projet</div>
                                </th>
                                <th class="header-cell">
                                    <div class="vertical-text">Mettre à disposition des utilisateurs un service informatique</div>
                                </th>
                                <th class="header-cell">
                                    <div class="vertical-text">Organiser son développement professionnel</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan="7" class="section-title">Réalisation en cours de formation</td>
                            </tr>
                            <tr class="projet-row">
                                <td>Portfolio</td>
                                <td class="empty-cell"></td>
                                <td class="empty-cell"></td>
                                <td class="empty-cell"></td>
                                <td><span class="x-mark">x</span></td>
                                <td class="empty-cell"></td>
                                <td><span class="x-mark">x</span></td>
                            </tr>
                            <tr>
                                <td colspan="7" class="section-title">Réalisations en milieu professionnel en cours de première année</td>
                            </tr>
                            <tr class="projet-row">
                                <td>Click'n Eat</td>
                                <td class="empty-cell"></td>
                                <td><span class="x-mark">x</span></td>
                                <td><span class="x-mark">x</span></td>
                                <td class="empty-cell"></td>
                                <td><span class="x-mark">x</span></td>
                                <td><span class="x-mark">x</span></td>
                            </tr>
                            <tr>
                                <td colspan="7" class="section-title">Réalisations en milieu professionnel en cours de seconde année</td>
                            </tr>
                            <tr class="projet-row">
                                <td>TELORA</td>
                                <td class="empty-cell"></td>
                                <td><span class="x-mark">x</span></td>
                                <td class="empty-cell"></td>
                                <td><span class="x-mark">x</span></td>
                                <td><span class="x-mark">x</span></td>
                                <td><span class="x-mark">x</span></td>
                            </tr>
                            <tr class="projet-row">
                                <td>DELYTECH</td>
                                <td class="empty-cell"></td>
                                <td><span class="x-mark">x</span></td>
                                <td><span class="x-mark">x</span></td>
                                <td><span class="x-mark">x</span></td>
                                <td><span class="x-mark">x</span></td>
                                <td><span class="x-mark">x</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="text-center mt-4">
                    <p class="open-sans-font">Cette grille présente les compétences acquises à travers les différents projets réalisés durant ma formation et mes expériences professionnelles.</p>
                    <p class="open-sans-font">D'autres projets pourront être ajoutés ultérieurement pour compléter cette grille de compétences.</p>
                </div>
            </div>
            <!-- Grille de compétences Ends -->
        </div>
    </div>
</section>
<!-- Main Content Ends -->

<?php include('partials/footer.php'); ?>

<!-- Template JS Files -->
<script src="js/jquery-3.5.0.min.js"></script>
<script src="js/styleswitcher.js"></script>
<script src="js/preloader.min.js"></script>
<script src="js/fm.revealator.jquery.min.js"></script>
<script src="js/imagesloaded.pkgd.min.js"></script>
<script src="js/masonry.pkgd.min.js"></script>
<script src="js/classie.js"></script>
<script src="js/cbpGridGallery.js"></script>
<script src="js/jquery.hoverdir.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/custom.js"></script>

</body>
</html>
