<head>
    <meta charset="utf-8">
    <title>portfolio</title>
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
</head>

<header class="header" id="navbar-collapse-toggle">
    <?php
    // Détecte la page en cours
    $current_page = basename($_SERVER['PHP_SELF']);
    ?>
    <!-- Fixed Navigation Starts -->
    <ul class="icon-menu d-none d-lg-block revealator-slideup revealator-once revealator-delay1" style="position: relative; z-index: 9999;">
        <li class="icon-box <?= ($current_page == 'index.php') ? 'active' : '' ?>" style="position: relative; z-index: 9999;">
            <i class="fa fa-home"></i>
            <a href="index.php" style="position: relative; z-index: 9999; display: block;">
                <h2>Accueil</h2>
            </a>
        </li>
        <li class="icon-box <?= ($current_page == 'entreprise.php') ? 'active' : '' ?>" style="position: relative; z-index: 9999;">
            <i class="fa fa-building"></i>
            <a href="entreprise.php" style="position: relative; z-index: 9999; display: block;">
                <h2>Entreprise</h2>
            </a>
        </li>
        <li class="icon-box <?= ($current_page == 'veille.php') ? 'active' : '' ?>" style="position: relative; z-index: 9999;">
            <i class="fa fa-user-secret"></i>
            <a href="veille.php" style="position: relative; z-index: 9999; display: block;">
                <h2>Veille</h2>
            </a>
        </li>
        <li class="icon-box <?= ($current_page == 'grille.php') ? 'active' : '' ?>" style="position: relative; z-index: 9999;">
            <i class="fa fa-table"></i>
            <a href="grille.php" style="position: relative; z-index: 9999; display: block;">
                <h2>Grille</h2>
            </a>
        </li>
        <li class="icon-box <?= ($current_page == 'projet.php') ? 'active' : '' ?>" style="position: relative; z-index: 9999;">
            <i class="fa fa-briefcase"></i>
            <a href="projet.php" style="position: relative; z-index: 9999; display: block;">
                <h2>Projets</h2>
            </a>
        </li>
        <li class="icon-box <?= ($current_page == 'exercice.php') ? 'active' : '' ?>" style="position: relative; z-index: 9999;">
            <i class="fa fa-code"></i>
            <a href="exercice.php" style="position: relative; z-index: 9999; display: block;">
                <h2>Exercices</h2>
            </a>
        </li>
    </ul>
    <!-- Fixed Navigation Ends -->
    <!-- Mobile Menu Starts -->
    <nav role="navigation" class="d-block d-lg-none">
        <div id="menuToggle" style="position: relative; z-index: 9999;">
            <input type="checkbox" style="position: relative; z-index: 9999;" />
            <span></span>
            <span></span>
            <span></span>
            <ul class="list-unstyled" id="menu" style="position: relative; z-index: 9999;">
                <li class="<?= ($current_page == 'index.php') ? 'active' : '' ?>" style="position: relative; z-index: 9999;">
                    <a href="index.php" style="position: relative; z-index: 9999; display: block;"><i class="fa fa-home"></i><span>Accueil</span></a>
                </li>
                <li class="<?= ($current_page == 'entreprise.php') ? 'active' : '' ?>" style="position: relative; z-index: 9999;">
                    <a href="entreprise.php" style="position: relative; z-index: 9999; display: block;"><i class="fa fa-user"></i><span>Entreprise</span></a>
                </li>
                <li class="<?= ($current_page == 'veille.php') ? 'active' : '' ?>" style="position: relative; z-index: 9999;">
                    <a href="veille.php" style="position: relative; z-index: 9999; display: block;"><i class="fa fa-folder-open"></i><span>Veille</span></a>
                </li>
                <li class="<?= ($current_page == 'grille.php') ? 'active' : '' ?>" style="position: relative; z-index: 9999;">
                    <a href="grille.php" style="position: relative; z-index: 9999; display: block;"><i class="fa fa-table"></i><span>Compétences</span></a>
                </li>
                <li class="<?= ($current_page == 'projet.php') ? 'active' : '' ?>" style="position: relative; z-index: 9999;">
                    <a href="projet.php" style="position: relative; z-index: 9999; display: block;"><i class="fa fa-briefcase"></i><span>Projets</span></a>
                </li>
                <li class="<?= ($current_page == 'exercice.php') ? 'active' : '' ?>" style="position: relative; z-index: 9999;">
                    <a href="exercice.php" style="position: relative; z-index: 9999; display: block;"><i class="fa fa-code"></i><span>Exercices</span></a>
                </li>
            </ul>
        </div>
    </nav>
    <!-- Mobile Menu Ends -->
</header>
