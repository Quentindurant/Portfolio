(function($) {

	"use strict";

	/* ----------------------------------------------------------- */
	/*  FUNCTION TO STOP LOCAL AND YOUTUBE VIDEOS IN SLIDESHOW
    /* ----------------------------------------------------------- */

	function stop_videos() {
		var video = document.getElementById("video");
		if (video.paused !== true && video.ended !== true) {
			video.pause();
		}
		$('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	}

	$(document).ready(function() {

		/* ----------------------------------------------------------- */
		/*  STOP VIDEOS
        /* ----------------------------------------------------------- */

		$('.slideshow nav span').on('click', function () {
			stop_videos();
		});

		/* ----------------------------------------------------------- */
		/*  FIX REVEALATOR ISSUE AFTER PAGE LOADED
        /* ----------------------------------------------------------- */

		$(".revealator-delay1").addClass('no-transform');

		/* ----------------------------------------------------------- */
		/*  PORTFOLIO GALLERY
        /* ----------------------------------------------------------- */

		if ($('.grid').length) {
			new CBPGridGallery( document.getElementById( 'grid-gallery' ) );
		}

		/* ----------------------------------------------------------- */
		/*  HIDE HEADER WHEN PORTFOLIO SLIDESHOW OPENED
        /* ----------------------------------------------------------- */

		$(".grid figure").on('click', function() {
			$("#navbar-collapse-toggle").addClass('hide-header');
		});

		/* ----------------------------------------------------------- */
		/*  SHOW HEADER WHEN PORTFOLIO SLIDESHOW CLOSED
        /* ----------------------------------------------------------- */

		$(".nav-close").on('click', function() {
			$("#navbar-collapse-toggle").removeClass('hide-header');
			// Réinitialiser le z-index et les événements pour tous les éléments du menu
			setTimeout(function() {
				$(".icon-menu li").css("z-index", "");
				$(".icon-menu li a").css("pointer-events", "");
				// S'assurer que le header est au-dessus de tout
				$("#navbar-collapse-toggle").css("z-index", "9999");
				// S'assurer que les sections ont un z-index inférieur
				$(".title-section").css("z-index", "1");
				$(".main-content").css("z-index", "2");
				// Cibler spécifiquement la section PROJETS ENTREPRISE
				$(".title-section h1").css("z-index", "1");
				$(".title-section .title-bg").css("z-index", "0");
			}, 100);
		});
		$(".nav-prev").on('click', function() {
			if ($('.slideshow ul li:first-child').hasClass('current')) {
				$("#navbar-collapse-toggle").removeClass('hide-header');
				// Réinitialiser le z-index et les événements pour tous les éléments du menu
				setTimeout(function() {
					$(".icon-menu li").css("z-index", "");
					$(".icon-menu li a").css("pointer-events", "");
					// S'assurer que le header est au-dessus de tout
					$("#navbar-collapse-toggle").css("z-index", "9999");
					// S'assurer que les sections ont un z-index inférieur
					$(".title-section").css("z-index", "1");
					$(".main-content").css("z-index", "2");
					// Cibler spécifiquement la section PROJETS ENTREPRISE
					$(".title-section h1").css("z-index", "1");
					$(".title-section .title-bg").css("z-index", "0");
				}, 100);
			} else {
				$("#navbar-collapse-toggle").removeClass('hide-header');
				// Réinitialiser le z-index et les événements pour tous les éléments du menu
				setTimeout(function() {
					$(".icon-menu li").css("z-index", "");
					$(".icon-menu li a").css("pointer-events", "");
					// S'assurer que le header est au-dessus de tout
					$("#navbar-collapse-toggle").css("z-index", "9999");
					// S'assurer que les sections ont un z-index inférieur
					$(".title-section").css("z-index", "1");
					$(".main-content").css("z-index", "2");
					// Cibler spécifiquement la section PROJETS ENTREPRISE
					$(".title-section h1").css("z-index", "1");
					$(".title-section .title-bg").css("z-index", "0");
				}, 100);
			}
		});
		$(".nav-next").on('click', function() {
			if ($('.slideshow ul li:last-child').hasClass('current')) {
				$("#navbar-collapse-toggle").removeClass('hide-header');
				// Réinitialiser le z-index et les événements pour tous les éléments du menu
				setTimeout(function() {
					$(".icon-menu li").css("z-index", "");
					$(".icon-menu li a").css("pointer-events", "");
					// S'assurer que le header est au-dessus de tout
					$("#navbar-collapse-toggle").css("z-index", "9999");
					// S'assurer que les sections ont un z-index inférieur
					$(".title-section").css("z-index", "1");
					$(".main-content").css("z-index", "2");
					// Cibler spécifiquement la section PROJETS ENTREPRISE
					$(".title-section h1").css("z-index", "1");
					$(".title-section .title-bg").css("z-index", "0");
				}, 100);
			} else {
				$("#navbar-collapse-toggle").removeClass('hide-header');
				// Réinitialiser le z-index et les événements pour tous les éléments du menu
				setTimeout(function() {
					$(".icon-menu li").css("z-index", "");
					$(".icon-menu li a").css("pointer-events", "");
					// S'assurer que le header est au-dessus de tout
					$("#navbar-collapse-toggle").css("z-index", "9999");
					// S'assurer que les sections ont un z-index inférieur
					$(".title-section").css("z-index", "1");
					$(".main-content").css("z-index", "2");
					// Cibler spécifiquement la section PROJETS ENTREPRISE
					$(".title-section h1").css("z-index", "1");
					$(".title-section .title-bg").css("z-index", "0");
				}, 100);
			}
		});

		/* ----------------------------------------------------------- */
		/*  PORTFOLIO DIRECTION AWARE HOVER EFFECT
        /* ----------------------------------------------------------- */

		var item = $(".grid li figure");
		var elementsLength = item.length;
		for (var i = 0; i < elementsLength; i++) {
			$(item[i]).hoverdir();
		}

		/* ----------------------------------------------------------- */
		/*  AJAX CONTACT FORM
        /* ----------------------------------------------------------- */

		$(".contactform").on("submit", function() {
			$(".output_message").text("Sending...");

			var form = $(this);
			$.ajax({
				url: form.attr("action"),
				method: form.attr("method"),
				data: form.serialize(),
				success: function(result) {
					if (result == "success") {
						$(".form-inputs").css("display", "none");
						$(".box p").css("display", "none");
						$(".contactform").find(".output_message").addClass("success");
						$(".output_message").text("Message Sent!");
					} else {
						$(".tabs-container").css("height", "440px");

						$(".contactform").find(".output_message").addClass("error");
						$(".output_message").text("Error Sending!");
					}
				}
			});

			return false;
		});

	});

	$(document).keyup(function(e) {

		/* ----------------------------------------------------------- */
		/*  KEYBOARD NAVIGATION IN PORTFOLIO SLIDESHOW
        /* ----------------------------------------------------------- */
		if (e.keyCode === 27) {
			stop_videos();
			$('.close-content').click();
			$("#navbar-collapse-toggle").removeClass('hide-header');
			// Réinitialiser le z-index et les événements pour tous les éléments du menu
			setTimeout(function() {
				$(".icon-menu li").css("z-index", "");
				$(".icon-menu li a").css("pointer-events", "");
				// S'assurer que le header est au-dessus de tout
				$("#navbar-collapse-toggle").css("z-index", "9999");
				// S'assurer que les sections ont un z-index inférieur
				$(".title-section").css("z-index", "1");
				$(".main-content").css("z-index", "2");
			}, 100);
		}
		if ((e.keyCode === 37) || (e.keyCode === 39)) {
			stop_videos();
		}
	});

	$(document).keyup(function(e) {
		if (e.key === "Escape") { // escape key maps to keycode `27`
			if ($('.slideshow-open').length) {
				$("#navbar-collapse-toggle").removeClass('hide-header');
				// Réinitialiser le z-index et les événements pour tous les éléments du menu
				setTimeout(function() {
					$(".icon-menu li").css("z-index", "");
					$(".icon-menu li a").css("pointer-events", "");
					// S'assurer que le header est au-dessus de tout
					$("#navbar-collapse-toggle").css("z-index", "9999");
					// S'assurer que les sections ont un z-index inférieur
					$(".title-section").css("z-index", "1");
					$(".main-content").css("z-index", "2");
					// Cibler spécifiquement la section PROJETS ENTREPRISE
					$(".title-section h1").css("z-index", "1");
					$(".title-section .title-bg").css("z-index", "0");
				}, 100);
			}
		}
	});

})(jQuery);
