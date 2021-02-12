function love(){
    var text = $('#text').val();
    phrases = ['Ti amo per tutto ciò che sei, tutto ciò che sei stato, tutto ciò che devi ancora essere.', 'Tu guardi le stelle, stella mia, ed io vorrei essere il cielo per guardare te con mille occhi.','Dubita che le stelle siano fuoco, dubita che il sole si muova, dubita che la verità sia mentitrice, ma non dubitare mai del mio amore.'];

    $('#text').html(phrases[Math.floor(Math.random() * phrases.length)]);
}

module.exports = love;