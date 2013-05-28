<?php ?>

<!-- footer -->
    <div class="footer">
        <div class="row-fluid">
            <div class="margin-bottom-5">
                <div class="footer-text">
                    Copyright @ Gregory Brown.  All rights reserved.
                </div>
            </div>
        </div>
    </div>
    <!-- /footer -->
</div>
<script src="<?php echo home_url(); ?>js/javascript-combined.js"></script>
<script type="text/javascript">
    // Bind event to every .btn-navbar button
 $('.btn-navbar').click(function(){
     // Select the .nav-collapse within the same .navbar as the current button
     var nav = $(this).closest('.navbar').find('.nav-collapse');
     // If it has a height, hide it
     if (nav.height() != 0) {
         nav.height(0);
     // If it's collapsed, show it
     } else {
         nav.height('auto');
     }
 });
</script>

<!--[if IE]>
<script type="text/javascript" src="PIE/PIE.js"></script>
<![endif]-->
<!--[if IE]>
<script type="text/javascript">
    $(function() {
    if (window.PIE) {
        $('.style-switcher').each(function() {
            PIE.attach(this);
        });
    }
});
    $(function() {
    if (window.PIE) {
        $('.platform').each(function() {
            PIE.attach(this);
        });
    }
});
    $(function() {
    if (window.PIE) {
        $('.header').each(function() {
            PIE.attach(this);
        });
    }
});
    $(function() {
    if (window.PIE) {
        $('.pic-div').each(function() {
            PIE.attach(this);
        });
    }
});
    $(function() {
    if (window.PIE) {
        $('.pic').each(function() {
            PIE.attach(this);
        });
    }
});
    $(function() {
    if (window.PIE) {
        $('.btn').each(function() {
            PIE.attach(this);
        });
    }
});
    $(function() {
    if (window.PIE) {
        $('.main').each(function() {
            PIE.attach(this);
        });
    }
});
    $(function() {
    if (window.PIE) {
        $('.section-body ul').each(function() {
            PIE.attach(this);
        });
    }
});
    $(function() {
    if (window.PIE) {
        $('.section-title').each(function() {
            PIE.attach(this);
        });
    }
});
    $(function() {
    if (window.PIE) {
        $('.item-name').each(function() {
            PIE.attach(this);
        });
    }
});
$(function() {
    if (window.PIE) {
        $('.progress-line').each(function() {
            PIE.attach(this);
        });
    }
});
</script>
<![endif]-->
<script>
    jQuery(document).ready(function() {
        jQuery('[rel="tooltip"]').tooltip({trigger : 'hover'});
    })
</script>
<?php wp_footer(); ?>
</body>
</html>