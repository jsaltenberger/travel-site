import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor() {
        this.siteHeader = $(".site-header");
        this.headerTrigger = $(".large-hero__title");
        this.pageSections = $(".page-section");
        this.headerLinks = $(".primary-nav a");

        this.createHeaderWaypoint();
        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
    }

    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
    }

    createHeaderWaypoint() {
        var self = this;
        new Waypoint({
            element: self.headerTrigger[0],
            handler: function(direction) {
                if (direction == "down") {
                    self.siteHeader.addClass("site-header--dark");
                }
                else {
                    self.siteHeader.removeClass("site-header--dark");
                }
            }
        });
    }

    createPageSectionWaypoints() {
        var self = this;
        self.pageSections.each(function(index, pageSection) {
            new Waypoint({
                element: pageSection,
                handler: function(direction) {
                    if (direction == "down") {
                        var matchingHeaderLink = pageSection.getAttribute("data-matching-link");
                        self.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }
                },
                offset: "18%"
            });

            new Waypoint({
                element: pageSection,
                handler: function(direction) {
                    if (direction == "up") {
                        var matchingHeaderLink = pageSection.getAttribute("data-matching-link");
                        self.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }
                },
                offset: "-40%"
            });
        });

    }
}

export default StickyHeader;