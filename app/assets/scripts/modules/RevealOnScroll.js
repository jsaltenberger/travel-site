import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(els, offset) {
        this.itemsToReveal = els;
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially() {
        this.itemsToReveal.addClass("reveal-item");
    }

    createWaypoints() {
        var self = this;
        self.itemsToReveal.each(function(index, item) {
            new Waypoint({
                element: item,
                handler: function() {
                    $(item).addClass("reveal-item--is-visible");
                },
                offset: self.offsetPercentage
            });
        });
    }
}

export default RevealOnScroll