<?php require 'header.php'; ?>

<?php
define('WP_USE_THEMES', false);
require('blog/wp-blog-header.php');
?>

<div class="main">

<?php
global $post;
$args = array( 'posts_per_page' => 3 );
$myposts = get_posts( $args );
foreach( $myposts as $post ) :  setup_postdata($post); ?>
<a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title(); ?>"><?php the_title(); ?></a><br />
<?php endforeach; ?>

</div>

<?php require 'footer.php'; ?>
