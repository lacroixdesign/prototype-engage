(function() {

  $(function() {
    $('[data-collapsible]').each(function() {

      var $this    = $(this)
        , $toggle  = $this.find('[data-collapsible-toggle]').first()
        , $content = $this.find('[data-collapsible-content]').first();

      if ($content.length > 0) {
        $toggle.on('click', function(e) {
          e.preventDefault();
          $toggle.toggleClass('is-open');
          $content.toggleClass('is-open');
        });
      }

    });
  });

})();
