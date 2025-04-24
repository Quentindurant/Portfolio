<?php
// HEADER
include 'partials/header.php';
?>

<style>
/* Masquer la barre de navigation en bas du tableau */
.dataTables_paginate,
.dataTables_info,
.dataTables_length,
.dataTables_filter,
nav.pagination {
    display: none !important;
}

.grille-link { color: #fff; text-decoration: underline; cursor: pointer; }
.grille-link:hover { color: #18cb96; text-decoration: underline; }
</style>

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
                    <table class="table table-bordered table-dark">
                        <thead>
                            <tr class="text-center">
                                <th colspan="7">Tableau de synthèse des réalisations professionnelles</th>
                            </tr>
                            <tr>
                                <th style="width: 25%;">Réalisation<span style="font-weight:normal;">s</span> professionnelles</th>
                                <th style="width: 12.5%;" class="text-center">Gérer patrimoine info.</th>
                                <th style="width: 12.5%;" class="text-center">Répondre incidents</th>
                                <th style="width: 12.5%;" class="text-center">Développer présence en ligne</th>
                                <th style="width: 12.5%;" class="text-center">Travailler en mode projet</th>
                                <th style="width: 12.5%;" class="text-center">Mettre à disposition service info.</th>
                                <th style="width: 12.5%;" class="text-center">Organiser dév. pro.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan="7" class="font-weight-bold" style="background-color: rgba(172, 43, 43, 0.3);">Réalisation en cours de formation</td>
                            </tr>
                            <tr>
                                <td><a href="projet.php#portfolio" class="grille-link">Portfolio</a></td>
                                <td class="text-center"></td>
                                <td class="text-center"></td>
                                <td class="text-center"></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                                <td class="text-center"></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                            </tr>
                            <tr>
                                <td colspan="7" class="font-weight-bold" style="background-color: rgba(172, 43, 43, 0.3);">Réalisations en milieu professionnel en cours de première année</td>
                            </tr>
                            <tr>
                                <td><a href="projet.php#clickneat" class="grille-link">Click'n Eat</a></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                                <td class="text-center"></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                                <td class="text-center"></td>
                            </tr>
                            <tr>
                                <td colspan="7" class="font-weight-bold" style="background-color: rgba(172, 43, 43, 0.3);">Réalisations en milieu professionnel en cours de seconde année</td>
                            </tr>
                            <tr>
                                <td><a href="projet.php#telora" class="grille-link">TELORA</a></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                                <td class="text-center"></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                                <td class="text-center"></td>
                            </tr>
                            <tr>
                                <td><a href="projet.php#delytech" class="grille-link">DELYTECH</a></td>
                                <td class="text-center"></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                                <td class="text-center"></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                                <td class="text-center"></td>
                            </tr>
                            <tr>
                                <td><a href="projet.php#yaplucas" class="grille-link">YapluCa</a></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                                <td class="text-center"></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="text-center mt-4">
                    <p class="open-sans-font">Cette grille présente les compétences acquises à travers les différents projets réalisés durant ma formation et mes expériences professionnelles.</p>
                </div>
            </div>
            <!-- Grille de compétences Ends -->
        </div>
    </div>
</section>
<!-- Main Content Ends -->

<?php
// FOOTER
include 'partials/footer.php';
?>
