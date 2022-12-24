const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        if (tab.classList.contains('selected')) {
            return;
        };

        selectTab(tab);

        showInformation(tab);
    });
});

function selectTab(tab) {
    const tabSelected = document.querySelector('.tab.selected');
    tabSelected.classList.remove('selected');

    tab.classList.add('selected');
};

function showInformation(tab) {
    const informationSelected = document.querySelector('.information.selected');
    informationSelected.classList.remove('selected');

    const idDoElementoDeInformacoesDaAba = `information-${tab.id}`;
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
    informacaoASerMostrada.classList.add('selected');
};

