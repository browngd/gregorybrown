<?php require 'header.php'; ?>

<!-- Page is working.  7:24am 20130527 -->

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

		<?php if ( have_posts() ) : ?>
			<header class="archive-header">
				<h1 class="archive-title"><?php printf( __( 'Category Archives: %s', 'twentytwelve' ), '<span>' . single_cat_title( '', false ) . '</span>' ); ?></h1>

			<?php if ( category_description() ) : // Show an optional category description ?>
				<div class="archive-meta"><?php echo category_description(); ?></div>
			<?php endif; ?>
			</header><!-- .archive-header -->

			<?php
			/* Start the Loop */
			while ( have_posts() ) : the_post();

				/* Include the post format-specific template for the content. If you want to
				 * this in a child theme then include a file called called content-___.php
				 * (where ___ is the post format) and that will be used instead.
				 */
				get_template_part( 'content', get_post_format() );

			endwhile;

			twentytwelve_content_nav( 'nav-below' );
			?>

		<?php else : ?>
			<?php get_template_part( 'content', 'none' ); ?>
		<?php endif; ?>

		</div> <!-- #posts -->
                <div class="span4 pull-right">

                        <?php get_sidebar(); ?>

                </div>
                </div><!-- #content -->

            <!-- #section body -->
        </div><!-- row -->
    </div> <!-- #main -->

<?php require 'footer.php'; ?>