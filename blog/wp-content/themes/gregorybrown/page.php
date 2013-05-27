<?php require 'header.php'; ?>

<!-- Page is working.  7:08am 20130527 -->

<div class="main">
        <div class="row-fluid">
            <div id="custom-sidebar">
   <ul>
      <?php
      if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('custom-sidebar') ) :
      endif; ?>
   </ul>
   <div style="clear:both"></div>
</div>

            <div class="span content">
                    <div class="span8 posts">

			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'content', 'page' ); ?>
				<?php comments_template( '', true ); ?>
			<?php endwhile; // end of the loop. ?>

		</div> <!-- #posts -->
                <div class="span4 pull-right">

                        <?php get_sidebar(); ?>

                </div>
                </div><!-- #content -->

            <!-- #section body -->
        </div><!-- row -->
    </div> <!-- #main -->

<?php require 'footer.php'; ?>
