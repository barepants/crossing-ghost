/* globals Crossing, jQuery, hljs */
(function ($, config) {
  var html;
  var $siteNav = $('#site-nav');
  var $siteNavToggle = $('.site-nav-toggle');

  if (config.footer_links.length > 0) {
    html = '<ul class="x-separated-list">';
    config.footer_links.forEach(function (link) {
      html +=
        '<li><a href="' + link[1] + '">' +
          link[0] +
        '</a></li> ';
    });
    html += '</ul>';
    $('#footer-links').html(html);
  }

  $siteNavToggle.click(function () {
    $siteNav.toggleClass('is-toggled');
  });

  $('.post-content').fitVids();
  $('pre code[class]').each(function (i, block) {
    hljs.highlightBlock(block);
  });
}(jQuery, Crossing.config));
