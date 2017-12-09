$(document).ready(function() {
    //control the navbar click
    $('nav.navbar').on('click', function(Event) {
        $('a.nav-link.active').removeClass('active');
        if (Event.target.className == 'nav-link') {
            Event.target.classList.add('active');
        }
    });

    //Change the navbar according to section in view
    $('.parallax__group').mouseenter(function(Event) {
        $('a.nav-link.active').removeClass('active');
        var srcGroup = Event.currentTarget.id;
        $('.nav-link').each(function(i) {
            var navGroup = $('a.nav-link').get(i).attributes[1].value.replace('#', '');
            if (srcGroup == navGroup) {
                console.log('NAV = ' + navGroup + ' SCR: ' + srcGroup);
                $('a.nav-link').get(i).classList.add('active');
                switch (srcGroup) {
                    case 'group1':
                        $('a.navbar-brand').html('Welcome');
                        break;
                    case 'group2':
                        $('a.navbar-brand').html('Title');
                        break;
                    case 'group3':
                        $('a.navbar-brand').html('About');
                        break;
                    case 'group4':
                        $('a.navbar-brand').html('Portfolio');
                        break;
                    case 'group5':
                        $('a.navbar-brand').html('Socila');
                        break;
                    case 'group6':
                        $('a.navbar-brand').html('Email');
                        break;
                    case 'group7':
                        $('a.navbar-brand').html('Thanks!');
                        break;
                }
            }
        });
    });
});