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

				<?php get_template_part( 'content', get_post_format() ); ?>

				<nav class="nav-single">
					<h3 class="assistive-text"><?php _e( 'Post navigation', 'twentytwelve' ); ?></h3>
					<span class="nav-previous"><?php previous_post_link( '%link', '<span class="meta-nav">' . _x( '&larr;', 'Previous post link', 'twentytwelve' ) . '</span> %title' ); ?></span>
					<span class="nav-next"><?php next_post_link( '%link', '%title <span class="meta-nav">' . _x( '&rarr;', 'Next post link', 'twentytwelve' ) . '</span>' ); ?></span>
				</nav><!-- .nav-single -->

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