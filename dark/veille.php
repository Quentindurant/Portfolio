<?php
// HEADER
include 'partials/header.php';
?>
    <section class="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
        <h1>Veille <span>Technologique</span></h1>
        <span class="title-bg">Veille</span>
    </section>
    
    <div class="container my-5">
        <div class="row">
            <!-- Intelligence Artificielle -->
            <div class="col-md-8 col-lg-5 mb-4">
              <div class="card project-card" onclick="location.href='ia.php'">
                <img src="image/téléchargé.jpg" class="card-img-top" alt="Intelligence Artificielle"style="height: 200px; object-fit: cover;">
                <div class="card-body">
                  <h5 class="card-title">L'Intelligence Artificielle</h5>
                </div>
              </div>
            </div>
            <!-- Cybersécurité -->
            <div class="col-md-8 col-lg-5 mb-4">
              <div class="card project-card" onclick="location.href='cybersecurite.php'">
                <img src="image/cybersecurite.png" class="card-img-top" alt="Cybersécurité"style="height: 200px; object-fit: cover;">
                <div class="card-body">
                  <h5 class="card-title">Cybersécurité</h5>
                </div>
              </div>
            </div>
            <!-- Informatique de l'Espace -->
            <div class="col-md-8 col-lg-5 mb-4">
              <div class="card project-card" onclick="location.href='espace.php'">
                <img src="image/espace.png" class="card-img-top" alt="Informatique de l'espace"style="height: 200px; object-fit: cover;">
                <div class="card-body">
                  <h5 class="card-title">Informatique de l'Espace</h5>
                </div>
              </div>
            </div>
        </div>
    </div>

<?php
// FOOTER
include 'partials/footer.php';
?>
