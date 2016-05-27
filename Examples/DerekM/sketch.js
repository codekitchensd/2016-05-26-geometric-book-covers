
var r = new Rune({
    container: "body",
    width: 500,
    height: 500,
    // debug: true
});

function bookcover() {
    var params = {
        bgPadding: 40 + Math.ceil(Math.random() * 40),
        stripes: {
            width: 10 + Math.ceil(Math.random() * 30),
            colors: [
                '#94630F',
                '#161519'
            ],
            anomalousColor: '#FFFFFF',
            getColor: function(i) {
                return this.colors[i % this.colors.length];
            },
            anomalySectionFraction: .5
        }
    };
    var stripeCount = Math.floor(
        r.width / params.stripes.width);
    var anomalySectionStripeCount = Math.floor(
        r.width / params.stripes.width * 
        params.stripes.anomalySectionFraction);
    var anomalousStripeIndex = 
        Math.floor((stripeCount - anomalySectionStripeCount) / 2) +
        Math.ceil(Math.random() * anomalySectionStripeCount);

    function addStripesToGroup(group) {
        var x = -params.stripes.width / 2;

        var i = 0, color;

        do {
            if (i === anomalousStripeIndex) {
                color = params.stripes.anomalousColor;
            } else {
                color = params.stripes.getColor(i);
            }
            r.path(0, 0, group)
                .lineTo(x, 0)
                .lineTo(x + params.stripes.width, 0)
                .lineTo(x + params.stripes.width, r.height)
                .lineTo(x, r.height)
                .lineTo(x, 0)
                .fill(color)
                .rotate(0, r.width / 2, r.height / 2)
                .stroke(false);
            i++;
        } while((x += params.stripes.width) < r.width);
    }

    addStripesToGroup(r.group(0, 0));

    var circleGroup = r.group(0, 0);
    addStripesToGroup(circleGroup);
    circleGroup.rotate(10 * Math.random() * 45, r.width / 2, r.height / 2);

    //var innerCircleGroup = r.group(0, 0);
    //addStripesToGroup(innerCircleGroup);


    r.circle(r.width / 2, r.height / 2, r.width / 2 - params.bgPadding);
    //r.circle(
        //r.width / 2, r.height / 2, r.width / 2 - 2 * params.bgPadding);
    r.draw();
    
    var circleMask = d3.select('circle').remove();
    //var innerCircleMask = d3.select('circle:nth-child(2)').remove();
    d3.select('svg')
        .append('defs')
        .append('clipPath').attr('id', 'circle-mask')
        .append(function() {
            return circleMask.node();
        });
//    d3.select('defs')
//        .append('clipPath').attr('id', 'inner-circle-mask')
//        .append(function() {
//            return innerCircleMask.node();
//        });
    d3.select('g:nth-child(2)').attr('clip-path', 'url(#circle-mask)');
    //d3.select('g:nth-child(3)').attr('clip-path', 'url(#inner-circle-mask)');
}

r.on('click', function() {
    d3.select('svg').html('');
    bookcover();
});

bookcover();
