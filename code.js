const facts = [
    "Как-то раз убежал в аут, думая, что это ворота",
    "Единственный футболист, который забил автогол с углового",
    "Подкаты делает так, что сам улетает за пределы поля",
    "После удара по мячу упал и сломал ворота",
    "Пытался обвести соперника, но обвел сам себя",
    "Во время пенальти так размахнулся, что потерял бутсу",
    "Однажды перепутал футбол с регби и побежал с мячом в руках",
    "Упал, симулируя нарушение, но забыл, что рядом никого не было",
    "Пробил штрафной так, что мяч улетел на парковку",
    "Попал мячом в судью, после чего получил красную карточку",
    "Обыграл вратаря, но забыл, что нужно ещё забить в ворота",
    "Решил сделать финт, но запутался в собственных ногах",
    "Во время подачи углового случайно закрутил мяч в свои ворота",
    "Отпраздновал гол, но оказалось, что свисток был до удара",
    "Так мощно пробил мяч, что тот застрял между трибунами"
];


document.getElementById("fact-btn").addEventListener("click", function() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("random-fact").innerHTML = `<p>${randomFact}</p>`;
});