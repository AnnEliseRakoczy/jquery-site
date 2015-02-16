<script>
$(function() {
    $(‘li’).mouseenter(function() {
        $(‘li’).removeClass('active');
        $(this).addClass('active');
    });
});
</script>