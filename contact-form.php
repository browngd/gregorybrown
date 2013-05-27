<?php require 'header.php'; ?>

<div class="main">
    <div class="row">
        <div class="span section-body">
            <div class="span contact">
<div class="container span8">

        <div class="page-header">
            <h1>Contact Me</h1>
        </div>
<?php

        // check for a successful form post
        if (isset($_GET['s'])) echo "<div class=\"alert alert-success\">".$_GET['s']."</div>";

        // check for a form error
        elseif (isset($_GET['e'])) echo "<div class=\"alert alert-error\">".$_GET['e']."</div>";

?>
        <form method="POST" action="contact-form-submission.php" class="form-horizontal">
            <div class="control-group">
                <label class="control-label" for="input1">Name</label>
                <div class="controls">
                    <input type="text" name="contact_name" id="input1" placeholder="Your name">
                </div>
            </div>
            <div class="control-group">
                <label class="control-label" for="input2">Email Address</label>
                <div class="controls">
                    <input type="text" name="contact_email" id="input2" placeholder="Your email address">
                </div>
            </div>
            <div class="control-group">
                <label class="control-label" for="input3">Message</label>
                <div class="controls">
                    <textarea name="contact_message" id="input3" rows="8" class="span5" placeholder="The message you want to send to me."></textarea>
                </div>
            </div>
            <div class="">
                <input type="hidden" name="save" value="contact">
                <button type="submit" class="btn btn-primary pull-right">Send</button>
            </div>
        </form>
</div>

</div>
</div>
</div>
    </div>
<?php require 'footer.php'; ?>
