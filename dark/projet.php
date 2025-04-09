<!DOCTYPE html>
<html lang="en">


<body class="portfolio">
<!-- Header Starts -->

<?php include('partials/header.php'); ?>

<!-- Header Ends -->
    <!-- Style pour les images de projets -->
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
    </style>
    
    <!-- SECTION ECOLE -->
    <section class="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
        <h1>Projets <span>ECOLE</span></h1>
        <span class="title-bg">School</span>
    </section>

<section class="main-content text-center revealator-slideup revealator-once revealator-delay1">
    <div id="grid-gallery" class="container grid-gallery">
        <div id="projet-ecole-anim">
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
                            <img src="image/WelcomeFormation.png" alt="Welcome Formations"/>
                            <div><span>Welcome Formation</span></div>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="image/clickneat.png" alt="Laravel"/>
                            <div><span>Click'n Eat</span></div>
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
                                        <i class="fa fa-file-text-o pr-2"></i><span class="project-label">Project </span>: <span class="ft-wt-600 uppercase">Calculatrice Immobilier</span>
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
                                </div>
                            </figcaption>
                            <!-- Project Details Ends -->
                            <!-- Main Project Content Starts -->
                            <img src="image/ScreenShot_calculette_immo.png" alt="calculette immo" />
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
                                    <div class="col-6 mb-2">
                                        <i class="fa fa-file-text-o pr-2"></i><span class="project-label">Projet </span>: <span class="ft-wt-600 uppercase">Newsletter</span>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <i class="fa fa-user-o pr-2"></i><span class="project-label">Lieux </span>: <span class="ft-wt-600 uppercase">Ecole MDS ESPL</span>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <i class="fa fa-code pr-2"></i><span class="project-label">Langages </span>: <span class="ft-wt-600 uppercase">SQL, HTML, CSS, PHP </span>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <i class="fa fa-external-link pr-2"></i><span class="project-label">Preview </span>: <span class="ft-wt-600 uppercase"><a href="https://newsletter.quentindurant.com" target="_blank">Newsletter</a></span>
                                    </div>
                                </div>
                            </figcaption>
                            <!-- Project Details Ends -->
                            <!-- Main Project Content Starts -->
                            <img src="image/newsletter.png" alt="Newsletter" />
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
                                    <div class="col-6 mb-2">
                                        <i class="fa fa-file-text-o pr-2"></i><span class="project-label">Projet </span>: <span class="ft-wt-600 uppercase">Site Apple</span>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <i class="fa fa-user-o pr-2"></i><span class="project-label">Lieux </span>: <span class="ft-wt-600 uppercase">Ecole MDS ESPL</span>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <i class="fa fa-code pr-2"></i><span class="project-label">Langages </span>: <span class="ft-wt-600 uppercase">HTML, CSS</span>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <i class="fa fa-external-link pr-2"></i><span class="project-label">Preview </span>: <span class="ft-wt-600 uppercase"><a href="https://quentindurant.github.io/site-Apple/" target="_blank">Apple</a></span>
                                    </div>
                                </div>
                            </figcaption>
                            <!-- Project Details Ends -->
                            <!-- Main Project Content Starts -->
                            <img src="image/apple.png" alt="Apple" />
                            <!-- Main Project Content Ends -->
                        </figure>
                    </li>
                    <!-- Portfolio Item Detail Ends -->
                    <!-- Portfolio Item Detail Starts -->
                    <li>
                        <figure>
                            <!-- Project Details Starts -->
                            <figcaption>
                                <h3>Welcome Formation</h3>
                                <div class="row open-sans-font">
                                    <div class="col-6 mb-2">
                                        <i class="fa fa-file-text-o pr-2"></i><span class="project-label">Projet </span>: <span class="ft-wt-600 uppercase">Welcome Formation</span>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <i class="fa fa-user-o pr-2"></i><span class="project-label">Lieux </span>: <span class="ft-wt-600 uppercase">Ecole MDS ESPL</span>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <i class="fa fa-code pr-2"></i><span class="project-label">Langages </span>: <span class="ft-wt-600 uppercase">HTML, CSS, SQL, JS, PHP, POO</span>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <i class="fa fa-external-link pr-2"></i><span class="project-label">Preview </span>: <span class="ft-wt-600 uppercase"><a href="https://quentindurant.github.io/Welcome_Formation/" target="_blank">Welcome Formation</a></span>
                                    </div>
                                </div>
                            </figcaption>
                            <!-- Project Details Ends -->
                            <!-- Main Project Content Starts -->
                            <img src="image/WelcomeFormation.png" alt="Welcome Formation" />
                            <!-- Main Project Content Ends -->
                        </figure>
                    </li>
                    <!-- Portfolio Item Detail Ends -->
                    <!-- Portfolio Item Detail Starts -->
                    <li>
                        <figure>
                            <!-- Project Details Starts -->
                            <figcaption>
                                <h3>Click'n Eat</h3>
                                <div class="row open-sans-font">
                                    <div class="col-6 mb-2">
                                        <i class="fa fa-file-text-o pr-2"></i><span class="project-label">Project </span>: <span class="ft-wt-600 uppercase">Click'n Eat</span>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <i class="fa fa-user-o pr-2"></i><span class="project-label">Lieux </span>: <span class="ft-wt-600 uppercase">Ecole MDS ESPL</span>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <i class="fa fa-code pr-2"></i><span class="project-label">Langages </span>: <span class="ft-wt-600 uppercase">PHP, Laravel, MySQL, HTML, CSS, JS</span>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <i class="fa fa-external-link pr-2"></i><span class="project-label">Preview </span>: <span class="ft-wt-600 uppercase"><a href="#" target="_blank">Click'n Eat</a></span>
                                    </div>
                                </div>
                            </figcaption>
                            <!-- Project Details Ends -->
                            <!-- Main Project Content Starts -->
                            <img src="image/laravel_resized_895x552.png" alt="Click'n Eat" />
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

    <!-- SECTION ENTREPRISE -->
    <section class="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
        <h1>Projets <span>ENTREPRISE</span></h1>
        <span class="title-bg">Works</span>
    </section>

    <div id="grid-gallery" class="container grid-gallery">
        <div id="projet-entreprise-anim">
            <section class="grid-wrap">
                <ul class="row grid">
                    <li>
                        <figure>
                            <img src="image/ldap.png" alt="LDAP" />
                            <div><span>LDAP</span></div>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="image/delytech.png" alt="Delytech" />
                            <div><span>Delytech</span></div>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src="image/logowhite.png" alt="YapluCa" />
                            <div><span>YapluCa</span></div>
                        </figure>
                    </li>
                </ul>
            </section>
            <section class="slideshow">
                <ul>
                    <li>
                        <figure>
                            <!-- Project Details Starts -->
                            <figcaption>
                                <h3>TELORA</h3>
                                <div class="row open-sans-font">
                                    <div class="col-6 mb-2">
                                        <i class="fa fa-file-text-o pr-2"></i><span class="project-label">Project </span>: <span class="ft-wt-600 uppercase">LDAP</span>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <i class="fa fa-user-o pr-2"></i><span class="project-label">Lieux </span>: <span class="ft-wt-600 uppercase">GC Developpement, Cholet</span>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <i class="fa fa-code pr-2"></i><span class="project-label">Langages </span>: <span class="ft-wt-600 uppercase">HTML, CSS, PHP, SQL, JS, VPS </span>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <i class="fa fa-external-link pr-2"></i><span class="project-label">Preview </span>: <span class="ft-wt-600 uppercase"><a href="http://54.36.189.50/GCAdmin/admin/V1_admin.php" target="_blank">LDAP</a></span>
                                    </div>
                                </div>
                            </figcaption>
                            <!-- Project Details Ends -->
                            <!-- Main Project Content Starts -->
                            <img src="image/ldap.png" alt="LDAP" />
                            <!-- Main Project Content Ends -->
                        </figure>
                    </li>
                    <!-- Portfolio Item Detail Ends -->
                    <!-- Portfolio Item Detail Starts -->
                    <li>
                        <figure>
                            <!-- Project Details Starts -->
                            <figcaption>
                                <h3>DELYTECH</h3>
                                <div class="row open-sans-font">
                                    <div class="col-6 mb-2">
                                        <i class="fa fa-file-text-o pr-2"></i><span class="project-label">Project </span>: <span class="ft-wt-600 uppercase">DELYTECH</span>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <i class="fa fa-user-o pr-2"></i><span class="project-label">Lieux </span>: <span class="ft-wt-600 uppercase">GC Developpement, Cholet</span>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <i class="fa fa-code pr-2"></i><span class="project-label">Langages </span>: <span class="ft-wt-600 uppercase">HTML, CSS, PHP, SQL, JS, VPS </span>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <i class="fa fa-external-link pr-2"></i><span class="project-label">Preview </span>: <span class="ft-wt-600 uppercase"><a href="https://quentindurant.github.io/site-Apple/" target="_blank">DELYTECH</a></span>
                                    </div>
                                </div>
                            </figcaption>
                            <!-- Project Details Ends -->
                            <!-- Main Project Content Starts -->
                            <img src="image/delytech.png" alt="LDAP" />
                            <!-- Main Project Content Ends -->
                        </figure>
                    </li>
                    <!-- Portfolio Item Detail Ends -->
                    <!-- Portfolio Item Detail Starts -->
                    <li>
                        <figure>
                            <!-- Project Details Starts -->
                            <figcaption>
                                <h3>YapluCa</h3>
                                <div class="row open-sans-font">
                                    <div class="col-6 mb-2">
                                        <i class="fa fa-file-text-o pr-2"></i><span class="project-label">Project </span>: <span class="ft-wt-600 uppercase">YapluCa</span>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <i class="fa fa-user-o pr-2"></i><span class="project-label">Lieux </span>: <span class="ft-wt-600 uppercase">GC Developpement, Cholet</span>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <i class="fa fa-code pr-2"></i><span class="project-label">Langages </span>: <span class="ft-wt-600 uppercase">Flutter, Dart, Firebase, Google Maps</span>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <i class="fa fa-external-link pr-2"></i><span class="project-label">Preview </span>: <span class="ft-wt-600 uppercase"><a href="#" target="_blank">YapluCa</a></span>
                                    </div>
                                </div>
                            </figcaption>
                            <!-- Project Details Ends -->
                            <!-- Main Project Content Starts -->
                            <img src="image/mobile_resized_895x552.png" alt="YapluCa" />
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
