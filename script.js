document.addEventListener("DOMContentLoaded", function () {
    const calendarDays = document.getElementById("calendarDays");
    const calendarHeader = document.getElementById("calendarHeader");
    const calendarMonth = document.getElementById("calendarMonth");

    // Função para gerar o calendário
    function generateCalendar() {
        const date = new Date();
        const month = date.getMonth(); // Mês atual
        const year = date.getFullYear(); // Ano atual
        const firstDay = new Date(year, month, 1).getDay(); // Primeiro dia do mês
        const lastDate = new Date(year, month + 1, 0).getDate(); // Último dia do mês

        // Atualiza o cabeçalho do calendário
        calendarHeader.textContent = `${date.getDate()}, ${date.toLocaleString('default', { weekday: 'long' })}`;
        calendarMonth.textContent = date.toLocaleString('default', { month: 'long' });

        // Limpa dias anteriores
        calendarDays.innerHTML = '';

        // Adiciona espaços em branco antes do primeiro dia
        for (let i = 0; i < firstDay; i++) {
            const emptyDiv = document.createElement('div');
            calendarDays.appendChild(emptyDiv);
        }

        // Adiciona os dias do mês
        for (let day = 1; day <= lastDate; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = day;
            dayDiv.classList.add('calendar__number');
            dayDiv.addEventListener('click', function () {
                // Remove a classe 'selected' de todos os números
                document.querySelectorAll(".calendar__number").forEach(num => num.classList.remove("selected"));
                
                // Adiciona a classe 'selected' ao número clicado
                this.classList.add("selected");

                // Atualiza a data no cabeçalho
                const selectedDate = this.textContent;
                calendarHeader.textContent = `${selectedDate}, ${date.toLocaleString('default', { weekday: 'long' })}`;
            });
            calendarDays.appendChild(dayDiv);
        }
    }

    // Gera o calendário ao carregar a página
    generateCalendar();
});
