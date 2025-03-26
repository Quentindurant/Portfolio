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
                                <th rowspan="2" style="width: 25%; vertical-align: middle;">Réalisations professionnelles</th>
                                <th style="width: 12.5%; height: 180px; vertical-align: bottom; transform: rotate(-90deg); transform-origin: bottom left; padding-bottom: 15px; white-space: nowrap;">
                                    <span style="display: inline-block; width: 120px; margin-left: 15px;">Gérer le patrimoine informatique</span>
                                </th>
                                <th style="width: 12.5%; vertical-align: bottom; transform: rotate(-90deg); transform-origin: bottom left; padding-bottom: 15px; white-space: nowrap;">
                                    <span style="display: inline-block; width: 180px; margin-left: 15px;">Répondre aux incidents et aux demandes d'assistance</span>
                                </th>
                                <th style="width: 12.5%; vertical-align: bottom; transform: rotate(-90deg); transform-origin: bottom left; padding-bottom: 15px; white-space: nowrap;">
                                    <span style="display: inline-block; width: 160px; margin-left: 15px;">Développer la présence en ligne de l'organisation</span>
                                </th>
                                <th style="width: 12.5%; vertical-align: bottom; transform: rotate(-90deg); transform-origin: bottom left; padding-bottom: 15px; white-space: nowrap;">
                                    <span style="display: inline-block; width: 120px; margin-left: 15px;">Travailler en mode projet</span>
                                </th>
                                <th style="width: 12.5%; vertical-align: bottom; transform: rotate(-90deg); transform-origin: bottom left; padding-bottom: 15px; white-space: nowrap;">
                                    <span style="display: inline-block; width: 180px; margin-left: 15px;">Mettre à disposition un service informatique</span>
                                </th>
                                <th style="width: 12.5%; vertical-align: bottom; transform: rotate(-90deg); transform-origin: bottom left; padding-bottom: 15px; white-space: nowrap;">
                                    <span style="display: inline-block; width: 140px; margin-left: 15px;">Organiser son développement professionnel</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan="7" class="font-weight-bold" style="background-color: rgba(172, 43, 43, 0.3);">Réalisation en cours de formation</td>
                            </tr>
                            <tr>
                                <td>Portfolio</td>
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
                                <td>Click'n Eat</td>
                                <td class="text-center"></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                                <td class="text-center"></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                            </tr>
                            <tr>
                                <td colspan="7" class="font-weight-bold" style="background-color: rgba(172, 43, 43, 0.3);">Réalisations en milieu professionnel en cours de seconde année</td>
                            </tr>
                            <tr>
                                <td>TELORA</td>
                                <td class="text-center"></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                                <td class="text-center"></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                            </tr>
                            <tr>
                                <td>DELYTECH</td>
                                <td class="text-center"></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
                                <td class="text-center"><span style="color: #ff0000; font-weight: bold;">x</span></td>
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

<?php
// FOOTER
include 'partials/footer.php';
?>
