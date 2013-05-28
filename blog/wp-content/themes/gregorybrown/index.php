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

                    <?php if ( have_posts() ) : ?>

                        <?php /* Start the Loop */ ?>
                        <?php while ( have_posts() ) : the_post(); ?>
                            <?php get_template_part( 'content', get_post_format() ); ?>
                        <?php endwhile; ?>

                        <?php twentytwelve_content_nav( 'nav-below' ); ?>

                    <?php else : ?>

                        <article id="post-0" class="post no-results not-found">

                        <?php if ( current_user_can( 'edit_posts' ) ) :
                            // Show a different message to a logged-in user who can add posts.
                        ?>
                            <header class="entry-header">
                                <h1 class="entry-title"><?php _e( 'No posts to display', 'twentytwelve' ); ?></h1>
                            </header>

                            <div class="entry-content">
                                <p><?php printf( __( 'Ready to publish your first post? <a href="%s">Get started here</a>.', 'twentytwelve' ), admin_url( 'post-new.php' ) ); ?></p>
                            </div><!-- .entry-content -->

                        <?php else :
                            // Show the default message to everyone else.
                        ?>
                            <header class="entry-header">
                                <h1 class="entry-title"><?php _e( 'Nothing Found', 'twentytwelve' ); ?></h1>
                            </header>

                            <div class="entry-content">
                                <p><?php _e( 'Apologies, but no results were found. Perhaps searching will help find a related post.', 'twentytwelve' ); ?></p>
                                <?php get_search_form(); ?>
                            </div><!-- .entry-content -->
                        <?php endif; // end current_user_can() check ?>

                        </article><!-- #post-0 -->


                    <?php endif; // end have_posts() check ?>

                </div> <!-- #posts -->
                <div class="span4 pull-right">

                        <?php get_sidebar(); ?>

                </div>
                </div><!-- #content -->

            <!-- #section body -->
        </div><!-- row -->
    </div> <!-- #main -->

<?php require 'footer.php'; ?>
